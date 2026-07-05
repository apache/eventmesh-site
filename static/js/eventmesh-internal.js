/* ============================================================
   EventMesh Internal Pages — Unified Nav & Theme Toggle
   Makes Docusaurus nav match the homepage + adds dark/light switch
   Uses MutationObserver to survive Docusaurus React hydration
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_KEY = 'eventmesh-theme';
  const HOMEPAGE_NAV_LINKS = [
    { href: '/#features', label: 'Features', en: 'Features', zh: '\u7279\u6027' },
    { href: '/#architecture', label: 'Architecture', en: 'Architecture', zh: '\u67b6\u6784' },
    { href: '/#a2a', label: 'Agent Mesh', en: 'Agent Mesh', zh: 'Agent Mesh' },
    { href: '/docs/introduction', label: 'Documentation', en: 'Documentation', zh: '\u6587\u6863' },
    { href: '/download', label: 'Download', en: 'Download', zh: '\u4e0b\u8f7d' },
    { type: 'dropdown', label: 'Community', en: 'Community', zh: '\u793e\u533a', children: [
      { href: '/community/how-to-subscribe', label: 'Subscribe', en: 'Subscribe', zh: '\u8ba2\u9605' },
      { href: '/team', label: 'Team', en: 'Team', zh: '\u56e2\u961f' },
    ]},
    { href: '/blog', label: 'Blog', en: 'Blog', zh: '\u535a\u5ba2' },
  ];

  // Count expected non-dropdown links
  const EXPECTED_LINK_COUNT = HOMEPAGE_NAV_LINKS.filter(function (i) { return !i.type || i.type !== 'dropdown'; }).length;

  const ICON_SUN = '<svg class="em-theme-icon-sun" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>';
  const ICON_MOON = '<svg class="em-theme-icon-moon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style="display:none"><path fill="currentColor" d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/></svg>';
  const GITHUB_ICON = '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';

  var starCount = null;
  var isNormalizing = false;
  var observer = null;
  var observerDebounce = null;

  /* ---- Theme helpers ---- */
  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  }

  function setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    localStorage.setItem('theme', theme); // Sync with Docusaurus color mode
    updateThemeIcons(theme);
  }

  function toggleTheme() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  function updateThemeIcons(theme) {
    document.querySelectorAll('.em-theme-toggle').forEach(function (btn) {
      var sun = btn.querySelector('.em-theme-icon-sun');
      var moon = btn.querySelector('.em-theme-icon-moon');
      if (sun && moon) {
        sun.style.display = theme === 'light' ? 'none' : 'inline-block';
        moon.style.display = theme === 'light' ? 'inline-block' : 'none';
      }
      var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    });
  }

  function createThemeToggle() {
    var btn = document.createElement('button');
    btn.className = 'em-theme-toggle';
    btn.type = 'button';
    btn.innerHTML = ICON_SUN + ICON_MOON;
    btn.addEventListener('click', toggleTheme);
    return btn;
  }

  /* ---- Check if normalization is already done ---- */
  function isAlreadyNormalized() {
    // Check if injected links exist with correct count
    var existingLinks = document.querySelectorAll('.navbar__items:not(.navbar__items--right) > .em-injected-link');
    if (existingLinks.length !== EXPECTED_LINK_COUNT) return false;

    // Check if dropdown exists
    var dropdown = document.querySelector('.navbar__items:not(.navbar__items--right) > .em-injected-dropdown');
    if (!dropdown) return false;

    // Check if theme toggle exists
    var toggle = document.querySelector('.navbar__items--right > .em-theme-toggle');
    if (!toggle) return false;

    // Check if language toggle exists
    var langToggle = document.querySelector('.navbar__items--right > .em-lang-toggle');
    if (!langToggle) return false;

    // Check if em-brand-logo exists (we now remove .navbar__logo entirely)
    var brand = document.querySelector('.navbar__brand');
    if (!brand) return false;
    if (!brand.querySelector('.em-brand-logo')) return false;

    // Check if navbar has em-nav-ready class
    var navbar = document.querySelector('.navbar');
    if (!navbar || !navbar.classList.contains('em-nav-ready')) return false;

    return true;
  }

  /* ---- Navbar normalization ---- */
  function normalizeLogo() {
    var brand = document.querySelector('.navbar__brand');
    if (!brand) return;

    var isZh = location.pathname.startsWith('/zh');
    brand.setAttribute('href', isZh ? '/zh/' : '/');

    // Add click handler once
    if (!brand.getAttribute('data-em-logo-fixed')) {
      brand.setAttribute('data-em-logo-fixed', '1');
      brand.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = isZh ? '/zh/' : '/';
      });
    }

    // Clean up ALL existing injected logos (prevent duplicates on re-normalize)
    brand.querySelectorAll('.em-brand-logo').forEach(function (el) { el.remove(); });

    // Remove Docusaurus original logo container completely
    var docusaurusLogo = brand.querySelector('.navbar__logo');
    if (docusaurusLogo) docusaurusLogo.remove();

    // Remove any stray <img> directly inside brand (React might re-add)
    brand.querySelectorAll(':scope > img').forEach(function (el) { el.remove(); });

    // Create clean logo container
    var logoContainer = document.createElement('div');
    logoContainer.className = 'em-brand-logo';
    var logoImg = document.createElement('img');
    logoImg.src = '/images/logo.svg';
    logoImg.alt = 'Apache EventMesh Logo';
    logoImg.style.cssText = 'width:36px;height:36px;filter:drop-shadow(0 0 8px var(--em-green-glow));';
    logoContainer.appendChild(logoImg);

    // Insert before title element
    var title = brand.querySelector('.navbar__title');
    if (title) {
      brand.insertBefore(logoContainer, title);
    } else {
      brand.appendChild(logoContainer);
    }

    // Update title
    var title = brand.querySelector('.navbar__title');
    if (title) {
      if (!title.getAttribute('data-em-updated')) {
        title.setAttribute('data-em-updated', '1');
        title.innerHTML = 'Apache <span style="color:var(--em-green)">EventMesh</span>';
      }
    }
  }

  function normalizeNavLinks() {
    var isZh = location.pathname.startsWith('/zh');
    var leftItems = document.querySelector('.navbar__items:not(.navbar__items--right)');
    if (!leftItems) return;

    // Hide ALL original Docusaurus items
    leftItems.querySelectorAll(':scope > :not(.em-injected-link):not(.em-injected-dropdown):not(.navbar__brand)').forEach(function (el) {
      el.style.display = 'none';
    });

    // Remove previously injected links and dropdowns
    leftItems.querySelectorAll('.em-injected-link, .em-injected-dropdown').forEach(function (el) { el.remove(); });

    HOMEPAGE_NAV_LINKS.forEach(function (item) {
      if (item.type === 'dropdown') {
        var dropdown = document.createElement('div');
        dropdown.className = 'nav-dropdown em-injected-dropdown';

        var toggle = document.createElement('span');
        toggle.className = 'nav-link nav-dropdown-toggle';
        toggle.textContent = isZh ? item.zh : item.en;
        dropdown.appendChild(toggle);

        var menu = document.createElement('div');
        menu.className = 'nav-dropdown-menu';
        item.children.forEach(function (child) {
          var ca = document.createElement('a');
          ca.className = 'nav-dropdown-item';
          ca.href = isZh ? '/zh' + child.href : child.href;
          ca.textContent = isZh ? child.zh : child.en;
          menu.appendChild(ca);
        });
        dropdown.appendChild(menu);
        leftItems.appendChild(dropdown);

        toggle.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var isOpen = dropdown.classList.contains('open');
          document.querySelectorAll('.nav-dropdown.open, .em-injected-dropdown.open').forEach(function (d) {
            d.classList.remove('open');
          });
          if (!isOpen) dropdown.classList.add('open');
        });
      } else {
        var a = document.createElement('a');
        a.className = 'em-injected-link';
        a.href = isZh ? '/zh' + item.href : item.href;
        a.textContent = isZh ? item.zh : item.en;

        // Anchor links need full page navigation from internal pages
        if (item.href.startsWith('/#')) {
          a.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = (isZh ? '/zh' : '') + item.href;
          });
        }

        leftItems.appendChild(a);
      }
    });
  }

  function updateGitHubStars() {
    document.querySelectorAll('.em-github-stars .em-star-count').forEach(function (el) {
      if (starCount !== null) {
        el.textContent = starCount >= 1000 ? (starCount / 1000).toFixed(1) + 'k' : starCount.toString();
      }
    });
  }

  function normalizeGitHubButton() {
    var rightItems = document.querySelector('.navbar__items--right');
    if (!rightItems) return;

    rightItems.querySelectorAll('.em-github-stars').forEach(function (el) { el.remove(); });

    var a = document.createElement('a');
    a.className = 'em-github-stars';
    a.href = 'https://github.com/apache/eventmesh';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = GITHUB_ICON + '<span class="em-star-count">' + (starCount ? (starCount >= 1000 ? (starCount / 1000).toFixed(1) + 'k' : starCount) : '2.1k') + '</span>';
    rightItems.appendChild(a);

    if (starCount === null) {
      fetch('https://api.github.com/repos/apache/eventmesh')
        .then(function (res) { return res.json(); })
        .then(function (data) {
          starCount = (data && data.stargazers_count) ? data.stargazers_count : 2100;
          updateGitHubStars();
        })
        .catch(function () {
          starCount = 2100;
          updateGitHubStars();
        });
    }
  }

  function normalizeThemeToggle() {
    var rightItems = document.querySelector('.navbar__items--right');
    if (!rightItems) return;

    rightItems.querySelectorAll('.em-theme-toggle').forEach(function (el) { el.remove(); });

    var toggle = createThemeToggle();
    rightItems.insertBefore(toggle, rightItems.firstChild);
    updateThemeIcons(getTheme());
  }

  function normalizeLanguageToggle() {
    var rightItems = document.querySelector('.navbar__items--right');
    if (!rightItems) return;

    rightItems.querySelectorAll('.em-lang-toggle').forEach(function (el) { el.remove(); });

    var isZh = location.pathname.startsWith('/zh');
    // Map current page path to opposite language path
    var oppositePath;
    if (isZh) {
      oppositePath = location.pathname.replace(/^\/zh/, '');
      // Prevent empty path
      if (!oppositePath || oppositePath === '/') oppositePath = '/';
    } else {
      oppositePath = '/zh' + location.pathname;
    }

    var langLink = document.createElement('a');
    langLink.className = 'em-lang-toggle';
    langLink.href = oppositePath;
    langLink.textContent = isZh ? 'EN' : '\u4e2d\u6587'; // 中文
    langLink.title = isZh ? 'Switch to English' : '\u5207\u6362\u5230\u4e2d\u6587';
    langLink.setAttribute('aria-label', langLink.title);

    rightItems.insertBefore(langLink, rightItems.firstChild);
  }

  function hideOriginalRightItems() {
    var rightItems = document.querySelector('.navbar__items--right');
    if (!rightItems) return;

    rightItems.querySelectorAll(':scope > :not(.em-theme-toggle):not(.em-github-stars):not(.em-lang-toggle)').forEach(function (el) {
      el.style.display = 'none';
    });
  }

  function normalizeNavbar() {
    // Prevent re-entry — critical to avoid MutationObserver loop
    if (isNormalizing) return;
    isNormalizing = true;

    // Disconnect observer while we modify the DOM
    if (observer) observer.disconnect();

    try {
      // Skip if already normalized (avoids unnecessary DOM thrashing)
      if (isAlreadyNormalized()) {
        return;
      }

      var navbar = document.querySelector('.navbar');
      if (navbar) navbar.classList.remove('em-nav-ready');

      normalizeLogo();
      normalizeNavLinks();
      hideOriginalRightItems();
      normalizeThemeToggle();
      normalizeLanguageToggle();
      normalizeGitHubButton();

      if (navbar) navbar.classList.add('em-nav-ready');
    } finally {
      isNormalizing = false;
      // Reconnect observer after we're done
      if (observer && document.querySelector('.navbar')) {
        observer.observe(document.querySelector('.navbar'), { childList: true, subtree: true });
      }
    }
  }

  /* ---- Instant logo cleanup: runs synchronously to kill old logo before it paints ---- */
  function instantLogoCleanup() {
    // Immediately remove any Docusaurus-original logo that React may have re-created.
    // This is a fast-path that runs BEFORE the debounced full normalization.
    var brand = document.querySelector('.navbar__brand');
    if (!brand) return;
    var oldLogo = brand.querySelector('.navbar__logo');
    if (oldLogo) oldLogo.remove();
    // Also remove stray img directly inside brand
    var strayImg = brand.querySelector(':scope > img:not(.em-brand-logo *)');
    if (strayImg) strayImg.remove();
  }

  /* ---- MutationObserver — only triggers when Docusaurus React changes the DOM ---- */
  function observeNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;

    observer = new MutationObserver(function (mutations) {
      // Ignore mutations during our own normalization
      if (isNormalizing) return;

      // IMMEDIATE: check for any added navbar__logo and remove it synchronously.
      // This prevents the old logo from flashing even for a single frame.
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        for (var j = 0; j < m.addedNodes.length; j++) {
          var node = m.addedNodes[j];
          if (node.nodeType === 1) {
            // Check if the added node itself is a navbar__logo
            if (node.classList && node.classList.contains('navbar__logo')) {
              node.remove();
              continue;
            }
            // Check if an added subtree contains navbar__logo
            if (node.querySelector) {
              var logos = node.querySelectorAll('.navbar__logo');
              for (var k = 0; k < logos.length; k++) {
                logos[k].remove();
              }
            }
          }
        }
      }

      // Only react to relevant mutations (added/removed nodes in navbar items)
      var relevant = false;
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        // Check if mutation affects navbar items area
        for (var j = 0; j < m.addedNodes.length; j++) {
          var node = m.addedNodes[j];
          if (node.nodeType === 1 && (node.classList.contains('navbar__item') || node.classList.contains('navbar__items'))) {
            relevant = true;
            break;
          }
        }
        for (j = 0; j < m.removedNodes.length; j++) {
          node = m.removedNodes[j];
          if (node.nodeType === 1 && (node.classList.contains('navbar__item') || node.classList.contains('navbar__items') || node.classList.contains('em-injected-link'))) {
            relevant = true;
            break;
          }
        }
        if (relevant) break;

        // Also check if target is navbar__items
        if (m.target && m.target.classList && (m.target.classList.contains('navbar__items') || m.target === navbar)) {
          relevant = true;
          break;
        }
      }

      if (!relevant) return;

      // Also do a quick synchronous cleanup for stray logos
      instantLogoCleanup();

      // Remove em-nav-ready class immediately so FOUC prevention CSS hides navbar items
      if (navbar) navbar.classList.remove('em-nav-ready');

      // Debounce: wait for React to finish before re-normalizing
      if (observerDebounce) clearTimeout(observerDebounce);
      observerDebounce = setTimeout(function () {
        if (isNormalizing) return;
        // Only re-normalize if our injected elements got removed
        if (!isAlreadyNormalized()) {
          normalizeNavbar();
        }
      }, 80);
    });

    observer.observe(navbar, { childList: true, subtree: true });
  }

  /* ---- Dropdown click-outside handler ---- */
  function initDropdownCloser() {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown') && !e.target.closest('.em-injected-dropdown')) {
        document.querySelectorAll('.nav-dropdown.open, .em-injected-dropdown.open').forEach(function (d) {
          d.classList.remove('open');
        });
      }
    });
  }

  /* ---- Initialize ---- */
  function init() {
    setTheme(getTheme());
    normalizeNavbar();
    observeNavbar();
    initDropdownCloser();
  }

  /* ---- Docusaurus CSR compatibility: wait for React to render navbar ---- */
  function waitForNavbar() {
    // Check if navbar is already in the DOM
    if (document.querySelector('.navbar')) {
      init();
      return;
    }
    // Use MutationObserver to detect when React mounts the navbar
    var observer = new MutationObserver(function (mutations, obs) {
      if (document.querySelector('.navbar')) {
        obs.disconnect();
        init();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // Safety timeout: init after 5s regardless
    setTimeout(function () {
      observer.disconnect();
      if (!document.querySelector('.navbar')) return;
      init();
    }, 5000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForNavbar);
  } else {
    waitForNavbar();
  }
})();
