/* Deutsch Dicht · Repaso: cola FSRS unificada (reconocimiento, producción, gramática) con ritmo adaptativo. */
(function () {
  'use strict';
  const App = window.DDApp;
  const { t, loc, esc, icon, mark, headword, formsLine, meaning, bar } = App;
  const Core = () => App.Core;
  const main = document.getElementById('main');
  const S = () => App.ui.session;

  function entryFor(id) {
    if (App.C.byId.has(id)) return App.C.byId.get(id);
    const d = App.dictIndex?.get(id);
    if (d) return d;
    if (/^dict-/.test(id)) { App.loadDictionary().then(list => { App.dictIndex = App.dictIndex || new Map(list.map(x => [x.id, normalizeDict(x)])); App.render({ noFocus: true }); }); }
    return null;
  }
  function normalizeDict(x) {
    const kind = { sustantivos: 'n', verbos: 'v', adjetivos: 'a', adverbios: 'adv', preposiciones: 'prep', conectores: 'conj', pronombres: 'pron', numerales: 'num', interjecciones: 'interj' }[x.category] || 'part';
    const g = { der: 'm', die: 'f', das: 'n' }[x.gender];
    return { id: x.id, kind, lemma: x.lemma || x.de, de: x.de, es: x.es, en: x.en, g, pl: x.plural ? x.plural.replace(/^die\s+/, '') : null, v: kind === 'v' ? { p3: '', prt: '', pp: x.forms || '', aux: '' } : null, a: kind === 'a' ? { gradable: false } : null, reference: true, unit: null };
  }
  App.normalizeDict = normalizeDict;

  function ensureCard() {
    const s = S();
    if (s.key && (App.state.cards[s.key] || s.isNew)) return s;
    const deck = App.C.deckOrder(App.state);
    const r = Core().nextCard(App.state, deck, Date.now(), s, App.canProduce);
    s.key = r.key; s.isNew = r.isNew; s.revealed = false; s.shownAt = Date.now(); s.vals = {}; s.res = {}; s.sel = {}; s.autoplayed = false;
    return s;
  }
  App.reviewHost = () => { const s = S(); if (!s.key?.startsWith('g:')) return null; const ex = App.C.exercises.get(s.key.slice(2)); return ex ? { ex, st: { vals: s.vals, res: s.res, sel: s.sel } } : null; };

  App.views.review = function () {
    const s = ensureCard();
    const sum = App.dueSummary(), pace = sum.pace;
    const today = App.state.daily[Core().dayKey()] || {};
    const ret = Core().retentionStats(App.state, Date.now(), 7);
    const remaining = sum.due + sum.fresh;
    const doneToday = today.reviews || 0;
    const reason = { start: t('primer día: comenzamos con 12', 'first day: we start with 12'), up: t('+2: completaste la cuota y tu retención se mantiene alta', '+2: you completed the quota and retention is high'), hold: t('se mantiene: retención en zona media o carga alta', 'held: retention in the middle range or high load'), incomplete: t('se mantiene hasta que completes la cuota de un día', 'held until you complete a day’s quota'), down: t('−4: la retención bajó o se acumularon repasos', '−4: retention dropped or reviews piled up') }[pace.reason] || '';
    const tiles = `<div class="review-top">
      <div class="card kpi"><span class="v">${sum.due}</span><span class="l">${t('pendientes ahora', 'due now')}</span></div>
      <div class="card kpi"><span class="v">${sum.done}<small> / ${pace.quota}</small></span><span class="l">${t('nuevas hoy', 'new today')}</span></div>
      <div class="card kpi"><span class="v">${doneToday}</span><span class="l">${t('respuestas hoy', 'answers today')}${today.ms ? ` · ${Math.round(today.ms / 60000)} min` : ''}</span></div>
      <div class="card kpi"><span class="v">${ret.rate === null ? '—' : Math.round(ret.rate * 100) + '<small> %</small>'}</span><span class="l">${t('retención · 7 días', 'retention · 7 days')}</span></div>
    </div>
    <div class="pace-line">${icon('spark', 's')}<span><b>${t('Ritmo adaptativo', 'Adaptive pace')}:</b> ${pace.quota} ${t('nuevas por día', 'new per day')} — ${esc(reason)}. ${t('Objetivo: retención ≈ 90 %. Techo: 40/día.', 'Target: ≈ 90 % retention. Ceiling: 40/day.')}</span></div>
    ${bar(doneToday / Math.max(1, doneToday + remaining))}`;
    let stage;
    if (!s.key) stage = emptyState(sum);
    else if (s.key.startsWith('g:')) stage = grammarCard(s);
    else stage = wordCard(s);
    return `<div class="page">
      <header class="page-head"><div><div class="eyebrow">Wiederholen · FSRS-6</div><h1>${t('Repaso', 'Review')}</h1><p class="lede">${t('Recuerda antes de mirar. Una sola cola: palabras (reconocer y producir) y gramática, programadas para revisarse justo antes de olvidarse.', 'Recall before you look. One queue: words (recognise and produce) and grammar, scheduled just before you would forget them.')}</p></div></header>
      ${tiles}<div class="stage" style="margin-top:22px">${stage}</div>
    </div>`;
  };
  function emptyState(sum) {
    const next = Object.values(App.state.cards).filter(c => c.st && c.due > Date.now()).sort((a, b) => a.due - b.due)[0];
    const cur = App.C.unitById.get(App.state.activeUnit);
    const exhausted = sum.done >= sum.pace.quota;
    return `<div class="card empty"><span class="chip good">${icon('check', 's')} ${t('Al día', 'Up to date')}</span><h2>${exhausted ? t('Cuota de hoy completada', 'Today’s quota completed') : t('Nada pendiente ahora', 'Nothing due now')}</h2>
      <p>${exhausted ? t(`Mañana tu cuota se recalcula (hoy: ${sum.pace.quota}). La constancia diaria hace que suba.`, `Tomorrow your quota is recalculated (today: ${sum.pace.quota}). Daily consistency makes it grow.`) : t('Las próximas tarjetas vencen más adelante.', 'Your next cards are due later.')}</p>
      ${next ? `<p class="small">${t('Próximo vencimiento', 'Next due')}: ${esc(new Date(next.due).toLocaleString(App.state.settings.language === 'en' ? 'en-GB' : 'es-CL', { weekday: 'short', hour: '2-digit', minute: '2-digit' }))}</p>` : ''}
      <div class="row" style="justify-content:center;margin-top:16px">${cur ? `<a class="btn primary" href="#unit/${cur.id}">${t('Seguir con la unidad', 'Continue the unit')}</a>` : ''}<a class="btn" href="#read">${t('Leer un texto', 'Read a text')}</a></div></div>`;
  }
  function kindLine(s, e, dir) {
    const tag = s.key.startsWith('g:') ? t('Gramática', 'Grammar') : dir === 'p' ? t('Producción · ', 'Production · ') + `<span lang="de">${t('español', 'English')} → Deutsch</span>` : t('Reconocimiento · ', 'Recognition · ') + `<span lang="de">Deutsch → ${t('español', 'English')}</span>`;
    const card = App.state.cards[s.key];
    const st = s.isNew ? `<span class="chip accent">${t('nueva', 'new')}</span>` : card?.st === 2 ? `<span class="chip">${t('estabilidad', 'stability')} ${card.s < 1 ? '<1' : Math.round(card.s)} d</span>` : `<span class="chip warn">${t('aprendiendo', 'learning')}</span>`;
    return `<div class="kind"><span>${tag}${e?.unit ? ` · U${App.pad2(App.C.unitById.get(e.unit)?.order || 0)}` : ''}</span>${st}</div>`;
  }
  function wordCard(s) {
    const [, id, dir] = /^w:(.+):(r|p)$/.exec(s.key);
    const e = entryFor(id);
    if (!e) return `<div class="flash"><p class="muted">${t('Cargando…', 'Loading…')}</p></div>`;
    const de = `<span lang="de">${headword(e, { plural: false })}</span>`;
    const l1 = meaning(e);
    const front = dir === 'r' ? `<div class="front" lang="de">${de}</div>${App.audioBtn(e.kind === 'n' && e.g ? App.ART[e.g] + ' ' + e.lemma : e.lemma, 'lg')}<div class="hint">${t('¿Qué significa?', 'What does it mean?')}</div>`
      : `<div class="front l1">${l1}</div><div class="hint">${e.kind === 'n' ? t('Di la palabra con artículo y plural.', 'Say the word with article and plural.') : e.kind === 'v' ? t('Di el infinitivo y sus formas principales.', 'Say the infinitive and its principal parts.') : t('Dilo en alemán.', 'Say it in German.')} · ${App.kindLabel(e.kind)}</div>`;
    let back = '';
    if (s.revealed) {
      const forms = formsBlock(e);
      const ex = e.ex ? `<div class="example"><span class="de" lang="de">${App.sayBtn(e.ex.de)}</span><span>${esc(t(e.ex.es, e.ex.en))}</span></div>` : '';
      const note = e.note ? `<div class="note">${esc(loc(e.note))}</div>` : '';
      back = `<div class="back">${dir === 'r' ? `<div class="answer l1">${l1}</div>` : `<div class="answer" lang="de">${headword(e, { plural: false })}</div>${App.audioBtn(e.kind === 'n' && e.g ? App.ART[e.g] + ' ' + e.lemma : e.lemma)}`}${forms}${ex}${note}</div>`;
    }
    const card = App.state.cards[s.key];
    const prev = Core().preview(card || null, Date.now());
    const fmt = p => p.days ? (p.days < 30 ? p.days + ' d' : p.days < 365 ? Math.round(p.days / 30) + ' ' + t('mes', 'mo') : (p.days / 365).toFixed(1) + ' ' + t('años', 'y')) : p.minutes < 60 ? p.minutes + ' min' : Math.round(p.minutes / 60) + ' h';
    const rates = s.revealed ? `<div class="ratings">${[['again', t('Otra vez', 'Again')], ['hard', t('Difícil', 'Hard')], ['good', t('Bien', 'Good')], ['easy', t('Fácil', 'Easy')]].map(([k, l], i) => `<button class="rate ${k}" data-action="rate" data-g="${i + 1}"><b>${l}</b><small>${fmt(prev[i])}</small><span class="kbd">${i + 1}</span></button>`).join('')}</div>`
      : `<button class="btn primary lg reveal-btn" data-action="reveal">${t('Mostrar respuesta', 'Show answer')} <span class="kbd">${t('Espacio', 'Space')}</span></button>`;
    return `<div class="flash"${s.revealed ? '' : ' data-nolookup'}>${kindLine(s, e, dir)}${front}${back}</div>${rates}
      <div class="session-foot"><span>${S().count || 0} ${t('en esta sesión', 'this session')}</span><button class="btn ghost sm" data-action="suspend">${t('No volver a mostrar', 'Don’t show again')}</button></div>`;
  }
  function formsBlock(e) {
    const parts = [];
    if (e.kind === 'n') { if (e.g) parts.push(`<span><b>${t('género', 'gender')}</b><span class="${App.gclass(e.g)}">${App.ART[e.g]}</span></span>`); parts.push(`<span><b>Plural</b>${e.pl ? `<span class="g-p">die ${esc(e.pl)}</span>` : t('—', '—')}</span>`); if (e.weak) parts.push(`<span><b>${t('declinación', 'declension')}</b>n</span>`); }
    if (e.kind === 'v' && e.v && e.v.p3) { parts.push(`<span><b>Präsens</b>${esc(e.v.p3)}</span>`, `<span><b>Präteritum</b>${esc(e.v.prt)}</span>`, `<span><b>Perfekt</b>${esc(e.v.aux + ' ' + e.v.pp)}</span>`); if (e.v.rek) parts.push(`<span><b>${t('régimen', 'government')}</b>${esc(e.v.rek)}</span>`); }
    if (e.kind === 'a' && e.a?.cmp) parts.push(`<span><b>${t('comparativo', 'comparative')}</b>${esc(e.a.cmp)}</span>`, `<span><b>${t('superlativo', 'superlative')}</b>${esc(e.a.sup || '')}</span>`);
    if (e.kind === 'prep' && e.case) parts.push(`<span><b>${t('caso', 'case')}</b>${esc(formsLine(e))}</span>`);
    return parts.length ? `<div class="forms" lang="de">${parts.join('')}</div>` : '';
  }
  function grammarCard(s) {
    const ex = App.C.exercises.get(s.key.slice(2));
    if (!ex) return '';
    const u = App.C.unitById.get(ex.unit);
    const res = s.res[ex.id];
    const ctx = { mode: 'review', val: s.vals[ex.id], res, locked: !!res, sel: s.sel[ex.id], reveal: !!res, top: `${t('Gramática', 'Grammar')} · U${App.pad2(u.order)} <span lang="de">${esc(u.de)}</span>` };
    const g = res ? (res.ok ? 3 : res.near ? 2 : 1) : 0;
    ctx.actions = res ? `<button class="btn primary" data-action="rate" data-g="${g}">${t('Continuar', 'Continue')} <span class="kbd">⏎</span></button><span class="small muted">${{ 3: t('Se programará como «Bien».', 'Scheduled as “Good”.'), 2: t('Se programará como «Difícil».', 'Scheduled as “Hard”.'), 1: t('Volverá en 10 minutos.', 'It returns in 10 minutes.') }[g]}</span>`
      : `<button class="btn primary" data-action="g-check">${t('Comprobar', 'Check')} <span class="kbd">⏎</span></button><button class="btn ghost" data-action="g-giveup">${t('No lo sé', 'I don’t know')}</button>`;
    return App.Exercise.card(ex, ctx) + `<div class="session-foot"><span>${S().count || 0} ${t('en esta sesión', 'this session')}</span></div>`;
  }
  function gCheck() {
    const host = App.reviewHost(); if (!host) return;
    const { ex, st } = host;
    const v = App.Exercise.readInputs(ex, main.querySelector('.ex-card') || main); if (v !== undefined) st.vals[ex.id] = v;
    if (!App.Exercise.complete(ex, st.vals[ex.id])) { App.toast(t('Completa la respuesta.', 'Complete your answer.')); return; }
    st.res[ex.id] = Core().evaluate(ex, App.Exercise.valueForEval(ex, st.vals[ex.id]));
    App.render({ noFocus: true });
  }
  function rate(g) {
    const s = S(); if (!s.key) return;
    Core().rateCard(App.state, s.key, g, Date.now(), Math.random, Date.now() - (s.shownAt || Date.now()));
    s.sinceNew = s.isNew ? 0 : (s.sinceNew || 0) + 1; s.last = s.key; s.count = (s.count || 0) + 1;
    s.key = null;
    App.save(); App.render({ noFocus: true });
  }
  App.reviewPick = b => { const host = App.reviewHost(); if (!host || host.st.res[host.ex.id]) return; host.st.vals[host.ex.id] = host.ex.t === 'rf' ? b.dataset.val === 'true' : Number(b.dataset.val); gCheck(); };
  Object.assign(App.actions, {
    reveal: () => { S().revealed = true; App.render({ noFocus: true }); },
    rate: b => rate(Number(b.dataset.g)),
    'g-check': gCheck,
    'g-giveup': () => { const h = App.reviewHost(); if (!h) return; h.st.res[h.ex.id] = { ok: false, near: false }; App.render({ noFocus: true }); },
    suspend: () => { const s = S(); if (!s.key) return; App.confirm(t('No volver a mostrar', 'Don’t show again'), t('Esta tarjeta se suspenderá. Puedes reactivarla desde Progreso.', 'This card will be suspended. You can reactivate it from Progress.'), () => { App.state.deck.suspended.push(s.key); s.key = null; App.save(); App.render({ noFocus: true }); }); }
  });
  App.views.reviewKey = function (e) {
    const s = S(); if (!s.key) return;
    const inField = e.target.matches?.('input, textarea, select');
    if (s.key.startsWith('g:')) {
      const h = App.reviewHost(); if (!h) return;
      const res = h.st.res[h.ex.id];
      if (e.key === 'Enter') { e.preventDefault(); res ? rate(res.ok ? 3 : res.near ? 2 : 1) : gCheck(); return; }
      if (!inField && !res && h.ex.t === 'choice' && /^[1-9]$/.test(e.key)) { const oi = App.Exercise.shuffled(h.ex.o.length, h.ex.id)[Number(e.key) - 1]; main.querySelector(`[data-action="ex-pick"][data-val="${oi}"]`)?.click(); }
      return;
    }
    if (inField) return;
    if (!s.revealed && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); App.actions.reveal(); return; }
    if (s.revealed && ['1', '2', '3', '4'].includes(e.key)) { e.preventDefault(); rate(Number(e.key)); return; }
    if (s.revealed && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); rate(3); }
  };
  App.views.reviewMounted = function () {
    const s = S(); if (!s.key || !App.state.settings.autoAudio) return;
    const m = /^w:(.+):(r|p)$/.exec(s.key); if (!m) { main.querySelector('.gap-in, .ex-input')?.focus({ preventScroll: true }); const h = App.reviewHost(); if (h?.ex.t === 'listen' && !s.autoplayed) { s.autoplayed = true; App.say(h.ex.a, document.getElementById('ex-audio')); } return; }
    const btn = main.querySelector('.flash .audio-btn');
    if (m[2] === 'r' && !s.autoplayed) { s.autoplayed = true; if (btn) App.say(btn.dataset.say, btn); }
    if (m[2] === 'p' && s.revealed && !s.autoplayedBack) { s.autoplayedBack = true; if (btn) App.say(btn.dataset.say, btn); }
    if (!s.revealed) s.autoplayedBack = false;
  };
})();
