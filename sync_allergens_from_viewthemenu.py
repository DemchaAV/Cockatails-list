#!/usr/bin/env python3
"""Aggressive sync of cocktail allergens from viewthe.menu JSON into category JS files."""

from __future__ import annotations

import argparse
import difflib
import json
import re
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Dict, List, Optional, Tuple

ROOT = Path(__file__).resolve().parent
DEFAULT_SCRAPED = Path(r"C:\Users\Demch\OneDrive\projects\Food-list\data\viewthemenu_allergens.json")
CATEGORIES_DIR = ROOT / "data" / "categories"
REPORT_PATH = ROOT / "data" / "allergen_sync_from_viewthemenu_report.json"
TARGET_MENU = "drinks and wine menu"

ALLERGEN_MAP = {
    "Cereals with Gluten": "GLUTEN",
    "Milk": "MILK",
    "Tree Nuts": "TREE NUTS",
    "Sulphur Dioxide/Sulphites": "SULPHITES",
    "Sesame Seeds": "SESAME",
}

# Conservative aliases for obvious same drinks under different local naming.
MANUAL_ALIASES = {
    "sc margarita 65ml": "Scott’s Margarita",
    "sc old fashioned 55ml": "Scott’s Old Fashioned",
    "vesper 70ml": "Scott’s Vesper Martini",
    "lychee tini 75ml": "Scott’s Lychee Tini",
    "scotch and honey 50ml": "Scotch & Honey",
    "cherry collins 45ml": "Cherry Collins",
    "sc paloma": "Paloma",
    "aperol campari spritz": "Aperitivo Spritz",
    "mojito n a": "Virgin Mojito",
    "pina colada n a": "Virgin Pina Colada",
}

# Fuzzy thresholds for auto-apply
FUZZY_MIN = 0.90
FUZZY_GAP = 0.06


def normalize_text(value: str) -> str:
    value = value or ""
    value = unicodedata.normalize("NFKD", value)
    value = value.encode("ascii", "ignore").decode("ascii")
    value = value.lower().replace("&", " and ")
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def name_variants(name: str) -> List[str]:
    raw = (name or "").strip()
    if not raw:
        return []

    variants = {raw}
    variants.add(re.sub(r"\([^)]*\)", "", raw))
    variants.add(re.sub(r"\b\d+(?:\.\d+)?\s*ml\b", "", raw, flags=re.IGNORECASE))

    v = re.sub(r"\b\d+(?:\.\d+)?\s*ml\b", "", raw, flags=re.IGNORECASE)
    v = re.sub(r"\bcocktail\b", "", v, flags=re.IGNORECASE)
    v = re.sub(r"^\s*sc\s+", "", v, flags=re.IGNORECASE)
    v = v.replace("/", " ")
    variants.add(v)

    out: List[str] = []
    seen = set()
    for candidate in variants:
        n = normalize_text(candidate)
        if n and n not in seen:
            seen.add(n)
            out.append(n)

    alias_target = MANUAL_ALIASES.get(normalize_text(raw))
    if alias_target:
        n = normalize_text(alias_target)
        if n and n not in seen:
            out.append(n)
    return out


def parse_wrapped_json(file_path: Path) -> Tuple[str, List[dict], str]:
    content = file_path.read_text(encoding="utf-8")
    start = content.find("[")
    if start < 0:
        raise ValueError(f"Cannot parse JSON array in {file_path}")

    in_str = False
    escaped = False
    depth = 0
    end = -1
    for i in range(start, len(content)):
        ch = content[i]
        if in_str:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == '"':
                in_str = False
            continue

        if ch == '"':
            in_str = True
        elif ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                end = i + 1
                break

    if end <= start:
        raise ValueError(f"Cannot find closing array bracket in {file_path}")

    data = json.loads(content[start:end])
    return content[:start], data, content[end:]


def write_wrapped_json(file_path: Path, prefix: str, data: List[dict], suffix: str) -> None:
    file_path.write_text(prefix + json.dumps(data, ensure_ascii=False, indent=2) + suffix, encoding="utf-8")


def mapped_allergen(name: str) -> str:
    return ALLERGEN_MAP.get(name, name.upper())


def allergen_string(scraped_item: dict) -> str:
    contains = [mapped_allergen(x) for x in scraped_item.get("contains", [])]
    unique = sorted(set(contains))
    return ", ".join(unique) if unique else ""


def build_index(scraped_items: List[dict]) -> Dict[str, List[dict]]:
    index: Dict[str, List[dict]] = {}
    for item in scraped_items:
        if normalize_text(item.get("menu_name", "")) != TARGET_MENU:
            continue
        key = normalize_text(item.get("item_name", ""))
        if key:
            index.setdefault(key, []).append(item)
    return index


