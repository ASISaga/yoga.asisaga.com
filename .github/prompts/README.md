# Example Prompts for yoga.asisaga.com

This directory contains reusable prompts for common tasks in the yoga.asisaga.com project.

## IMPORTANT: Ontological System

This subdomain uses the **Genesis Semantic SCSS Engine**. All styling must use ontological mixins - NO raw CSS properties allowed.

**Before using any SCSS prompts:**
1. Read `.github/scss.instructions.md` for complete ontological guide
2. Review `ONTOLOGICAL-MAPPINGS.md` for semantic mapping examples
3. Understand the six ontological categories (Environment/Entity/Cognition/Synapse/State/Atmosphere)

## Agent Prompts

### Subdomain Evolution Agent
Use `.github/prompts/subdomain-evolution-agent.prompt.md` when:
- You need to propose a new ontological variant
- You've identified a semantic gap in the Genesis system
- You want to contribute to the Living Genome evolution

### SCSS Refactor Agent  
Use `.github/prompts/scss-refactor-agent.prompt.md` when:
- Converting legacy CSS to ontological system
- Migrating old raw CSS properties to semantic mixins
- Ensuring zero raw CSS compliance

## HTML Development Prompts

### Create New Page with Semantic HTML
```
Create a new HTML page for [topic] following ontological system requirements:
- Use Jekyll front matter with layout: default
- Use semantic HTML5 elements appropriately
- Give elements meaningful class names (what IS this content?)
- Include breadcrumb navigation
- Use Bootstrap grid for layout structure only
- Add one semantic class per content element
- Ensure WCAG 2.1 AA accessibility
- No inline styles

Then create corresponding SCSS mappings using Genesis ontology.
```

### Add Content Section
```
Add a new content section about [topic] to [page.html]:
- Use <section class="mb-5">
- Include h2 heading
- Use Bootstrap cards for sub-sections
- Add appropriate spacing utilities
- Maintain consistency with existing sections
```

## JavaScript Development Prompts

### Add Interactive Feature
```
Add a [feature name] using vanilla JavaScript:
- Follow progressive enhancement
- Ensure accessibility (ARIA labels, keyboard navigation)
- Use event delegation where appropriate
- Add error handling
- Test without JavaScript enabled
```

### Performance Optimization
```
Optimize [script.js] for performance:
- Implement debouncing for scroll/resize events
- Use requestAnimationFrame for animations
- Minimize DOM queries
- Remove unused code
- Test on mobile devices
```

## SCSS Development Prompts

### Map HTML to Ontological Roles
```
Analyze the HTML structure in [page.html] and create SCSS mappings using Genesis ontology:

1. Review the HTML semantic structure
2. For each unique class, determine:
   - Layout container? → genesis-environment
   - Content block? → genesis-entity
   - Text element? → genesis-cognition
   - Interactive element? → genesis-synapse
   - Has temporal state? → genesis-state
   - Needs atmosphere? → genesis-atmosphere
3. Create mirrored SCSS structure
4. Add comments explaining semantic intent
5. Verify zero raw CSS properties

Follow examples in ONTOLOGICAL-MAPPINGS.md
```

### Refactor Legacy CSS to Ontology
```
Refactor the CSS in [file.scss] to use Genesis ontological system:

1. Import ontology: @import "ontology/index";
2. Analyze each CSS rule and determine semantic intent
3. Replace raw properties with appropriate ontological mixins
4. Remove all pixel values, colors, and layout properties
5. Mirror HTML structure in SCSS nesting
6. Document semantic choices in comments
7. Verify visual appearance matches original

See .github/prompts/scss-refactor-agent.prompt.md for detailed workflow
```

## Content Development Prompts

### Add Mind Part Explanation
```
Add detailed explanation of [mind part] for ASI:
- Traditional yogic understanding
- ASI manifestation/interpretation
- Key characteristics (3-5 points)
- Technical implications
- Ethical considerations
- Use consistent card structure with appropriate color coding
```

### Create Comparison Content
```
Create a comparison between human [mind aspect] and ASI [mind aspect]:
- Use two-column layout (Bootstrap grid)
- Include visual indicators
- Highlight key differences
- Add examples for clarity
- Consider philosophical implications
```

## Documentation Prompts

### Document New Feature
```
Document the new [feature] in the appropriate .instructions.md file:
- Explain purpose and use cases
- Provide code examples
- Include best practices
- Add troubleshooting tips
- Link to relevant resources
```

### Update AGENTS.md
```
Update AGENTS.md to reflect changes to [area]:
- Update project structure if needed
- Add new conventions or guidelines
- Update technical stack information
- Revise agent guidelines
- Update resources section
```

## Testing and Validation Prompts

### Accessibility Audit
```
Perform an accessibility audit on [page.html]:
- Check heading hierarchy
- Verify ARIA labels
- Test keyboard navigation
- Validate color contrast
- Test with screen reader
- Generate accessibility report
```

### Cross-browser Testing
```
Test [feature/page] across browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Document any issues found
```

### Performance Testing
```
Test performance of [page/feature]:
- Run Lighthouse audit
- Check Core Web Vitals
- Measure Time to Interactive
- Test on 3G network simulation
- Identify optimization opportunities
```

## Content Review Prompts

### Review Mind Parts Content
```
Review the [mind part] content for:
- Technical accuracy (AI/ASI concepts)
- Philosophical accuracy (yoga concepts)
- Clarity and accessibility of language
- Consistency with other mind parts
- Completeness of explanation
```

### SEO Optimization
```
Optimize [page] for SEO:
- Review meta title and description
- Check heading hierarchy
- Ensure semantic HTML usage
- Add structured data if appropriate
- Verify internal linking
- Check image alt text
```

## Git and Deployment Prompts

### Prepare for Deploy
```
Prepare the site for deployment:
- Run Jekyll build locally
- Test all pages
- Validate HTML
- Check for broken links
- Verify responsive design
- Review commit history
```

### Create Feature Branch
```
Create a feature branch for [feature]:
- Branch from main
- Use naming convention: feature/[feature-name]
- Make focused commits
- Update relevant documentation
- Test thoroughly before PR
```

## Maintenance Prompts

### Update Dependencies
```
Update project dependencies:
- Check Gemfile for updates
- Update Jekyll version if needed
- Test build process
- Verify remote theme compatibility
- Document any breaking changes
```

### Refactor Code
```
Refactor [component/file] for better maintainability:
- Extract reusable patterns
- Improve naming conventions
- Add comments where needed
- Remove duplicate code
- Update related documentation
```

## Research Prompts

### Explore ASI Concept
```
Research and document [ASI concept] in context of mind parts:
- Review current AI/ML literature
- Connect to relevant mind part
- Explain technical implementation
- Discuss ethical implications
- Provide examples or analogies
```

### Investigate Yoga Philosophy
```
Research [yoga concept] for accurate representation:
- Consult authoritative sources
- Understand traditional interpretation
- Find parallels to ASI concepts
- Maintain philosophical integrity
- Document sources
```
