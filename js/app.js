/* Deutsch Dicht · aplicación: arranque, estado, enrutador y eventos globales. */
(function () {
  'use strict';
  const App = window.DDApp;
  const Core = App.Core = window.DDCore, M = App.M = window.DDMorph, A = App.A = window.DDAudio;
  const { t, esc, icon } = App;
  const KEY = 'deutsch-dicht.v3', LEGACY = 'deutsch-dicht.v1';
  const main = document.getElementById('main');

  /* ───────────── Contenido ───────────── */
  App.C = window.DDContent.build(window.DD, M);
  const C = App.C;
  App.ids = {
    units: new Set(C.units.map(u => u.id)),
    exercises: new Set(C.exercises.keys()),
    readings: new Set(C.readings.map(r => r.id)),
    vocab: id => C.byId.has(id) || /^dict-[0-9a-f]{16}$/.test(id),
    legacyUnits: window.DD.legacyUnits || {}, legacyReadings: {}
  };

  /* ───────────── Estado ───────────── */
  App.storageError = false;
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return Core.validateState(JSON.parse(raw), App.ids);
      const old = localStorage.getItem(LEGACY);
      if (old) return Core.validateState(JSON.parse(old), App.ids); // migración v1 → v3 (la clave v1 se conserva intacta)
    } catch (e) { console.error(e); App.storageError = true; }
    return Core.fresh();
  }
  App.state = load();
  App.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(App.state)); App.storageError = false; }
    catch (e) { App.storageError = true; App.toast(t('No se pudo guardar. Exporta un respaldo desde Progreso.', 'Could not save. Export a backup from Progress.')); }
    updateChrome();
  };
  App.ui = { session: { sinceNew: 0, last: null, count: 0, startedAt: 0 }, ex: {}, read: {}, dict: { q: '', kind: '', scope: 'course', page: 0, level: '' }, gram: { q: '' }, lib: { level: '', kind: '' } };

  /* ───────────── Enrutador ───────────── */
  const VIEWS = ['learn', 'unit', 'grammar', 'dict', 'review', 'read', 'progress'];
  App.route = function () {
    const [view, id, sub] = location.hash.replace(/^#/, '').split('/').map(decodeURIComponent);
    return { view: VIEWS.includes(view) ? view : 'learn', id: id || '', sub: sub || '' };
  };
  App.go = function (hash) { if (location.hash === hash) App.render(); else location.hash = hash; };
  App.views = App.views || {};
  let lastView = '';
  App.render = function (opts = {}) {
    const r = App.route();
    applyPrefs();
    App.hidePopup?.();
    const focus = document.activeElement, focusId = focus?.id, caret = focus?.selectionStart;
    let html;
    try { html = (App.views[r.view] || App.views.learn)(r); }
    catch (e) { console.error(e); html = `<div class="page"><div class="notice warn">${icon('alert')}<div>${t('No se pudo mostrar esta sección.', 'This section could not be displayed.')} <span class="mono">${esc(e.message)}</span></div></div></div>`; }
    if (App.storageError) html = `<div class="page" style="padding-bottom:0"><div class="notice warn">${icon('alert')}<div>${t('El navegador no permite guardar el progreso. Esta sesión sigue en memoria; exporta un respaldo desde Progreso.', 'This browser is not saving progress. This session continues in memory; export a backup from Progress.')}</div></div></div>` + html;
    main.innerHTML = html;
    document.querySelectorAll('[data-nav]').forEach(a => {
      const on = a.dataset.nav === r.view || (a.dataset.nav === 'learn' && r.view === 'unit');
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    if (focusId && !opts.noFocus) { const el = document.getElementById(focusId); if (el) { el.focus({ preventScroll: true }); if (typeof caret === 'number' && el.setSelectionRange) try { el.setSelectionRange(caret, caret); } catch (e) { } } }
    App.after?.forEach(fn => fn(r)); App.after = [];
    App.views[r.view + 'Mounted']?.(r);
    if (r.view !== lastView) { lastView = r.view; }
    updateChrome();
  };
  App.after = [];
  App.onNext = fn => App.after.push(fn);

  /* ───────────── Preferencias y marco ───────────── */
  function applyPrefs() {
    const s = App.state.settings;
    document.querySelectorAll('[data-icon]').forEach(el => { el.outerHTML = icon(el.dataset.icon); });
    document.documentElement.lang = s.language;
    document.documentElement.dataset.theme = s.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', s.theme === 'dark' ? '#0e1013' : '#f5f4ef');
    document.title = 'Deutsch Dicht';
    const labels = { learn: t('Aprender', 'Learn'), grammar: t('Gramática', 'Grammar'), dict: t('Diccionario', 'Dictionary'), review: t('Repaso', 'Review'), read: t('Lecturas', 'Readings'), progress: t('Progreso', 'Progress') };
    document.querySelectorAll('[data-nav]').forEach(a => { const l = a.querySelector('.nav-label'); if (l) l.textContent = labels[a.dataset.nav]; });
    document.querySelectorAll('[data-language]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.language === s.language)));
    document.querySelectorAll('[data-theme-toggle]').forEach(b => { b.innerHTML = icon(s.theme === 'dark' ? 'sun' : 'moon'); b.setAttribute('aria-label', s.theme === 'dark' ? t('Tema claro', 'Light theme') : t('Tema oscuro', 'Dark theme')); b.title = b.getAttribute('aria-label'); });
    const sub = document.querySelector('.brand-sub'); if (sub) sub.textContent = t('Alemán denso', 'Dense German');
    const motto = document.querySelector('.motto'); if (motto) motto.innerHTML = `Weniger, aber genauer.<br><span class="ui small muted" style="font-style:normal">${t('Menos, pero con más precisión.', 'Less, but more precisely.')}</span>`;
    document.querySelector('.skip-link').textContent = t('Saltar al contenido', 'Skip to content');
  }
  App.dueSummary = function () {
    const deck = C.deckOrder(App.state);
    const q = Core.queueState(App.state, deck, Date.now(), canProduce);
    return { due: q.learn.length + q.due.length, fresh: q.newKeys.length, quota: q.pace.quota, done: App.state.daily[Core.dayKey()]?.new || 0, pace: q.pace, queue: q };
  };
  const canProduce = id => { const e = C.byId.get(id); return !e || (e.produce !== false && e.kind !== 'num'); };
  App.canProduce = canProduce;
  function updateChrome() {
    let s; try { s = App.dueSummary(); } catch (e) { return; }
    const total = s.due + s.fresh;
    document.querySelectorAll('[data-count="review"]').forEach(el => { el.textContent = total || ''; el.hidden = !total; });
    const mini = document.getElementById('today-mini');
    if (mini) mini.innerHTML = `<div class="row"><span>${t('Por repasar', 'Due')}</span><strong>${s.due}</strong></div><div class="row"><span>${t('Nuevas hoy', 'New today')}</span><strong>${s.done} / ${s.quota}</strong></div>${App.bar(s.quota ? s.done / s.quota : 0)}`;
  }
  App.updateChrome = updateChrome;

  /* ───────────── Avisos ───────────── */
  let toastTimer;
  App.toast = function (msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('visible'), 3800); };
  let pending = null;
  App.confirm = function (title, message, ok) {
    pending = ok;
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    document.getElementById('confirm-cancel').textContent = t('Cancelar', 'Cancel');
    document.getElementById('confirm-ok').textContent = t('Confirmar', 'Confirm');
    document.getElementById('confirm').showModal();
  };
  document.getElementById('confirm-form').addEventListener('submit', e => {
    e.preventDefault();
    const yes = e.submitter?.value === 'ok', fn = pending; pending = null;
    document.getElementById('confirm').close();
    if (yes && fn) fn();
  });

  /* ───────────── Audio ───────────── */
  App.audioInfo = function () {
    const i = A.info();
    if (!i.clips) return t(`Pronunciación mediante la voz alemana de tu navegador${i.fallback ? ` (${i.fallback})` : ''}. Necesita una voz de-DE disponible; algunas voces usan conexión a Internet. No se distribuyen grabaciones de macOS.`, `Pronunciation uses your browser's German voice${i.fallback ? ` (${i.fallback})` : ''}. A de-DE voice is required; some voices need an Internet connection. No macOS recordings are distributed.`);
    return t(`Audio local: ${App.fmtNum(i.clips)} clips con la voz ${i.voice} de macOS (de-DE)${i.male ? ` y ${i.male} para las voces masculinas de los diálogos` : ''}. Para textos sin clip se usa automáticamente la mejor voz alemana del sistema${i.fallback ? ` (${i.fallback})` : ''}. Los guiones y barras se leen como pausas.`,
      `Local audio: ${App.fmtNum(i.clips)} clips with the macOS ${i.voice} voice (de-DE)${i.male ? ` and ${i.male} for male dialogue voices` : ''}. Texts without a clip automatically use the best German system voice${i.fallback ? ` (${i.fallback})` : ''}. Dashes and slashes are read as pauses.`);
  };
  App.say = async function (text, button, opts = {}) {
    try { await A.play(text, { slow: App.state.settings.slowAudio, ...opts }, button); }
    catch (e) { App.toast(t('No hay audio local ni voz alemana disponible para este texto.', 'No local audio or German voice is available for this text.')); }
  };

  /* ───────────── Eventos ───────────── */
  App.actions = App.actions || {};
  document.addEventListener('click', e => {
    const lang = e.target.closest('[data-language]');
    if (lang) { if (App.state.settings.language !== lang.dataset.language) { App.state.settings.language = lang.dataset.language; App.save(); App.render({ noFocus: true }); } return; }
    if (e.target.closest('[data-theme-toggle]')) { App.state.settings.theme = App.state.settings.theme === 'dark' ? 'light' : 'dark'; App.save(); applyPrefs(); return; }
    const say = e.target.closest('[data-say]');
    if (say && !e.target.closest('[data-action]')) { e.preventDefault(); App.say(say.dataset.say, say, say.hasAttribute('data-letter') ? { letter: true } : {}); return; }
    const act = e.target.closest('[data-action]');
    if (act && !act.disabled) {
      const fn = App.actions[act.dataset.action];
      if (fn) { e.preventDefault(); fn(act, e); }
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { App.hidePopup?.(); A.stop(); }
    const r = App.route();
    App.views[r.view + 'Key']?.(e, r);
  });
  window.addEventListener('hashchange', () => { A.stop(); App.render({ noFocus: true }); main.focus({ preventScroll: true }); window.scrollTo(0, 0); });
  window.addEventListener('storage', e => { if (e.key === KEY && e.newValue) { App.state = load(); App.render({ noFocus: true }); App.toast(t('Progreso actualizado desde otra pestaña.', 'Progress updated from another tab.')); } });
  A.subscribe(() => { if (App.route().view === 'progress') App.render({ noFocus: true }); });

  // Aviso único tras migrar desde v1
  const migrated = App.state.notices.find(n => n.type === 'migrated-v1' && !n.seen);
  if (migrated) {
    migrated.seen = true; App.save();
    setTimeout(() => App.toast(t(`Progreso anterior migrado: ${migrated.cards} tarjetas conservadas con FSRS.`, `Previous progress migrated: ${migrated.cards} cards kept under FSRS.`)), 600);
  }
  App.render({ noFocus: true });
  // Diccionario de referencia: carga diferida para no retrasar el arranque.
  App.loadDictionary = function () {
    if (App.dictPromise) return App.dictPromise;
    App.dictPromise = new Promise((resolve, reject) => {
      if (window.DeutschData?.dictionary) return resolve(window.DeutschData.dictionary);
      const s = document.createElement('script'); s.src = 'data/dictionary.js?v=3'; s.async = true;
      s.onload = () => resolve(window.DeutschData?.dictionary || []);
      s.onerror = () => reject(new Error('dictionary'));
      document.head.appendChild(s);
    });
    return App.dictPromise;
  };
})();
