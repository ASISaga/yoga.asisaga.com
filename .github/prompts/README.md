# Example Prompts for yoga.asisaga.com

This directory contains reusable prompts for common tasks in the yoga.asisaga.com project.

## HTML Development Prompts

### Create New Page
```
Create a new HTML page for [topic] following these guidelines:
- Use Jekyll front matter with layout: default
- Include breadcrumb navigation
- Use Bootstrap grid (col-lg-10 offset-lg-1)
- Add semantic HTML5 sections
- Include back navigation at the bottom
- Ensure WCAG 2.1 AA accessibility
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

### Create Component Styles
```
Create SCSS styles for [component] following these guidelines:
- Use BEM naming convention
- Define color variables for mind parts if relevant
- Include responsive breakpoints
- Add hover/focus states for interactivity
- Ensure accessibility (contrast ratios)
```

### Extend Theme Styles
```
Extend the remote theme styles to add [feature]:
- Use existing variables where possible
- Create new partials if needed
- Maintain consistency with theme design
- Test across breakpoints
- Document any custom variables
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
