# Validation Checklist

Use this checklist after edits.

## Minimum bar

- The changed files were validated with at least one targeted check
- The affected page or data flow was smoke-tested
- Results were reported clearly

## Suggested checks by change type

### Category/data updates

```powershell
python .agent/skills/app-version-bump/scripts/bump_app_version.py
python auto_config.py
npm run check:ids
```

Then inspect:

- `data/config.js` includes the expected category file
- new cocktails/category names load correctly

### Builder changes

Smoke-test:

- `cocktail_builder.html`
- category filters
- create/edit/delete flow if touched
- import/export flow if touched

### Trainer changes

Smoke-test:

- `cocktail_trainer.html`
- category selection
- card rendering
- answer/flip/progress flow if touched

### Mobile changes

Smoke-test:

- `mobile_cocktails.html`
- category filter
- search
- card rendering

### Landing/navigation changes

Smoke-test:

- `index.html`
- links to builder, trainer, and mobile pages
- manifest/service worker references still present if touched

## Reporting template

Use a concise summary like:

- Ran `python .agent/skills/app-version-bump/scripts/bump_app_version.py`: passed
- Ran `python auto_config.py`: passed
- Ran `npm run check:ids`: passed
- Smoke-tested `cocktail_builder.html`: passed
- Not run: full browser automation, because no dedicated suite exists yet
