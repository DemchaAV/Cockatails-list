# Versioning Rules

## Source of truth

- `manifest.json` field: `version`

## Cache/update path

The app pages fetch `manifest.json`, read `version`, and register:

```javascript
./sw.js?v=<version>
```

`sw.js` uses that query param to build the cache name, so changing the manifest version forces a new cache namespace.

## Current affected files

- `manifest.json`
- `sw.js`
- `index.html`
- `cocktail_builder.html`
- `cocktail_trainer.html`
- `mobile_cocktails.html`

## Rules

- First meaningful change on a day: `YYYY.M.D`
- Second or later meaningful change on the same day: `YYYY.M.D.HHmm`
- Use 24-hour time
- Keep month/day unpadded to match existing project format

## Examples

- `2026.3.9`
- `2026.3.9.1124`
