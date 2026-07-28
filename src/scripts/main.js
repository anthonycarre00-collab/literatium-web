(function() {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. DUST MOTES */
  const motesContainer = document.getElementById('motes');
  if (motesContainer && !reduced) {
    for (let i = 0; i < 32; i++) {
      const m = document.createElement('span');
      m.className = 'mote';
      m.style.left = (Math.random() * 100) + '%';
      m.style.animationDuration = (18 + Math.random() * 14) + 's';
      m.style.animationDelay = (-Math.random() * 30) + 's';
      m.style.transform = 'scale(' + (0.4 + Math.random() * 0.9) + ')';
      motesContainer.appendChild(m);
    }
  }

  /* 2. BOOK COVER — opens on click OR auto after 2.5s.
     Snappy: 1.4s rotation, smooth ease. */
  const cover = document.getElementById('cover');
  const coverFace = document.getElementById('cover-face');
  let coverOpened = false;
  if (cover && coverFace) {
  let fallbackTimer;
  let autoTimer;
  function openCover() {
    if (coverOpened) return;
    coverOpened = true;
    clearTimeout(autoTimer);
    coverFace.style.animation = '';
    cover.classList.add('is-open');
    // Trigger hero animations when cover opens (not on page load)
    document.documentElement.classList.add('hero-revealed');
    setTimeout(() => { cover.style.display = 'none'; }, 1200);
    armFallback();
    // Safety net: force-show hero title after 2.5s in case animation fails
    setTimeout(() => {
      var words = document.querySelectorAll('.hero-script-title .word');
      words.forEach(function(w) { w.style.opacity = '1'; w.style.filter = 'none'; w.style.transform = 'none'; });
    }, 2500);
  }
  cover.addEventListener('click', openCover);
  coverFace.addEventListener('click', (e) => { e.stopPropagation(); openCover(); });
  cover.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCover(); } });
  // Auto-open after 2.5s if the user hasn't clicked — keeps the experience flowing.
  autoTimer = setTimeout(openCover, 2500);
  } // end cover guard

  /* 3. SECTION REVEAL via IntersectionObserver + CONDITIONAL FALLBACK */
  const revealEls = document.querySelectorAll('.reveal, .river-map, .interstitial-quote, .gabo-quote, .wax-seal');
  const seen = new WeakSet();
  if ('IntersectionObserver' in window) {
    try {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('in-view');
            seen.add(en.target);
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => io.observe(el));
    } catch(e) { fireFallback(); }
  }
  // CONDITIONAL FALLBACK: only force-show elements IO never saw.
  // Re-armed inside openCover() so it doesn't fire before the user can scroll.
  function fireFallback() {
    revealEls.forEach(el => { if (!seen.has(el)) el.classList.add('force-shown'); });
  }
  function armFallback() {
    clearTimeout(fallbackTimer);
    // Give the user 10s after the cover opens before force-showing anything.
    fallbackTimer = setTimeout(fireFallback, 10000);
  }

  /* 4. GABO QUOTES — word-by-word mist reveal */
  function setupGaboQuote(el) {
    const text = el.textContent.trim();
    const words = text.split(/\s+/);
    el.innerHTML = words.map(w => '<span class="word">' + w + '</span>').join(' ');
    const wordEls = el.querySelectorAll('.word');
    wordEls.forEach((w, i) => { w.style.transitionDelay = (i * 0.09) + 's'; });
  }
  document.querySelectorAll('.gabo-quote, .interstitial-quote').forEach(setupGaboQuote);

  /* 5. RIVER SPINE */
  const riverPin = document.getElementById('river-pin');
  const riverTrail = document.getElementById('river-pin-trail');
  if (riverPin && riverTrail) {
  const riverLabel = document.createElement('div');
  riverLabel.className = 'river-pin-label';
  riverLabel.textContent = 'Folio I';
  document.body.appendChild(riverLabel);
  const sectionMap = [
    { id: 'frontispiece', label: 'Folio I · La Casa' },
    { id: 'casa',         label: 'Folio I · La Casa' },
    { id: 'rooms',        label: 'Folio II · Habitaciones' },
    { id: 'cafe',         label: 'Folio III · Café' },
    { id: 'mompox',       label: 'Folio IV · Mompox' },
    { id: 'sabores',      label: 'Folio V · Sabores' },
    { id: 'cartas',       label: 'Folio VI · Cartas' },
    { id: 'colofon',      label: 'Folio VIII · Colofón' },
  ];
  function updateRiverPin() {
    const scrollPct = window.scrollY / Math.max(1, (document.documentElement.scrollHeight - window.innerHeight));
    const y = Math.max(20, Math.min(window.innerHeight - 20, scrollPct * window.innerHeight));
    riverPin.style.top = y + 'px';
    riverLabel.style.top = y + 'px';
    riverTrail.style.top = '0px';
    riverTrail.style.height = y + 'px';
    let activeIdx = 0;
    const mid = window.innerHeight / 2;
    sectionMap.forEach((s, i) => { const el = document.getElementById(s.id); if (el) { const r = el.getBoundingClientRect(); if (r.top <= mid && r.bottom >= mid) activeIdx = i; } });
    riverLabel.textContent = sectionMap[activeIdx].label;
    riverPin.classList.add('active');
    riverLabel.classList.add('show');
  }
  window.addEventListener('scroll', updateRiverPin, { passive: true });
  window.addEventListener('resize', updateRiverPin);
  updateRiverPin();
  } // end river pin guard

  /* 6. PROGRESS LINE */
  const progressFill = document.getElementById('progress-fill');
  const progressDot = document.getElementById('progress-dot');
  function updateProgress() {
    const scrollPct = window.scrollY / Math.max(1, (document.documentElement.scrollHeight - window.innerHeight));
    if (progressFill) progressFill.style.height = (scrollPct * 100) + 'vh';
    if (progressDot) progressDot.style.top = (scrollPct * window.innerHeight) + 'px';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* 7. PAGE CORNER CURL — click to scroll next */
  document.querySelectorAll('.page-curl, .hero-curl').forEach(curl => {
    curl.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextId = curl.getAttribute('data-next');
      if (nextId) { const target = document.getElementById(nextId); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      else { const about = document.getElementById('casa'); if (about) about.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    curl.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); curl.click(); } });
  });

  /* 8. BUTTERFLY cursor follower */
  const butterfly = document.getElementById('butterfly');
  if (butterfly) {
  const butterflySections = ['mompox', 'cartas'];
  let mouse = { x: -100, y: -100 };
  let butter = { x: -100, y: -100 };
  let butterflyActive = false;
  window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  function checkButterflyVisibility() {
    let inZone = false;
    butterflySections.forEach(id => { const el = document.getElementById(id); if (el) { const r = el.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) inZone = true; } });
    if (inZone !== butterflyActive) { butterflyActive = inZone; butterfly.classList.toggle('active', butterflyActive); }
  }
  window.addEventListener('scroll', checkButterflyVisibility, { passive: true });
  checkButterflyVisibility();
  function animateButterfly() {
    if (butterflyActive && !reduced) {
      butter.x += (mouse.x + 26 - butter.x) * 0.08;
      butter.y += (mouse.y - 20 - butter.y) * 0.08;
      butterfly.style.transform = 'translate(' + butter.x + 'px, ' + butter.y + 'px)';
    }
    requestAnimationFrame(animateButterfly);
  }
  animateButterfly();
  } // end butterfly guard

  /* 9. RIVER MAP — boat travels on scroll */
  const riverMap = document.getElementById('river-map');
  const mapBoat = document.getElementById('map-boat');
  const mapPath = riverMap ? riverMap.querySelector('.map-path') : null;
  if (riverMap && mapBoat && mapPath) {
    const pathLength = mapPath.getTotalLength();
    function updateBoatPosition() {
      const rect = riverMap.getBoundingClientRect();
      const viewportH = window.innerHeight;
      let progress = 0;
      if (rect.top < viewportH && rect.bottom > 0) progress = Math.max(0, Math.min(1, (viewportH - rect.top) / (viewportH + rect.height)));
      else if (rect.top >= viewportH) progress = 0;
      else progress = 1;
      if (riverMap.classList.contains('in-view') || document.body.classList.contains('fallback-reveal')) {
        const boatProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.8));
        const point = mapPath.getPointAtLength(boatProgress * pathLength);
        const ahead = mapPath.getPointAtLength(Math.min(pathLength, boatProgress * pathLength + 1));
        const behind = mapPath.getPointAtLength(Math.max(0, boatProgress * pathLength - 1));
        const angle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x);
        mapBoat.setAttribute('transform', 'translate(' + point.x + ',' + point.y + ') rotate(' + (angle * 180 / Math.PI + 90) + ')');
      }
    }
    window.addEventListener('scroll', updateBoatPosition, { passive: true });
    window.addEventListener('resize', updateBoatPosition);
    updateBoatPosition();
  }

  
  /* MOMPOX SUB-NAV — two modes:
     (1) On /mompox and /mompox/* pages: always visible, active link set by URL path.
     (2) On home page: scroll-spy on the Mompox-family sections (#mompox, #viaje, #sabores, #diccionario). */
  const mompoxSubnav = document.getElementById('mompox-subnav');
  const mompoxFamily = ['mompox', 'viaje', 'sabores', 'diccionario'];
  const mompoxSubnavLinks = mompoxSubnav ? mompoxSubnav.querySelectorAll('a') : [];
  const path = window.location.pathname;
  // Detect if we're on a dedicated Mompox page (path starts with /mompox)
  const onMompoxPage = path === '/mompox' || path.startsWith('/mompox/');

  // Map home-page section IDs to the closest subnav link
  const homeSectionToSubnav = {
    mompox: '/mompox',
    viaje: '/mompox/mapas',
    sabores: '/mompox/sabores',
    diccionario: '/mompox/palabras'
  };

  function setActiveByHref(href) {
    mompoxSubnavLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === href);
    });
  }

  function updateMompoxSubnav() {
    if (!mompoxSubnav) return;
    if (onMompoxPage) {
      // Always show on dedicated Mompox pages; active link = current URL
      mompoxSubnav.classList.add('show');
      setActiveByHref(path);
      return;
    }
    // Home page scroll-spy
    let inFamily = false;
    let activeId = '';
    mompoxFamily.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.2) {
          inFamily = true;
          activeId = id;
        }
      }
    });
    mompoxSubnav.classList.toggle('show', inFamily);
    if (inFamily && activeId && homeSectionToSubnav[activeId]) {
      setActiveByHref(homeSectionToSubnav[activeId]);
    } else {
      mompoxSubnavLinks.forEach(link => link.classList.remove('active'));
    }
  }
  window.addEventListener('scroll', updateMompoxSubnav, { passive: true });
  window.addEventListener('resize', updateMompoxSubnav);
  updateMompoxSubnav();

  /* 10a. MARQUEE — pause only when hovering a polaroid, not the whole section */
  document.querySelectorAll('.polaroid').forEach(function(pol) {
    pol.addEventListener('mouseenter', function() {
      var row = pol.closest('.marquee-row');
      if (row) row.style.animationPlayState = 'paused';
    });
    pol.addEventListener('mouseleave', function() {
      var row = pol.closest('.marquee-row');
      if (row) row.style.animationPlayState = 'running';
    });
  });

  /* 10b. POLAROID + SPACE PLATE click → zoom */
  function createZoom(src, alt) {
    const overlay = document.createElement('div');
    overlay.className = 'zoom-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,36,25,0.94);backdrop-filter:blur(12px);z-index:200;display:flex;align-items:center;justify-content:center;padding:2rem;cursor:zoom-out;';
    const big = document.createElement('img');
    big.src = src; big.alt = alt || '';
    big.style.cssText = 'max-width:90vw;max-height:85vh;border:1px solid #C9A04E;outline:1px solid #8B6520;outline-offset:8px;box-shadow:0 30px 80px rgba(0,0,0,0.7);';
    overlay.appendChild(big);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  }
  document.addEventListener('click', (e) => { const pol = e.target.closest('.polaroid, .space-plate'); if (pol) { const img = pol.querySelector('img'); if (img) createZoom(img.src, img.alt); } });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { const z = document.querySelector('.zoom-overlay'); if (z) z.remove(); } });

  /* 11. HERO PARALLAX */
  const heroSection = document.getElementById('frontispiece');
  if (heroSection && !reduced) {
    const polaroidData = [
      { sel: '.hero-polaroid.p1', depth: 0.15, baseRot: -6 },
      { sel: '.hero-polaroid.p2', depth: 0.25, baseRot: 5 },
      { sel: '.hero-polaroid.p3', depth: 0.20, baseRot: 4 },
      { sel: '.hero-polaroid.p4', depth: 0.18, baseRot: -4 },
    ];
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      polaroidData.forEach(p => {
        const el = document.querySelector(p.sel);
        if (!el) return;
        const tx = -cx * 30 * p.depth * 10;
        const ty = -cy * 20 * p.depth * 10;
        el.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) rotate(' + p.baseRot + 'deg)';
      });
    });
    window.addEventListener('scroll', () => {
      const sc = window.scrollY;
      if (sc < window.innerHeight) {
        polaroidData.forEach(p => {
          const el = document.querySelector(p.sel);
          if (!el) return;
          el.style.transform = 'translateY(' + (sc * p.depth * 1.5) + 'px) rotate(' + p.baseRot + 'deg)';
        });
      }
    }, { passive: true });
  }
})();
