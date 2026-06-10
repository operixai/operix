// Operix Anthropic-inspired motion layer.
// Reliable reveal animations + small live counters for motion card.

(function(){
  function prepareReveal(){
    const selectors = [
      '.anim','[data-animate]',
      '.clean-card','.outcome-card','.plan','.demo-card','.playbook-card',
      '.contact-card','.case-study-card','.addon','.clean-note',
      '.opx-release-card','.opx-motion-card'
    ].join(',');

    const els = Array.from(document.querySelectorAll(selectors));
    els.forEach((el, i) => {
      if (!el.dataset.opxReveal) {
        el.dataset.opxReveal = '1';
        el.style.transitionDelay = Math.min(i * 28, 260) + 'ms';
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
    }, { threshold:0.08, rootMargin:'0px 0px -7% 0px' });

    els.forEach(el => io.observe(el));

    setTimeout(() => {
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < innerHeight * 1.12) el.classList.add('visible','in');
      });
    }, 420);
  }

  function addMotionInteractions(){
    const card = document.querySelector('.opx-motion-card');
    if (!card) return;

    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.setProperty('--mx', x.toFixed(3));
      card.style.setProperty('--my', y.toFixed(3));
      card.style.transform = `perspective(1100px) rotateX(${(-y*2).toFixed(2)}deg) rotateY(${(x*2).toFixed(2)}deg)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  }

  function addHaptics(){
    document.addEventListener('pointerdown', (e) => {
      if (!navigator.vibrate) return;
      if (e.target.closest('a,button,.opx-release-card,.clean-card,.plan,.case-study-card')) {
        navigator.vibrate(8);
      }
    }, {passive:true});
  }

  function run(){
    prepareReveal();
    addMotionInteractions();
    addHaptics();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  window.addEventListener('load', () => setTimeout(prepareReveal, 120));
})();
