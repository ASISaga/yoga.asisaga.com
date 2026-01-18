#!/bin/bash

# Script to test SCSS compilation with remote theme
# This script downloads the remote theme and compiles SCSS for testing

set -e

echo "📦 Downloading remote theme for SCSS testing..."

# Create temporary directory for theme
THEME_DIR=".theme-test"
rm -rf "$THEME_DIR"
mkdir -p "$THEME_DIR"

# Download theme
curl -sL "https://github.com/ASISaga/theme.asisaga.com/archive/refs/heads/main.zip" -o "$THEME_DIR/theme.zip"

# Extract theme
unzip -q "$THEME_DIR/theme.zip" -d "$THEME_DIR"
mv "$THEME_DIR/theme.asisaga.com-main"/* "$THEME_DIR/"
rm -rf "$THEME_DIR/theme.asisaga.com-main" "$THEME_DIR/theme.zip"

echo "✅ Theme downloaded"

# Create temp file without Jekyll front matter
TEMP_SCSS=$(mktemp)
sed '/^---$/,/^---$/d' assets/css/main.scss > "$TEMP_SCSS"

# Compile SCSS with theme in load path
echo "🔨 Compiling SCSS..."
npx sass \
  --no-source-map \
  --load-path="$THEME_DIR/_sass" \
  --load-path="_sass" \
  --load-path="assets/css" \
  --style=expanded \
  "$TEMP_SCSS":_site/assets/css/main.css

if [ $? -eq 0 ]; then
  echo "✅ SCSS compilation successful!"
  echo "📄 Output: _site/assets/css/main.css"
  
  # Show first few lines of compiled CSS
  echo ""
  echo "First 10 lines of compiled CSS:"
  echo "================================"
  head -10 _site/assets/css/main.css
  
  # Clean up
  rm -rf "$THEME_DIR" "$TEMP_SCSS"
  exit 0
else
  echo "❌ SCSS compilation failed"
  rm -rf "$THEME_DIR" "$TEMP_SCSS"
  exit 1
fi
