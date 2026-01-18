# SCSS Development Instructions - Genesis Ontological System

## Overview

This subdomain uses the **Genesis Semantic SCSS Engine** from the ASISaga theme repository. All styling follows the ontological approach - mapping HTML semantics to semantic roles rather than visual properties.

## Core Philosophy

### Three-Tier Architecture

**Tier 1: Content (HTML)**
- Defines WHAT the data is
- Uses semantic HTML5 elements and meaningful class names
- No inline styles or style attributes

**Tier 2: Interface (Our SCSS)**
- Defines the ROLE of content using ontological mixins
- NO raw CSS properties allowed
- Maps semantic classes to Genesis mixins

**Tier 3: Engine (Theme)**
- Defines the LOOK using OKLCH colors, Bento layouts, glassmorphism
- Controlled entirely by the theme repository
- We never touch this layer

## Essential Rules

### ✅ DO

1. **Use only ontological mixins** from `@import "ontology/index";`
2. **Map HTML classes to semantic roles** (what IS this content?)
3. **Mirror HTML structure** in SCSS nesting
4. **Comment your intent** (why this mixin?)
5. **Combine mixins** creatively for rich semantics

### ❌ DON'T

1. **No raw CSS properties** (`margin`, `padding`, `color`, `background`, etc.)
2. **No pixel/rem values** anywhere in SCSS
3. **No color values** (`#hex`, `rgb()`, `oklch()`)
4. **No layout properties** (`display`, `grid`, `flex`)
5. **No typography values** (`font-size`, `font-weight`, `line-height`)

## The Six Ontological Categories

### 1. `genesis-environment($logic)` - Spatial Organization

Maps HTML layout containers to organizational logic:

- `'distributed'` - Autonomous entities in Bento grid (card grids, galleries)
- `'focused'` - Singular narrative thread (blog posts, articles)
- `'associative'` - Network of connections (navigation, related items)
- `'chronological'` - Time-linear sequence (timelines, feeds)
- `'manifest'` - High-density dashboard (analytics, metrics)

**Example:**
```scss
.mind-parts-grid {
  @include genesis-environment('distributed');  // Auto-fit card grid
}

.article-content {
  @include genesis-environment('focused');      // Reading-optimized
}
```

### 2. `genesis-entity($nature)` - Visual Presence

Maps content blocks to their semantic weight:

- `'primary'` - Featured content (main cards, hero sections)
- `'secondary'` - Supporting context (sidebars, metadata)
- `'imperative'` - Urgent/critical (alerts, warnings)
- `'latent'` - Backgrounded/inactive (archived, disabled)
- `'aggregate'` - Container of multiple entities
- `'ancestral'` - Historical/archived data

**Example:**
```scss
.mind-part-card {
  @include genesis-entity('primary');           // Featured card
}

.alert-danger {
  @include genesis-entity('imperative');        // Urgent alert
}
```

### 3. `genesis-cognition($intent)` - Information Type

Maps text elements to their informational role:

- `'axiom'` - Headlines and foundational statements (h1, display text)
- `'discourse'` - Body text and prose (p, article text)
- `'protocol'` - Technical/code content (code, pre, technical lists)
- `'gloss'` - Small annotations (captions, metadata, footnotes)
- `'motive'` - Persuasive/instructional (subheadings, CTAs)
- `'quantum'` - Tiny fragments (tags, chips, badges)

**Example:**
```scss
h1 {
  @include genesis-cognition('axiom');          // Large headline
}

.article-body {
  @include genesis-cognition('discourse');      // Reading text
}

.metadata {
  @include genesis-cognition('gloss');          // Small details
}
```

### 4. `genesis-synapse($vector)` - Interaction Type

Maps interactive elements to their action:

- `'navigate'` - Links to different pages (a, nav links)
- `'execute'` - Primary actions (submit buttons, main CTAs)
- `'inquiry'` - Secondary actions (search, expand, filter)
- `'destructive'` - Dangerous actions (delete, reset)
- `'social'` - Social sharing (share buttons, social links)

**Example:**
```scss
.read-more-link {
  @include genesis-synapse('navigate');         // Page navigation
}

.submit-button {
  @include genesis-synapse('execute');          // Primary action
}

.delete-button {
  @include genesis-synapse('destructive');      // Dangerous action
}
```

### 5. `genesis-state($condition)` - Temporal State

Maps elements to their temporal condition:

- `'stable'` - Normal equilibrium state
- `'evolving'` - Updating/streaming content
- `'deprecated'` - No longer current/verified
- `'locked'` - Restricted access required
- `'simulated'` - Preview/projection data

**Example:**
```scss
.live-data {
  @include genesis-state('evolving');           // Real-time updates
}

.archived-content {
  @include genesis-state('deprecated');         // Old content
}
```

