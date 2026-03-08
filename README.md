# Cockatails-list

Static web app for cocktail catalog browsing, staff training, and recipe editing.

No backend required: the UI is `HTML/CSS/JavaScript`, data lives in `data/categories/*.js`, styles are built via Tailwind CLI, and maintenance tasks are handled by small `Python` and `Node.js` scripts.

## What's In This Repo

- `index.html` - home page with navigation to the main modes.
- `mobile_cocktails.html` - mobile-first catalog with search and filters.
- `cocktail_trainer.html` - training mode (ingredients, method, glassware, allergens).
- `cocktail_builder.html` - recipe builder/editor with category import/export.
- `data/loader.js` - loader that aggregates all categories into `window.allCocktails`.
- `data/config.js` - list of category files to load.
- `data/categories/*.js` - cocktail datasets by category.
- `styles.css` - final CSS output (Tailwind build result).
- `manifest.json`, `sw.js` - PWA config and offline caching.

## Quick Start

Use any local HTTP server. Avoid opening via `file://`: data loading and the service worker behave correctly only on `http://` or `https://`.

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Key pages to verify:

- `http://localhost:8080/index.html`
- `http://localhost:8080/mobile_cocktails.html`
- `http://localhost:8080/cocktail_trainer.html`
- `http://localhost:8080/cocktail_builder.html`

## Install Dependencies

This repo only needs a dev dependency to build CSS:

```powershell
npm install
```

## Commands

```powershell
npm run build:css
npm run check:ids
npm run fix:ids
python auto_config.py
python sync_allergens_from_viewthemenu.py
```

What each command does:

- `npm run build:css` - builds `styles.css` from `src/tailwind.css`.
- `npm run check:ids` - validates uniqueness/normalization of cocktail `id`s.
- `npm run fix:ids` - auto-fixes `id`s inside `data/categories/*.js`.
- `python auto_config.py` - regenerates `data/config.js` from current category files.
- `python sync_allergens_from_viewthemenu.py` - syncs allergens from an external JSON and writes a report to `data/allergen_sync_from_viewthemenu_report.json`.

## Data Format

Each file in `data/categories/` should register an array via `window.registerCocktails(...)`.

Example:

```javascript
if (typeof window.registerCocktails === 'function') {
  window.registerCocktails('classic', [
    {
      "id": "negroni-123abc",
      "name": "Negroni",
      "category": "classic",
      "method": "Stir",
      "glass": "Rocks",
      "ice": "Cubed",
      "garnish": "Orange peel",
      "ingredients": [
        { "name": "Gin", "qty": "25ml" },
        { "name": "Campari", "qty": "25ml" },
        { "name": "Vermouth", "qty": "25ml" }
      ],
      "allergens": "SULPHITES"
    }
  ]);
}
```

`allergens` may be `null`, an empty string, or a comma-separated string like `"GLUTEN, MILK"`.

## Adding A New Category

1. Create `data/categories/<name>.js`.
2. Add data in a format compatible with `window.registerCocktails(...)`.
3. Run `python auto_config.py`.
4. Verify categories load in the browser.

If you changed/added cocktails, it is worth running `npm run check:ids`.

## Working With Builder

`cocktail_builder.html` is intended for manual editing. It stores working state in `localStorage` and supports:

- creating and editing recipes;
- adding/renaming/deleting categories;
- importing category `*.js` files;
- exporting a selected category back to `*.js`.

Practical workflow:

1. Edit recipes in Builder.
2. Export the category to a file.
3. Place the file into `data/categories/`.
4. Run `python auto_config.py`.
5. Verify Catalog and Trainer in the browser.

## Allergen Sync

The script `sync_allergens_from_viewthemenu.py`:

- reads an allergens JSON;
- matches scraped items to local cocktails;
- updates `allergens` fields in `data/categories/*.js`;
- writes a report to `data/allergen_sync_from_viewthemenu_report.json`.

By default it uses a file from the sibling `Food-list` project. You can pass a custom path:

```powershell
python sync_allergens_from_viewthemenu.py --scraped "C:\path\to\viewthemenu_allergens.json"
```

## PWA And Cache

The app is installable as a PWA. Relevant files:

- `manifest.json` - app metadata and version.
- `sw.js` - caching of main pages and data files.

If you still see old UI/data after updates, clear cache/service worker in DevTools and reload.

## Minimal Post-Change Check

After changes, a quick check is usually enough:

1. Start a local server.
2. Open `index.html`, `mobile_cocktails.html`, `cocktail_trainer.html`, `cocktail_builder.html`.
3. Confirm categories load, search/filters work, and new recipes appear.
4. If data changed, run `npm run check:ids`.
