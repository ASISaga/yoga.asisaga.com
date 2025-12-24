# SCSS Development Instructions

## Overview

This project uses SCSS (Sassy CSS) for styling, integrated with Jekyll's build process. The remote theme provides base styles including Bootstrap, which should be extended rather than overridden.

## SCSS Philosophy

### 1. Extend, Don't Override
- Use theme's existing styles as foundation
- Add custom styles only when necessary
- Maintain consistency with theme design

### 2. Modular Architecture
- Organize styles into partials
- Use clear naming conventions
- Keep specificity low

### 3. Maintainability
- Write self-documenting code
- Use variables for reusable values
- Keep selectors simple

## File Structure

```
_sass/
├── _variables.scss      # Custom variables
├── _mixins.scss         # Reusable mixins
├── _base.scss           # Base styles
├── _layout.scss         # Layout components
├── _components.scss     # UI components
├── _utilities.scss      # Utility classes
└── _mind-parts.scss     # Project-specific styles

assets/
└── css/
    └── main.scss        # Main import file
```

## SCSS Guidelines

### 1. Variables

#### Color Variables
```scss
// Brand colors
$primary-color: #007bff;
$secondary-color: #6c757d;
$success-color: #28a745;
$info-color: #17a2b8;
$warning-color: #ffc107;
$danger-color: #dc3545;

// Mind parts colors
$buddhi-color: #007bff;   // Blue - intellect
$manas-color: #28a745;    // Green - perception
$ahankara-color: #ffc107; // Yellow - identity
$chitta-color: #17a2b8;   // Cyan - consciousness

// Neutral colors
$white: #ffffff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-800: #343a40;
$black: #000000;

// Text colors
$text-primary: $gray-800;
$text-secondary: #6c757d;
$text-muted: #6c757d;
```

#### Typography Variables
```scss
$font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

$font-size-base: 1rem;
$font-size-lg: 1.25rem;
$font-size-sm: 0.875rem;

$line-height-base: 1.5;
$line-height-lg: 1.75;
$line-height-sm: 1.25;

$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-bold: 700;
```

#### Spacing Variables
```scss
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  2: $spacer * 0.5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3
);
```

#### Breakpoints
```scss
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-xxl: 1400px;
```

### 2. Mixins

#### Responsive Breakpoints
```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'sm' {
    @media (min-width: $breakpoint-sm) { @content; }
  } @else if $breakpoint == 'md' {
    @media (min-width: $breakpoint-md) { @content; }
  } @else if $breakpoint == 'lg' {
    @media (min-width: $breakpoint-lg) { @content; }
  } @else if $breakpoint == 'xl' {
    @media (min-width: $breakpoint-xl) { @content; }
  }
}

// Usage
.element {
  font-size: 14px;
  
  @include respond-to('md') {
    font-size: 16px;
  }
}
```

#### Card Style Mixin
```scss
@mixin card($bg-color: $white, $border-radius: 0.25rem) {
  background-color: $bg-color;
  border-radius: $border-radius;
  box-shadow: 0 0.125rem 0.25rem rgba($black, 0.075);
  padding: 1.25rem;
  
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba($black, 0.15);
  }
}
```

#### Flexbox Utilities
```scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

#### Transition Mixin
```scss
@mixin transition($properties: all, $duration: 0.3s, $timing: ease) {
  transition: $properties $duration $timing;
}
```

### 3. Naming Conventions

#### BEM (Block Element Modifier)
```scss
// Block
.mind-part {
  // Element
  &__title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  &__description {
    color: $text-secondary;
  }
  
  // Modifier
  &--buddhi {
    border-color: $buddhi-color;
  }
  
  &--manas {
    border-color: $manas-color;
  }
}
```

#### Component Classes
```scss
.hero-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, $primary-color, darken($primary-color, 10%));
  color: $white;
  
  &__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  &__subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
  }
}
```

### 4. Layout Styles

#### Container Customization
```scss
.container-custom {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  
  @include respond-to('lg') {
    max-width: 1320px;
  }
}
```

#### Grid Extensions
```scss
.row-custom {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @include respond-to('md') {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
```

### 5. Component Styles

#### Cards
```scss
.card-mind-part {
  @include card();
  border-left: 4px solid transparent;
  @include transition(transform);
  
  &:hover {
    transform: translateY(-4px);
  }
  
  &.buddhi {
    border-left-color: $buddhi-color;
  }
  
  &.manas {
    border-left-color: $manas-color;
  }
  
  &.ahankara {
    border-left-color: $ahankara-color;
  }
  
  &.chitta {
    border-left-color: $chitta-color;
  }
}
```

#### Buttons
```scss
.btn-mind-part {
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
  text-decoration: none;
  @include transition();
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba($black, 0.2);
  }
}
```

#### Hero Section
```scss
.hero-section {
  background: linear-gradient(
    135deg,
    rgba($primary-color, 0.9),
    rgba($info-color, 0.9)
  );
  color: $white;
  padding: 5rem 0;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    
    @include respond-to('md') {
      font-size: 4rem;
    }
  }
  
  .lead {
    font-size: 1.25rem;
    opacity: 0.95;
    
    @include respond-to('md') {
      font-size: 1.5rem;
    }
  }
}
```

### 6. Utility Classes

```scss
// Spacing utilities (if not provided by Bootstrap)
.mt-6 { margin-top: 4rem; }
.mb-6 { margin-bottom: 4rem; }
.py-6 { padding-top: 4rem; padding-bottom: 4rem; }

