// Operix global layout.
// Upload this file to: js/layout.js
// This version also injects css/fixes.css and js/site-fixes.js on every page.

(function injectFixAssets(){
  const head = document.head || document.getElementsByTagName('head')[0];

  if (!document.querySelector('link[href*="css/fixes.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/fixes.css?v=20260610-clean2';
    head.appendChild(link);
  }

  if (!document.querySelector('link[href*="css/content-clean.css"]')) {
    const clean = document.createElement('link');
    clean.rel = 'stylesheet';
    clean.href = 'css/content-clean.css?v=20260610-clean2';
    head.appendChild(clean);
  }


  if (!document.querySelector('link[href*="css/refine.css"]')) {
    const refine = document.createElement('link');
    refine.rel = 'stylesheet';
    refine.href = 'css/refine.css?v=20260610-smoothhq1';
    head.appendChild(refine);
  }


  if (!document.querySelector('link[href*="css/mobile-smooth.css"]')) {
    const mobile = document.createElement('link');
    mobile.rel = 'stylesheet';
    mobile.href = 'css/mobile-smooth.css?v=20260610-mobile1';
    head.appendChild(mobile);
  }

  if (!document.querySelector('script[src*="js/site-fixes.js"]')) {
    const script = document.createElement('script');
    script.src = 'js/site-fixes.js?v=20260610-clean2';
    script.defer = true;
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(script));
  }

  if (!document.querySelector('script[src*="js/video-motion.js"]')) {
    const motion = document.createElement('script');
    motion.src = 'js/video-motion.js?v=20260610-smoothhq1';
    motion.defer = true;
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(motion));
  }


  if (!document.querySelector('script[src*="js/mobile-smooth.js"]')) {
    const mobileScript = document.createElement('script');
    mobileScript.src = 'js/mobile-smooth.js?v=20260610-mobile1';
    mobileScript.defer = true;
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(mobileScript));
  }

})();

const SVG_SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
  <symbol id="i-bot" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/><line x1="8" y1="15" x2="8" y2="15" stroke-width="2.5"/><line x1="12" y1="15" x2="12" y2="15" stroke-width="2.5"/><line x1="16" y1="15" x2="16" y2="15" stroke-width="2.5"/></symbol>
  <symbol id="i-zap" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></symbol>
  <symbol id="i-target" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></symbol>
  <symbol id="i-edit" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></symbol>
  <symbol id="i-cpu" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></symbol>
  <symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></symbol>
  <symbol id="i-send" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
  <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></symbol>
  <symbol id="i-arrow-right" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></symbol>
  <symbol id="i-tg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.8 2.4L2.2 9.7c-1.3.5-1.3 1.3-.2 1.6l5 1.6 1.9 5.9c.3.7.5.9 1.2.9.5 0 .8-.2 1.1-.5l2.8-2.7 5.3 3.9c1 .5 1.7.3 1.9-.9L23.9 3.7c.3-1.5-.5-2.1-2.1-1.3z"/></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></symbol>
</svg>`;

const NAV_HTML = `
${SVG_SPRITE}
<nav>
  <a href="index.html" class="logo" aria-label="Operix home">
    <img src="logo.png?v=20260610-clean2" alt="Operix" />
  </a>

  <ul class="nav-links">
    <li><a href="services.html" data-t="nav_services"></a></li>
    <li><a href="cases.html" data-t="nav_cases"></a></li>
    <li><a href="pricing.html" data-t="nav_pricing"></a></li>
    <li><a href="about.html" data-t="nav_about"></a></li>
    <li><a href="contact.html" data-t="nav_contact"></a></li>
  </ul>

  <div class="nav-right">
    <div class="lang-switch">
      <button class="lang-btn" data-lang="en" type="button">EN</button>
      <button class="lang-btn" data-lang="ru" type="button">RU</button>
    </div>

    <a href="contact.html" class="btn btn-primary" data-t="nav_cta"></a>

    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu" type="button" aria-expanded="false">
      <span class="burger" aria-hidden="true"><span></span><span></span><span></span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <ul>
    <li><a href="services.html" data-t="nav_services"></a></li>
    <li><a href="cases.html" data-t="nav_cases"></a></li>
    <li><a href="pricing.html" data-t="nav_pricing"></a></li>
    <li><a href="about.html" data-t="nav_about"></a></li>
    <li><a href="contact.html" data-t="nav_contact"></a></li>
  </ul>

  <div class="mobile-menu-bottom">
    <div class="lang-switch">
      <button class="lang-btn" data-lang="en" type="button">EN</button>
      <button class="lang-btn" data-lang="ru" type="button">RU</button>
    </div>
    <a href="contact.html" class="btn btn-primary" data-t="nav_cta"></a>
  </div>
</div>`;

const FOOTER_HTML = `
<section class="footer-cta-wrap">
  <div class="cta-banner anim">
    <h2 data-t="cta_h"></h2>
    <div class="cta-banner-actions">
      <a href="contact.html" class="btn btn-primary btn-lg" data-t="contact_cta"></a>
      <a href="services.html" class="btn btn-ghost btn-lg" data-t="nav_services"></a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="logo">
        <img src="logo.png?v=20260610-clean2" alt="Operix" />
      </a>
      <p data-t="footer_desc"></p>
    </div>

    <div class="footer-col">
      <h5 data-t="footer_services"></h5>
      <ul>
        <li><a href="services.html#chatbots" data-t="footer_s1"></a></li>
        <li><a href="services.html#automation" data-t="footer_s2"></a></li>
        <li><a href="services.html#leads" data-t="footer_s3"></a></li>
        <li><a href="services.html#analytics" data-t="footer_s4"></a></li>
        <li><a href="services.html#content" data-t="footer_s5"></a></li>
        <li><a href="services.html#agents" data-t="footer_s6"></a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5 data-t="footer_company"></h5>
      <ul>
        <li><a href="about.html" data-t="footer_c1"></a></li>
        <li><a href="cases.html" data-t="footer_c2"></a></li>
        <li><a href="pricing.html" data-t="footer_c3"></a></li>
        <li><a href="blog.html" data-t="footer_c4"></a></li>
        <li><a href="privacy.html" data-t="footer_c5"></a></li>
        <li><a href="terms.html" data-t="footer_c6"></a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h5 data-t="footer_contact_col"></h5>
      <ul>
        <li><a href="https://t.me/exyysdof" target="_blank" rel="noopener" data-t="footer_tg"></a></li>
        <li><a href="mailto:travisofwork@gmail.com" data-t="footer_email"></a></li>
        <li><a href="contact.html" data-t="footer_book"></a></li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <p data-t="footer_rights"></p>
    <div class="footer-badges">
      <span class="badge"><svg width="12" height="12"><use href="#i-shield"/></svg> SSL</span>
      <span class="badge"><svg width="12" height="12"><use href="#i-globe"/></svg> Global</span>
      <span class="badge"><svg width="12" height="12"><use href="#i-zap"/></svg> 24/7</span>
    </div>
    <p><a href="privacy.html" data-t="footer_privacy"></a> · <a href="terms.html" data-t="footer_terms"></a></p>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.outerHTML = NAV_HTML;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');

  if (btn && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      btn.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><use href="#i-x"/></svg>'
        : '<span class="burger" aria-hidden="true"><span></span><span></span><span></span></span>';
      if (navigator.vibrate) navigator.vibrate(15);
    };

    btn.addEventListener('click', () => setOpen(!menu.classList.contains('open')));

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }
});
