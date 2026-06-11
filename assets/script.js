// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // Animate hamburger
      const spans = mobileToggle.querySelectorAll('span');
      spans.forEach((span, index) => {
        span.style.transition = 'all 0.3s ease';
        if (navLinks.classList.contains('active')) {
          if (index === 0) {
            span.style.transform = 'rotate(45deg) translate(8px, 8px)';
          } else if (index === 1) {
            span.style.opacity = '0';
          } else {
            span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
          }
        } else {
          span.style.transform = 'none';
          span.style.opacity = '1';
        }
      });
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = 'none';
          span.style.opacity = '1';
        });
      }
    });
  });
});
