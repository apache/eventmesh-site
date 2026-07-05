/* EventMesh shared theme toggle — used on the custom homepage */
(function () {
  'use strict';
  const STORAGE_KEY = 'eventmesh-theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  }

  function setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    localStorage.setItem('theme', theme); // Sync with Docusaurus color mode
    updateIcons(theme);
  }

  function toggleTheme() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  function updateIcons(theme) {
    document.querySelectorAll('.nav-theme-toggle').forEach(function (btn) {
      const sun = btn.querySelector('.icon-sun');
      const moon = btn.querySelector('.icon-moon');
      if (sun && moon) {
        sun.style.display = theme === 'light' ? 'none' : 'inline-block';
        moon.style.display = theme === 'light' ? 'inline-block' : 'none';
      }
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function init() {
    setTheme(getTheme());
    document.querySelectorAll('.nav-theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  }

  /* ---- Docusaurus CSR compatibility: wait for React to render ---- */
  function waitForContent() {
    if (document.querySelector('.nav-theme-toggle')) {
      init();
      return;
    }
    var observer = new MutationObserver(function (mutations, obs) {
      if (document.querySelector('.nav-theme-toggle')) {
        obs.disconnect();
        init();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () {
      observer.disconnect();
      init();
    }, 5000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForContent);
  } else {
    waitForContent();
  }

  window.eventmeshToggleTheme = toggleTheme;
})();
