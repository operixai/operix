// Operix HQ MP4 motion panels.
// Video-only, no visible text overlay. Different video per page.

(function(){
  const page = location.pathname.split('/').pop() || 'index.html';

  const panels = {
    'index.html':   { after:'.clean-hero',  video:'home',     label:{en:'Automation motion', ru:'Анимация автоматизации'} },
    'services.html':{ after:'.page-header', video:'services', label:{en:'Service map motion', ru:'Анимация карты услуг'} },
    'pricing.html': { after:'.page-header', video:'pricing',  label:{en:'Pricing tiers motion', ru:'Анимация тарифов'} },
    'cases.html':   { after:'.page-header', video:'cases',    label:{en:'Case transformation motion', ru:'Анимация кейсов'} },
    'about.html':   { after:'.page-header', video:'about',    label:{en:'Operix method motion', ru:'Анимация метода Operix'} },
    'contact.html': { after:'.page-header', video:'contact',  label:{en:'Contact workflow motion', ru:'Анимация заявки'} }
  };

  function lang(){ return localStorage.getItem('operix_lang') === 'ru' ? 'ru' : 'en'; }

  function panelHTML(item){
    const label = item.label[lang()] || item.label.en;
    return `
      <section class="opx-video-panel anim" data-video-panel="1" aria-label="${label}">
        <div class="opx-video-inner">
          <video class="opx-motion-video" autoplay muted loop playsinline preload="metadata" poster="assets/motion/${item.video}.jpg" aria-label="${label}">
            <source src="assets/motion/${item.video}.mp4?v=hq2" type="video/mp4">
          </video>
        </div>
      </section>`;
  }

  function injectPanel(){
    if (document.querySelector('[data-video-panel="1"]')) return;
    const item = panels[page];
    if (!item) return;
    const target = document.querySelector(item.after) || document.querySelector('.page-header') || document.querySelector('section');
    if (!target) return;
    target.insertAdjacentHTML('afterend', panelHTML(item));
  }

  function updateLabels(){
    const item = panels[page];
    const panel = document.querySelector('[data-video-panel="1"]');
    if (!item || !panel) return;
    const label = item.label[lang()] || item.label.en;
    panel.setAttribute('aria-label', label);
    const video = panel.querySelector('video');
    if (video) video.setAttribute('aria-label', label);
  }

  function reveal(){
    const selectors = '.anim,[data-animate],.clean-card,.outcome-card,.plan,.demo-card,.playbook-card,.contact-card,.case-study-card,.addon,.clean-note,.opx-video-panel';
    const els = Array.from(document.querySelectorAll(selectors));
    els.forEach((el, i) => {
      if (!el.dataset.revealReady) {
        el.dataset.revealReady = '1';
        el.style.transitionDelay = Math.min(i * 24, 240) + 'ms';
      }
    });

    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible','in'));
      return;
    }

    const io = new IntersectionObserver(entries => {
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

  function keepVideosPlaying(){
    document.querySelectorAll('.opx-motion-video').forEach(v => {
      v.muted = true;
      v.playsInline = true;
      v.setAttribute('playsinline','');
      v.setAttribute('muted','');
      const p = v.play();
      if (p && p.catch) p.catch(()=>{});
    });
  }

  function run(){
    injectPanel();
    updateLabels();
    reveal();
    keepVideosPlaying();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();

  window.addEventListener('load', () => { setTimeout(reveal, 150); keepVideosPlaying(); });

  document.addEventListener('click', e => {
    if (e.target.closest('.lang-btn')) {
      setTimeout(updateLabels, 80);
      setTimeout(updateLabels, 240);
    }
  });
})();
