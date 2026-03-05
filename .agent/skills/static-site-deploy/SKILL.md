# Skill: static-site-deploy

> **Memory hook:** "Bundle the files, validate the output, push to host — in that order, every time."

---

## 1. Goal

Deterministically sync and deploy the Scott's Food Bible static site (`index.html`, `food_builder.html`, `food_trainer.html`, `mobile_food.html`, plus assets) to the configured hosting target, producing a verifiable deployment receipt.

---

## 2. When to Use / When NOT to Use

| ✅ Use when | ❌ Do NOT use when |
|---|---|
| Any of the 4 HTML files changed | Only `README.md` or docs changed |
| A new asset (icon, font, manifest) was added | You are mid-edit and files are unsaved |
| You need to roll back to a prior deploy | Backend/server config changed (out of scope) |
| Smoke-testing the live URL after a change | Database or API credentials need rotation |

---

## 3. Inputs

| Input | Source | Required |
|---|---|---|
| `PROJECT_CONTEXT.md` | Repo root | ✅ Read first |
| `AGENT_RULES.md` | Repo root | ✅ Read first |
| `TASK_BOARD.md` | Repo root | ⬜ Read if present |
| `DEPLOY_TARGET` env var | PowerShell session / `.env` | ✅ Must be set |
| `DEPLOY_METHOD` env var | `ftp` \| `s3` \| `rsync` \| `gh-pages` | ✅ Must be set |
| Source directory | `./` (repo root, or `<SOURCE_DIR>` if set) | ✅ |

**Required tools (check before running):**

```powershell
# Verify tools exist — abort if any are missing
Get-Command git    -ErrorAction Stop
Get-Command node   -ErrorAction Stop   # only if build step exists
# Plus one of: aws / winscp / gh — depending on DEPLOY_METHOD
```

---

## 4. Procedure

### Step 0 — Read context files
```powershell
Get-Content PROJECT_CONTEXT.md -ErrorAction SilentlyContinue
Get-Content AGENT_RULES.md     -ErrorAction SilentlyContinue
Get-Content TASK_BOARD.md      -ErrorAction SilentlyContinue
```
> ⚠ Abort if `AGENT_RULES.md` contains a `DEPLOY_LOCKED` flag.

---

### Step 1 — Confirm working tree is clean
```powershell
$status = git status --porcelain
if ($status) {
    Write-Error "Uncommitted changes detected. Commit or stash before deploying."
    exit 1
}
```

---

### Step 2 — Identify files to deploy
```powershell
$files = @(
    "index.html",
    "food_builder.html",
    "food_trainer.html",
    "mobile_food.html",
    "manifest.json",
    "sw.js"
)
# Add any additional assets
$assets = Get-ChildItem -Path "./" -Include "*.png","*.ico","*.webmanifest" -Recurse
```

---

### Step 3 — Validate each file exists and is non-empty
```powershell
foreach ($f in $files) {
    if (-not (Test-Path $f)) {
        Write-Error "Missing required file: $f"
        exit 1
    }
    if ((Get-Item $f).Length -eq 0) {
        Write-Error "File is empty: $f"
        exit 1
    }
}
Write-Host "✅ All required files present and non-empty."
```

---

### Step 4 — Run deploy (choose branch by DEPLOY_METHOD)

**Option A — GitHub Pages (`gh-pages`)**
```powershell
# Requires: gh CLI authenticated
git checkout -B gh-pages
git push origin gh-pages --force
git checkout -          # return to previous branch
```

**Option B — AWS S3 (`s3`)**
```powershell
aws s3 sync ./ s3://$env:DEPLOY_BUCKET `
    --exclude ".git/*" `
    --exclude ".agent/*" `
    --exclude "*.md" `
    --delete
```

