#!/bin/bash

# Script to lint SCSS files with Jekyll front matter
# Creates temporary copies without front matter for stylelint

TEMP_DIR=$(mktemp -d)
EXIT_CODE=0

# Function to clean up temp directory
cleanup() {
  rm -rf "$TEMP_DIR"
}

trap cleanup EXIT

# Process each SCSS file
for file in assets/css/**/*.scss; do
  if [ -f "$file" ]; then
    # Create temp file
    temp_file="$TEMP_DIR/$(basename "$file")"
    
    # Remove Jekyll front matter (lines between --- at the start of file)
    sed '/^---$/,/^---$/d' "$file" > "$temp_file"
    
    # Run stylelint on temp file
    if ! npx stylelint "$temp_file" --config .stylelintrc.json 2>&1 | sed "s|$temp_file|$file|g"; then
      EXIT_CODE=1
    fi
  fi
done

exit $EXIT_CODE
