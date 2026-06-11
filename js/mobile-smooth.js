// Operix mobile smooth layer.
// Improves video playback, mobile menu behavior, and prevents stuck animations.

(function(){
  const isSmall = () => window.matchMedia('(max-width: 780px)').matches;
  const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function optimizeVideos(){
    document.querySelectorAll('.opx-motion-video').forEach(video => {
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('muted', '');
      video.setAttribute('loop', '');
      video.setAttribute('preload', 'auto');
      video.removeAttribute('poster');

      if (prefersReduced()) {
        if (isSmall()) if (isSmall()) video.pause();
        return;
      }

      // On mobile keep only visible video playing.
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const p = video.play();
              if (p && p.catch) p.catch(()=>{});
            } else if (isSmall()) {
              if (isSmall()) if (isSmall()) video.pause();
            }
          });
        }, { threshold: 0.01, rootMargin: '420px 0px 420px 0px' });
        io.observe(video);
      } else {
        const p = video.play();
        if (p && p.catch) p.catch(()=>{});
      }
    });
  }

  function closeMobileMenuOnClick(){
    document.addEventListener('click', e => {
      const link = e.target.closest('.mobile-menu a');
      if (!link) return;

      const menu = document.querySelector('.mobile-menu');
      const btn = document.querySelector('.mobile-menu-btn');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        document.body.style.top = '';
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function revealSafety(){
    setTimeout(() => {
      document.querySelectorAll('.anim,[data-animate],.clean-card,.outcome-card,.plan,.demo-card,.playbook-card,.contact-card,.case-study-card,.addon,.clean-note,.opx-video-panel')
        .forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 1.25) {
            el.classList.add('visible','in');
          }
        });
    }, 650);
  }

  function preventDoubleTapZoomDelay(){
    let lastTouch = 0;
    document.addEventListener('touchend', e => {
      const now = Date.now();
      if (now - lastTouch <= 280 && e.target.closest('button,a,.btn')) {
        e.preventDefault();
      }
      lastTouch = now;
    }, { passive:false });
  }

  function run(){
    optimizeVideos();
    closeMobileMenuOnClick();
    revealSafety();
    preventDoubleTapZoomDelay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  window.addEventListener('load', () => {
    setTimeout(optimizeVideos, 200);
    setTimeout(revealSafety, 250);
  });

  window.addEventListener('pageshow', () => {
    setTimeout(optimizeVideos, 120);
  });
})();
