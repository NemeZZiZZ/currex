#!/usr/bin/env bash

# Deploy script for GitHub Pages

set -e

# Build the project
echo "Building project..."
npm run build

# Enter the dist folder
cd dist

# Initialize a git repository
git init
git add -A
git commit -m 'deploy'

# Deploy to GitHub Pages
# Replace YOUR_USERNAME/YOUR_REPO with your own details
git push -f git@github.com:NemeZZiZZ/currex.git main:gh-pages

cd -
