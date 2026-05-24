// Mobile hamburger menu
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll-triggered fade-in animations
const fadeTargets = document.querySelectorAll(
  '.teaser-card, .stat-item, .content-section, .ta-panel, .comparison-section, .product-showcase, .gift-quote'
);

fadeTargets.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i * 80) + 'ms';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeTargets.forEach(el => observer.observe(el));