### 6. `genesis-atmosphere($vibe)` - Sensory Texture

Maps sections to their emotional tone:

- `'neutral'` - Standard system transparency
- `'ethereal'` - Light, peaceful, minimal
- `'void'` - Dark, immersive, focused
- `'vibrant'` - Energetic, data-rich, colorful

**Example:**
```scss
.meditation-section {
  @include genesis-atmosphere('ethereal');      // Light and peaceful
}

.dashboard {
  @include genesis-atmosphere('vibrant');       // Energetic and data-rich
}
```

## File Structure

```
assets/
└── css/
    └── main.scss        # ONLY SCSS file - imports ontology and maps classes

_sass/
└── (removed)            # No local partials - theme provides everything
```

## SCSS Template

Every SCSS file should follow this structure:

```scss
---
---

/**
 * [Subdomain Name] - Genesis Ontological SCSS
 * 
 * Structure mirrors HTML DOM hierarchy
 * All styling via ontological mixins - no raw CSS
 */

@import "ontology/index";

/**
 * Section Name - Semantic description
 * Environment: [which layout logic]
 * Entity: [which visual weight]
 * Atmosphere: [which sensory vibe]
 */
.semantic-class-name {
  @include genesis-environment('distributed');
  @include genesis-entity('primary');
  
  .nested-element {
    @include genesis-cognition('axiom');
  }
  
  .action-link {
    @include genesis-synapse('navigate');
  }
}
```

## Migration Workflow

When converting legacy CSS to ontological system:

### Step 1: Analyze HTML Structure

```html
<section class="research-paper">
  <header class="paper-header">
    <h1 class="paper-title">Title</h1>
    <time class="paper-date">Date</time>
  </header>
  <div class="paper-content">
    <p>Content...</p>
  </div>
</section>
```

### Step 2: Classify Each Element

- `.research-paper` → Container → `genesis-environment('focused')`
- `.paper-header` → Content block → `genesis-entity('primary')`
- `.paper-title` → Headline → `genesis-cognition('axiom')`
- `.paper-date` → Metadata → `genesis-cognition('gloss')`
- `.paper-content` → Body text → `genesis-cognition('discourse')`

### Step 3: Create Mirrored SCSS

```scss
.research-paper {
  @include genesis-environment('focused');
  @include genesis-atmosphere('ethereal');
  
  .paper-header {
    @include genesis-entity('primary');
    
    .paper-title {
      @include genesis-cognition('axiom');
    }
    
    .paper-date {
      @include genesis-cognition('gloss');
    }
  }
  
  .paper-content {
    @include genesis-cognition('discourse');
  }
}
```

### Step 4: Verify

- [ ] Only `@import "ontology/index";` at top
- [ ] Zero raw CSS properties
- [ ] No pixel/rem/color values
- [ ] SCSS structure mirrors HTML
- [ ] Comments explain intent
- [ ] Visual appearance maintained

## Common Patterns

### Homepage Hero Section

```scss
.hero-section {
  @include genesis-environment('focused');
  @include genesis-entity('primary');
  @include genesis-atmosphere('ethereal');
  
  h1 {
    @include genesis-cognition('axiom');
  }
  
  .lead {
    @include genesis-cognition('discourse');
  }
  
  .cta-button {
    @include genesis-synapse('execute');
  }
}
```

### Card Grid

```scss
.card-grid {
  @include genesis-environment('distributed');
  
  .card {
    @include genesis-entity('primary');
    
    .card-title {
      @include genesis-cognition('axiom');
    }
    
    .card-text {
      @include genesis-cognition('discourse');
    }
    
    .card-link {
      @include genesis-synapse('navigate');
    }
  }
}
```

### Article Page

```scss
.article-page {
  @include genesis-environment('focused');
  
  .article-header {
    @include genesis-entity('primary');
    
    h1 {
      @include genesis-cognition('axiom');
    }
    
    .metadata {
      @include genesis-cognition('gloss');
    }
  }
  
  .article-content {
    @include genesis-cognition('discourse');
    
    h2 {
      @include genesis-cognition('motive');
    }
    
    code {
      @include genesis-cognition('protocol');
    }
  }
}
```

### Alert/Notification

```scss
.alert {
  @include genesis-entity('secondary');
  
  &.alert-warning {
    @include genesis-entity('imperative');
  }
  
  a {
    @include genesis-synapse('navigate');
  }
}
```

## Combining Mixins

You can apply multiple mixins to the same element for rich semantic meaning:

```scss
.live-alert {
  @include genesis-entity('imperative');      // Urgent visual
  @include genesis-state('evolving');         // Currently updating
  @include genesis-atmosphere('vibrant');     // High-energy vibe
  
  .alert-message {
    @include genesis-cognition('discourse');  // Body text
  }
  
  .dismiss-button {
    @include genesis-synapse('destructive');  // Dangerous action
  }
}
```

