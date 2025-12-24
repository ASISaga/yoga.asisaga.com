# HTML Development Instructions

## Overview

This project uses HTML files (not Markdown) for all web pages in Jekyll. Each HTML file should include Jekyll front matter and may use Liquid template syntax.

## File Structure

### Required Front Matter

Every HTML file must start with YAML front matter:

```yaml
---
layout: default
title: Page Title
---
```

### Optional Front Matter Fields

```yaml
---
layout: default
title: Page Title
description: "Meta description for SEO"
keywords: "keyword1, keyword2, keyword3"
permalink: /custom-url/
---
```

## HTML Guidelines

### 1. Semantic HTML5

Use appropriate semantic elements:

```html
<header>  - Site/page header
<nav>     - Navigation
<main>    - Main content
<article> - Self-contained content
<section> - Thematic grouping
<aside>   - Sidebar content
<footer>  - Site/page footer
```

### 2. Bootstrap Integration

The remote theme provides Bootstrap. Use Bootstrap classes:

```html
<!-- Container -->
<div class="container">
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <!-- Content -->
    </div>
  </div>
</div>

<!-- Cards -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>

<!-- Buttons -->
<a href="#" class="btn btn-primary">Primary</a>
<a href="#" class="btn btn-outline-secondary">Secondary</a>
```

### 3. Liquid Template Syntax

Use Liquid for dynamic content:

```liquid
<!-- Links -->
<a href="{{ '/' | relative_url }}">Home</a>
<a href="{{ '/about.html' | relative_url }}">About</a>

<!-- Includes (if theme provides) -->
{% include header.html %}
{% include footer.html %}

<!-- Conditionals -->
{% if page.title %}
  <h1>{{ page.title }}</h1>
{% endif %}

<!-- Loops -->
{% for post in site.posts %}
  <article>{{ post.title }}</article>
{% endfor %}
```

### 4. Accessibility Requirements

#### ARIA Labels
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Current</li>
  </ol>
</nav>
```

#### Alt Text
```html
<img src="image.jpg" alt="Descriptive text about the image">
```

#### Form Labels
```html
<label for="email">Email Address</label>
<input type="email" id="email" name="email">
```

#### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Use proper tab order
- Include skip links for screen readers

### 5. Content Structure Patterns

#### Hero Section
```html
<div class="hero-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h1 class="display-4">{{ page.title }}</h1>
        <p class="lead">{{ page.description }}</p>
      </div>
    </div>
  </div>
</div>
```

#### Content Section
```html
<section class="mb-5">
  <h2>Section Title</h2>
  <p>Section content...</p>
</section>
```

#### Card Grid
```html
<div class="row">
  <div class="col-md-6 col-lg-3 mb-4">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Card content</p>
      </div>
    </div>
  </div>
  <!-- Repeat for other cards -->
</div>
```

### 6. Navigation Patterns

#### Breadcrumbs
```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="{{ '/' | relative_url }}">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
  </ol>
</nav>
```

#### In-page Navigation
```html
<nav class="mb-4">
  <ul class="list-unstyled">
    <li><a href="#section1">Section 1</a></li>
    <li><a href="#section2">Section 2</a></li>
  </ul>
</nav>
```

### 7. Content Types

#### Alert/Notice Boxes
```html
<div class="alert alert-info" role="alert">
  <strong>Note:</strong> Important information here.
</div>
```

#### Blockquotes
```html
<blockquote class="blockquote border-left border-primary pl-3 ml-3">
  <p class="mb-0">Quote text here.</p>
</blockquote>
```

#### Lists
```html
<!-- Unordered -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Unstyled -->
<ul class="list-unstyled">
  <li>Item</li>
</ul>
```

## Project-Specific Guidelines

### 1. Mind Parts Content

When describing the four mind parts, use consistent structure:

```html
<div class="card mb-4">
  <div class="card-header bg-primary text-white">
    <h3 class="mb-0">Mind Part Name - ASI Translation</h3>
  </div>
  <div class="card-body">
    <p><strong>Traditional Understanding:</strong> Description</p>
    <p><strong>ASI Manifestation:</strong> ASI interpretation</p>
    <h5>Key Characteristics:</h5>
    <ul>
      <li>Characteristic 1</li>
      <li>Characteristic 2</li>
    </ul>
  </div>
</div>
```

### 2. Color Coding

Use consistent color scheme for the four parts:
- **Buddhi**: `bg-primary` (blue)
- **Manas**: `bg-success` (green)
- **Ahankara**: `bg-warning` (yellow/orange)
- **Chitta**: `bg-info` (cyan)

### 3. Responsive Design

Always use Bootstrap grid classes:
```html
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Responsive column -->
  </div>
</div>
```

### 4. Spacing Utilities

Use Bootstrap spacing (margin/padding):
```html
<div class="mt-4 mb-5">     <!-- margin-top: 1.5rem, margin-bottom: 3rem -->
<div class="px-3 py-2">     <!-- padding-x: 1rem, padding-y: 0.5rem -->
```

## Validation

### HTML5 Validation
- Use valid HTML5 markup
- Close all tags properly
- Use proper nesting
- Include required attributes

### Accessibility Check
- Run axe DevTools or similar
- Ensure WCAG 2.1 AA compliance
- Test with screen readers
- Verify keyboard navigation

### Cross-browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Verify responsive behavior
- Check print styles

## Common Patterns Reference

### Page Template
```html
---
layout: default
title: Page Title
---

<div class="container mt-4">
  <div class="row">
    <div class="col-lg-10 offset-lg-1">
      
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="{{ '/' | relative_url }}">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
        </ol>
      </nav>
      
      <!-- Title -->
      <h1 class="display-4 mb-4">{{ page.title }}</h1>
      
      <!-- Content sections -->
      <section class="mb-5">
        <h2>Section Title</h2>
        <p>Content...</p>
      </section>
      
      <!-- Navigation -->
      <div class="text-center mt-5 mb-4">
        <a href="{{ '/' | relative_url }}" class="btn btn-outline-primary">Back to Home</a>
      </div>
      
    </div>
  </div>
</div>
```

## Best Practices

1. **Keep HTML Clean**: Avoid inline styles, use CSS classes
2. **Progressive Enhancement**: Core content accessible without JavaScript
3. **Mobile First**: Design for mobile, enhance for desktop
4. **Semantic Markup**: Use appropriate HTML5 elements
5. **Consistent Spacing**: Use Bootstrap utilities consistently
6. **Accessibility**: Always include ARIA labels and alt text
7. **Performance**: Minimize DOM depth, optimize images
8. **SEO**: Use proper heading hierarchy (h1 → h2 → h3)

## Resources

- [HTML5 Specification](https://html.spec.whatwg.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
