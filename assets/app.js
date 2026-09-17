/* ==========================================================================
   MUNDO DO TRABALHO — motor da apresentacao
   Script classico (sem modulos ES) para funcionar ao abrir por duplo clique.
   ========================================================================== */
(function () {
  'use strict';

  var STORE = 'mdt.etapa1.';
  var slides = [];
  var current = 0;
  var revealStep = 0;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function save(key, value) {
    try { localStorage.setItem(STORE + key, JSON.stringify(value)); } catch (e) { /* modo privado */ }
  }
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(STORE + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }

  /* --- Navegacao --------------------------------------------------------- */

  function revealItems(slide) {
    return $$('[data-reveal]', slide).sort(function (a, b) {
      return (+a.getAttribute('data-reveal')) - (+b.getAttribute('data-reveal'));
    });
  }

  function applyReveal(slide, step) {
    revealItems(slide).forEach(function (el) {
      el.classList.toggle('is-on', (+el.getAttribute('data-reveal')) <= step);
    });
  }

  function maxReveal(slide) {
    var items = revealItems(slide);
    if (!items.length) return 0;
    return +items[items.length - 1].getAttribute('data-reveal');
  }

  function slideFromHash() {
    var n = parseInt(location.hash.replace('#', ''), 10);
    if (isNaN(n) || n < 1 || n > slides.length) return null;
    return n - 1;
  }

  function go(index, opts) {
    opts = opts || {};
    index = Math.max(0, Math.min(slides.length - 1, index));
    var prev = slides[current];
    if (prev) prev.classList.remove('is-current');

    current = index;
    var slide = slides[current];
    slide.classList.add('is-current');

    revealStep = opts.revealAll ? maxReveal(slide) : 0;
    applyReveal(slide, revealStep);

    updateChrome();
    if (location.hash !== '#' + (current + 1)) {
      history.replaceState(null, '', '#' + (current + 1));
    }
    save('last', current);
  }

  function next() {
    var slide = slides[current];
    if (revealStep < maxReveal(slide)) {
      revealStep++;
      applyReveal(slide, revealStep);
      return;
    }
    if (current < slides.length - 1) go(current + 1);
  }

  function prev() {
    var slide = slides[current];
    if (revealStep > 0) {
      revealStep--;
      applyReveal(slide, revealStep);
      return;
    }
    if (current > 0) go(current - 1, { revealAll: true });
  }

  /* --- Cromo: regua, ticks, contador ------------------------------------- */

  var rail, railName, railNum, ticksWrap, counter;

  function blockOf(slide) { return slide.getAttribute('data-block') || '1'; }

  function buildTicks() {
    ticksWrap.innerHTML = '';
    slides.forEach(function (slide, i) {
      var t = document.createElement('button');
      t.className = 'tick';
      t.type = 'button';
      t.setAttribute('data-block', blockOf(slide));
      t.setAttribute('aria-label', 'Ir para o slide ' + (i + 1));
      t.addEventListener('click', function () { go(i); });
      ticksWrap.appendChild(t);
    });
  }

  function updateChrome() {
    var slide = slides[current];
    railName.textContent = slide.getAttribute('data-blockname') || '';
    railNum.textContent = blockOf(slide);
    counter.innerHTML = '<b>' + (current + 1) + '</b> / ' + slides.length;

    $$('.tick', ticksWrap).forEach(function (t, i) {
      t.classList.toggle('is-current', i === current);
      t.classList.toggle('is-seen', i <= current);
    });

    $$('.ovcard').forEach(function (c, i) {
      c.classList.toggle('is-current', i === current);
    });
  }

  /* --- Visao geral -------------------------------------------------------- */

  var overview;

  function buildOverview() {
    var grid = $('.overview__grid', overview);
    grid.innerHTML = '';
    slides.forEach(function (slide, i) {
      var b = document.createElement('button');
      b.className = 'ovcard';
      b.type = 'button';
      b.setAttribute('data-block', blockOf(slide));
      var title = slide.getAttribute('data-title') || ('Slide ' + (i + 1));
      b.innerHTML = '<span class="ovcard__n">' + (i + 1) + '</span><span class="ovcard__t"></span>';
      $('.ovcard__t', b).textContent = title;
      b.addEventListener('click', function () { toggleOverview(false); go(i); });
      grid.appendChild(b);
    });
  }

  function toggleOverview(force) {
    var on = typeof force === 'boolean' ? force : !overview.classList.contains('is-on');
    overview.classList.toggle('is-on', on);
    if (on) {
      var cur = $$('.ovcard')[current];
      if (cur) cur.scrollIntoView({ block: 'center' });
    }
  }

  /* --- Tema --------------------------------------------------------------- */

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    save('theme', theme);
  }
  function toggleTheme() {
    setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  }

  /* --- Teclado e toque ----------------------------------------------------- */

  function isTyping(el) {
    return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
  }

  function onKey(e) {
    if (isTyping(e.target)) return;
    var help = $('.help');

    if (e.key === 'Escape') {
      if (help.classList.contains('is-on')) { help.classList.remove('is-on'); return; }
      if (overview.classList.contains('is-on')) { toggleOverview(false); return; }
      return;
    }
    if (help.classList.contains('is-on') && e.key !== '?') return;

    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': case 'Enter':
        if (e.target.classList && (e.target.classList.contains('btn') ||
            e.target.classList.contains('flip') || e.target.classList.contains('adj') ||
            e.target.classList.contains('quad') || e.target.classList.contains('check') ||
            e.target.classList.contains('tab') || e.target.classList.contains('quiz__opt') ||
            e.target.classList.contains('ovcard'))) return;
        e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'ArrowDown':
        e.preventDefault(); if (current < slides.length - 1) go(current + 1); break;
      case 'ArrowUp':
        e.preventDefault(); if (current > 0) go(current - 1, { revealAll: true }); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(slides.length - 1, { revealAll: true }); break;
      case 'o': case 'O': toggleOverview(); break;
      case 't': case 'T': toggleTheme(); break;
      case 'f': case 'F':
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(function () {});
        break;
      case '?': help.classList.toggle('is-on'); break;
    }
  }

  function wireTouch() {
    var x0 = null, y0 = null;
    document.addEventListener('touchstart', function (e) {
      x0 = e.changedTouches[0].clientX; y0 = e.changedTouches[0].clientY;
    }, { passive: true });
    document.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
      x0 = y0 = null;
    }, { passive: true });
  }

  function wireClickAdvance() {
    $('.deck').addEventListener('click', function (e) {
      if (e.target.closest('button, a, input, .code, .preview, .carousel, .adjgrid, .quiz, .checks, .curti')) return;
      next();
    });
  }

  /* --- Widgets ------------------------------------------------------------ */

  function wireFlips() {
    $$('.flip').forEach(function (card) {
      card.setAttribute('type', 'button');
      card.addEventListener('click', function () { card.classList.toggle('is-flipped'); });
    });
  }

  function wireTabs() {
    $$('[data-tabs]').forEach(function (group) {
      var tabs = $$('.tab', group);
      var panes = $$('.tabpane', group);
      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.classList.remove('is-active'); });
          panes.forEach(function (p) { p.classList.remove('is-active'); });
          tab.classList.add('is-active');
          if (panes[i]) panes[i].classList.add('is-active');
        });
      });
    });
  }

  function wireCopy() {
    $$('[data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = $('#' + btn.getAttribute('data-copy'));
        if (!target) return;
        var text = target.textContent;
        var done = function () {
          var ok = btn.parentNode.querySelector('.copyrow__ok');
          if (!ok) return;
          ok.classList.add('is-on');
          setTimeout(function () { ok.classList.remove('is-on'); }, 2200);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
        } else {
          fallbackCopy(text, done);
        }
      });
    });
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* sem clipboard */ }
    document.body.removeChild(ta);
  }

  function wireQuad() {
    $$('.quad').forEach(function (q) {
      q.addEventListener('click', function () { q.classList.toggle('is-open'); });
    });
  }

  function wireAdjectives() {
    var grid = $('#adjgrid');
    if (!grid) return;
    var LIMIT = 5;
    var picked = load('adjetivos', []);
    var count = $('#adjcount');
    var out = $('#adjout');

    function render() {
      $$('.adj', grid).forEach(function (b) {
        var name = b.getAttribute('data-adj');
        var isPicked = picked.indexOf(name) !== -1;
        b.classList.toggle('is-picked', isPicked);
        b.classList.toggle('is-locked', !isPicked && picked.length >= LIMIT);
      });
      count.textContent = picked.length + '/' + LIMIT;
      count.classList.toggle('is-full', picked.length === LIMIT);
      out.textContent = picked.length ? picked.join(', ') : 'Nenhum adjetivo escolhido ainda.';
      save('adjetivos', picked);
    }

    $$('.adj', grid).forEach(function (b) {
      b.addEventListener('click', function () {
        var name = b.getAttribute('data-adj');
        var i = picked.indexOf(name);
        if (i !== -1) picked.splice(i, 1);
        else if (picked.length < LIMIT) picked.push(name);
        render();
      });
    });

    var reset = $('#adjreset');
    if (reset) reset.addEventListener('click', function () { picked = []; render(); });

    render();
  }

  function wireQuiz() {
    $$('.quiz__q').forEach(function (q) {
      $$('.quiz__opt', q).forEach(function (opt) {
        opt.addEventListener('click', function () {
          var right = q.getAttribute('data-answer');
          var pick = opt.getAttribute('data-opt');
          q.classList.add('is-answered');
          $$('.quiz__opt', q).forEach(function (o) {
            if (o.getAttribute('data-opt') === right) o.classList.add('is-right');
          });
          if (pick !== right) opt.classList.add('is-wrong-pick');
        });
      });
    });
  }

  function wireChecklist() {
    var wrap = $('#entrega');
    if (!wrap) return;
    var done = load('entrega', {});
    var fill = $('#entregafill');
    var label = $('#entregalabel');

    function render() {
      var items = $$('.check', wrap);
      var n = 0;
      items.forEach(function (c) {
        var id = c.getAttribute('data-item');
        var isDone = !!done[id];
        c.classList.toggle('is-done', isDone);
        $('.check__box', c).textContent = isDone ? '✓' : '';
        if (isDone) n++;
      });
      var pct = items.length ? Math.round((n / items.length) * 100) : 0;
      fill.style.width = pct + '%';
      label.textContent = n + ' de ' + items.length + ' itens no portfolio';
      save('entrega', done);
    }

    $$('.check', wrap).forEach(function (c) {
      c.addEventListener('click', function () {
        var id = c.getAttribute('data-item');
        done[id] = !done[id];
        render();
      });
    });

    var reset = $('#entregareset');
    if (reset) reset.addEventListener('click', function () { done = {}; render(); });

    render();
  }

  function wireCarousels() {
    $$('[data-carousel]').forEach(function (wrap) {
      var items = JSON.parse(wrap.getAttribute('data-carousel'));
      var i = 0;
      var q = $('.carousel__q', wrap);
      var pos = $('.carousel__pos', wrap);
      function render() {
        q.textContent = items[i];
        pos.textContent = (i + 1) + ' de ' + items.length;
      }
      $('[data-car-prev]', wrap).addEventListener('click', function () {
        i = (i - 1 + items.length) % items.length; render();
      });
      $('[data-car-next]', wrap).addEventListener('click', function () {
        i = (i + 1) % items.length; render();
      });
      render();
    });
  }

  function wireTimers() {
    $$('[data-timer]').forEach(function (wrap) {
      var total = +wrap.getAttribute('data-timer');
      var left = total;
      var id = null;
      var clock = $('.timer__clock', wrap);
      var btn = $('[data-timer-toggle]', wrap);
      var reset = $('[data-timer-reset]', wrap);

      function paint() {
        var m = Math.floor(left / 60), s = left % 60;
        clock.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
        clock.classList.toggle('is-out', left === 0);
      }
      function stop() { clearInterval(id); id = null; btn.textContent = 'Iniciar'; }
      function tick() {
        left--;
        paint();
        if (left <= 0) { left = 0; paint(); stop(); }
      }
      btn.addEventListener('click', function () {
        if (id) { stop(); btn.textContent = 'Continuar'; return; }
        if (left === 0) left = total;
        id = setInterval(tick, 1000);
        btn.textContent = 'Pausar';
      });
      reset.addEventListener('click', function () { stop(); left = total; paint(); });
      paint();
    });
  }

  /* --- Inicializacao ------------------------------------------------------- */

  function init() {
    slides = $$('.slide');
    rail = $('.rail');
    railName = $('.rail__name');
    railNum = $('.rail__num');
    ticksWrap = $('.ticks');
    counter = $('.counter');
    overview = $('.overview');

    setTheme(load('theme', 'dark'));

    buildTicks();
    buildOverview();

    wireFlips();
    wireTabs();
    wireCopy();
    wireQuad();
    wireAdjectives();
    wireQuiz();
    wireChecklist();
    wireCarousels();
    wireTimers();

    document.addEventListener('keydown', onKey);
    wireTouch();
    wireClickAdvance();

    $$('[data-goto]').forEach(function (b) {
      b.addEventListener('click', function () { go(+b.getAttribute('data-goto') - 1); });
    });

    $('[data-help-close]').addEventListener('click', function () { $('.help').classList.remove('is-on'); });
    $('[data-overview-close]').addEventListener('click', function () { toggleOverview(false); });

    // Um link como #42 deve funcionar tanto ao abrir quanto colado numa aba ja aberta.
    window.addEventListener('hashchange', function () {
      var n = slideFromHash();
      if (n !== null && n !== current) go(n);
    });

    var start = slideFromHash();
    go(start === null ? 0 : start);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