## Evolution Process

### When You Need Something New

**Question 1:** Can I achieve this by combining existing mixins?
- YES → Use combination
- NO → Continue to Question 2

**Question 2:** Is this about WHAT the content is (semantic) or HOW it looks (visual)?
- HOW → Use existing mixins (visual is theme's concern)
- WHAT → Continue to Question 3

**Question 3:** Is this pattern universally useful across multiple pages/subdomains?
- NO → Use existing mixins creatively
- YES → Create Ontological Proposition

### Creating an Ontological Proposition

If you identify a genuine semantic gap:

1. Review existing 31 variants in theme's INTEGRATION-GUIDE.md
2. Try all possible combinations of existing mixins
3. If truly novel, create proposition using template in theme repo
4. Submit PR to `ASISaga/theme.asisaga.com` with label `ontological-proposition`
5. Wait for Theme Genome Agent review
6. Once approved, pull theme updates and use new variant

**See:** `.github/prompts/subdomain-evolution-agent.prompt.md` for detailed workflow

## Troubleshooting

### "My styles aren't applying"

✅ **Check:**
1. Did you import `@import "ontology/index";`?
2. Do your class names match HTML exactly?
3. Is the theme repository up to date?
4. Are you using correct mixin syntax?
5. Run `npm run lint:scss` to check for syntax errors

### "I need exact spacing/colors"

❌ **Don't:** Add raw CSS properties

✅ **Do:** 
1. Use existing entity/environment variants
2. Try different atmosphere variants
3. Consider if this is truly a semantic gap
4. Propose new variant if universally needed

### "The layout doesn't match my design"

❌ **Don't:** Override with raw CSS

✅ **Do:**
1. Choose correct environment variant
2. Try combining environment + atmosphere
3. Verify HTML structure is semantic
4. Consider if design should adapt to system

## Best Practices

1. **Semantic First** - Think "what IS this?" not "how should this look?"
2. **Comment Intent** - Explain why you chose each mixin
3. **Mirror Structure** - SCSS nesting matches HTML exactly
4. **Combine Creatively** - Multiple mixins create rich meaning
5. **Trust the System** - Theme controls all visual aspects
6. **Propose Thoughtfully** - Only suggest new variants for genuine gaps
7. **Stay Updated** - Pull theme updates regularly
8. **Document Usage** - Help future developers understand choices

## Resources

### Linting & Validation

- **Stylelint**: Run `npm run lint:scss` to validate SCSS files
- **Stylelint Documentation**: https://stylelint.io/

### Theme Documentation

- **[Ontology Integration Guide](https://github.com/ASISaga/theme.asisaga.com/blob/main/_sass/ontology/INTEGRATION-GUIDE.md)** - Complete API reference
- **[Ontology Architecture](https://github.com/ASISaga/theme.asisaga.com/blob/main/_sass/ontology/Readme.md)** - System overview
- **[GENOME.md](https://github.com/ASISaga/theme.asisaga.com/blob/main/GENOME.md)** - Variant history
- **[Agent Workflows](https://github.com/ASISaga/theme.asisaga.com/blob/main/.github/AGENT-WORKFLOWS.md)** - Complete processes

### Agent Prompts

- **Subdomain Evolution Agent** - `.github/prompts/subdomain-evolution-agent.prompt.md`
- **SCSS Refactor Agent** - `.github/prompts/scss-refactor-agent.prompt.md`

### Visual Examples

- **[Ontology Demo](https://github.com/ASISaga/theme.asisaga.com/blob/main/docs/ontology-demo.html)** - Live examples
- **[Semantic Quick Reference](https://github.com/ASISaga/theme.asisaga.com/blob/main/docs/SEMANTIC-QUICK-REFERENCE.md)** - Fast lookup

## Quality Checklist

Before committing SCSS:

- [ ] Only `@import "ontology/index";` import
- [ ] Zero raw CSS properties
- [ ] No px/rem/em values
- [ ] No color values
- [ ] SCSS mirrors HTML structure
- [ ] Comments explain semantic choices
- [ ] All classes mapped to mixins
- [ ] Visual appearance verified
- [ ] Accessibility maintained (WCAG AA)
- [ ] **Run `npm run lint:scss` and fix any errors**

## Success Metrics

You're succeeding if:

1. ✅ SCSS reads like semantic documentation
2. ✅ No raw CSS anywhere
3. ✅ HTML structure is clean and semantic
4. ✅ Visual appearance matches intent
5. ✅ Code is maintainable and understandable
6. ✅ System-wide theme updates work seamlessly

---

**Status**: ✅ Ontological System Active  
**Theme**: ASISaga/theme.asisaga.com  
**System**: Genesis Semantic SCSS Engine  
**Paradigm**: Semantic purity, visual delegation, evolutionary growth
