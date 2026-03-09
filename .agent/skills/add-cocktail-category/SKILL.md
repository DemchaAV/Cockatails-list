---
name: add-cocktail-category
description: Add or update a cocktail category in Cockatails-list when a user asks to create a new category, move cocktails into a category, or update category loading. Use this skill for data/categories/*.js changes, running auto_config.py to rebuild data/config.js, and validating ids after category edits.
---

# Add Cocktail Category

Use this skill for category-level content changes in `C:\Users\Demch\OneDrive\projects\Cockatails-list`.

## When To Use

- User asks to add a new cocktail category.
- User provides a list or image of cocktails that should become a category.
- A file in `data/categories/` must be created or updated.
- `data/config.js` needs to be refreshed after category changes.

Do not use this skill for deployment. Use the existing deploy workflow separately.

## Required Workflow

1. Inspect the current category files in `data/categories/` and read `auto_config.py`.
2. Create or update the category file in `data/categories/<slug>.js`.
3. Keep the loader contract unchanged:
   - Primary path: `window.registerCocktails('<Category>', [...])`
   - Fallback path: push into `window.pendingCocktails`
4. Preserve the project data shape for each cocktail:
   - `id`
   - `name`
   - `category`
   - `method`
   - `glass`
   - `ice`
   - `garnish`
   - `ingredients` as `{ name, qty }[]`
   - optional `allergens`
5. After any add/remove/rename of category files, run:

```powershell
python .agent/skills/app-version-bump/scripts/bump_app_version.py
python auto_config.py
```

6. Validate IDs:

```powershell
npm run check:ids
```

7. If the UI has hard-coded fallback categories, update them too. The main place to check is:
   - `cocktail_builder.html`

## Category Naming Rules

- File name should be a stable slug, usually lowercase, for example `cv.js`.
- Category display value inside cocktail data can remain user-facing, for example `CV`.
- If the user gives an acronym category, prefer keeping the visible category uppercase in data.
- Keep one category per file.

## Editing Rules

- Prefer matching the existing generated format in `data/categories/*.js`.
- Use unique normalized cocktail ids. If new ids fail validation, generate/fix them with:

```powershell
npm run fix:ids
```

- Do not hand-maintain `data/config.js` when `auto_config.py` can regenerate it.
- Do not change `data/loader.js` unless the task explicitly requires loader behavior changes.

## Quick Verification

Run these after edits:

```powershell
python .agent/skills/app-version-bump/scripts/bump_app_version.py
python auto_config.py
npm run check:ids
```

Then confirm the new category file is listed in `data/config.js`.

## References

- Category file template and checklist: `references/category-file-format.md`
