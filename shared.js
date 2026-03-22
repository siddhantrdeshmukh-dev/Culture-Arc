/* =====================================================
   CultureArc — Shared Header & Footer Injector
   ===================================================== */
(function () {
  'use strict';

  /* ─── Detect root path depth ─────────────────────── */
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  const root = depth <= 1 ? './' : '../';

  /* ─── Active nav detection ───────────────────────── */
  const path = window.location.pathname;

  function isActive(href) {
    const abs = root + href;
    return path.includes(href.replace('.html', '').replace('./', ''));
  }

  /* ─── Header HTML ────────────────────────────────── */
  const headerHTML = `
  <!-- TOP BAR -->
  <div class="top-bar" style="background:var(--color-dark);color:white;padding:0.5rem 5%;font-size:0.85rem;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.1);position:relative;z-index:1001;">
    <div class="top-bar-left" style="display:flex;gap:2rem;">
      <a href="mailto:info@culturearc.com" style="color:#9CA3AF;text-decoration:none;display:flex;align-items:center;gap:0.5rem;transition:color 0.3s;"><i class="ph ph-envelope"></i> info@culturearc.com</a>
      <a href="tel:+91206680456" style="color:#9CA3AF;text-decoration:none;display:flex;align-items:center;gap:0.5rem;transition:color 0.3s;"><i class="ph ph-phone"></i> Global Support</a>
      <span style="color:#6B7280;display:flex;align-items:center;gap:0.5rem;"><i class="ph ph-map-pin"></i> HQ: Pune, India &bull; USA &bull; UK</span>
    </div>
    <div class="top-bar-right" style="display:flex;gap:1.5rem;">
      <a href="#" style="color:white;text-decoration:none;font-weight:500;transition:color 0.3s;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='white'">Investors</a>
      <a href="${root}resources/newsroom.html" style="color:white;text-decoration:none;font-weight:500;transition:color 0.3s;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='white'">Newsroom</a>
      <a href="${root}jobs.html" style="color:white;text-decoration:none;font-weight:500;transition:color 0.3s;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='white'">Careers</a>
      <div style="display:flex;align-items:center;gap:0.2rem;cursor:pointer;color:var(--color-gold);font-weight:600;"><i class="ph ph-globe"></i> EN <i class="ph ph-caret-down"></i></div>
    </div>
  </div>

  <!-- MEGA NAV -->
  <nav class="mega-nav" id="mega-nav">
    <a href="${root}index.html" class="nav-logo" style="text-decoration:none;display:flex;align-items:center;">
      <img src="${root}culture  arc logo.png" alt="CultureArc Logo" style="height:44px;width:auto;object-fit:contain;">
    </a>

    <div class="mega-links">
      <div class="mega-item">
        <span class="mega-link">Solutions <i class="ph ph-caret-down"></i></span>
        <div class="mega-dropdown">
          <div class="mega-drop-left">
            <div>
              <h3 class="drop-title" style="color:#C00000;">End-to-End Enterprise Solutions</h3>
              <p style="color:#C00000;line-height:1.6;margin-bottom:2rem;font-size:0.95rem;">Discover how CultureArc engineers talent infrastructure to scale global technology operations securely and efficiently.</p>
            </div>
            <a href="${root}services/it-staffing.html" class="btn btn-primary" style="width:100%;justify-content:center;">View All Solutions <i class="ph ph-arrow-right"></i></a>
          </div>
          <div class="mega-drop-right">
            <a href="${root}services/it-staffing.html" class="drop-link"><div class="drop-icon"><i class="ph ph-users-three"></i></div><div class="drop-text"><h4>IT Staffing</h4><p>Rapid deployment of pre-vetted tech professionals.</p></div></a>
            <a href="${root}services/global-capability-center.html" class="drop-link"><div class="drop-icon"><i class="ph ph-buildings"></i></div><div class="drop-text"><h4>Global Tech Center</h4><p>Build-Operate-Transfer models for global scale.</p></div></a>
            <a href="${root}services/executive-search.html" class="drop-link"><div class="drop-icon"><i class="ph ph-briefcase"></i></div><div class="drop-text"><h4>Executive Search</h4><p>Elite leadership and C-suite talent acquisition.</p></div></a>
            <a href="${root}services/background-verification.html" class="drop-link"><div class="drop-icon"><i class="ph ph-shield-check"></i></div><div class="drop-text"><h4>Background Verification</h4><p>Comprehensive compliance and security checks.</p></div></a>
            <a href="${root}services/rpo-solutions.html" class="drop-link"><div class="drop-icon"><i class="ph ph-chart-line-up"></i></div><div class="drop-text"><h4>RPO Solutions</h4><p>End-to-end recruitment process outsourcing.</p></div></a>
            <a href="${root}services/payroll-management.html" class="drop-link"><div class="drop-icon"><i class="ph ph-files"></i></div><div class="drop-text"><h4>Payroll Management</h4><p>Seamless contractor and employee administration.</p></div></a>
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
            <a href="${root}industries/bfsi.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-bank"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">BFSI</h4></div></a>
            <a href="${root}industries/healthcare.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-heartbeat"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Healthcare</h4></div></a>
            <a href="${root}industries/ecommerce.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-shopping-cart"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">E-Commerce</h4></div></a>
            <a href="${root}industries/telecom.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-broadcast"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Telecom</h4></div></a>
            <a href="${root}industries/manufacturing.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-factory"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Manufacturing</h4></div></a>
            <a href="${root}industries/technology.html" class="drop-link" style="padding:0.5rem;"><div class="drop-icon" style="width:36px;height:36px;font-size:1.2rem;"><i class="ph ph-cpu"></i></div><div class="drop-text"><h4 style="margin:0;line-height:36px;">Technology</h4></div></a>
          </div>
        </div>
      </div>

      <div class="mega-item">
        <span class="mega-link">Insights <i class="ph ph-caret-down"></i></span>
        <div class="mega-dropdown" style="width:450px;display:block;padding:2rem;">
          <a href="${root}resources/case-studies.html" class="drop-link"><div class="drop-icon"><i class="ph ph-book-open"></i></div><div class="drop-text"><h4>Case Studies</h4><p>Read about our successful commercial transformations.</p></div></a>
          <a href="${root}resources/newsroom.html" class="drop-link"><div class="drop-icon"><i class="ph ph-newspaper"></i></div><div class="drop-text"><h4>Newsroom</h4><p>Latest corporate updates and press releases.</p></div></a>
          <a href="${root}resources/whitepapers.html" class="drop-link"><div class="drop-icon"><i class="ph ph-file-text"></i></div><div class="drop-text"><h4>Whitepapers & Research</h4><p>Deep-dive research into global talent markets.</p></div></a>
        </div>
      </div>

      <div class="mega-item">
        <span class="mega-link">Resources <i class="ph ph-caret-down"></i></span>
        <div class="mega-dropdown" style="width:450px;display:block;padding:2rem;">
          <a href="${root}resources/blog.html" class="drop-link"><div class="drop-icon"><i class="ph ph-article"></i></div><div class="drop-text"><h4>Blog</h4><p>Latest articles, industry trends, and expert opinions.</p></div></a>
          <a href="${root}resources/webinars.html" class="drop-link"><div class="drop-icon"><i class="ph ph-video-camera"></i></div><div class="drop-text"><h4>Webinars</h4><p>Live and on-demand video sessions and masterclasses.</p></div></a>
          <a href="${root}resources/ebooks.html" class="drop-link"><div class="drop-icon"><i class="ph ph-book-bookmark"></i></div><div class="drop-text"><h4>E-Books & Guides</h4><p>Comprehensive materials to elevate your talent strategy.</p></div></a>
          <a href="${root}support/faq.html" class="drop-link"><div class="drop-icon"><i class="ph ph-question"></i></div><div class="drop-text"><h4>Help Center & FAQ</h4><p>Support and answers to your most common questions.</p></div></a>
        </div>
      </div>

      <div class="mega-item">
        <a href="${root}about.html" class="mega-link" style="gap:0;">Company</a>
      </div>
    </div>

    <div style="display:flex;gap:1.25rem;align-items:center;" class="nav-buttons-right">
      <a href="${root}jobs.html" class="btn btn-ghost" style="padding:0.75rem 1.5rem;border-color:var(--color-border);font-weight:600;">Find a Job</a>
      <a href="${root}hire.html" class="btn btn-primary" style="padding:0.75rem 1.5rem;font-weight:600;box-shadow:0 10px 20px rgba(192,0,0,0.2);">Partner With Us</a>
      <button class="nav-toggle" id="nav-toggle" style="display:none;background:transparent;border:none;font-size:1.5rem;cursor:pointer;"><i class="ph ph-list"></i></button>
    </div>
  </nav>

  <!-- MOBILE NAV -->
  <div class="nav-mobile" id="nav-mobile-menu" style="display:none;background:white;padding:1rem 5% 2rem;position:absolute;top:90px;left:0;width:100%;border-bottom:1px solid var(--color-border);box-shadow:0 20px 40px rgba(0,0,0,0.1);max-height:calc(100vh - 90px);overflow-y:auto;z-index:999;">
    <a href="${root}index.html" style="display:block;padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);text-decoration:none;border-bottom:1px solid rgba(0,0,0,0.05);">Home</a>
    <details style="border-bottom:1px solid rgba(0,0,0,0.05);">
      <summary style="padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);cursor:pointer;display:flex;justify-content:space-between;align-items:center;">Solutions <i class="ph ph-caret-down"></i></summary>
      <div style="padding:0 0 1.25rem 1rem;display:flex;flex-direction:column;gap:1rem;">
        <a href="${root}services/it-staffing.html" style="color:var(--color-gray);text-decoration:none;">IT Staffing</a>
        <a href="${root}services/global-capability-center.html" style="color:var(--color-gray);text-decoration:none;">Global Tech Center</a>
        <a href="${root}services/executive-search.html" style="color:var(--color-gray);text-decoration:none;">Executive Search</a>
        <a href="${root}services/background-verification.html" style="color:var(--color-gray);text-decoration:none;">Background Verification</a>
        <a href="${root}services/rpo-solutions.html" style="color:var(--color-gray);text-decoration:none;">RPO Solutions</a>
        <a href="${root}services/payroll-management.html" style="color:var(--color-gray);text-decoration:none;">Payroll Management</a>
      </div>
    </details>
    <details style="border-bottom:1px solid rgba(0,0,0,0.05);">
      <summary style="padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);cursor:pointer;display:flex;justify-content:space-between;align-items:center;">Industries <i class="ph ph-caret-down"></i></summary>
      <div style="padding:0 0 1.25rem 1rem;display:flex;flex-direction:column;gap:1rem;">
        <a href="${root}industries/bfsi.html" style="color:var(--color-gray);text-decoration:none;">BFSI</a>
        <a href="${root}industries/healthcare.html" style="color:var(--color-gray);text-decoration:none;">Healthcare</a>
        <a href="${root}industries/ecommerce.html" style="color:var(--color-gray);text-decoration:none;">E-Commerce</a>
        <a href="${root}industries/telecom.html" style="color:var(--color-gray);text-decoration:none;">Telecom</a>
        <a href="${root}industries/manufacturing.html" style="color:var(--color-gray);text-decoration:none;">Manufacturing</a>
        <a href="${root}industries/technology.html" style="color:var(--color-gray);text-decoration:none;">Technology</a>
      </div>
    </details>
    <a href="${root}about.html" style="display:block;padding:1.25rem 0;font-size:1.15rem;font-weight:600;color:var(--color-dark);text-decoration:none;border-bottom:1px solid rgba(0,0,0,0.05);">Company</a>
    <div style="display:flex;flex-direction:column;gap:1rem;margin-top:2rem;">
      <a href="${root}jobs.html" class="btn btn-ghost" style="justify-content:center;padding:1rem;text-decoration:none;font-weight:600;color:var(--color-dark);">Find a Job</a>
      <a href="${root}hire.html" class="btn btn-primary" style="justify-content:center;padding:1rem;text-decoration:none;font-weight:600;">Partner With Us</a>
    </div>
  </div>`;

  /* ─── Footer HTML ────────────────────────────────── */
  const footerHTML = `
  <footer class="footer" style="background:var(--color-dark);padding:6rem 5% 2rem;position:relative;overflow:hidden;color:white;">
    <div style="position:absolute;top:0;left:0;width:100%;height:5px;background:linear-gradient(90deg,#C00000,#F7B32D,#C00000);"></div>
    <i class="ph ph-globe" style="position:absolute;top:-10%;right:-5%;font-size:50rem;color:rgba(255,255,255,0.02);z-index:0;pointer-events:none;"></i>
    <div class="container" style="max-width:1400px;position:relative;z-index:2;">
      <!-- Newsletter -->
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:4rem;margin-bottom:4rem;gap:2rem;">
        <div style="max-width:500px;">
          <h3 style="font-family:var(--font-display);font-size:2rem;font-weight:800;margin-bottom:1rem;color:white;">Subscribe to <span style="color:var(--color-gold);">ArcInsights</span></h3>
          <p style="color:rgba(255,255,255,0.6);font-size:1.05rem;line-height:1.6;">Get monthly executive briefings on global talent trends, remote team compliance updates, and AI in recruitment.</p>
        </div>
        <div style="flex-grow:1;max-width:500px;display:flex;gap:1rem;">
          <input type="email" placeholder="Enter your work email" style="width:100%;padding:1.25rem 1.5rem;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.03);color:white;font-size:1rem;outline:none;" onfocus="this.style.borderColor='var(--color-gold)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
          <button class="btn btn-primary" style="padding:0 2.5rem;flex-shrink:0;border-radius:8px;font-weight:700;">Subscribe <i class="ph ph-paper-plane-tilt"></i></button>
        </div>
      </div>
      <!-- Links Grid -->
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:4rem;margin-bottom:4rem;" class="footer-grid">
        <div>
          <a href="${root}index.html" style="display:inline-flex;align-items:center;text-decoration:none;margin-bottom:2rem;">
            <img src="${root}culture  arc logo.png" alt="CultureArc Logo" style="height:45px;width:auto;object-fit:contain;">
          </a>
          <p style="color:rgba(255,255,255,0.6);font-size:0.95rem;line-height:1.7;margin-bottom:2rem;">Engineering scalable talent infrastructure for the digital economy. End-to-end IT staffing, executive search, and enterprise operational transformation across global markets.</p>
          <div style="display:flex;gap:1rem;">
            <a href="#" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.05);color:white;display:flex;align-items:center;justify-content:center;font-size:1.2rem;transition:all 0.3s;" onmouseover="this.style.background='#0077b5';this.style.transform='translateY(-5px)';" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.transform='translateY(0)';"><i class="ph ph-linkedin-logo"></i></a>
            <a href="#" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.05);color:white;display:flex;align-items:center;justify-content:center;font-size:1.2rem;transition:all 0.3s;" onmouseover="this.style.background='#1DA1F2';this.style.transform='translateY(-5px)';" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.transform='translateY(0)';"><i class="ph ph-twitter-logo"></i></a>
            <a href="#" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.05);color:white;display:flex;align-items:center;justify-content:center;font-size:1.2rem;transition:all 0.3s;" onmouseover="this.style.background='#E1306C';this.style.transform='translateY(-5px)';" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.transform='translateY(0)';"><i class="ph ph-instagram-logo"></i></a>
            <a href="#" style="width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.05);color:white;display:flex;align-items:center;justify-content:center;font-size:1.2rem;transition:all 0.3s;" onmouseover="this.style.background='#FF0000';this.style.transform='translateY(-5px)';" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.transform='translateY(0)';"><i class="ph ph-youtube-logo"></i></a>
          </div>
        </div>
        <div>
          <h4 style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:white;margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.05em;">Solutions</h4>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;">
            <li><a href="${root}services/it-staffing.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">IT Contract Staffing</a></li>
            <li><a href="${root}services/global-capability-center.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Global Tech Centers</a></li>
            <li><a href="${root}services/executive-search.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Executive Search</a></li>
            <li><a href="${root}services/rpo-solutions.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">RPO Architecture</a></li>
            <li><a href="${root}services/background-verification.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Background Verifications</a></li>
          </ul>
        </div>
        <div>
          <h4 style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:white;margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.05em;">Company</h4>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;">
            <li><a href="${root}about.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Corporate Overview</a></li>
            <li><a href="${root}about.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Leadership Team</a></li>
            <li><a href="${root}resources/case-studies.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Global Operations</a></li>
            <li><a href="${root}hire.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Partner With Us</a></li>
          </ul>
        </div>
        <div>
          <h4 style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:white;margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.05em;">Talent</h4>
          <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1rem;">
            <li><a href="${root}jobs.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Find Jobs</a></li>
            <li><a href="${root}jobs.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Submit Resume</a></li>
            <li><a href="${root}resources/blog.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Career Content</a></li>
            <li><a href="${root}services/payroll-management.html" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Payroll Portal</a></li>
          </ul>
        </div>
        <div>
          <h4 style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:white;margin-bottom:2rem;text-transform:uppercase;letter-spacing:0.05em;">Global HQ</h4>
          <div style="display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.5rem;">
            <i class="ph ph-map-pin" style="color:var(--color-gold);font-size:1.25rem;margin-top:0.2rem;"></i>
            <p style="color:rgba(255,255,255,0.6);font-size:0.95rem;line-height:1.6;margin:0;">15A, 4th Floor, City Vista, Fountain Road, Kharadi<br>Pune, Maharashtra - 411014</p>
          </div>
          <div style="display:flex;gap:1rem;align-items:flex-start;margin-bottom:1.5rem;">
            <i class="ph ph-envelope" style="color:var(--color-gold);font-size:1.25rem;margin-top:0.2rem;"></i>
            <a href="mailto:info@culturearc.com" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:0.95rem;transition:color 0.3s;" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">info@culturearc.com</a>
          </div>
          <div style="padding:1rem;background:rgba(255,255,255,0.05);border-radius:8px;border:1px solid rgba(255,255,255,0.1);">
            <div style="font-size:0.8rem;color:var(--color-gold);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.25rem;font-weight:700;">Government Registered</div>
            <div style="font-family:var(--font-display);font-size:0.95rem;font-weight:600;color:white;">MSME: UDYAM-MH-26-0170565</div>
          </div>
        </div>
      </div>
      <!-- Legal -->
      <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:2rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:2rem;">
        <div style="font-size:0.9rem;color:rgba(255,255,255,0.5);">&copy; 2026 CultureArc Pvt. Ltd. All Rights Reserved.</div>
        <div style="display:flex;gap:2rem;align-items:center;">
          <a href="#" style="color:rgba(255,255,255,0.5);text-decoration:none;font-size:0.85rem;transition:color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Privacy Architecture</a>
          <a href="#" style="color:rgba(255,255,255,0.5);text-decoration:none;font-size:0.85rem;transition:color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Terms of Engagement</a>
          <a href="#" style="color:rgba(255,255,255,0.5);text-decoration:none;font-size:0.85rem;transition:color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Cookie Enforcement</a>
          <a href="#" style="color:rgba(255,255,255,0.5);text-decoration:none;font-size:0.85rem;transition:color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.5)'">Compliance Center</a>
        </div>
      </div>
    </div>
  </footer>`;

  /* ─── Inject into DOM ────────────────────────────── */
  /* ─── Inject into DOM ────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    
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
        const interactiveSelectors = ['a', 'button', '.card', '.btn', 'input', 'select', 'textarea'];
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
    initCursor();
    // ===========================================

    // Header (Your existing code continues here...)
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.innerHTML = headerHTML;

    // Footer
    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = footerHTML;

    // Mobile toggle
    const toggle = document.getElementById('nav-toggle');
    // ... [the rest of your shared.js file down to the end] ...
    const mobileMenu = document.getElementById('nav-mobile-menu');
    if (toggle && mobileMenu) {
      toggle.addEventListener('click', () => {
        const isHidden = mobileMenu.style.display === 'none';
        mobileMenu.style.display = isHidden ? 'block' : 'none';
        toggle.innerHTML = isHidden ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
      });
    }

    // Sticky nav scroll effect
    const nav = document.getElementById('mega-nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.12)';
        } else {
          nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.06)';
        }
      }, { passive: true });
    }

    // Reveal animations
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
          if (el.isIntersecting) {
            el.target.classList.add('revealed');
            observer.unobserve(el.target);
          }
        });
      }, { threshold: 0.15 });
      revealEls.forEach(el => observer.observe(el));
    }
  });
})();
