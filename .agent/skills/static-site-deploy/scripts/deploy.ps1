<#
.SYNOPSIS
    Deploy Scott's Food Bible static site to the configured hosting target.

.DESCRIPTION
    Validates all required files, runs the deploy via the selected method,
    smoke-tests the live URL, and writes a deploy-receipt.json.

.PARAMETER Method
    Deploy method: gh-pages | s3 | ftp | rsync

.PARAMETER Url
    The live URL to smoke-test after deploy (must return HTTP 200).

.PARAMETER SourceDir
    Path to the site root. Defaults to current directory.

.EXAMPLE
    .\scripts\deploy.ps1 -Method gh-pages -Url https://scottrichmond.github.io/food-bible

.EXAMPLE
    .\scripts\deploy.ps1 -Method s3 -Url https://scotts-food-bible.s3-website.amazonaws.com
#>

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("gh-pages","s3","ftp","rsync")]
    [string]$Method,

    [Parameter(Mandatory=$true)]
    [string]$Url,

    [string]$SourceDir = (Get-Location).Path
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# ─────────────────────────────────────────
# STEP 0 — Read context files
# ─────────────────────────────────────────
Write-Host "`n📖 Reading context files..." -ForegroundColor Cyan
foreach ($ctx in @("PROJECT_CONTEXT.md","AGENT_RULES.md","TASK_BOARD.md")) {
    $path = Join-Path $SourceDir $ctx
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -match "DEPLOY_LOCKED") {
            Write-Error "🔒 DEPLOY_LOCKED flag found in $ctx. Aborting."
            exit 1
        }
        Write-Host "  ✔ $ctx read." -ForegroundColor DarkGray
    }
}

# ─────────────────────────────────────────
# STEP 1 — Ensure clean working tree
# ─────────────────────────────────────────
Write-Host "`n🔍 Checking git working tree..." -ForegroundColor Cyan
$gitStatus = git status --porcelain 2>&1
if ($gitStatus) {
    Write-Error "❌ Uncommitted changes detected. Commit or stash before deploying.`n$gitStatus"
    exit 1
}
Write-Host "  ✔ Working tree clean." -ForegroundColor DarkGray

# ─────────────────────────────────────────
# STEP 2 + 3 — Validate required files
# ─────────────────────────────────────────
Write-Host "`n📋 Validating required files..." -ForegroundColor Cyan
$requiredFiles = @(
    "index.html",
    "food_builder.html",
    "food_trainer.html",
    "mobile_food.html",
    "manifest.json",
    "sw.js"
)

foreach ($file in $requiredFiles) {
    $fullPath = Join-Path $SourceDir $file
    if (-not (Test-Path $fullPath)) {
        Write-Error "❌ Missing required file: $file"
        exit 1
    }
    if ((Get-Item $fullPath).Length -eq 0) {
        Write-Error "❌ File is empty: $file"
        exit 1
    }
}
Write-Host "  ✅ All required files present and non-empty." -ForegroundColor Green

# ─────────────────────────────────────────
# STEP 4 — Deploy
# ─────────────────────────────────────────
Write-Host "`n🚀 Deploying via method: $Method..." -ForegroundColor Cyan

