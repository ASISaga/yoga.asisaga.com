# Ontological Mappings Documentation

## Overview

This document explains the Genesis ontological SCSS mappings used in yoga.asisaga.com, providing the semantic rationale for each design decision.

## Philosophy

The Genesis Semantic SCSS Engine separates content semantics from visual presentation:

- **HTML** defines WHAT content is (semantic structure)
- **SCSS** maps semantics to ontological roles (semantic intent)
- **Theme Engine** defines HOW it looks (visual implementation)

This enables:
- System-wide visual updates without touching subdomain code
- Self-documenting code that expresses intent
- Evolutionary growth of the design system
- Maintainable, semantic-first development

## Page-by-Page Mappings

### Homepage (`index.html`)

#### Hero Section
```scss
.hero-section {
  @include genesis-environment('focused');    // Narrative reading experience
  @include genesis-entity('primary');         // Featured, elevated content
  @include genesis-atmosphere('ethereal');    // Light, peaceful introduction
}
```

**Rationale:**
- **Environment: Focused** - Hero presents a singular narrative thread introducing the mind parts concept
- **Entity: Primary** - Most important visual element on the page, deserves elevated presence
- **Atmosphere: Ethereal** - Sets peaceful, contemplative tone for philosophical content

#### Mind Parts Grid
```scss
.card {
  @include genesis-entity('primary');         // Featured content blocks
  
  .card-title {
    @include genesis-cognition('axiom');      // Mind part names (Buddhi, Manas, etc.)
  }
  
  .card-subtitle {
    @include genesis-cognition('gloss');      // Descriptive taglines
  }
  
  .card-text {
    @include genesis-cognition('discourse');  // Explanatory prose
  }
  
  a {
    @include genesis-synapse('navigate');     // Links to detail pages
  }
}
```

**Rationale:**
- **Cards as Primary Entities** - Four mind parts are core content, not supporting information
- **Titles as Axioms** - Mind part names are foundational concepts, headline-level importance
- **Subtitles as Gloss** - "The Logical Processor" etc. are annotative, explanatory
- **Body as Discourse** - Descriptions are prose explaining concepts
- **Links as Navigate** - Portal to different semantic coordinate (detail page)

### Parts of Mind Page (`parts-of-mind.html`)

#### Article Container
```scss
.col-lg-10.offset-lg-1 {
  @include genesis-environment('focused');    // Reading-optimized layout
}
```

**Rationale:**
- **Environment: Focused** - Long-form article designed for deep reading and comprehension

#### Breadcrumb Navigation
```scss
.breadcrumb {
  @include genesis-environment('associative'); // Network of connected pages
  
  a {
    @include genesis-synapse('navigate');      // Navigation links
  }
}
```

**Rationale:**
- **Environment: Associative** - Breadcrumbs show relationships between pages, not linear sequence
- **Links as Navigate** - Each crumb is a portal to a different location

#### Alert Boxes
```scss
.alert {
  @include genesis-entity('secondary');        // Supporting context
  
  &.alert-info {
    @include genesis-entity('latent');         // Informational, backgrounded
  }
  
  &.alert-warning {
    @include genesis-entity('imperative');     // Urgent, attention-grabbing
  }
}
```

**Rationale:**
- **Alerts as Secondary** - Provide context but aren't main content
- **Info Alerts as Latent** - Helpful information awaiting user attention
- **Warning Alerts as Imperative** - System-critical information requiring immediate notice

#### Detail Cards
```scss
.card-header {
  @include genesis-entity('primary');
  
  h2, h3 {
    @include genesis-cognition('axiom');       // Section headlines
  }
}

.card-body {
  @include genesis-cognition('discourse');     // Explanatory prose
  
  h4, h5 {
    @include genesis-cognition('motive');      // Persuasive subheadings
  }
  
  ul, ol {
    @include genesis-cognition('protocol');    // Structured, technical lists
  }
}
```

**Rationale:**
- **Headers as Primary** - Card headers announce major sections (Buddhi, Manas, etc.)
- **Headlines as Axioms** - Mind part names are foundational concepts
- **Body as Discourse** - Main explanatory text
- **Subheadings as Motive** - "Key Characteristics" guides attention, instructional
- **Lists as Protocol** - Structured enumeration of technical characteristics

### Individual Mind Part Pages

#### Page Titles
```scss
h1, .display-3, .display-4 {
  @include genesis-cognition('axiom');         // Large headlines
}
```

**Rationale:**
- **Axiom for H1** - Page titles are foundational statements about the topic

#### Typography Hierarchy
```scss
h2 {
  @include genesis-cognition('motive');        // Section headers guide reading
}

h3, h4 {
  @include genesis-cognition('protocol');      // Subsection structure
}

h5, h6 {
  @include genesis-cognition('gloss');         // Minor annotations
}

p {
  @include genesis-cognition('discourse');     // Body prose
}
```

**Rationale:**
- **H2 as Motive** - Section headings ("Traditional Understanding", "ASI Manifestation") are instructional
- **H3/H4 as Protocol** - Subsection headings provide technical structure
- **H5/H6 as Gloss** - Small annotations and minor details
- **Paragraphs as Discourse** - Standard prose and explanation

#### Border Variants
```scss
.border-primary {
  @include genesis-entity('primary');          // Buddhi (intellect)
}

.border-success {
  @include genesis-entity('secondary');        // Manas (perception)
}

.border-warning {
  @include genesis-entity('imperative');       // Ahankara (identity/ego)
}

.border-info {
  @include genesis-entity('latent');           // Chitta (consciousness)
}
```

