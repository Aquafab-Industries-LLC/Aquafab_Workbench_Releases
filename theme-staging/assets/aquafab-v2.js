(function () {
  'use strict';
  var AF_MM = {
    '/pages/systems': ['Systems', 'Aquatic research systems', 'Six product families from one engineering team. Configure online and get an itemized quote.', 'af-alpha-resp-angle.png'],
    '/collections/fluid-flow-chambers': ['Hydrodynamics', 'Fluid Flow Chambers', 'Recirculating flumes with programmable flow for behavior, biomechanics and sediment work — standard teaching sizes or built to your dimensions.', 'af-flume-clear.png'],
    '/collections/respirometry-systems': ['Physiology', 'Swim Tunnels & Respirometry', 'Swim tunnels for fish swimming studies and metabolic-rate work — Standard sizes from 0.5 L to 100 L or fully custom Alpha systems.', 'af-swim-rainbow-side.png'],
    '/collections/life-support-animal-care': ['Husbandry', 'Life Support & Animal Care', 'Modular holding racks with filtration, monitoring and zebrafish specimen holders.', 'AI_rack.png'],
    '/collections/aquarium-habitat-displays': ['Exhibits', 'Aquarium & Habitat Displays', 'Biome-specific habitats — tide pools with natural tide cycles, reefs with breaking waves — and turnkey public exhibits.', 'af-reef-display.jpg'],
    '/collections/software-control': ['Software', 'Software & Control', 'Aquafab Workbench, the Aquafab Lab Controller, retrofits and PIV flow calibration.', 'af-ws-thermal-live.jpg'],
    '/pages/aquafab-workbench': ['Software', 'Aquafab Workbench', 'Run trials, calibrate flow and analyze results on every Aquafab system, from one application.', 'af-ws-analysis-overlay.jpg'],
    '/products/aquafab-workbench-license': ['Licenses', 'Aquafab Workbench licenses', 'Lab licenses with student and teacher seats. Unlocks PIV, fish tracking and trial analysis.', 'af-ws-launcher.jpg'],
    '/apps/licenses': ['Licenses', 'Manage your licenses', 'See your seat codes, give them to students and free them up at the end of a term.', 'af-ws-launcher.jpg'],
    '/collections/accessories-components': ['Upgrades', 'Accessories & Components', 'Specimen holders, thermal packages, sensors, lighting, stands and installation services.', 'af-cup-holders.jpg'],
    '/pages/aquafab-control': ['Software', 'Aquafab Control', 'The platform behind every system: trial programming, calibration, data logging and alerts.', 'af-alpha-resp-lab.png'],
    '/products/aquafab-lab-controller': ['Hardware', 'Aquafab Lab Controller', 'The console that runs Aquafab Workbench and drives your pumps, heaters and sensors. Also retrofits existing tanks, flumes and racks.', 'af-control-panel.jpg'],
    '/products/piv-flow-calibration': ['New', 'PIV Flow Calibration', 'Measure true test-section velocity and program trials in cm/s.', 'af-swim-tunnel-closeup.png'],
    '/pages/custom-engineering': ['Custom', 'Custom Engineering', 'Instruments that don’t exist yet — designed, built and supported in-house.', 'af-flume-overhead.jpg'],
    '/pages/research': ['Community', 'Research overview', 'Start here: how labs use Aquafab equipment, and the ways to get involved.', 'af-swim-trout-closeup.png'],
    '/blogs/research': ['Case studies', 'Research Spotlights', 'The question, the system we built, and what it made possible.', 'af-carleton-flume.jpg'],
    '/pages/publications': ['Literature', 'Publications', 'Peer-reviewed work that used Aquafab equipment.', 'af-resp-system-lab.jpg'],
    '/pages/research-partners': ['Collaborate', 'Research Partner Program', 'Co-develop instruments, beta-test systems and get featured.', 'af-robotic-mussels.jpg'],
    '/pages/educators': ['Teaching', 'For Educators', 'Classroom equipment and ready-to-run lab exercises.', 'af-swim-school.png'],
    '/pages/resources': ['Library', 'Resource Library', 'Manuals, quick-start guides, software and documents.', 'af-software-workstation.jpg'],
    '/pages/support': ['Owners', 'Support & Service', 'Setup, calibration, parts and warranty help from the engineers who built it.', 'IMG_0178.jpg'],
    '/pages/faq': ['Answers', 'FAQ', 'Ordering, lead times, shipping, installation and support.', 'af-flow-straightener.jpg'],
    '/pages/procurement': ['Purchasing', 'Buying from Aquafab', 'Payment terms, purchase orders, vendor registration and grant quotes.', 'af-flume-blue.png'],
    '/pages/about-us': ['Company', 'About Aquafab', 'Founded by researchers, built for researchers — our story and approach.', 'af-flow-chamber-lab.jpg'],
    '/pages/who-we-serve': ['Audiences', 'Who We Serve', 'Universities, schools, public aquariums and government laboratories.', 'af-planted-display.jpg'],
    '/pages/contact': ['Contact', 'Talk to an engineer', 'Reach the people who design and build our systems — we reply within one business day.', 'af-alpha-resp-trout.png'],
    '/pages/request-a-quote': ['Quotes', 'Request a quote', 'An itemized quote, typically within two business days.', 'af-alpha-resp-front.png']
  };
  var AF_IMG = 'https://cdn.shopify.com/s/files/1/0729/7266/5011/files/';
  function key(href) {
    try { return new URL(href, location.origin).pathname.replace(/\/$/, ''); } catch (e) { return href; }
  }
  function initGrid(grid) {
    if (!grid || grid.querySelector('.af-mm')) return;
    var item = grid.closest('.menu-list__list-item, li');
    var parent = item ? item.querySelector('.menu-list__link') : null;
    var def = parent ? AF_MM[key(parent.getAttribute('href') || '')] : null;
    if (!def) return;
    var panel = document.createElement('aside');
    panel.className = 'af-mm'; panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = '<div class="af-mm__body"><div class="af-mm__media" hidden><img alt="" width="640" height="400" decoding="async"></div><div class="af-mm__copy"><div class="af-mm__eyebrow"></div><div class="af-mm__title"></div><div class="af-mm__text"></div></div></div>';
    var e = panel.querySelector('.af-mm__eyebrow'), t = panel.querySelector('.af-mm__title'), x = panel.querySelector('.af-mm__text'), im = panel.querySelector('.af-mm__media img'), media = panel.querySelector('.af-mm__media');
    var current = null;
    function set(info) { e.textContent = info[0]; t.textContent = info[1]; x.textContent = info[2]; if (info[3]) { im.src = AF_IMG + info[3] + '?width=640'; media.hidden = false; } else { media.hidden = true; } current = info; fitSoon(); }
    function show(info) {
      if (!info || info === current) return;
      current = info; panel.classList.add('is-swapping');
      setTimeout(function () { set(info); panel.classList.remove('is-swapping'); }, 90);
    }
    im.addEventListener('load', fitSoon);
    set(def);
    grid.appendChild(panel); grid.classList.add('af-mm-ready');
    grid.querySelectorAll('.mega-menu__list a').forEach(function (a) {
      var info = AF_MM[key(a.getAttribute('href') || '')];
      if (!info) return;
      if (info[3]) { var pre = new Image(); pre.src = AF_IMG + info[3] + '?width=640'; }
      a.addEventListener('mouseenter', function () { show(info); });
      a.addEventListener('focus', function () { show(info); });
    });
    grid.addEventListener('mouseleave', function () { show(def); });
  }
  function initAllGrids() { document.querySelectorAll('.mega-menu__grid').forEach(function (g) { initGrid(g); }); }
  /* Horizon clips the open dropdown to a height it measures once, when the item is
     activated: the submenu's own height. Two things made that wrong and cut the boxes
     off at the bottom. The preview panel changes height after that measurement (the
     swap, the image arriving), and in the "More" menu the panel that is actually open
     is the overflow container, which is taller than the one submenu it measures.
     So measure what is really open, and correct the height whenever it can change. */
  function fitMenu() {
    var hm = document.querySelector('header-menu');
    var hc = hm && hm.closest('header-component');
    if (!hc) return;
    var cur = parseFloat(hc.style.getPropertyValue('--submenu-height')) || 0;
    if (cur <= 0) return; /* closed or closing: leave it to Horizon */
    var open = null;
    if (hm.dataset.overflowExpanded === 'true') {
      var list = hm.querySelector('overflow-list');
      open = list && list.shadowRoot ? list.shadowRoot.querySelector('[part="overflow"]') : null;
    } else {
      var link = hm.querySelector('.menu-list__list-item:not([slot="overflow"]) > .menu-list__link[aria-expanded="true"]');
      open = link ? link.parentElement.querySelector('.menu-list__submenu') : null;
    }
    var h = open ? open.offsetHeight : 0;
    if (h > 0 && Math.abs(h - cur) > 1) hc.style.setProperty('--submenu-height', h + 'px');
  }
  var fitTimers = [];
  function fitSoon() {
    fitTimers.forEach(clearTimeout);
    /* Horizon's own observer can re-set the height for up to 500 ms after activation. */
    fitTimers = [0, 120, 260, 620].map(function (ms) { return setTimeout(fitMenu, ms); });
  }
  window.addEventListener('resize', fitSoon);
  function onEnter(ev) {
    fitSoon();
    var path = ev.composedPath ? ev.composedPath() : [ev.target];
    for (var i = 0; i < path.length; i++) {
      var n = path[i];
      if (n && n.classList && n.classList.contains('menu-list__list-item')) { initGrid(n.querySelector('.mega-menu__grid')); return; }
    }
  }
  document.addEventListener('pointerover', onEnter, true);
  document.addEventListener('focusin', onEnter, true);
  function initHeaderCta() {
    if (document.querySelector('.af-header-cta')) return;
    var actions = document.querySelector('header-actions');
    if (!actions) return;
    var a = document.createElement('a');
    a.href = '/pages/request-a-quote'; a.className = 'af-header-cta'; a.textContent = 'Request a quote';
    actions.insertAdjacentElement('afterend', a);
  }

  /* Configurator: groups shown only when another group has a given value */
  function syncShowIf(root) {
    (root || document).querySelectorAll('[data-af-config]').forEach(function (cfg) {
      cfg.querySelectorAll('[data-show-if-group]').forEach(function (fs) {
        var src = cfg.querySelector('input[name="' + fs.getAttribute('data-show-if-group') + '"]:checked');
        var show = !!src && src.value === fs.getAttribute('data-show-if-value');
        if (show === !fs.hidden) return;
        fs.hidden = !show;
        if (!show) fs.querySelectorAll('input:checked').forEach(function (i) { i.checked = false; i.dispatchEvent(new Event('change', { bubbles: true })); });
      });
    });
  }
  document.addEventListener('change', function (e) { if (e.target && e.target.closest && e.target.closest('[data-af-config]')) syncShowIf(); });

  /* Resource library: filter by system family */
  function syncLibrary(lib) {
    var sel = lib.querySelector('[data-af-sys]'); if (!sel) return;
    var v = sel.value, any = false;
    lib.querySelectorAll('[data-af-res]').forEach(function (r) {
      var sys = r.getAttribute('data-sys') || '';
      var hideSys = v && sys && sys !== v;
      if (hideSys) r.setAttribute('data-sys-hide', ''); else r.removeAttribute('data-sys-hide');
      if (!hideSys && !r.hidden) any = true;
    });
    var nr = lib.querySelector('[data-af-noresults]'); if (nr) nr.hidden = any;
  }
  document.addEventListener('change', function (e) { if (e.target && e.target.matches && e.target.matches('[data-af-sys]')) syncLibrary(e.target.closest('[data-af-library]')); });
  document.addEventListener('click', function (e) { var lib = e.target && e.target.closest && e.target.closest('[data-af-library]'); if (lib) setTimeout(function () { syncLibrary(lib); }, 0); });
  document.addEventListener('input', function (e) { var lib = e.target && e.target.closest && e.target.closest('[data-af-library]'); if (lib) setTimeout(function () { syncLibrary(lib); }, 0); });

  /* Resource "Request" buttons: jump straight to the request form and fill in the file name */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('[data-af-request]');
    if (!a) return;
    var form = document.getElementById('request-file');
    if (!form) return;
    e.preventDefault();
    var field = form.querySelector('[data-af-request-field]');
    var name = a.getAttribute('data-af-request');
    if (field && name) field.value = name;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    var first = form.querySelector('input[name="contact[name]"]');
    setTimeout(function () {
      if (Math.abs(form.getBoundingClientRect().top) > 240) form.scrollIntoView();
      if (first) first.focus({ preventScroll: true });
    }, 900);
  });

  function run() { initAllGrids(); initHeaderCta(); syncShowIf(); }
  var timer = null;
  new MutationObserver(function () {
    if (timer) return;
    timer = setTimeout(function () { timer = null; run(); }, 60);
  }).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', run);
  document.addEventListener('shopify:section:load', run);
})();