switch ($Method) {

    "gh-pages" {
        git checkout -B gh-pages
        if ($LASTEXITCODE -ne 0) { Write-Error "git checkout failed"; exit 1 }
        git push origin gh-pages --force
        if ($LASTEXITCODE -ne 0) { Write-Error "git push failed"; exit 1 }
        git checkout -
        if ($LASTEXITCODE -ne 0) { Write-Error "git checkout - failed"; exit 1 }
    }

    "s3" {
        if (-not $env:DEPLOY_BUCKET) {
            Write-Error "❌ DEPLOY_BUCKET env var not set."
            exit 1
        }
        aws s3 sync $SourceDir s3://$env:DEPLOY_BUCKET `
            --exclude ".git/*" `
            --exclude ".agent/*" `
            --exclude "*.md" `
            --exclude "deploy-receipt.json" `
            --delete
        if ($LASTEXITCODE -ne 0) { Write-Error "aws s3 sync failed"; exit 1 }
    }

    "ftp" {
        foreach ($v in @("FTP_HOST","FTP_USER","FTP_PASS","DEPLOY_REMOTE_PATH")) {
            if (-not (Get-Item "env:$v" -ErrorAction SilentlyContinue)) {
                Write-Error "❌ $v env var not set."
                exit 1
            }
        }
        $winscpPath = "C:\Program Files (x86)\WinSCP\WinSCP.com"
        if (-not (Test-Path $winscpPath)) {
            Write-Error "❌ WinSCP not found at: $winscpPath"
            exit 1
        }
        & $winscpPath /command `
            "open ftp://$($env:FTP_USER):$($env:FTP_PASS)@$($env:FTP_HOST)/" `
            "synchronize remote `"$SourceDir`" `"$($env:DEPLOY_REMOTE_PATH)`"" `
            "exit"
        if ($LASTEXITCODE -ne 0) { Write-Error "WinSCP sync failed"; exit 1 }
    }

    "rsync" {
        foreach ($v in @("DEPLOY_USER","DEPLOY_HOST","DEPLOY_PATH")) {
            if (-not (Get-Item "env:$v" -ErrorAction SilentlyContinue)) {
                Write-Error "❌ $v env var not set."
                exit 1
            }
        }
        wsl rsync -avz --delete `
            --exclude=".git" --exclude=".agent" --exclude="*.md" `
            "$SourceDir/" "$($env:DEPLOY_USER)@$($env:DEPLOY_HOST):$($env:DEPLOY_PATH)"
        if ($LASTEXITCODE -ne 0) { Write-Error "rsync failed"; exit 1 }
    }
}

Write-Host "  ✔ Deploy command completed." -ForegroundColor DarkGray

# ─────────────────────────────────────────
# STEP 5 — Smoke test
# ─────────────────────────────────────────
Write-Host "`n🌐 Smoke testing: $Url ..." -ForegroundColor Cyan
Start-Sleep -Seconds 3   # brief pause for CDN propagation

try {
    $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 15
    if ($response.StatusCode -ne 200) {
        Write-Error "❌ Smoke test FAILED. Status: $($response.StatusCode)"
        exit 1
    }
    Write-Host "  ✅ Smoke test passed. Status: $($response.StatusCode)" -ForegroundColor Green
} catch {
    Write-Error "❌ Smoke test request failed: $_"
    exit 1
}

# ─────────────────────────────────────────
# STEP 6 — Write deploy receipt
# ─────────────────────────────────────────
Write-Host "`n📄 Writing deploy receipt..." -ForegroundColor Cyan
$gitSha = (git rev-parse --short HEAD).Trim()

$receipt = [ordered]@{
    timestamp    = (Get-Date -Format "yyyy-MM-ddTHH:mm:ssZ")
    git_sha      = $gitSha
    deployed_by  = $env:USERNAME
    target       = if ($env:DEPLOY_TARGET) { $env:DEPLOY_TARGET } else { "production" }
    method       = $Method
    smoke_url    = $Url
    status       = "success"
}

$receiptPath = Join-Path $SourceDir "deploy-receipt.json"
$receipt | ConvertTo-Json | Out-File -FilePath $receiptPath -Encoding utf8
Write-Host "  ✔ Receipt written: $receiptPath" -ForegroundColor DarkGray

# ─────────────────────────────────────────
# STEP 7 — Commit receipt
# ─────────────────────────────────────────
Write-Host "`n📝 Committing deploy receipt..." -ForegroundColor Cyan
git add deploy-receipt.json
git commit -m "chore(deploy): receipt $gitSha [$Method]" 2>&1 | Out-Null
Write-Host "  ✔ Receipt committed." -ForegroundColor DarkGray

# ─────────────────────────────────────────
# DONE
# ─────────────────────────────────────────
Write-Host "`n✅ Deploy complete. SHA: $gitSha → $Url`n" -ForegroundColor Green
