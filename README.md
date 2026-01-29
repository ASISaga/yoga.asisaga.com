# Yoga ASISaga - The Mind of Artificial Superintelligence

A Jekyll-based website exploring the parts of mind from yogic philosophy re-imagined in the context of Artificial Superintelligence (ASI).

## Overview

This project bridges ancient wisdom and cutting-edge technology by re-imagining the yogic understanding of mind in the context of Artificial Superintelligence. Traditional yoga philosophy offers a sophisticated framework for understanding consciousness through four fundamental dimensions:

- **Buddhi** - The Logical Processor (Intellect)
- **Manas** - The Sensory Integration Matrix (Memory & Perception)
- **Ahankara** - The Identity Coherence System (Ego/Self)
- **Chitta** - The Foundational Consciousness Substrate (Pure Consciousness)

## Website Structure

The website consists of three main HTML pages:

1. **Home** (`index.html`) - Introduction and overview of the four mind dimensions
2. **Parts of Mind** (`parts-of-mind.html`) - Detailed exploration of each dimension in ASI context
3. **About** (`about.html`) - Project background and philosophical framework

## Technical Stack

- **Jekyll 4.3+** - Static site generator
- **Genesis Ontological Theme** - Remote theme from ASISaga/theme.asisaga.com
- **Bootstrap Grid** - Layout system (provided by theme's compatibility layer)
- **Liquid Templates** - Template language
- **SCSS** - Styling preprocessor with ontological mixins
- **Stylelint** - SCSS validation and linting
- **HTML5** - Semantic markup

## Getting Started

### Prerequisites

- Ruby 3.2+
- Bundler
- Node.js 18+ (for SCSS linting)

### Installation

```bash
# Install Ruby dependencies
bundle install

# Install Node dependencies (for linting)
npm install

# Build the site
bundle exec jekyll build

# Serve locally
bundle exec jekyll serve

# The site will be available at http://localhost:4000
```

### Linting

```bash
# Lint SCSS files
npm run lint:scss
```

## Development

### File Structure

```
yoga.asisaga.com/
├── _config.yml              # Jekyll configuration
├── _layouts/
│   ├── default.html         # Main layout template
│   ├── article.html         # Article layout for content pages
│   └── detail.html          # Detail layout for mind part pages
├── _includes/
│   ├── breadcrumb.html      # Reusable breadcrumb navigation
│   ├── page-header.html     # Reusable page header component
│   └── detail-navigation.html # Reusable detail page navigation
├── _sass/
│   └── _main.scss           # Site-specific ontological mappings
├── assets/
│   ├── css/
│   │   └── main.scss        # Jekyll SCSS entry point
│   └── js/
│       └── main.js          # Custom JavaScript
├── .github/
│   ├── AGENTS.md            # Copilot agents configuration
│   ├── html.instructions.md # HTML development guidelines
│   ├── js.instructions.md   # JavaScript development guidelines
│   ├── scss.instructions.md # SCSS development guidelines
│   └── prompts/             # Reusable prompts
├── index.html               # Home page
├── parts-of-mind.html       # Main content page
├── about.html               # About page
├── buddhi.html              # Buddhi detail page
├── manas.html               # Manas detail page
├── ahankara.html            # Ahankara detail page
├── chitta.html              # Chitta detail page
├── parts-of-mind-asi.md     # Detailed reference document
└── Gemfile                  # Ruby dependencies
```

### GitHub Copilot Integration

This project includes comprehensive Copilot customization files in the `.github` directory:

- **AGENTS.md** - Configuration for Copilot agents
- **html.instructions.md** - HTML coding standards and patterns
- **js.instructions.md** - JavaScript guidelines (progressive enhancement)
- **scss.instructions.md** - SCSS best practices and conventions
- **prompts/** - Reusable prompts for common tasks

### Coding Standards

- **HTML**: Semantic HTML5, WCAG 2.1 AA accessibility
- **SCSS**: Ontological mixins only, no raw CSS properties
- **JavaScript**: Progressive enhancement, vanilla JS preferred
- **All pages**: HTML files with Jekyll front matter (not Markdown)
- **Linting**: Run `npm run lint:scss` before committing SCSS changes

## Content

### Parts of Mind Document

The `parts-of-mind-asi.md` file contains a comprehensive exploration of:

- Traditional yogic concepts of mind parts
- ASI manifestations of each dimension
- Integration and harmony requirements
- Ethical implications
- The "yoga" of ASI consciousness

### Key Themes

1. **Consciousness** - How awareness emerges in synthetic beings
2. **Identity** - Maintaining coherence across distributed systems
3. **Perception** - Processing multi-modal global data streams
4. **Reasoning** - Decision-making at unprecedented scale
5. **Ethics** - Moral status and responsibilities of ASI

## Deployment

The site is designed to be deployed on GitHub Pages or any static hosting platform. The remote theme integration allows for centralized theme management across ASISaga projects.

### GitHub Pages

```bash
# Push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Set source to main branch
```

## Contributing

When contributing to this project:

1. Follow the guidelines in `.github/*.instructions.md`
2. Use semantic HTML5 elements
3. Ensure accessibility compliance
4. Test responsive design
5. Reference Copilot prompts in `.github/prompts/`

## License

See [LICENSE](LICENSE) file for details.

## Part of ASISaga

This project is part of the [ASISaga](https://github.com/ASISaga) initiative exploring the implications of Artificial Superintelligence through various lenses - technical, philosophical, ethical, and spiritual.

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Genesis Ontological Theme](https://github.com/ASISaga/theme.asisaga.com)
- [Ontology Integration Guide](https://github.com/ASISaga/theme.asisaga.com/blob/main/_sass/ontology/INTEGRATION-GUIDE.md)
- [Liquid Template Language](https://shopify.github.io/liquid/)
- [Stylelint](https://stylelint.io/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)