/* ========================================================
   CultureArc — Story Engine (Rotating Frame System)
   Pinned scroll-driven chapter transitions
   ======================================================== */

(function () {
    'use strict';

    const chapters = [
        {
            title: "The Problem.",
            desc: "Hiring at scale is broken. Slow cycles, poor cultural fit, and high attrition plague modern enterprises relying on outdated agency models.",
            accent: "var(--color-secondary)"
        },
        {
            title: "The Shift.",
            desc: "We replace chaos with architecture. Mapping global talent through AI, standardizing competencies, and creating a ready-to-deploy ecosystem.",
            accent: "var(--color-gold)"
        },
        {
            title: "The System.",
            desc: "A rigorously engineered 7-tier verification pipeline generating fully vetted, culture-aligned profiles ready for deployment in 0-24 hours.",
            accent: "var(--color-primary)"
        },
        {
            title: "The Outcome.",
            desc: "Stable, high-performance engineering teams with 98.5% long-term retention. Maximum ROI. Zero operational friction.",
            accent: "var(--color-gold)"
        }
    ];

    function initStoryEngine() {
        const track = document.getElementById('story-track');
        if (!track) return;

        const titleEl = document.getElementById('story-title');
        const descEl = document.getElementById('story-desc');
        const chapterNumEl = document.getElementById('story-chapter-num');
        const progressBars = document.querySelectorAll('.story-progress-bar');
        const graphicLayers = document.querySelectorAll('.story-graphic');
        const accentLine = document.getElementById('story-accent');

        let activeChapter = -1;

        function updateChapter(index) {
            if (index === activeChapter || index < 0 || index >= chapters.length) return;
            activeChapter = index;

            const chapter = chapters[index];

            // Animate text out
            if (titleEl && descEl) {
                titleEl.style.opacity = '0';
                titleEl.style.transform = 'translateY(15px)';
                descEl.style.opacity = '0';
                descEl.style.transform = 'translateY(15px)';

                setTimeout(() => {
                    titleEl.textContent = chapter.title;
                    descEl.textContent = chapter.desc;
                    if (chapterNumEl) chapterNumEl.textContent = `0${index + 1}`;
                    if (accentLine) accentLine.style.background = chapter.accent;

                    titleEl.style.opacity = '1';
                    titleEl.style.transform = 'translateY(0)';
                    descEl.style.opacity = '1';
                    descEl.style.transform = 'translateY(0)';
                }, 300);
            }

            // Switch graphics
            graphicLayers.forEach((el, i) => {
                if (i === index) {
                    el.classList.add('active');
                    el.style.transform = 'scale(1)';
                    el.style.opacity = '1';
                } else {
                    el.classList.remove('active');
                    el.style.transform = 'scale(0.9)';
                    el.style.opacity = '0';
                }
            });
        }

        function onScroll() {
            const rect = track.getBoundingClientRect();
            const trackHeight = rect.height - window.innerHeight;
            const scrolled = -rect.top;

            if (scrolled < 0 || scrolled > trackHeight) return;

            const progress = Math.max(0, Math.min(1, scrolled / trackHeight));
            const chapterIndex = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));

            // Update progress bars
            progressBars.forEach((bar, i) => {
                const fill = bar.querySelector('.story-progress-fill');
                if (!fill) return;
                if (i < chapterIndex) {
                    fill.style.width = '100%';
                } else if (i === chapterIndex) {
                    const chapterProgress = (progress - (i / chapters.length)) * chapters.length;
                    fill.style.width = `${Math.min(100, chapterProgress * 100)}%`;
                } else {
                    fill.style.width = '0%';
                }
            });

            updateChapter(chapterIndex);
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        // Initialize first chapter
        updateChapter(0);
    }

    document.addEventListener('DOMContentLoaded', initStoryEngine);
})();