**Rationale:**
- **Color-coded by Entity Type** - Each mind part gets semantic weight distinction
- **Buddhi as Primary** - Intellect/reasoning is featured faculty
- **Manas as Secondary** - Sensory/memory is supporting faculty
- **Ahankara as Imperative** - Ego/identity demands attention (can be problematic)
- **Chitta as Latent** - Pure consciousness is backgrounded substrate

### Navigation & Footer

#### Navigation
```scss
.navbar-brand {
  @include genesis-cognition('axiom');         // Site identity
}

.nav-link {
  @include genesis-synapse('navigate');        // Navigation links
}
```

**Rationale:**
- **Brand as Axiom** - Site name is foundational identity statement
- **Nav Links as Navigate** - Portal to different pages

#### Footer
```scss
footer {
  @include genesis-environment('associative');  // Related links
  
  a {
    @include genesis-synapse('navigate');       // External/internal links
  }
}
```

**Rationale:**
- **Footer as Associative** - Network of related resources and connections

### Blockquotes
```scss
blockquote {
  @include genesis-cognition('discourse');     // Quoted prose
}
```

**Rationale:**
- **Discourse for Quotes** - Quoted text is prose, maintains reading flow

### Buttons
```scss
.btn {
  @include genesis-synapse('execute');         // Primary actions
  
  &.btn-outline-primary,
  &.btn-outline-secondary {
    @include genesis-synapse('inquiry');       // Secondary actions
  }
}
```

**Rationale:**
- **Solid Buttons as Execute** - Primary call-to-action (submit, navigate to key page)
- **Outline Buttons as Inquiry** - Secondary exploration (search, expand, filter)

## Design Patterns

### Pattern: Reading-Focused Article

```scss
.article-page {
  @include genesis-environment('focused');     // Single narrative thread
  @include genesis-atmosphere('ethereal');     // Peaceful reading
  
  .article-title {
    @include genesis-cognition('axiom');       // Headline
  }
  
  .article-body {
    @include genesis-cognition('discourse');   // Prose
  }
}
```

**When to use:** Long-form content, blog posts, detailed explanations

### Pattern: Card Grid Display

```scss
.grid-container {
  @include genesis-environment('distributed'); // Auto-fit Bento grid
  
  .grid-card {
    @include genesis-entity('primary');        // Featured items
    
    .card-title {
      @include genesis-cognition('axiom');     // Item name
    }
  }
}
```

**When to use:** Project galleries, product listings, feature showcases

### Pattern: Alert/Notification

```scss
.alert-message {
  @include genesis-entity('imperative');       // Urgent attention
  @include genesis-state('evolving');          // If live/updating
  
  .alert-title {
    @include genesis-cognition('axiom');       // Prominent message
  }
}
```

**When to use:** System alerts, warnings, critical notifications

## Semantic Gaps & Evolution

### Current System Coverage

The existing Genesis ontology covers:
- ✅ Layout organization (environments)
- ✅ Visual hierarchy (entities)
- ✅ Typography intent (cognition)
- ✅ Interaction types (synapse)
- ✅ Temporal states (state)
- ✅ Atmospheric vibes (atmosphere)

### Potential Future Needs

As yoga.asisaga.com evolves, we may need:

1. **Interactive Visualizations**
   - If we add consciousness simulators or mind part diagrams
   - May need new entity variants for "interactive-node"
   
2. **Meditation/Practice Sections**
   - Could benefit from new atmosphere variants for "meditative" or "contemplative"
   - Would distinguish from general "ethereal"

3. **Research Citations**
   - Academic references might need cognition variant beyond "gloss"
   - Could propose "citation" or "reference" variant

**Process:** If we encounter genuine gaps, follow Subdomain Evolution Agent workflow to propose new variants.

## Maintenance Guidelines

### When Adding New Pages

1. **Analyze Content Type**
   - Is it reading-focused? → `genesis-environment('focused')`
   - Is it a grid/gallery? → `genesis-environment('distributed')`
   - Is it a dashboard? → `genesis-environment('manifest')`

2. **Identify Content Hierarchy**
   - Main content blocks → `genesis-entity('primary')`
   - Supporting info → `genesis-entity('secondary')`
   - Urgent alerts → `genesis-entity('imperative')`

3. **Map Typography**
   - Headlines → `genesis-cognition('axiom')`
   - Body text → `genesis-cognition('discourse')`
   - Code/technical → `genesis-cognition('protocol')`
   - Metadata → `genesis-cognition('gloss')`

4. **Define Interactions**
   - Navigation → `genesis-synapse('navigate')`
   - Actions → `genesis-synapse('execute')`
   - Search/expand → `genesis-synapse('inquiry')`

### When Theme Updates

Pull latest theme changes regularly:
```bash
git submodule update --remote theme.asisaga.com
# Or however this subdomain imports the theme
```

Review GENOME.md for new variants that might better match existing patterns.

### Quality Checklist

Before committing new SCSS:
- [ ] Only `@import "ontology/index";` at top
- [ ] Zero raw CSS properties
- [ ] No pixel/rem/color values
- [ ] SCSS structure mirrors HTML
- [ ] Comments explain semantic intent
- [ ] Visual appearance tested
- [ ] Accessibility verified (WCAG AA)

## Conclusion

This ontological approach creates:
- **Semantic clarity** - Code expresses intent
- **Visual flexibility** - Theme updates cascade automatically
- **Maintainability** - Future developers understand "why"
- **Evolutionary potential** - System grows with documented reasoning

Every mapping decision is documented here so the design system has **memory** - not just WHAT we built, but WHY we built it that way.