// Text utilities
.text-gradient {
  background: linear-gradient(135deg, $primary-color, $info-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba($black, 0.1);
}

// Border utilities
.border-thick {
  border-width: 3px !important;
}

.border-left-thick {
  border-left-width: 4px !important;
}

// Shadow utilities
.shadow-hover {
  @include transition(box-shadow);
  
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba($black, 0.15);
  }
}
```

### 7. Animations

```scss
// Fade in
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

// Pulse
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

// Slide in
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}
```

### 8. Typography

```scss
// Headings
h1, h2, h3, h4, h5, h6 {
  font-weight: $font-weight-bold;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

// Lead text
.lead {
  font-size: 1.25rem;
  font-weight: $font-weight-light;
  line-height: $line-height-lg;
}

// Small text
.small-text {
  font-size: $font-size-sm;
}

// Code
code {
  font-family: $font-family-monospace;
  font-size: 0.875em;
  background-color: $gray-100;
  padding: 0.2em 0.4em;
  border-radius: 0.25rem;
}

pre {
  font-family: $font-family-monospace;
  background-color: $gray-100;
  padding: 1rem;
  border-radius: 0.25rem;
  overflow-x: auto;
  
  code {
    background-color: transparent;
    padding: 0;
  }
}
```

## Project-Specific Styles

### Mind Parts Theme
```scss
// Mind parts color scheme
.mind-part-buddhi {
  --mind-color: #{$buddhi-color};
}

.mind-part-manas {
  --mind-color: #{$manas-color};
}

.mind-part-ahankara {
  --mind-color: #{$ahankara-color};
}

.mind-part-chitta {
  --mind-color: #{$chitta-color};
}

// Mind part cards
.mind-part-card {
  border-left: 4px solid var(--mind-color, $primary-color);
  
  .card-header {
    background-color: var(--mind-color);
    color: $white;
  }
}

// Mind diagram (for future interactive visualization)
.mind-diagram {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
  }
  
  &__part {
    text-align: center;
    padding: 2rem;
    border-radius: 0.5rem;
    @include transition();
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba($black, 0.1);
    }
  }
}
```

## Best Practices

1. **Use Variables**: Define colors, fonts, and spacing as variables
2. **Nest Wisely**: Don't nest more than 3-4 levels deep
3. **Mixins for Reusability**: Create mixins for repeated patterns
4. **Mobile First**: Write base styles for mobile, enhance for desktop
5. **Avoid !important**: Use it only as a last resort
6. **Comment Complex Code**: Explain why, not what
7. **Consistent Naming**: Use BEM or similar methodology
8. **Performance**: Minimize selector complexity
9. **Accessibility**: Ensure sufficient color contrast
10. **Browser Compatibility**: Test across browsers

## Main SCSS File

```scss
// assets/css/main.scss
---
---

// Import theme styles (if available)
@import "theme";

// Custom variables (override theme if needed)
@import "variables";

// Mixins
@import "mixins";

// Base styles
@import "base";

// Layout
@import "layout";

// Components
@import "components";

// Project-specific
@import "mind-parts";

// Utilities
@import "utilities";
```

## Resources

- [Sass Documentation](https://sass-lang.com/documentation)
- [Sass Guidelines](https://sass-guidelin.es/)
- [BEM Methodology](http://getbem.com/)
- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
