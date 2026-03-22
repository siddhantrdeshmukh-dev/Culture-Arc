/* CultureArc — Shared Header & Footer Injector */
(function() {
    const ROOT = (() => {
        const depth = window.location.pathname.split('/').filter(Boolean).length;
        if (document.querySelector('[data-depth]')) {
            return document.querySelector('[data-depth]').getAttribute('data-depth');
        }
        // Detect relative depth from filename
        const path = window.location.pathname;
        if (path.includes('/services/') || path.includes('/industries/') || path.includes('/resources/') || path.includes('/support/')) {
            return '../';
        }
        return '';
    })();

    const NAV_HTML = `
    <nav class="mega-nav">
        <a href="${ROOT}index.html" class="nav-logo" style="text-decoration:none;display:flex;align-items:center;">
            <img src="${ROOT}culture  arc logo.png" alt="CultureArc Logo" style="height:44px;width:auto;object-fit:contain;">
        </a>
        <div class="mega-links">
            <div class="mega-item">
                <span class="mega-link">Solutions <i class="ph ph-caret-down"></i></span>
                <div class="mega-dropdown">
                    <div class="mega-drop-left">
                        <div>
                            <h3 class="drop-title" style="color:#C00000;">End-to-End Enterprise Solutions</h3>
                            <p style="color:#6B7280;line-height:1.6;margin-bottom:2rem;font-size:0.95rem;">Discover how CultureArc engineers talent infrastructure to scale global technology operations securely and efficiently.</p>
                        </div>
                        <a href="${ROOT}services/it-staffing.html" class="btn btn-primary" style="width:100%;justify-content:center;">View All Solutions <i class="ph ph-arrow-right"></i></a>
                    </div>
                    <div class="mega-drop-right">
                        <a href="${ROOT}services/it-staffing.html" class="drop-link"><div class="drop-icon"><i class="ph ph-users-three"></i></div><div class="drop-text"><h4>IT Staffing</h4><p>Rapid deployment of pre-vetted tech professionals.</p></div></a>
                        <a href="${ROOT}services/global-capability-center.html" class="drop-link"><div class="drop-icon"><i class="ph ph-buildings"></i></div><div class="drop-text"><h4>Global Tech Center</h4><p>Build-Operate-Transfer models for global scale.</p></div></a>
                        <a href="${ROOT}services/executive-search.html" class="drop-link"><div class="drop-icon"><i class="ph ph-briefcase"></i></div><div class="drop-text"><h4>Executive Search</h4><p>Elite leadership and C-suite talent acquisition.</p></div></a>
                        <a href="${ROOT}services/background-verification.html" class="drop-link"><div class="drop-icon"><i class="ph ph-shield-check"></i></div><div class="drop-text"><h4>Background Verification</h4><p>Comprehensive compliance and security checks.</p></div></a>
                        <a href="${ROOT}services/rpo-solutions.html" class="drop-link"><div class="drop-icon"><i class="ph ph-chart-line-up"></i></div><div class="drop-text"><h4>RPO Solutions</h4><p>End-to-end recruitment process outsourcing.</p></div></a>
                        <a href="${ROOT}services/payroll-management.html" class="drop-link"><div class="drop-icon"><i class="ph ph-files"></i></div><div class="drop-text"><h4>Payroll Management</h4><p>Seamless contractor and employee administration.</p></div></a>
                    </div>
                </div>
            </div>
            <div class="mega-item">
                <span class="mega-link">Industries <i class="ph ph-caret-down"></i></span>
                <div class="mega-dropdown" style="width:700px;">
                    <div class="mega-drop-left" style="width:40%;background:white;">
                        <h3 class="drop-title">Industry Verticals</h3>
                        <p style="color:var(--color-gray);font-size:0.9rem;">Tailored staffing architectures specialized for strict sector compliance and high velocity execution.</p>
                    </div>
                    <div class="mega-drop-right" style="width:60%;grid-template-columns:1fr 1fr;padding:2rem;">
                        <a href="${ROOT}industries/bfsi.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-bank"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">BFSI</h4></div></a>
                        <a href="${ROOT}industries/healthcare.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-heartbeat"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Healthcare</h4></div></a>
                        <a href="${ROOT}industries/ecommerce.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-shopping-cart"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">E-Commerce</h4></div></a>
                        <a href="${ROOT}industries/telecom.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-broadcast"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Telecom</h4></div></a>
                        <a href="${ROOT}industries/manufacturing.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-factory"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Manufacturing</h4></div></a>
                        <a href="${ROOT}industries/technology.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-cpu"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Technology</h4></div></a>
                    </div>
                </div>
            </div>
            <div class="mega-item">
                <span class="mega-link">Insights <i class="ph ph-caret-down"></i></span>
                <div class="mega-dropdown" style="width:450px;display:block;padding:2rem;">
                    <a href="${ROOT}resources/case-studies.html" class="drop-link"><div class="drop-icon"><i class="ph ph-book-open"></i></div><div class="drop-text"><h4>Case Studies</h4><p>Successful commercial transformation stories.</p></div></a>
                    <a href="${ROOT}resources/newsroom.html" class="drop-link"><div class="drop-icon"><i class="ph ph-newspaper"></i></div><div class="drop-text"><h4>Newsroom</h4><p>Latest corporate updates and press releases.</p></div></a>
                    <a href="${ROOT}resources/whitepapers.html" class="drop-link"><div class="drop-icon"><i class="ph ph-file-text"></i></div><div class="drop-text"><h4>Whitepapers & Research</h4><p>Deep-dive research into global talent markets.</p></div></a>
                </div>
            </div>
            <div class="mega-item">
                <span class="mega-link">Resources <i class="ph ph-caret-down"></i></span>
                <div class="mega-dropdown" style="width:450px;display:block;padding:2rem;">
                    <a href="${ROOT}resources/blog.html" class="drop-link"><div class="drop-icon"><i class="ph ph-article"></i></div><div class="drop-text"><h4>Blog</h4><p>Latest articles, industry trends, and expert opinions.</p></div></a>
                    <a href="${ROOT}resources/webinars.html" class="drop-link"><div class="drop-icon"><i class="ph ph-video-camera"></i></div><div class="drop-text"><h4>Webinars</h4><p>Live and on-demand video sessions and masterclasses.</p></div></a>
                    <a href="${ROOT}resources/ebooks.html" class="drop-link"><div class="drop-icon"><i class="ph ph-book-bookmark"></i></div><div class="drop-text"><h4>E-Books & Guides</h4><p>Comprehensive materials to elevate your talent strategy.</p></div></a>
                    <a href="${ROOT}support/faq.html" class="drop-link"><div class="drop-icon"><i class="ph ph-question"></i></div><div class="drop-text"><h4>Help Center & FAQ</h4><p>Support and answers to your most common questions.</p></div></a>
                </div>
            </div>
            <div class="mega-item">
                <a href="${ROOT}about.html" class="mega-link" style="gap:0;">Company</a>
            </div>
        </div>
        <div style="display:flex;gap:1.25rem;align-items:center;" class="nav-buttons-right">
            <a href="${ROOT}jobs.html" class="btn btn-ghost" style="padding:0.75rem 1.5rem;border-color:var(--color-border);font-weight:600;">Find a Job</a>
            <a href="${ROOT}hire.html" class="btn btn-primary" style="padding:0.75rem 1.5rem;font-weight:600;box-shadow:0 10px 20px rgba(192,0,0,0.2);">Partner With Us</a>
            <button class="nav-toggle" id="nav-toggle" style="display:none;background:transparent;border:none;font-size:1.5rem;cursor:pointer;"><i class="ph ph-list"></i></button>
        </div>
    </nav>
    <div class="nav-mobile" id="nav-mobile-menu" style="display:none;background:white;padding:1rem 5% 2rem;position:fixed;top:90px;left:0;width:100%;border-bottom:1px solid var(--color-border);box-shadow:0 20px 40px rgba(0,0,0,0.1);max-height:calc(100vh - 90px);overflow-y:auto;z-index:999;">
        <style>.nav-mobile details summary::-webkit-details-marker{display:none}.nav-mobile details summary{list-style:none}.nav-mobile a{transition:color .2s}.nav-mobile a:hover{color:var(--color-primary)!important}</style>
        <a href="${ROOT}index.html" style="display:block;padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);text-decoration:none;border-bottom:1px solid rgba(0,0,0,.05);">Home</a>
        <details style="border-bottom:1px solid rgba(0,0,0,.05);"><summary style="padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);cursor:pointer;display:flex;justify-content:space-between;align-items:center;">Solutions <i class="ph ph-caret-down"></i></summary><div style="padding:0 0 1.25rem 1rem;display:flex;flex-direction:column;gap:1rem;"><a href="${ROOT}services/it-staffing.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">IT Staffing</a><a href="${ROOT}services/executive-search.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Executive Search</a><a href="${ROOT}services/rpo-solutions.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">RPO Solutions</a><a href="${ROOT}services/global-capability-center.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Global Tech Center</a><a href="${ROOT}services/background-verification.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Background Verification</a><a href="${ROOT}services/payroll-management.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Payroll Management</a></div></details>
        <details style="border-bottom:1px solid rgba(0,0,0,.05);"><summary style="padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);cursor:pointer;display:flex;justify-content:space-between;align-items:center;">Industries <i class="ph ph-caret-down"></i></summary><div style="padding:0 0 1.25rem 1rem;display:flex;flex-direction:column;gap:1rem;"><a href="${ROOT}industries/bfsi.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">BFSI</a><a href="${ROOT}industries/healthcare.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Healthcare</a><a href="${ROOT}industries/ecommerce.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">E-Commerce</a><a href="${ROOT}industries/telecom.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Telecom</a><a href="${ROOT}industries/manufacturing.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Manufacturing</a><a href="${ROOT}industries/technology.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Technology</a></div></details>
        <details style="border-bottom:1px solid rgba(0,0,0,.05);"><summary style="padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);cursor:pointer;display:flex;justify-content:space-between;align-items:center;">Insights <i class="ph ph-caret-down"></i></summary><div style="padding:0 0 1.25rem 1rem;display:flex;flex-direction:column;gap:1rem;"><a href="${ROOT}resources/case-studies.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Case Studies</a><a href="${ROOT}resources/newsroom.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Newsroom</a><a href="${ROOT}resources/whitepapers.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Whitepapers</a></div></details>
        <details style="border-bottom:1px solid rgba(0,0,0,.05);"><summary style="padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);cursor:pointer;display:flex;justify-content:space-between;align-items:center;">Resources <i class="ph ph-caret-down"></i></summary><div style="padding:0 0 1.25rem 1rem;display:flex;flex-direction:column;gap:1rem;"><a href="${ROOT}resources/blog.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Blog</a><a href="${ROOT}resources/webinars.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Webinars</a><a href="${ROOT}resources/ebooks.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">E-Books</a><a href="${ROOT}support/faq.html" style="color:var(--color-gray);text-decoration:none;font-size:1rem;">Help Center & FAQ</a></div></details>
        <a href="${ROOT}about.html" style="display:block;padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);text-decoration:none;border-bottom:1px solid rgba(0,0,0,.05);">Company</a>
        <div style="display:flex;flex-direction:column;gap:1rem;margin-top:2rem;"><a href="${ROOT}jobs.html" class="btn btn-ghost" style="justify-content:center;border:1px solid var(--color-border);padding:1rem;border-radius:8px;text-decoration:none;font-weight:600;color:var(--color-dark);">Find a Job</a><a href="${ROOT}hire.html" class="btn btn-primary" style="justify-content:center;padding:1rem;border-radius:8px;text-decoration:none;font-weight:600;box-shadow:0 10px 20px rgba(192,0,0,0.2);">Partner With Us</a></div>
    </div>`;

    const FOOTER_HTML = `
    <footer class="footer">
        <div class="footer-top-bar"></div>
        <i class="ph ph-globe" style="position:absolute;top:-10%;right:-5%;font-size:50rem;color:rgba(255,255,255,0.02);z-index:0;pointer-events:none;"></i>
        <div class="container" style="max-width:1400px;position:relative;z-index:2;">
            <div class="footer-newsletter">
                <div style="max-width:500px;">
                    <h3 style="font-family:var(--font-display);font-size:2rem;font-weight:800;margin-bottom:1rem;color:white;">Subscribe to <span style="color:var(--color-gold);">ArcInsights</span></h3>
                    <p style="color:rgba(255,255,255,0.6);font-size:1.05rem;line-height:1.6;">Get monthly executive briefings on global talent trends, remote team compliance updates, and AI in recruitment.</p>
                </div>
                <div style="flex-grow:1;max-width:500px;display:flex;gap:1rem;">
                    <input type="email" placeholder="Enter your work email" style="width:100%;padding:1.25rem 1.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:white;font-size:1rem;outline:none;" onfocus="this.style.borderColor='var(--color-gold)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
                    <button class="btn btn-primary" style="padding:0 2.5rem;flex-shrink:0;border-radius:8px;font-weight:700;">Subscribe <i class="ph ph-paper-plane-tilt"></i></button>
                </div>
            </div>
            <div class="footer-grid">
                <div class="footer-col">
                    <a href="${ROOT}index.html" style="display:inline-flex;align-items:center;text-decoration:none;margin-bottom:2rem;"><img src="${ROOT}culture  arc logo.png" alt="CultureArc Logo" style="height:45px;width:auto;object-fit:contain;"></a>
                    <p style="color:rgba(255,255,255,0.6);font-size:0.95rem;line-height:1.7;margin-bottom:2rem;">Engineering scalable talent infrastructure for the digital economy. End-to-end IT staffing, executive search, and enterprise transformation across global markets.</p>
                    <div class="footer-social">
                        <a href="#" class="social-btn" onmouseover="this.style.background='#0077b5'" onmouseout="this.style.background='rgba(255,255,255,0.05)'"><i class="ph ph-linkedin-logo"></i></a>
                        <a href="#" class="social-btn" onmouseover="this.style.background='#1DA1F2'" onmouseout="this.style.background='rgba(255,255,255,0.05)'"><i class="ph ph-twitter-logo"></i></a>
                        <a href="#" class="social-btn" onmouseover="this.style.background='#E1306C'" onmouseout="this.style.background='rgba(255,255,255,0.05)'"><i class="ph ph-instagram-logo"></i></a>
                        <a href="#" class="social-btn" onmouseover="this.style.background='#FF0000'" onmouseout="this.style.background='rgba(255,255,255,0.05)'"><i class="ph ph-youtube-logo"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Solutions</h4>
                    <ul>
                        <li><a href="${ROOT}services/it-staffing.html" class="footer-link">IT Contract Staffing</a></li>
                        <li><a href="${ROOT}services/global-capability-center.html" class="footer-link">Global Tech Centers</a></li>
                        <li><a href="${ROOT}services/executive-search.html" class="footer-link">Executive Search</a></li>
                        <li><a href="${ROOT}services/rpo-solutions.html" class="footer-link">RPO Architecture</a></li>
                        <li><a href="${ROOT}services/background-verification.html" class="footer-link">Background Verification</a></li>
                        <li><a href="${ROOT}services/payroll-management.html" class="footer-link">Payroll Management</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="${ROOT}about.html" class="footer-link">Corporate Overview</a></li>
                        <li><a href="${ROOT}about.html" class="footer-link">Leadership Team</a></li>
                        <li><a href="${ROOT}resources/case-studies.html" class="footer-link">Global Operations</a></li>
                        <li><a href="${ROOT}about.html" class="footer-link">ESG Initiatives</a></li>
                        <li><a href="${ROOT}hire.html" class="footer-link">Partner With Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Talent</h4>
                    <ul>
                        <li><a href="${ROOT}jobs.html" class="footer-link">Find Jobs</a></li>
                        <li><a href="${ROOT}jobs.html" class="footer-link">Submit Resume</a></li>
                        <li><a href="${ROOT}resources/blog.html" class="footer-link">Career Content</a></li>
                        <li><a href="#" class="footer-link">Alumni Network</a></li>
                        <li><a href="${ROOT}services/payroll-management.html" class="footer-link">Payroll Portal</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Global HQ</h4>
                    <div style="display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.5rem;">
                        <i class="ph ph-map-pin" style="color:var(--color-gold);font-size:1.25rem;margin-top:0.2rem;"></i>
                        <p style="color:rgba(255,255,255,0.6);font-size:0.95rem;line-height:1.6;margin:0;">15A, 4th Floor, City Vista, Fountain Road, Kharadi<br>Pune, Maharashtra - 411014</p>
                    </div>
                    <div style="display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.5rem;">
                        <i class="ph ph-envelope" style="color:var(--color-gold);font-size:1.25rem;margin-top:0.2rem;"></i>
                        <a href="mailto:info@culturearc.com" class="footer-link" style="margin:0;">info@culturearc.com</a>
                    </div>
                    <div style="padding:1rem;background:rgba(255,255,255,0.05);border-radius:8px;border:1px solid rgba(255,255,255,0.1);">
                        <div style="font-size:0.8rem;color:var(--color-gold);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:700;">Government Registered</div>
                        <div style="font-family:var(--font-display);font-size:0.95rem;font-weight:600;color:white;">MSME: UDYAM-MH-26-0170565</div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div style="font-size:0.9rem;color:rgba(255,255,255,0.5);">&copy; 2026 CultureArc Pvt. Ltd. All Rights Reserved.</div>
                <div class="footer-bottom-links">
                    <a href="#" class="footer-link" style="font-size:0.85rem;">Privacy Architecture</a>
                    <a href="#" class="footer-link" style="font-size:0.85rem;">Terms of Engagement</a>
                    <a href="#" class="footer-link" style="font-size:0.85rem;">Cookie Enforcement</a>
                    <a href="#" class="footer-link" style="font-size:0.85rem;">Compliance Center</a>
                </div>
            </div>
        </div>
    </footer>`;

    // Inject nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
})();
