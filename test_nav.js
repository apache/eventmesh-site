const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const errors = [];
  let passed = 0, failed = 0;

  function check(name, condition, detail) {
    if (condition) {
      passed++;
      console.log(`  ✓ ${name}`);
    } else {
      failed++;
      console.log(`  ✗ ${name} — ${detail}`);
      errors.push(name + ': ' + detail);
    }
  }

  const BASE = 'http://localhost:8080';
  const PAGES = [
    { url: '/', label: 'Homepage (EN)', selector: '.nav-inner' },
    { url: '/zh/', label: 'Homepage (ZH)', selector: '.nav-inner' },
    { url: '/docs/introduction/', label: 'Docs Intro (EN)', selector: '.navbar' },
    { url: '/zh/docs/introduction/', label: 'Docs Intro (ZH)', selector: '.navbar' },
    { url: '/download/', label: 'Download (EN)', selector: '.navbar' },
    { url: '/zh/download/', label: 'Download (ZH)', selector: '.navbar' },
    { url: '/community/how-to-subscribe/', label: 'Community Subscribe (EN)', selector: '.navbar' },
    { url: '/zh/community/how-to-subscribe/', label: 'Community Subscribe (ZH)', selector: '.navbar' },
    { url: '/team/', label: 'Team (EN)', selector: '.navbar' },
    { url: '/zh/team/', label: 'Team (ZH)', selector: '.navbar' },
    { url: '/blog/', label: 'Blog (EN)', selector: '.navbar' },
    { url: '/zh/blog/', label: 'Blog (ZH)', selector: '.navbar' },
  ];

  // ---- Test 1: All pages load without JS errors ----
  console.log('\n=== Test 1: Page Load & JS Errors ===');
  for (const page of PAGES) {
    const p = await browser.newPage();
    const jsErrors = [];
    p.on('pageerror', err => jsErrors.push(err.message));
    await p.goto(BASE + page.url, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1000); // Wait for MutationObserver + debounce
    check(`${page.label} no JS errors`, jsErrors.length === 0,
      `JS errors: ${jsErrors.join('; ')}`);
    await p.close();
  }

  // ---- Test 2: Homepage nav bar structure ----
  console.log('\n=== Test 2: Homepage Nav Bar ===');
  for (const page of PAGES.filter(p => p.label.includes('Homepage'))) {
    const p = await browser.newPage();
    await p.goto(BASE + page.url, { waitUntil: 'networkidle' });
    await p.waitForTimeout(500);

    // Logo exists
    const logoImg = await p.$('.nav-brand-logo img');
    check(`${page.label} logo exists`, !!logoImg, 'No logo found');
    if (logoImg) {
      const logoSize = await logoImg.boundingBox();
      check(`${page.label} logo 36x36`, logoSize && Math.abs(logoSize.width - 36) < 2 && Math.abs(logoSize.height - 36) < 2,
        `Logo size: ${JSON.stringify(logoSize)}`);
    }

    // Brand text is horizontal
    const brandText = await p.$('.nav-brand-text');
    check(`${page.label} brand text exists`, !!brandText, 'No brand text');
    if (brandText) {
      const text = await brandText.textContent();
      const isOneLine = !text.includes('\n') || text.trim().split(/\s+/).length <= 3;
      check(`${page.label} brand text is one line`, isOneLine, `Text: "${text}"`);
    }

    // Language toggle exists (should show opposite language)
    const langToggle = await p.$('.nav-lang');
    check(`${page.label} lang toggle exists`, !!langToggle, 'No language toggle');
    if (langToggle) {
      const lang = await langToggle.textContent();
      check(`${page.label} lang toggle shows correct text`,
        (page.url === '/' && lang.trim() === '中文') || (page.url === '/zh/' && lang.trim() === 'EN'),
        `Lang text: "${lang.trim()}"`);
    }

    // Theme toggle exists
    const themeToggle = await p.$('.nav-theme-toggle');
    check(`${page.label} theme toggle exists`, !!themeToggle, 'No theme toggle');

    // Check nav links (ignore pseudo-element ▾ arrow in textContent)
    const navLinks = await p.$$eval('.nav-link', els => els.map(e => e.textContent.replace(/[▾\s]/g, '').trim()));
    const expectedLinks = page.url === '/' ?
      ['Features', 'Architecture', 'AgentMesh', 'Documentation', 'Download', 'Community', 'Blog'] :
      ['特性', '架构', 'AgentMesh', '文档', '下载', '社区', '博客'];
    check(`${page.label} nav links match expected`, JSON.stringify(navLinks) === JSON.stringify(expectedLinks),
      `Got: ${JSON.stringify(navLinks)}\nExpected: ${JSON.stringify(expectedLinks)}`);

    // "中文" is NOT vertical — check it's displayed inline
    if (langToggle) {
      const langBox = await langToggle.boundingBox();
      const langText = await p.$eval('.nav-lang', el => el.textContent.trim());
      if (langBox && langText.length === 2) {
        // For "中文" (2 chars), horizontal should be much wider than tall
        const isHorizontal = langBox.width > langBox.height * 1.05;
        check(`${page.label} "中文"/"EN" is horizontal`, isHorizontal,
          `Box: ${JSON.stringify(langBox)}, text: "${langText}"`);
      }
    }

    await p.close();
  }

  // ---- Test 3: Internal pages nav bar structure ----
  console.log('\n=== Test 3: Internal Pages Nav Bar ===');
  const internalPages = PAGES.filter(p => !p.label.includes('Homepage'));
  for (const page of internalPages) {
    const p = await browser.newPage();
    await p.goto(BASE + page.url, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1000); // Wait for JS injection

    // Check navbar is ready (em-nav-ready class)
    const navbar = await p.$('.navbar.em-nav-ready');
    check(`${page.label} nav is em-nav-ready`, !!navbar, 'Navbar did not get em-nav-ready class');

    // Check injected links exist
    const injectedLinks = await p.$$('.em-injected-link');
    check(`${page.label} has injected links (7-8)`, injectedLinks.length >= 6,
      `Only ${injectedLinks.length} injected links found`);

    // Check dropdown exists
    const dropdown = await p.$('.em-injected-dropdown');
    check(`${page.label} has Community dropdown`, !!dropdown, 'No injected dropdown');

    // Check theme toggle exists
    const themeToggle = await p.$('.em-theme-toggle');
    check(`${page.label} has theme toggle`, !!themeToggle, 'No theme toggle');

    // Check language toggle exists
    const langToggle = await p.$('.em-lang-toggle');
    check(`${page.label} has language toggle`, !!langToggle, 'No language toggle');
    if (langToggle) {
      const lang = await langToggle.textContent();
      const isZh = page.url.includes('/zh/');
      const isCorrect = isZh ? lang.trim() === 'EN' : lang.trim() === '中文';
      check(`${page.label} lang toggle correct`, isCorrect,
        `Got "${lang.trim()}", expected "${isZh ? 'EN' : '中文'}"`);
    }

    // Check logo is using SVG (our injected logo or Docusaurus logo with svg src)
    const logoImg = await p.$('.em-brand-logo img, .navbar__brand img[src$="logo.svg"]');
    check(`${page.label} has injected logo`, !!logoImg, 'No injected logo');
    if (logoImg) {
      const src = await logoImg.getAttribute('src');
      check(`${page.label} logo is SVG`, src === '/images/logo.svg', `Logo src: ${src}`);
    }

    // Check brand text
    const title = await p.$('.navbar__title');
    if (title) {
      const titleText = await title.textContent();
      check(`${page.label} brand is "Apache EventMesh"`, titleText.includes('Apache') && titleText.includes('EventMesh'),
        `Title: "${titleText}"`);
    }

    await p.close();
  }

  // ---- Test 4: Nav bar consistency — same container width ----
  console.log('\n=== Test 4: Container Width Consistency ===');
  // Check that homepage .nav-inner and docusaurus .navbar__inner have same padding container
  const pHome = await browser.newPage();
  await pHome.goto(BASE + '/', { waitUntil: 'networkidle' });
  const navInnerHome = await pHome.$('.nav-inner');
  const homeBox = navInnerHome ? await navInnerHome.boundingBox() : null;
  await pHome.close();

  const pDocs = await browser.newPage();
  await pDocs.goto(BASE + '/docs/introduction/', { waitUntil: 'networkidle' });
  await pDocs.waitForTimeout(1000);
  const navInnerDocs = await pDocs.$('.navbar__inner');
  const docsBox = navInnerDocs ? await navInnerDocs.boundingBox() : null;
  await pDocs.close();

  if (homeBox && docsBox) {
    const homeWidth = homeBox.width;
    const docsWidth = docsBox.width;
    check('Container widths match within 10px', Math.abs(homeWidth - docsWidth) < 10,
      `Home: ${homeWidth}px, Docs: ${docsWidth}px`);
  }

  // ---- Test 5: No FOUC — navbar items are visible after ready ----
  console.log('\n=== Test 5: No FOUC ===');
  for (const page of internalPages.slice(0, 4)) {
    const p = await browser.newPage();
    await p.goto(BASE + page.url, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1000);

    const navItems = await p.$('.navbar__items');
    if (navItems) {
      const opacity = await navItems.evaluate(el => window.getComputedStyle(el).opacity);
      check(`${page.label} navbar items visible (opacity=1)`, parseInt(opacity) === 1 || parseFloat(opacity) >= 0.99,
        `Opacity: ${opacity}`);
    }

    await p.close();
  }

  // ---- Summary ----
  console.log(`\n============================`);
  console.log(`  Results: ${passed} passed, ${failed} failed`);
  console.log(`============================`);

  if (errors.length > 0) {
    console.log('\nFailed checks:');
    errors.forEach(e => console.log(`  - ${e}`));
  }

  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
