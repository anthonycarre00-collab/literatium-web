/* MOTION TOGGLE — user controls animations, not the OS */
function toggleMotion() {
  var html = document.documentElement;
  var isOff = html.classList.toggle('motion-off');
  var btn = document.getElementById('motion-toggle');
  if (btn) btn.textContent = isOff ? 'Animación: OFF' : 'Animación: ON';
  try { localStorage.setItem('literatium-motion', isOff ? 'off' : 'on'); } catch(e) {}
}

/* LANGUAGE TOGGLE — EN/ES swap via data-en attributes */
var currentLang = 'es';
function toggleLang() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  var btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = currentLang;
  // Swap all elements with data-en attribute
  document.querySelectorAll('[data-en]').forEach(function(el) {
    if (currentLang === 'en') {
      if (!el.dataset.origEs) el.dataset.origEs = el.innerHTML;
      el.innerHTML = el.dataset.en;
    } else {
      if (el.dataset.origEs) el.innerHTML = el.dataset.origEs;
    }
  });
  // Swap alt text on images with data-en-alt
  document.querySelectorAll('[data-en-alt]').forEach(function(el) {
    if (currentLang === 'en') {
      if (!el.dataset.origAlt) el.dataset.origAlt = el.alt;
      el.alt = el.dataset.enAlt;
    } else {
      if (el.dataset.origAlt) el.alt = el.dataset.origAlt;
    }
  });
  // Swap <title> and meta description (head elements)
  var titleEl = document.querySelector('title[data-en]');
  if (titleEl) {
    if (currentLang === 'en') {
      if (!titleEl.dataset.origEs) titleEl.dataset.origEs = titleEl.textContent;
      titleEl.textContent = titleEl.dataset.en;
    } else {
      if (titleEl.dataset.origEs) titleEl.textContent = titleEl.dataset.origEs;
    }
  }
  var descEl = document.querySelector('meta[name="description"][data-en]');
  if (descEl) {
    if (currentLang === 'en') {
      if (!descEl.dataset.origEs) descEl.dataset.origEs = descEl.getAttribute('content');
      descEl.setAttribute('content', descEl.dataset.en);
    } else {
      if (descEl.dataset.origEs) descEl.setAttribute('content', descEl.dataset.origEs);
    }
  }
  try { localStorage.setItem('literatium-lang', currentLang); } catch(e) {}
}
// Restore language preference on load
(function() {
  try {
    var lang = localStorage.getItem('literatium-lang');
    if (lang === 'en') toggleLang();
  } catch(e) {}
})();
