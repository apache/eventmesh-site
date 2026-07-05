/* ============================================
   Apache EventMesh — Site Interactions
   ============================================ */

(function () {
  'use strict';

  /* ---- Hero Mesh Network Canvas ---- */
  function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, nodes, particles;
    const NODE_COUNT = 40;
    const MAX_DIST = 160;
    const PARTICLE_SPEED = 0.8;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
    }

    function createNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1.5,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    }

    function createParticles() {
      particles = [];
      // Spawn particles that travel along edges
      for (let i = 0; i < 12; i++) {
        spawnParticle();
      }
    }

    function spawnParticle() {
      const fromIdx = Math.floor(Math.random() * nodes.length);
      particles.push({
        fromIdx,
        toIdx: -1,
        progress: 0,
        speed: PARTICLE_SPEED * (0.5 + Math.random() * 0.5),
        life: 1,
      });
    }

    let mouseX = -1000, mouseY = -1000;

    canvas.addEventListener('mousemove', function (e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', function () {
      mouseX = -1000; mouseY = -1000;
    });

    function dist(a, b) {
      return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }

    function isLight() {
      return document.documentElement.getAttribute('data-theme') === 'light';
    }

    function themeColor() {
      return isLight() ? '0, 184, 106' : '0, 217, 126';
    }

    function particleCenterColor() {
      return isLight() ? '34, 211, 238' : '34, 211, 238';
    }

    function particleCoreColor() {
      return isLight() ? '0, 184, 106' : '255, 255, 255';
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;

        // Bounce
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        // Mouse repulsion
        const md = Math.sqrt((n.x - mouseX) ** 2 + (n.y - mouseY) ** 2);
        if (md < 120) {
          const force = (120 - md) / 120;
          n.x += (n.x - mouseX) / md * force * 2;
          n.y += (n.y - mouseY) / md * force * 2;
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = dist(nodes[i], nodes[j]);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.15;
            ctx.strokeStyle = 'rgba(' + themeColor() + ', ' + alpha + ')';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulseR = n.r + Math.sin(n.pulse) * 0.5;
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulseR * 4);
        glow.addColorStop(0, 'rgba(' + themeColor() + ', 0.6)');
        glow.addColorStop(1, 'rgba(' + themeColor() + ', 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(' + themeColor() + ', 0.9)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & draw particles (event flow)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Find a target if needed
        if (p.toIdx < 0) {
          const from = nodes[p.fromIdx];
          let candidates = [];
          for (let j = 0; j < nodes.length; j++) {
            if (j === p.fromIdx) continue;
            const d = dist(from, nodes[j]);
            if (d < MAX_DIST) candidates.push(j);
          }
          if (candidates.length > 0) {
            p.toIdx = candidates[Math.floor(Math.random() * candidates.length)];
          } else {
            particles.splice(i, 1);
            spawnParticle();
            continue;
          }
        }

        p.progress += p.speed * 0.01;
        if (p.progress >= 1) {
          p.fromIdx = p.toIdx;
          p.toIdx = -1;
          p.progress = 0;
        } else if (p.fromIdx >= 0 && p.toIdx >= 0) {
          const from = nodes[p.fromIdx];
          const to = nodes[p.toIdx];
          const px = from.x + (to.x - from.x) * p.progress;
          const py = from.y + (to.y - from.y) * p.progress;

          // Particle trail
          const grad = ctx.createRadialGradient(px, py, 0, px, py, 8);
          grad.addColorStop(0, 'rgba(' + particleCenterColor() + ', 0.9)');
          grad.addColorStop(1, 'rgba(' + particleCenterColor() + ', 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 8, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = 'rgba(' + particleCoreColor() + ', 0.9)';
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Maintain particle count
      while (particles.length < 15) spawnParticle();

      requestAnimationFrame(draw);
    }

    resize();
    createNodes();
    createParticles();
    draw();

    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
        createNodes();
        createParticles();
      }, 200);
    });
  }

  /* ---- Nav Scroll Effect ---- */
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const onScroll = function () {
      if (window.scrollY > 20) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Scroll Reveal ---- */
  function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Mobile Menu ---- */
  function initMobileMenu() {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  /* ---- Terminal Typing ---- */
  function initTerminal() {
    const termBody = document.querySelector('.hero-terminal .terminal-body');
    if (!termBody) return;

    const lines = [
      { html: '<span class="prompt">$</span> <span class="cmd">docker run -d apache/eventmesh</span>', delay: 0 },
      { html: '<span class="out">Pulling image... done</span>', delay: 1200 },
      { html: '<span class="out">EventMesh Runtime started on :10105</span>', delay: 2200 },
      { html: '<span class="out">EventStore connector [RocketMQ] connected</span>', delay: 3200 },
      { html: '<span class="prompt">$</span> <span class="cmd">curl localhost:10105/health</span>', delay: 4200 },
      { html: '<span class="out">{"status":"UP","version":"v1.12.0"}</span>', delay: 5200 },
    ];

    let currentLine = 0;
    const allLines = termBody.querySelectorAll('.term-line');
    allLines.forEach(function (l) { l.style.display = 'none'; });

    const cursor = termBody.querySelector('.cursor');
    if (cursor) cursor.style.display = 'none';

    function showNext() {
      if (currentLine >= lines.length) {
        if (cursor) cursor.style.display = 'inline-block';
        return;
      }
      const lineData = lines[currentLine];
      setTimeout(function () {
        const el = allLines[currentLine];
        if (el) {
          el.innerHTML = lineData.html;
          el.style.display = 'block';
        }
        currentLine++;
        showNext();
      }, lineData.delay);
    }

    showNext();
  }

  /* ---- GitHub Stars Count ---- */
  function initGitHubStars() {
    const el = document.querySelector('.btn-gh-stars .count');
    if (!el) return;
    // Animated counter
    const target = parseInt(el.dataset.count || '2100', 10);
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(function () {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current >= 1000 ? (current / 1000).toFixed(1) + 'k' : current;
    }, 20);
  }

  /* ---- Code Tab Switcher ---- */
  function initCodeTabs() {
    const tabs = document.querySelectorAll('.code-tab');
    const bodies = document.querySelectorAll('.code-body');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const target = tab.dataset.tab;
        tabs.forEach(function (t) { t.classList.remove('active'); });
        bodies.forEach(function (b) { b.style.display = 'none'; });
        tab.classList.add('active');
        const body = document.querySelector('.code-body[data-tab="' + target + '"]');
        if (body) body.style.display = 'block';
      });
    });
  }

  /* ---- Nav Dropdown Toggle (Community → Subscribe / Team) ---- */
  function initNavDropdown() {
    document.querySelectorAll('.nav-dropdown-toggle').forEach(function (toggle) {
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var dropdown = toggle.closest('.nav-dropdown');
        if (!dropdown) return;
        var isOpen = dropdown.classList.contains('open');
        // Close all dropdowns first
        document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
          d.classList.remove('open');
        });
        if (!isOpen) dropdown.classList.add('open');
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
          d.classList.remove('open');
        });
      }
    });
  }

  /* ---- Init ---- */
  var inited = false;
  function init() {
    if (inited) return;
    inited = true;
    initHeroCanvas();
    initNavScroll();
    initScrollReveal();
    initMobileMenu();
    initNavDropdown();
    initTerminal();
    initGitHubStars();
    initCodeTabs();
  }

  /* ---- Docusaurus CSR compatibility: wait for React to render ---- */
  function waitForContent() {
    // Check if the homepage content is already in the DOM
    if (document.querySelector('.homepage-wrapper, .hero-terminal, #hero-canvas')) {
      init();
      return;
    }
    // Use MutationObserver to detect when React mounts the content
    var observer = new MutationObserver(function (mutations, obs) {
      if (document.querySelector('.homepage-wrapper, .hero-terminal, #hero-canvas')) {
        obs.disconnect();
        init();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // Safety timeout: init after 5s regardless
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
})();
