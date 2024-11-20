npm run build
if (Test-Path docs) {
    Remove-Item -Recurse -Force docs
}
Rename-Item -Path out -NewName docs
git add .
git commit -m "Deploy to GitHub Pages"
git push
