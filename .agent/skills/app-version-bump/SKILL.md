---
name: app-version-bump
description: Bump the Cockatails-list application version after meaningful changes so the PWA and service worker fetch new data and assets. Use this skill whenever files are changed in the app pipeline, including database-like data files, category files, HTML, CSS, JS, manifest, or service worker related changes.
---

# App Version Bump

Use this skill after any meaningful app change in `C:\Users\Demch\OneDrive\projects\Cockatails-list`.

## Why

This project reads `manifest.json.version`, shows it in the UI, and registers `sw.js?v=<version>`.

If the version does not change, users can stay on stale cached data.

## When To Use

- data changed
- category files changed
- HTML, CSS, or JS changed
- loader/config changed
- any pipeline change that should force the app to refresh cached assets or data

## Required Rule

Before finishing the task, bump the app version in `manifest.json`.

Do not leave the old version in place after a real change.

## Version Format

Use the current local date:

- first version of the day: `YYYY.M.D`
- another change later the same day: `YYYY.M.D.HHmm`

Examples for March 9, 2026:

- first change of the day: `2026.3.9`
- later same day: `2026.3.9.1124`

If the manifest already has today's base version, switch to the timestamp format.
If it already has today's timestamp version, replace the time with the current time.

## Required Command

Run:

```powershell
python .agent/skills/app-version-bump/scripts/bump_app_version.py
```

## Verification

After bumping:

1. Confirm `manifest.json` contains the new version.
2. Confirm pages still read `manifest.json.version`.
3. If smoke-testing in browser, verify the visible version label changed where applicable.

## References

- Version rules and affected files: `references/versioning-rules.md`
