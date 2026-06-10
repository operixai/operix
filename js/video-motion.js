// Operix MP4 motion panels with EN/RU translation.

(function(){
  const page = location.pathname.split('/').pop() || 'index.html';

  const panels = {
    'index.html': {
      theme:'light', after:'.clean-hero', video:'home',
      en:{badge:'LIVE SYSTEM', title:'Automation in motion.', text:'Connected workflows, moving quietly in the background.'},
      ru:{badge:'LIVE SYSTEM', title:'Автоматизация в движении.', text:'Связанные workflows работают тихо в фоне: лиды, задачи, сообщения, данные и отчёты.'}
    },
    'services.html': {
      theme:'dark', after:'.page-header', video:'services',
      en:{badge:'SERVICE MAP', title:'From request to result.', text:'Every service is a working flow: input, reasoning, action, handoff, and reporting.'},
      ru:{badge:'КАРТА УСЛУГ', title:'От запроса до результата.', text:'Каждая услуга — рабочий flow: вход, логика, действие, передача и отчётность.'}
    },
    'pricing.html': {
      theme:'soft', after:'.page-header', video:'pricing',
      en:{badge:'CLEAR SCOPE', title:'Start small. Scale what works.', text:'Every plan is built around measurable workflows, not vague AI promises.'},
      ru:{badge:'ПОНЯТНЫЙ SCOPE', title:'Начинаем с малого. Масштабируем то, что работает.', text:'Каждый тариф строится вокруг измеримых workflows, а не размытых AI-обещаний.'}
    },
    'cases.html': {
      theme:'light', after:'.page-header', video:'cases',
      en:{badge:'CASE FLOW', title:'Before and after automation.', text:'Case studies show what changes when speed, routing, and repetitive work become automatic.'},
      ru:{badge:'CASE FLOW', title:'До и после автоматизации.', text:'Кейсы показывают, что меняется, когда скорость, routing и рутина становятся автоматическими.'}
    },
    'about.html': {
      theme:'dark', after:'.page-header', video:'about',
      en:{badge:'OPERIX METHOD', title:'Built as systems, not slides.', text:'We prototype, test, connect, and improve until automation becomes part of real operations.'},
      ru:{badge:'МЕТОД OPERIX', title:'Строим системы, а не презентации.', text:'Мы прототипируем, тестируем, подключаем и улучшаем, пока автоматизация не становится частью операций.'}
    },
    'contact.html': {
      theme:'soft', after:'.page-header', video:'contact',
      en:{badge:'FREE AUDIT', title:'Show us the workflow.', text:'We identify what to automate first, what to keep manual, and what the next step costs.'},
      ru:{badge:'БЕСПЛАТНЫЙ АУДИТ', title:'Покажите нам workflow.', text:'Мы определим, что автоматизировать первым, что оставить ручным и сколько стоит следующий шаг.'}
    }
  };

  function lang(){ return localStorage.getItem('operix_lang') === 'ru' ? 'ru' : 'en'; }

  function panelHTML(item){
    const c = item[lang()] || item.en;
    return `
      <section class="opx-video-panel anim" data-theme="${item.theme}" data-video-panel="1" style="overflow:hidden">
        <div class="opx-video-inner">
          <video class="opx-motion-video" autoplay muted loop playsinline preload="auto" poster="assets/motion/${item.video}.jpg?v=smoothhq2" style="will-change:transform;transform:translateZ(0)">
            <source src="assets/motion/${item.video}.mp4?v=smoothhq1" type="video/mp4">
          </video>
          <div class="opx-video-shade"></div>
          <div class="opx-video-badge" data-motion="badge">${c.badge}</div>
          <div class="opx-video-copy">
            <h3 data-motion="title">${c.title}</h3>
            <p data-motion="text">${c.text}</p>
          </div>
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

  function updatePanelLanguage(){
    const item = panels[page];
    const panel = document.querySelector('[data-video-panel="1"]');
    if (!item || !panel) return;
    const c = item[lang()] || item.en;
    const badge = panel.querySelector('[data-motion="badge"]');
    const title = panel.querySelector('[data-motion="title"]');
    const text = panel.querySelector('[data-motion="text"]');
    if (badge) badge.textContent = c.badge;
    if (title) title.textContent = c.title;
    if (text) text.textContent = c.text;
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
      v.loop = true;
      v.playsInline = true;
      v.setAttribute('loop','');
      v.setAttribute('muted','');
      v.setAttribute('playsinline','');
      // Prevent jitter at loop point
      v.addEventListener('timeupdate', function() {
        if (!this._loopFix && this.duration && this.currentTime > this.duration - 0.15) {
          this._loopFix = true;
          this.currentTime = 0;
          setTimeout(() => { this._loopFix = false; }, 300);
        }
      }, { passive: true });
      const p = v.play();
      if (p && p.catch) p.catch(()=>{});
    });
  }

  function run(){
    injectPanel();
    updatePanelLanguage();
    reveal();
    keepVideosPlaying();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();

  window.addEventListener('load', () => { setTimeout(reveal, 150); keepVideosPlaying(); });

  document.addEventListener('click', e => {
    if (e.target.closest('.lang-btn')) {
      setTimeout(updatePanelLanguage, 80);
      setTimeout(updatePanelLanguage, 240);
    }
  });
})();
