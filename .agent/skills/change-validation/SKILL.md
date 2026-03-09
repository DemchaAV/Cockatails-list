---
name: change-validation
description: Validate Cockatails-list changes before finishing a task. Use this skill whenever code, HTML, CSS, JS, or data files are modified and the result must be proven to work with targeted tests and smoke checks. This skill requires creating or updating tests when coverage is missing, then running smoke validation and reporting what passed or what remains blocked.
---

# Change Validation

Use this skill after any implementation change in `C:\Users\Demch\OneDrive\projects\Cockatails-list`.

## Goal

Do not stop at code edits. Prove that the change is valid.

Every task should end with:

- at least one targeted validation for the actual change
- a smoke check of the affected surface
- an application version bump for meaningful app changes
- a clear report of what was run, what passed, and what is still unverified

## When To Use

- HTML, CSS, JS, JSON, or data changes
- new category files
- UI edits
- loader or config changes
- refactors that could affect behavior

## Required Rules

1. If the change affects behavior, run tests.
2. If relevant automated tests do not exist, create the smallest useful validation for the changed behavior.
3. Always run smoke checks for the user-facing area that changed.
4. After meaningful app changes, bump the version in `manifest.json`.
5. Do not say "done" until validations were run or a concrete blocker is stated.
6. If a validation tool fails because of an unrelated existing issue, say that explicitly and separate it from the new change.

## Validation Decision Tree

### Data/category changes

Run:

```powershell
python .agent/skills/app-version-bump/scripts/bump_app_version.py
python auto_config.py
npm run check:ids
```

Also verify the new or changed category is present in `data/config.js`.

### Static UI/content changes

Run the smallest relevant automated check available, then do a smoke pass on the affected page.

Preferred smoke approach:

1. Start a local server:

```powershell
python -m http.server 8080
```

2. Open the affected page locally.
3. Confirm:
   - page renders
   - no obvious JS errors
   - affected interaction works
   - no broken navigation introduced by the change

### If no test exists

Add one of these before finishing:

- a small `scripts/` validation script
- a targeted Node check for data/HTML assumptions
- a deterministic browser smoke step if automation is unavailable

The new validation must focus on the changed behavior, not generic coverage theater.

## Current Project Checks

Use these first when relevant:

```powershell
python .agent/skills/app-version-bump/scripts/bump_app_version.py
npm run check:ids
python auto_config.py
```

If you change styles, also rebuild if needed:

```powershell
npm run build:css
```

## Output Contract

Final task report must include:

- validations run
- pass/fail result for each
- any blocker that prevented fuller testing
- whether manual smoke was completed

Do not hide missing verification.

## References

- Validation checklist: `references/validation-checklist.md`
