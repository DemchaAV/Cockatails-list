# Cockatails-list

A web app for cocktail catalog browsing, staff training, and recipe editing.

The project is static (HTML/CSS/JS, no build step) plus Python utilities for data maintenance.

## Project Contents

- `index.html` - home page with navigation and stats.
- `mobile_cocktails.html` - mobile-first catalog with search and filters.
- `cocktail_trainer.html` - training mode (method, ingredients, glass, allergens).
- `cocktail_builder.html` - recipe builder/editor (create, import/export, category management).
- `data/loader.js` - dynamic category loading into `window.allCocktails`.
- `data/config.js` - category file list used by loader.
- `data/categories/*.js` - cocktail datasets by category.
- `manifest.json`, `sw.js` - PWA and offline caching.

## Current Data Snapshot

Based on files currently in the repository:

- Total cocktails: `134`
- Category files: `4`
- File-level distribution:
  - `classic.js`: `83`
  - `exam.js`: `30`
  - `non-alcoholic.js`: `5`
  - `signature.js`: `16`

Note: `category` values are not fully normalized (for example `classic`, `signature`, `Exam`), which affects filters and category totals.

## Quick Start

1. Run a local HTTP server in the project root:

```powershell
python -m http.server 8080
```

2. Open in browser:

```text
http://localhost:8080
```

Important: use HTTP/HTTPS (not `file://`) so loader and service worker behavior is correct.

## Category File Format

Each file in `data/categories/` registers an array via:

```javascript
if (typeof window.registerCocktails === 'function') {
  window.registerCocktails('category-name', [
    {
      "id": "unique-id",
      "name": "Cocktail Name",
      "category": "category-name",
      "method": "Shake",
      "glass": "Nick&Nora",
      "ice": "Cubed",
      "garnish": "Lemon zest",
      "ingredients": [
        { "name": "Ingredient", "qty": "50ml" }
      ],
      "allergens": "SULPHITES"
    }
  ]);
}
```

`allergens` can be `null` or a string (for example `"SULPHITES"`, `"GLUTEN, MILK"`).

## Adding a New Category

1. Create `data/categories/<name>.js` in the format above.
2. Rebuild config:

```powershell
python auto_config.py
```

This regenerates `data/config.js` from existing `.js` files in `data/categories`.

## Builder Workflow

`cocktail_builder.html` stores working data in `localStorage` (`cocktails`, `appCategories`) and supports:

- create/edit recipes,
- add/rename/delete categories,
- import category `*.js` files,
- export a selected category as `*.js` for `data/categories`.

Recommended flow:

1. Edit in Builder.
2. Export category to `*.js`.
3. Place the file in `data/categories/`.
4. Run `python auto_config.py`.
5. Verify in UI (`mobile_cocktails.html`, `cocktail_trainer.html`).

## Allergen Sync From viewthe.menu

Script:

- `sync_allergens_from_viewthemenu.py`

What it does:

- reads `viewthemenu_allergens.json` (by default from sibling `Food-list` project),
- matches drinks to local cocktails,
- updates `allergens` fields in `data/categories/*.js`,
- writes `data/allergen_sync_from_viewthemenu_report.json`.

Run:

```powershell
python sync_allergens_from_viewthemenu.py
```

Custom input path:

```powershell
python sync_allergens_from_viewthemenu.py --scraped "C:\path\to\viewthemenu_allergens.json"
```

## PWA

Installable as an app:

- `manifest.json` defines app metadata.
- `sw.js` caches main pages and category datasets for offline use.

If you still see old content after updates, do a hard refresh and clear service worker/cache in DevTools if needed.

## Repository Utilities

- `auto_config.py` - auto-updates `data/config.js`.
- `sync_allergens_from_viewthemenu.py` - allergen synchronization.
- `convert_food.py` - legacy converter with hardcoded local paths.

## Quick Post-Change Check

1. Start server: `python -m http.server 8080`
2. Check:
   - `http://localhost:8080/mobile_cocktails.html`
   - `http://localhost:8080/cocktail_trainer.html`
   - `http://localhost:8080/cocktail_builder.html`
3. Confirm categories/cocktails load and filters behave correctly.
