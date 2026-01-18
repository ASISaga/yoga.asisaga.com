'use strict';

// Bootstrap navbar toggle functionality (vanilla JS replacement)
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', function() {
      const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
      navbarToggler.setAttribute('aria-expanded', !isExpanded);
      navbarCollapse.classList.toggle('show');
    });
    
    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navbarToggler.contains(event.target) || navbarCollapse.contains(event.target);
      if (!isClickInside && navbarCollapse.classList.contains('show')) {
        navbarToggler.setAttribute('aria-expanded', 'false');
        navbarCollapse.classList.remove('show');
      }
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Reading progress indicator (optional - uncomment to enable)
/*
function updateReadingProgress() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  
  let progressBar = document.querySelector('.reading-progress');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.prepend(progressBar);
  }
  progressBar.style.width = scrollPercentage + '%';
}

// Throttle function for performance
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

window.addEventListener('scroll', throttle(updateReadingProgress, 100));
updateReadingProgress();
*/

// Log page load for debugging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  console.log('Yoga ASISaga website loaded successfully');
}