def resolve_candidates(cands: List[dict]) -> Tuple[Optional[dict], str, List[str]]:
    if not cands:
        return None, "not_found", []
    if len(cands) == 1:
        return cands[0], "matched", []

    signatures = {
        tuple(sorted(c.get("contains", []))) + ("|",) + tuple(sorted(c.get("may_contain", [])))
        for c in cands
    }
    if len(signatures) == 1:
        return cands[0], "matched", []

    cand_names = [f"{c.get('item_name','')} [{c.get('section_name','')}]" for c in cands]
    return None, "ambiguous", sorted(set(cand_names))


def fuzzy_pick(keys: List[str], index: Dict[str, List[dict]]) -> Tuple[Optional[dict], float, str, float]:
    all_keys = list(index.keys())
    best_item = None
    best_score = 0.0
    best_key = ""
    second_score = 0.0

    for k in keys:
        scored = sorted(
            ((cand_key, difflib.SequenceMatcher(a=k, b=cand_key).ratio()) for cand_key in all_keys),
            key=lambda x: x[1],
            reverse=True,
        )
        if not scored:
            continue
        top_key, top_score = scored[0]
        next_score = scored[1][1] if len(scored) > 1 else 0.0

        if top_score > best_score:
            resolved, _, _ = resolve_candidates(index[top_key])
            if resolved is not None:
                best_item = resolved
                best_score = top_score
                best_key = top_key
                second_score = next_score

    return best_item, best_score, best_key, second_score


def choose_match(name: str, index: Dict[str, List[dict]]) -> Tuple[Optional[dict], str, List[str], str]:
    keys = name_variants(name)

    for key in keys:
        cands = index.get(key, [])
        matched, status, candidates = resolve_candidates(cands)
        if matched:
            method = "matched_manual" if normalize_text(name) in MANUAL_ALIASES else "matched_exact"
            return matched, method, candidates, key

    fuzzy_item, score, best_key, second = fuzzy_pick(keys, index)
    if fuzzy_item is not None and score >= FUZZY_MIN and (score - second) >= FUZZY_GAP:
        return fuzzy_item, "matched_fuzzy", [], best_key

    # Provide top suggestions for manual review
    suggestions = []
    for key in keys:
        ranked = sorted(
            ((cand_key, difflib.SequenceMatcher(a=key, b=cand_key).ratio()) for cand_key in index.keys()),
            key=lambda x: x[1],
            reverse=True,
        )[:3]
        for cand_key, sc in ranked:
            if sc >= 0.60:
                for item in index[cand_key][:1]:
                    suggestions.append(f"{item.get('item_name')} ({sc:.2f})")
    suggestions = sorted(set(suggestions))[:5]
    return None, "not_found", suggestions, ""


def main() -> int:
    parser = argparse.ArgumentParser(description="Sync allergens into Cockatails-list from viewthemenu JSON")
    parser.add_argument("--scraped", default=str(DEFAULT_SCRAPED), help="Path to viewthemenu_allergens.json")
    args = parser.parse_args()

    scraped_path = Path(args.scraped)
    scraped = json.loads(scraped_path.read_text(encoding="utf-8"))
    scraped_items = scraped.get("items", [])
    index = build_index(scraped_items)

    report = {
        "scraped_source": str(scraped_path),
        "target_menu": "Drinks and wine menu",
        "updated_files": [],
        "summary": {},
        "exceptions": [],
    }

    total_items = 0
    updated_items = 0
    method_counter = Counter()

    files = sorted(CATEGORIES_DIR.glob("*.js"))
    for file_path in files:
        prefix, items, suffix = parse_wrapped_json(file_path)
        file_updates = 0

        for item in items:
            total_items += 1
            name = item.get("name", "")
            matched, status, candidates, used_key = choose_match(name, index)
            if matched:
                item["allergens"] = allergen_string(matched) or None
                file_updates += 1
                updated_items += 1
                method_counter[status] += 1
            else:
                report["exceptions"].append(
                    {
                        "file": str(file_path),
                        "status": status,
                        "name": name,
                        "category": item.get("category", ""),
                        "candidates": candidates,
                        "used_key": used_key,
                    }
                )

        write_wrapped_json(file_path, prefix, items, suffix)
        report["updated_files"].append({"file": str(file_path), "updated": file_updates, "total": len(items)})

    report["summary"] = {
        "files": len(files),
        "total_items": total_items,
        "updated_items": updated_items,
        "exceptions_count": len(report["exceptions"]),
        "match_methods": dict(method_counter),
    }

    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(report["summary"], ensure_ascii=False))
    print(f"Saved report: {REPORT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
