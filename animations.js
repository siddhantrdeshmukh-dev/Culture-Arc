// animations.js
// Scroll-triggered animations, pinned sections, metrics, timeline

// Basic IntersectionObserver for fade/stagger
function setupIntersectionObserver() {
  const fadeElements = document.querySelectorAll('.fade-in');
  if (!fadeElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', setupIntersectionObserver);

// Metrics count-up utility
function initCountUp() {
  const metrics = document.querySelectorAll('[data-count]');
  if (!metrics.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1800;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(target * progress);
        el.textContent = value.toLocaleString('en-IN');
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  metrics.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initCountUp);

// Placeholder hooks for pinned scroll system and timeline
// (Can be extended to use scroll progress if needed)

