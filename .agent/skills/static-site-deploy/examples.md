# Examples: static-site-deploy

---

## Example 1 — GitHub Pages (most common for static sites)

**Situation:** Scott updated `food_trainer.html` with new quiz questions. He wants to push live immediately.

**Pre-conditions:**
- `gh` CLI authenticated (`gh auth status`)
- `DEPLOY_METHOD=gh-pages`
- `DEPLOY_URL=https://scottrichmond.github.io/food-bible`

**Run:**
```powershell
$env:DEPLOY_METHOD = "gh-pages"
$env:DEPLOY_URL    = "https://scottrichmond.github.io/food-bible"

.\scripts\deploy.ps1 -Method gh-pages -Url $env:DEPLOY_URL
```

**Expected output:**
```
✅ All required files present and non-empty.
Branch 'gh-pages' set up to track remote branch 'gh-pages'.
✅ Smoke test passed. Status: 200
📄 Receipt written to deploy-receipt.json
```

**Receipt (`deploy-receipt.json`):**
```json
{
  "timestamp":   "2025-06-10T14:22:01Z",
  "git_sha":     "a3f91bc",
  "deployed_by": "scott",
  "target":      "github-pages",
  "method":      "gh-pages",
  "smoke_url":   "https://scottrichmond.github.io/food-bible",
  "status":      "success"
}
```

---

## Example 2 — AWS S3 Bucket Sync

**Situation:** Production is hosted on S3. `mobile_food.html` was redesigned. Deploy + cache-bust needed.

**Pre-conditions:**
- AWS CLI configured (`aws configure`)
- `DEPLOY_METHOD=s3`
- `DEPLOY_BUCKET=scotts-food-bible-prod`
- `DEPLOY_URL=https://scotts-food-bible-prod.s3-website-eu-west-1.amazonaws.com`

**Run:**
```powershell
$env:DEPLOY_METHOD = "s3"
$env:DEPLOY_BUCKET = "scotts-food-bible-prod"
$env:DEPLOY_URL    = "https://scotts-food-bible-prod.s3-website-eu-west-1.amazonaws.com"

.\scripts\deploy.ps1 -Method s3 -Url $env:DEPLOY_URL
```

**What the script does:**
1. Validates 4 HTML + manifest + sw.js
2. Runs `aws s3 sync` with `--delete` (removes stale files)
3. Smoke-tests the S3 website endpoint
4. Writes receipt

---

## Example 3 — Blocked deploy (dirty working tree)

**Situation:** Agent attempts a deploy but there are unsaved edits in `food_builder.html`.

**Run:**
```powershell
.\scripts\deploy.ps1 -Method gh-pages -Url https://scottrichmond.github.io/food-bible
```

**Expected output:**
```
❌ Uncommitted changes detected. Commit or stash before deploying.
 M food_builder.html
```

**Resolution:**
```powershell
git add food_builder.html
git commit -m "feat: updated food builder dish fields"
# Then re-run deploy
```

---

## Example 4 — Smoke test failure

**Situation:** Deploy succeeded but the live URL returns `404` (misconfigured base path).

**Output:**
```
✅ All required files present and non-empty.
[deploy output...]
❌ Smoke test FAILED. Status: 404
```

**Resolution checklist:**
- [ ] Check `DEPLOY_URL` matches the actual hosted path
- [ ] Verify `index.html` is at the root of the deploy target
- [ ] For S3: confirm Static Website Hosting is enabled on the bucket
- [ ] For gh-pages: confirm the repo Pages settings point to `gh-pages` branch
