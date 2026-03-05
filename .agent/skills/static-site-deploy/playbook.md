# Playbook: static-site-deploy

Step-by-step runbook for common deploy scenarios, debugging, and rollback.

---

## 🚀 Standard Deploy Runbook

```
1. Open PowerShell in repo root
2. Set required env vars (see table below)
3. Run: .\scripts\deploy.ps1 -Method <METHOD> -Url <LIVE_URL>
4. Confirm: ✅ Smoke test passed
5. Confirm: deploy-receipt.json exists and has status "success"
6. Done — share receipt SHA with team if needed
```

---

## Environment Variable Reference

| Variable | Required for | Example value |
|---|---|---|
| `DEPLOY_METHOD` | All | `gh-pages` / `s3` / `ftp` / `rsync` |
| `DEPLOY_URL` | All | `https://yoursite.com` |
| `DEPLOY_BUCKET` | s3 | `scotts-food-bible-prod` |
| `FTP_HOST` | ftp | `ftp.scottsrichmond.com` |
| `FTP_USER` | ftp | `scott` |
| `FTP_PASS` | ftp | *(use secret manager — never hardcode)* |
| `DEPLOY_USER` | rsync | `scott` |
| `DEPLOY_HOST` | rsync | `scottsrichmond.com` |
| `DEPLOY_PATH` | rsync | `/var/www/html` |
| `DEPLOY_TARGET` | All (receipt) | `production` / `staging` |

---

## 🔁 Rollback Procedure

### If you need to revert to the previous deploy:

**Step 1 — Find the last good SHA from the receipt**
```powershell
Get-Content deploy-receipt.json | ConvertFrom-Json | Select-Object git_sha, timestamp
```

**Step 2 — Check out that commit**
```powershell
git checkout <GOOD_SHA>
```

**Step 3 — Re-deploy from that state**
```powershell
.\scripts\deploy.ps1 -Method $env:DEPLOY_METHOD -Url $env:DEPLOY_URL
```

**Step 4 — Return to main**
```powershell
git checkout main
```

---

## 🐛 Debugging Guide

| Symptom | Likely cause | Fix |
|---|---|---|
| `Uncommitted changes detected` | Unsaved edits | `git add` + `git commit` |
| `Missing required file: sw.js` | File deleted or renamed | Restore from git: `git checkout HEAD -- sw.js` |
| Smoke test `404` | Wrong `DEPLOY_URL` or misconfigured host | Check hosting settings; verify URL path |
| Smoke test `403` | S3 bucket not public / gh-pages not enabled | Enable static hosting on the bucket/repo |
| WinSCP exits non-zero | Wrong FTP credentials or host | Test FTP connection manually first |
| `gh-pages` push rejected | Branch protection rule | Temporarily allow force-push on `gh-pages` branch |
| Receipt not written | Script crashed before Step 6 | Check PowerShell error log; re-run after fix |

---

## 🔐 Secrets Hygiene

- **Never** put `FTP_PASS` or AWS keys in any committed file.
- Use PowerShell session variables (`$env:VAR`) or a `.env` file that is listed in `.gitignore`.
- Verify before any commit:
```powershell
git diff --cached | Select-String -Pattern "password|secret|key|token" -CaseSensitive:$false
```
If any matches appear — **do not commit**.

---

## 📋 Pre-Deploy Checklist (print-friendly)

```
[ ] PROJECT_CONTEXT.md read — no DEPLOY_LOCKED flag
[ ] AGENT_RULES.md read — no blocking rules
[ ] All 4 HTML files saved and committed
[ ] manifest.json and sw.js present
[ ] DEPLOY_METHOD and DEPLOY_URL env vars set
[ ] No credentials in staged files
[ ] Working tree clean (git status = nothing to commit)
[ ] deploy.ps1 script present in scripts/
```
