# JavaScript Development Instructions

## Overview

This project follows a **progressive enhancement** approach. The core content and functionality must be accessible without JavaScript. JavaScript enhances the experience but is not required.

## JavaScript Philosophy

### 1. Progressive Enhancement
- Core content works without JS
- JavaScript adds interactivity and polish
- Graceful degradation for older browsers
- No critical features depend on JS

### 2. Minimal Footprint
- Use vanilla JavaScript when possible
- Leverage theme's existing libraries (if any)
- Avoid adding heavy frameworks
- Keep bundle size minimal

## JavaScript Guidelines

### 1. File Organization

```
assets/
└── js/
    ├── main.js           # Primary script
    ├── components/       # Reusable components
    │   ├── navigation.js
    │   └── smooth-scroll.js
    └── vendor/           # Third-party scripts (if needed)
```

### 2. Code Style

#### Modern JavaScript (ES6+)
```javascript
// Use const/let, not var
const element = document.querySelector('.selector');
let counter = 0;

// Arrow functions
const handleClick = (event) => {
  event.preventDefault();
  // Handle click
};

// Template literals
const message = `Hello, ${name}!`;

// Destructuring
const { title, description } = page;
```

#### Strict Mode
```javascript
'use strict';

// Your code here
```

### 3. DOM Manipulation

#### Query Selectors
```javascript
// Single element
const element = document.querySelector('.class');
const byId = document.getElementById('id');

// Multiple elements
const elements = document.querySelectorAll('.class');
const byTag = document.getElementsByTagName('div');
```

#### Event Listeners
```javascript
// Add listener
element.addEventListener('click', handleClick);

// Remove listener
element.removeEventListener('click', handleClick);

// Event delegation
document.addEventListener('click', (event) => {
  if (event.target.matches('.button-class')) {
    // Handle click on .button-class
  }
});
```

#### DOM Modifications
```javascript
// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('expanded');

// Attributes
element.setAttribute('aria-expanded', 'true');
element.getAttribute('data-id');

// Content
element.textContent = 'New text';
element.innerHTML = '<strong>HTML</strong>';
```

### 4. Common Patterns

#### Smooth Scrolling
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

#### Lazy Loading Images
```javascript
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img.lazy').forEach(img => {
    imageObserver.observe(img);
  });
}
```

#### Toggle Functionality
```javascript
const toggleButton = document.querySelector('[data-toggle]');
const toggleTarget = document.querySelector('[data-toggle-target]');

if (toggleButton && toggleTarget) {
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    toggleTarget.classList.toggle('hidden');
  });
}
```

### 5. Accessibility Considerations

#### ARIA States
```javascript
// Toggle ARIA attributes
function toggleMenu(button, menu) {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  menu.setAttribute('aria-hidden', isExpanded);
}
```

#### Keyboard Navigation
```javascript
element.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleActivation();
  }
  if (event.key === 'Escape') {
    handleClose();
  }
});
```

#### Focus Management
```javascript
// Trap focus in modal
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}
```

### 6. Performance Optimization

#### Debouncing
```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const handleResize = debounce(() => {
  console.log('Window resized');
}, 250);

window.addEventListener('resize', handleResize);
```

#### Throttling
```javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
const handleScroll = throttle(() => {
  console.log('Scrolled');
}, 100);

window.addEventListener('scroll', handleScroll);
```

#### Request Animation Frame
```javascript
let ticking = false;

function updateLayout() {
  // Update layout
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateLayout);
    ticking = true;
  }
});
```

### 7. Error Handling

```javascript
try {
  // Potentially failing code
  const data = JSON.parse(response);
} catch (error) {
  console.error('Error parsing JSON:', error);
  // Fallback behavior
}

// Async error handling
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}
```

### 8. Module Pattern

```javascript
const MyModule = (function() {
  // Private variables
  let privateVar = 'private';
  
  // Private methods
  function privateMethod() {
    console.log(privateVar);
  }
  
  // Public API
  return {
    publicMethod: function() {
      privateMethod();
    },
    publicVar: 'public'
  };
})();

// Usage
MyModule.publicMethod();
```

## Project-Specific Features

### 1. Mind Parts Visualization (Optional Enhancement)

```javascript
// Smooth scroll to mind parts
document.querySelectorAll('.mind-part-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Update active state
      document.querySelectorAll('.mind-part-link').forEach(l => 
        l.classList.remove('active')
      );
      link.classList.add('active');
    }
  });
});
```

### 2. Reading Progress Indicator

```javascript
function updateReadingProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    progressBar.style.width = scrollPercentage + '%';
  }
}

window.addEventListener('scroll', throttle(updateReadingProgress, 100));
```

### 3. Interactive Mind Diagram (Future)

```javascript
// Placeholder for interactive visualization
class MindPartsDiagram {
  constructor(container) {
    this.container = container;
    this.parts = ['buddhi', 'manas', 'ahankara', 'chitta'];
  }
  
  render() {
    // Visualization logic
  }
  
  highlightPart(partName) {
    // Highlight specific mind part
  }
}
```

## Testing

### 1. Browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Test with JavaScript disabled
- Test on mobile devices
- Test with assistive technologies

### 2. Console Checks
```javascript
// Development mode logging
if (window.location.hostname === 'localhost') {
  console.log('Development mode');
}

// Feature detection
if ('IntersectionObserver' in window) {
  console.log('IntersectionObserver supported');
} else {
  console.log('IntersectionObserver not supported, using fallback');
}
```

## Best Practices

1. **Feature Detection**: Check for browser support before using features
2. **Graceful Degradation**: Provide fallbacks for unsupported features
3. **Event Delegation**: Use for dynamic content
4. **Memory Management**: Remove event listeners when not needed
5. **Avoid Global Scope**: Use modules or IIFEs
6. **Comments**: Document complex logic
7. **Naming**: Use descriptive variable and function names
8. **DRY**: Don't repeat yourself
9. **Separation of Concerns**: Keep JS separate from HTML and CSS
10. **Performance**: Minimize reflows and repaints

## Loading Strategy

### Script Placement
```html
<!-- Defer non-critical scripts -->
<script defer src="{{ '/assets/js/main.js' | relative_url }}"></script>

<!-- Async for independent scripts -->
<script async src="{{ '/assets/js/analytics.js' | relative_url }}"></script>
```

### Conditional Loading
```javascript
// Load additional scripts only when needed
if (document.querySelector('.interactive-diagram')) {
  const script = document.createElement('script');
  script.src = '/assets/js/diagram.js';
  script.defer = true;
  document.head.appendChild(script);
}
```

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [You Don't Need jQuery](https://github.com/nefe/You-Dont-Need-jQuery)
- [Web.dev Performance](https://web.dev/performance/)