**Option C — FTP via WinSCP (`ftp`)**
```powershell
& "C:\Program Files (x86)\WinSCP\WinSCP.com" `
    /command `
    "open ftp://$env:FTP_USER:$env:FTP_PASS@$env:FTP_HOST/" `
    "synchronize remote ./ $env:DEPLOY_REMOTE_PATH" `
    "exit"
```

**Option D — Manual rsync over SSH (`rsync`) — WSL required**
```powershell
wsl rsync -avz --delete `
    --exclude='.git' --exclude='.agent' --exclude='*.md' `
    ./ $env:DEPLOY_USER@$env:DEPLOY_HOST:$env:DEPLOY_PATH
```

---

### Step 5 — Smoke test the live URL
```powershell
$response = Invoke-WebRequest -Uri $env:DEPLOY_URL -UseBasicParsing
if ($response.StatusCode -ne 200) {
    Write-Error "Smoke test FAILED. Status: $($response.StatusCode)"
    exit 1
}
Write-Host "✅ Smoke test passed. Status: $($response.StatusCode)"
```

---

### Step 6 — Write deployment receipt
```powershell
$receipt = @{
    timestamp   = (Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ")
    git_sha     = (git rev-parse --short HEAD)
    deployed_by = $env:USERNAME
    target      = $env:DEPLOY_TARGET
    method      = $env:DEPLOY_METHOD
    smoke_url   = $env:DEPLOY_URL
    status      = "success"
}
$receipt | ConvertTo-Json | Out-File -FilePath "deploy-receipt.json" -Encoding utf8
Write-Host "📄 Receipt written to deploy-receipt.json"
```

---

### Step 7 — Commit the receipt (optional but recommended)
```powershell
git add deploy-receipt.json
git commit -m "chore(deploy): receipt $(git rev-parse --short HEAD)"
```

---

## 5. Output Contract

Every successful run **must** produce:

| Output | Location | Required content |
|---|---|---|
| `deploy-receipt.json` | Repo root | `timestamp`, `git_sha`, `status: "success"` |
| Console line | stdout | `✅ Smoke test passed` |
| No diff on core HTML | Git status | 4 HTML files unchanged post-deploy |

---

## 6. Constraints

| Rule | Detail |
|---|---|
| **MUST** read context files first | Steps 0 is non-negotiable |
| **MUST** validate all files before upload | Never deploy a partial or empty file |
| **MUST** write `deploy-receipt.json` | No receipt = deploy is unverified |
| **NEVER** force-push to `main` | Only push to `gh-pages` or a deploy branch |
| **NEVER** commit `.env` or credential files | Check `.gitignore` before any `git add .` |
| **NEVER** delete `sw.js` or `manifest.json` | PWA will break silently |
| **NEVER** deploy with uncommitted local changes | Step 1 enforces this |

---

## 7. Quality Checklist

- [ ] `PROJECT_CONTEXT.md` and `AGENT_RULES.md` read with no blockers
- [ ] Git working tree clean before deploy
- [ ] All 4 HTML + `manifest.json` + `sw.js` present and non-empty
- [ ] Deploy command exited with code `0`
- [ ] Smoke test returned HTTP `200`
- [ ] `deploy-receipt.json` written with correct `git_sha`
- [ ] No credentials visible in any committed file

---

## 8. Examples

See `examples.md` for full walkthroughs.

**Quick reference:**

| Scenario | Key flag/var |
|---|---|
| GitHub Pages push | `DEPLOY_METHOD=gh-pages` |
| AWS S3 bucket sync | `DEPLOY_METHOD=s3`, `DEPLOY_BUCKET=<bucket>` |
| FTP upload via WinSCP | `DEPLOY_METHOD=ftp`, `FTP_HOST/USER/PASS` set |

---

## 9. Scripts

`scripts/deploy.ps1` — full end-to-end helper that wraps Steps 1–7.

```powershell
# Usage:
.\scripts\deploy.ps1 -Method gh-pages -Url https://<YOUR_SITE_URL>
```
