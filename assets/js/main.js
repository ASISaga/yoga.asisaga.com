'use strict';

// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const navigationToggle = document.querySelector('.navigation-toggle');
  const navigationMenu = document.querySelector('.navigation-menu');
  
  if (navigationToggle && navigationMenu) {
    navigationToggle.addEventListener('click', function() {
      const isExpanded = navigationToggle.getAttribute('aria-expanded') === 'true';
      navigationToggle.setAttribute('aria-expanded', !isExpanded);
      navigationMenu.classList.toggle('active');
    });
    
    // Close navigation when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navigationToggle.contains(event.target) || navigationMenu.contains(event.target);
      if (!isClickInside && navigationMenu.classList.contains('active')) {
        navigationToggle.setAttribute('aria-expanded', 'false');
        navigationMenu.classList.remove('active');
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

// Log page load for debugging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  console.log('Yoga ASISaga website loaded successfully');
}
