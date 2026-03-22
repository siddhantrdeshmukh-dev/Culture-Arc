/* CultureArc — Global JS */

/* CultureArc — Global JS */

// ===== MOBILE NAV TOGGLE =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== CUSTOM CURSOR =====
    function initCursor() {
        if (window.innerWidth < 1024) return; // Don't run on mobile

        let dot = document.querySelector('.cursor-dot');
        let ring = document.querySelector('.cursor-ring');

        // Create elements if they don't exist in the HTML
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

        // Track mouse movement
        document.addEventListener('pointermove', (e) => {
            cx = e.clientX;
            cy = e.clientY;
            dot.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        });

        // Smooth trailing animation for the ring
        function animateRing() {
            rx += (cx - rx) * 0.15;
            ry += (cy - ry) * 0.15;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Grow ring on interactive elements
        const interactiveSelectors = ['a', 'button', '.card', '.feature-card', '.blog-card', '.btn', 'input', 'select', 'textarea'];
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
    initCursor(); // Initialize the cursor

    // --- YOUR EXISTING CODE CONTINUES BELOW THIS LINE ---
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('nav-mobile-menu');
    // ... rest of your code ...
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            const isOpen = mobileMenu.style.display === 'block';
            mobileMenu.style.display = isOpen ? 'none' : 'block';
            toggle.innerHTML = isOpen ? '<i class="ph ph-list"></i>' : '<i class="ph ph-x"></i>';
        });
    }

    // ===== ACCORDION FAQ =====
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.accordion-item');
            const wasOpen = item.classList.contains('open');
            document.querySelectorAll('.accordion-item.open').forEach(el => el.classList.remove('open'));
            if (!wasOpen) item.classList.add('open');
        });
    });

    // ===== ANIMATE ON SCROLL =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.gs-reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
        observer.observe(el);
    });

    // ===== COUNTER ANIMATION =====
    function animateCounter(el) {
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const start = performance.now();
        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = prefix + (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

    // ===== NAV ACTIVE STATE =====
    const path = window.location.pathname;
    document.querySelectorAll('.mega-link[href]').forEach(link => {
        if (link.href && link.href.includes(path.split('/').pop())) {
            link.classList.add('active');
        }
    });

    // ===== SMOOTH HOVER CARDS =====
    document.querySelectorAll('.card, .feature-card, .blog-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
            card.style.transform = `translateY(-6px) rotateX(${-y * 0.3}deg) rotateY(${x * 0.3}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});
