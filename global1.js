/* ========================================================
   CultureArc — Global JavaScript
   Navigation, Custom Cursor, Scroll Reveal, Utilities
   ======================================================== */

(function () {
    'use strict';

    // --- Custom Cursor ---
    function initCursor() {
        if (window.innerWidth < 1024) return;

        // Smart check: If they don't exist, create them
        let dot = document.querySelector('.cursor-dot');
        let ring = document.querySelector('.cursor-ring');

        if (!dot) {
            dot = document.createElement('div');
            dot.className = 'cursor-dot';
            document.body.appendChild(dot);
        }
        if (!ring) {
            ring = document.createElement('div');
            ring.className = 'cursor-ring';
            document.body.appendChild(ring);
        }

        let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
        let rx = cx, ry = cy;

        document.addEventListener('pointermove', (e) => {
            cx = e.clientX;
            cy = e.clientY;
            dot.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        });

        (function animateRing() {
            requestAnimationFrame(animateRing);
            rx += (cx - rx) * 0.15;
            ry += (cy - ry) * 0.15;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        })();

        // Grow ring on interactive elements
        const interactiveSelectors = ['a', 'button', '.tilt-card', '.btn', '.bento-card', 'input', 'select', 'textarea', '.service-home-card'];
        document.addEventListener('mouseover', (e) => {
            if (interactiveSelectors.some(s => e.target.closest(s))) {
                ring.classList.add('active');
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (interactiveSelectors.some(s => e.target.closest(s))) {
                ring.classList.remove('active');
            }
        });
    }

    // --- Navigation ---
    function initNavigation() {
        const nav = document.getElementById('main-nav');
        const toggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('nav-mobile-menu');

        // Scroll effect
        if (nav) {
            let lastScroll = 0;
            window.addEventListener('scroll', () => {
                const currentScroll = window.scrollY;
                if (currentScroll > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                lastScroll = currentScroll;
            }, { passive: true });
        }

        // Mobile toggle
        if (toggle && mobileMenu) {
            toggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                const icon = toggle.querySelector('i');
                if (icon) {
                    icon.className = mobileMenu.classList.contains('active') ? 'ph ph-x' : 'ph ph-list';
                }
            });

            // Close mobile menu on link click
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    const icon = toggle.querySelector('i');
                    if (icon) icon.className = 'ph ph-list';
                });
            });
        }

        // Set active nav link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // --- Scroll Reveal ---
    function initScrollReveal() {
        const revealClasses = ['.gs-reveal', '.gs-reveal-left', '.gs-reveal-right', '.gs-reveal-scale'];
        const elements = document.querySelectorAll(revealClasses.join(', '));

        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    // --- Animated Counters ---
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                if (el.dataset.counted) return;
                el.dataset.counted = 'true';

                const target = parseInt(el.dataset.count, 10);
                const suffix = el.dataset.suffix || '';
                const duration = 2000;
                const start = performance.now();

                function tick(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const value = Math.floor(target * eased);
                    el.textContent = value.toLocaleString('en-IN') + suffix;
                    if (progress < 1) requestAnimationFrame(tick);
                    else el.textContent = target.toLocaleString('en-IN') + suffix;
                }

                requestAnimationFrame(tick);
                observer.unobserve(el);
            });
        }, { threshold: 0.4 });

        counters.forEach(el => observer.observe(el));
    }

    // --- Tilt Cards ---
    function initTiltCards() {
        if (window.innerWidth < 1024) return;

        const cards = document.querySelectorAll('.tilt-card');
        const maxTilt = 8;

        cards.forEach(card => {
            card.addEventListener('pointermove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rx = ((y / rect.height) - 0.5) * -2 * maxTilt;
                const ry = ((x / rect.width) - 0.5) * 2 * maxTilt;
                card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('pointerleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }

    // --- Smooth scroll for anchor links ---
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // --- Page enter animation ---
    function initPageEnter() {
        // Try to animate <main> instead of <body> to protect fixed elements
        const mainEl = document.querySelector('main');
        if (mainEl) {
            mainEl.classList.add('page-enter');
        } else {
            document.body.classList.add('page-enter');
        }

        // MAGIC FIX: Remove the animation class entirely after 1 second 
        // This destroys the CSS transform trap and restores the cursor!
        setTimeout(() => {
            if (mainEl) mainEl.classList.remove('page-enter');
            document.body.classList.remove('page-enter');
        }, 1000);
    }

    // --- Init All ---
    document.addEventListener('DOMContentLoaded', () => {
        initCursor();
        initNavigation();
        initScrollReveal();
        initCounters();
        initTiltCards();
        initSmoothScroll();
        initPageEnter();
    });

    // Re-init on dynamic content
    window.CultureArc = {
        refreshReveal: initScrollReveal,
        refreshCounters: initCounters,
        refreshTilt: initTiltCards
    };

})();
