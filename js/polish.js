// Operix polish fix — reliable animations + haptics.
// Upload to js/polish.js

(function(){
  function revealAllFallback(){
    document.querySelectorAll('.anim,[data-animate],.clean-card,.outcome-card,.plan,.demo-card,.playbook-card,.contact-card,.case-study-card,.addon,.clean-note')
      .forEach((el, index) => {
        if (!el.dataset.animPrepared) {
          el.dataset.animPrepared = '1';
          el.style.transitionDelay = Math.min(index * 35, 280) + 'ms';
        }
      });
  }

  function initAnimations(){
    const targets = document.querySelectorAll('.anim,[data-animate],.clean-card,.outcome-card,.plan,.demo-card,.playbook-card,.contact-card,.case-study-card,.addon,.clean-note');
    if (!targets.length) return;

    revealAllFallback();

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {
      root:null,
      threshold:0.08,
      rootMargin:'0px 0px -6% 0px'
    });

    targets.forEach(el => io.observe(el));

    // Safety: if browser loads mid-page or something blocks observer, reveal after delay.
    setTimeout(() => {
      document.querySelectorAll('.anim:not(.visible),[data-animate]:not(.visible),.clean-card:not(.visible),.outcome-card:not(.visible),.plan:not(.visible),.demo-card:not(.visible),.playbook-card:not(.visible),.contact-card:not(.visible),.case-study-card:not(.visible),.addon:not(.visible),.clean-note:not(.visible)')
        .forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 1.15) {
            el.classList.add('visible');
            el.classList.add('in');
          }
        });
    }, 450);
  }

  function initHaptics(){
    document.addEventListener('pointerdown', (e) => {
      if (!navigator.vibrate) return;
      if (e.target.closest('a,button,.clean-card,.plan,.demo-card,.playbook-card,.case-study-card,.contact-card,.niche-tag')) {
        navigator.vibrate(8);
      }
    }, {passive:true});
  }

  function run(){
    initAnimations();
    initHaptics();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  window.addEventListener('load', () => {
    setTimeout(initAnimations, 150);
  });
})();
