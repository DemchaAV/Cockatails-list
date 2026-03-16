@echo off
git add manifest.json
git commit -m "Bump app version to refresh PWA cache"
git push
echo Git push completed.
