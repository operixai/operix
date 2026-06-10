// Operix video-like animations across pages. Keeps existing layout.

(function(){
  const path = location.pathname.split('/').pop() || 'index.html';

  const copy = {
    'index.html': { theme:'light', after:'.clean-hero', badge:'LIVE SYSTEM', title:'Automation in motion.', text:'Leads, tasks, messages, data, and reports move through one connected AI workflow.' },
    'services.html': { theme:'dark', after:'.page-header', badge:'SERVICE MAP', title:'From request to result.', text:'Each service is designed as a working flow: input, reasoning, action, handoff, and reporting.' },
    'pricing.html': { theme:'soft', after:'.page-header', badge:'CLEAR SCOPE', title:'Start small. Scale what works.', text:'Every plan is built around measurable workflows, not vague AI promises.' },
    'cases.html': { theme:'light', after:'.page-header', badge:'CASE FLOW', title:'Before and after automation.', text:'Case studies show what changes when response speed, routing, and repetitive work become automatic.' },
    'about.html': { theme:'dark', after:'.page-header', badge:'OPERIX METHOD', title:'Built as systems, not slides.', text:'We prototype, test, connect, and improve until automation becomes part of real operations.' },
    'contact.html': { theme:'soft', after:'.page-header', badge:'FREE AUDIT', title:'Show us the workflow.', text:'We identify what should be automated first, what should stay manual, and what the next step costs.' }
  };

  function panelHTML(item){
    return `
      <section class="opx-video-panel anim" data-theme="${item.theme}">
        <div class="opx-video-inner">
          <div class="opx-video-badge">${item.badge}</div>
          <div class="opx-flow f1"></div>
          <div class="opx-flow f2"></div>
          <div class="opx-flow f3"></div>
          <div class="opx-orbit"><span class="n1"></span><span class="n2"></span></div>
          <div class="opx-video-copy">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </div>
      </section>
    `;
  }

  function injectPanel(){
    if (document.querySelector('.opx-video-panel')) return;
    const item = copy[path];
    if (!item) return;
    const target = document.querySelector(item.after) || document.querySelector('.page-header') || document.querySelector('section');
    if (!target) return;
    target.insertAdjacentHTML('afterend', panelHTML(item));
  }

  function reveal(){
    const selectors = '.anim,[data-animate],.clean-card,.outcome-card,.plan,.demo-card,.playbook-card,.contact-card,.case-study-card,.addon,.clean-note,.opx-video-panel';
    const els = Array.from(document.querySelectorAll(selectors));
    els.forEach((el, i) => {
      if (!el.dataset.revealReady) {
        el.dataset.revealReady = '1';
        el.style.transitionDelay = Math.min(i * 26, 260) + 'ms';
      }
    });

    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible','in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible','in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.08, rootMargin:'0px 0px -7% 0px'});

    els.forEach(el => io.observe(el));

    setTimeout(() => {
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.12) el.classList.add('visible','in');
      });
    }, 420);
  }

  function haptics(){
    document.addEventListener('pointerdown', e => {
      if (!navigator.vibrate) return;
      if (e.target.closest('a,button,.clean-card,.plan,.case-study-card,.contact-card,.opx-video-inner')) navigator.vibrate(8);
    }, {passive:true});
  }

  function run(){
    injectPanel();
    reveal();
    haptics();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();

  window.addEventListener('load', () => setTimeout(reveal, 160));
})();
