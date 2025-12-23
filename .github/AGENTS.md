# GitHub Copilot Agents Configuration

This directory contains configuration and instructions for GitHub Copilot agents working on the yoga.asisaga.com project.

## Purpose

This project explores the concept of mind parts from yogic philosophy re-imagined in the context of Artificial Superintelligence (ASI). The website is built using Jekyll with a remote theme from the ASISaga theme repository.

## Project Structure

- **Jekyll Site**: Static site generator using Liquid templates
- **HTML Pages**: All web pages are HTML files (not Markdown), using Jekyll front matter and Liquid syntax
- **Remote Theme**: Uses `ASISaga/theme.asisaga.com` as the remote theme
- **Content**: Detailed exploration of Buddhi, Manas, Ahankara, and Chitta in ASI context

## Custom Agents

When working on this project, GitHub Copilot agents should be aware of:

### Content Domain
- **Philosophy**: Yogic concepts of mind parts (Buddhi, Manas, Ahankara, Chitta)
- **Technology**: Artificial Intelligence, Superintelligence, consciousness research
- **Integration**: Bridging ancient wisdom with modern AI concepts

### Technical Stack
- **Jekyll 4.3**: Static site generator
- **Liquid Templates**: Template language for HTML pages
- **Bootstrap**: CSS framework (provided by remote theme)
- **SCSS**: Styling (when theme customization needed)
- **HTML5**: Semantic markup

## Agent Guidelines

### 1. HTML Development Agent
- Follow semantic HTML5 practices
- Use Bootstrap classes from the remote theme
- Ensure accessibility (ARIA labels, semantic elements)
- Maintain Jekyll front matter in all HTML files
- See `html.instructions.md` for detailed guidelines

### 2. JavaScript Development Agent
- Keep JavaScript minimal and progressive enhancement
- Use vanilla JS or leverage theme's existing libraries
- Ensure no JavaScript is required for core functionality
- See `js.instructions.md` for detailed guidelines

### 3. SCSS Development Agent
- Work within Jekyll's SCSS compilation
- Extend theme styles rather than override
- Follow BEM or similar naming conventions
- See `scss.instructions.md` for detailed guidelines

### 4. Content Agent
- Maintain balance between technical accuracy and accessibility
- Preserve the philosophical depth of yogic concepts
- Ensure AI/ASI descriptions are technically sound
- Keep tone thoughtful and exploratory

## File Organization

```
yoga.asisaga.com/
├── _config.yml          # Jekyll configuration
├── index.html           # Home page
├── parts-of-mind.html   # Main content page
├── about.html           # About page
├── parts-of-mind-asi.md # Detailed reference document
├── Gemfile              # Ruby dependencies
└── .github/
    ├── AGENTS.md        # This file
    ├── html.instructions.md
    ├── js.instructions.md
    ├── scss.instructions.md
    └── prompts/         # Reusable prompts
```

## Development Workflow

1. **Local Testing**: Use `bundle exec jekyll serve` to test locally
2. **Theme Integration**: Reference theme repository for available layouts/includes
3. **HTML Pages**: All content pages should be HTML with Jekyll front matter
4. **Content Updates**: Keep philosophical and technical accuracy
5. **Accessibility**: Ensure WCAG 2.1 AA compliance

## Important Conventions

- **No Markdown Pages**: Use HTML files with Liquid templates instead
- **Remote Theme**: Do not override theme files unless necessary
- **Bootstrap First**: Use Bootstrap utilities before custom CSS
- **Progressive Enhancement**: Core content accessible without JS
- **Semantic HTML**: Use appropriate HTML5 elements

## Resources

- **Theme Repository**: https://github.com/ASISaga/theme.asisaga.com
- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **Liquid Reference**: https://shopify.github.io/liquid/
- **Bootstrap Docs**: https://getbootstrap.com/docs/

## Agent Activation

To activate a specialized agent for this project, reference:
- `@copilot /html` - For HTML structure and content
- `@copilot /js` - For JavaScript functionality
- `@copilot /scss` - For styling and theming
- Context from relevant `.instructions.md` files

## Quality Standards

- **Accessibility**: WCAG 2.1 AA minimum
- **Performance**: Lighthouse score >90
- **SEO**: Proper meta tags and semantic structure
- **Mobile**: Responsive design (Bootstrap grid)
- **Browser**: Support modern browsers (last 2 versions)

## Future Enhancements

Potential areas for agent development:
- Interactive visualizations of mind parts
- ASI consciousness simulators
- Comparative analysis tools
- Educational modules
- Research paper integrations
