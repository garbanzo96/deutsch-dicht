/* Deutsch Dicht · motor puro (sin DOM).
   Evaluación de respuestas, FSRS-6, ritmo adaptativo de tarjetas nuevas, cola de repaso,
   estado persistente y migración desde v1. Exportable a Node para pruebas. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DDCore = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const MINUTE = 60e3, DAY = 864e5, ROLLOVER = 4; // el día de estudio cambia a las 04:00 locales
  const SCHEMA = 3;
  const pad = n => String(n).padStart(2, '0');

  /* ───────────── Días de estudio ───────────── */
  function studyDate(now) { return new Date(now - ROLLOVER * 3600e3); }
  function dayKey(now = Date.now()) { const d = studyDate(now); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
  function dayStart(now = Date.now(), offset = 0) { const d = studyDate(now); return new Date(d.getFullYear(), d.getMonth(), d.getDate() + offset, ROLLOVER).getTime(); }
  function daysBetween(a, b) { return Math.round((dayStart(b) - dayStart(a)) / DAY); }
  function shiftDay(key, offset) { const [y, m, d] = key.split('-').map(Number); const x = new Date(y, m - 1, d + offset); return `${x.getFullYear()}-${pad(x.getMonth() + 1)}-${pad(x.getDate())}`; }

  /* ───────────── FSRS-6 ─────────────
     Port fiel de py-fsrs (Open Spaced Repetition, licencia MIT), parámetros por defecto FSRS-6.
     Estados: 0 nueva · 1 aprendizaje · 2 repaso · 3 reaprendizaje. Valoraciones: 1 Otra vez · 2 Difícil · 3 Bien · 4 Fácil. */
  const W = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542];
  const FSRS = { retention: 0.9, maxInterval: 36500, learning: [1 * MINUTE, 10 * MINUTE], relearning: [10 * MINUTE] };
  const DECAY = -W[20], FACTOR = Math.pow(0.9, 1 / DECAY) - 1, S_MIN = 0.001;
  const clampD = d => Math.min(10, Math.max(1, d));
  const retrievability = (elapsedDays, s) => s > 0 ? Math.pow(1 + FACTOR * Math.max(0, elapsedDays) / s, DECAY) : 0;
  const initStability = g => Math.max(S_MIN, W[g - 1]);
  const initDifficulty = g => W[4] - Math.exp(W[5] * (g - 1)) + 1;
  function nextDifficulty(d, g) {
    const delta = -W[6] * (g - 3);
    const damped = d + (10 - d) * delta / 9;
    return clampD(W[7] * initDifficulty(4) + (1 - W[7]) * damped);
  }
  function shortTermStability(s, g) {
    let inc = Math.exp(W[17] * (g - 3 + W[18])) * Math.pow(s, -W[19]);
    if (g >= 2) inc = Math.max(inc, 1);
    return Math.max(S_MIN, s * inc);
  }
  function recallStability(d, s, r, g) {
    return s * (1 + Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9]) * (Math.exp((1 - r) * W[10]) - 1) * (g === 2 ? W[15] : 1) * (g === 4 ? W[16] : 1));
  }
  function forgetStability(d, s, r) {
    const longTerm = W[11] * Math.pow(d, -W[12]) * (Math.pow(s + 1, W[13]) - 1) * Math.exp((1 - r) * W[14]);
    return Math.min(longTerm, s / Math.exp(W[17] * W[18]));
  }
  const nextStability = (d, s, r, g) => Math.max(S_MIN, g === 1 ? forgetStability(d, s, r) : recallStability(d, s, r, g));
  function intervalDays(s) {
    const ivl = Math.round(s / FACTOR * (Math.pow(FSRS.retention, 1 / DECAY) - 1));
    return Math.min(FSRS.maxInterval, Math.max(1, ivl));
  }
  function fuzz(days, rand) {
    if (days < 2.5 || !rand) return days;
    let delta = 1;
    for (const [start, end, factor] of [[2.5, 7, .15], [7, 20, .1], [20, Infinity, .05]]) delta += factor * Math.max(Math.min(days, end) - start, 0);
    let lo = Math.max(2, Math.round(days - delta)), hi = Math.min(Math.round(days + delta), FSRS.maxInterval);
    lo = Math.min(lo, hi);
    return Math.min(Math.round(rand() * (hi - lo + 1) + lo), FSRS.maxInterval);
  }

  function newCard() { return { st: 0, s: 0, d: 0, step: 0, reps: 0, lapses: 0, due: 0, last: 0 }; }

  /* Devuelve una copia actualizada. `rand` = null desactiva el fuzz (vista previa de intervalos). */
  function review(card, g, now = Date.now(), rand = Math.random) {
    if (![1, 2, 3, 4].includes(g)) throw new Error('Valoración inválida: ' + g);
    const c = { ...(card || newCard()) };
    const elapsed = c.last ? daysBetween(c.last, now) : null;
    const r = c.s && elapsed !== null ? retrievability(elapsed, c.s) : 0;
    let delay = null, days = null;
    const updateMemory = () => {
      if (!c.s) { c.s = initStability(g); c.d = clampD(initDifficulty(g)); }
      else if (elapsed !== null && elapsed < 1) { c.s = shortTermStability(c.s, g); c.d = nextDifficulty(c.d, g); }
      else { c.s = nextStability(c.d, c.s, r, g); c.d = nextDifficulty(c.d, g); }
    };
    const steps = c.st === 3 ? FSRS.relearning : FSRS.learning;
    const stepped = () => {
      if (c.step >= steps.length && g >= 2) return (days = intervalDays(c.s));
      if (g === 1) { c.step = 0; delay = steps[0]; }
      else if (g === 2) delay = c.step === 0 ? (steps.length >= 2 ? (steps[0] + steps[1]) / 2 : steps[0] * 1.5) : steps[c.step];
      else if (g === 3) { if (c.step + 1 >= steps.length) days = intervalDays(c.s); else { c.step++; delay = steps[c.step]; } }
      else days = intervalDays(c.s);
    };
    if (c.st === 0 || c.st === 1) { updateMemory(); c.st = 1; stepped(); }
    else if (c.st === 3) { updateMemory(); stepped(); }
    else {
      if (elapsed !== null && elapsed < 1) c.s = shortTermStability(c.s, g); else c.s = nextStability(c.d, c.s, r, g);
      c.d = nextDifficulty(c.d, g);
      if (g === 1) { c.st = 3; c.step = 0; c.lapses++; delay = FSRS.relearning[0]; }
      else days = intervalDays(c.s);
    }
    if (days !== null) { c.st = 2; c.step = 0; days = fuzz(days, rand); c.due = dayStart(now, days); c.ivl = days; }
    else { c.due = now + delay; c.ivl = 0; }
    c.reps++; c.last = now;
    return c;
  }
  function preview(card, now = Date.now()) {
    return [1, 2, 3, 4].map(g => { const c = review(card, g, now, null); return c.ivl ? { days: c.ivl } : { minutes: Math.round((c.due - now) / MINUTE) }; });
  }
  function cardR(card, now = Date.now()) { return card && card.st >= 1 && card.s ? retrievability(daysBetween(card.last, now), card.s) : 0; }

  /* ───────────── Evaluación de respuestas ───────────── */
  /* Normalización de respuestas: la puntuación nunca es obligatoria. Apóstrofos se eliminan (geht’s = gehts);
     guiones sueltos (– — -), barras y signos se tratan como espacio; el guion dentro de palabra se conserva (E-Mail). */
  const APOS = /['’‘`´]/g;
  const PUNCT = /[.,!?;:„“”"‚«»¿¡()\[\]{}…·\/]/g;
  const DASH = /[–—]|(^|\s)-+(?=\s|$)/g;
  const clean = s => String(s ?? '').normalize('NFC').replace(APOS, '').replace(DASH, ' ').replace(PUNCT, ' ').trim().replace(/\s+/g, ' ');
  function normalize(s) { return clean(s).toLocaleLowerCase('de'); }
  /* Palabras con marca de inicio de oración (tras . ! ? : – no se exige mayúscula/minúscula). */
  function caseWords(s) {
    const out = []; let start = true;
    for (const m of String(s ?? '').normalize('NFC').replace(APOS, '').matchAll(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*|[.!?…:;–—]|(?:^|\s)-(?=\s|$)/gu)) {
      if (/^\s?[.!?…:;–—-]$/.test(m[0])) { start = true; continue; }
      out.push({ w: m[0], start }); start = false;
    }
    return out;
  }
  function levenshtein(a, b) {
    if (a === b) return 0; if (!a.length) return b.length; if (!b.length) return a.length;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[b.length];
  }
  const UMLAUT_SPELLING = s => s.replace(/ae/g, 'ä').replace(/oe/g, 'ö').replace(/ue/g, 'ü');
  /* Compara un texto con sus variantes: {ok, near, hint} · hint ∈ umlaut | eszett | case | typo */
  function compareText(value, variants) {
    const v = normalize(value);
    if (!v) return { ok: false, near: false };
    const list = variants.filter(x => typeof x === 'string' && x.trim()).flatMap(x => /[’']s\b/.test(x) ? [x, x.replace(/[’']s\b/g, ' es')] : [x]);
    for (const x of list) {
      if (normalize(x) !== v) continue;
      // correcto; ¿mayúsculas de sustantivos? (se ignora la primera palabra de la frase)
      const given = caseWords(value), target = caseWords(x);
      const caseSlip = given.length === target.length && given.some((g, i) => !target[i].start && g.w !== target[i].w && g.w.toLocaleLowerCase('de') === target[i].w.toLocaleLowerCase('de'));
      return { ok: true, near: false, hint: caseSlip ? 'case' : null };
    }
    for (const x of list) {
      const t = normalize(x);
      if (UMLAUT_SPELLING(v) === t) return { ok: false, near: true, hint: 'umlaut', target: x };
      if (v.replace(/ss/g, 'ß') === t || v === t.replace(/ß/g, 'ss')) return { ok: false, near: true, hint: 'eszett', target: x };
    }
    for (const x of list) {
      const t = normalize(x), dist = levenshtein(v, t);
      if ((t.length >= 4 && dist === 1) || (t.length >= 12 && dist === 2)) return { ok: false, near: true, hint: 'typo', target: x };
    }
    return { ok: false, near: false };
  }
  const asArray = x => Array.isArray(x) ? x : (x === undefined || x === null ? [] : [x]);
  /* Normaliza la forma de un ejercicio a sus respuestas aceptadas. */
  function answerSets(ex) {
    if (ex.t === 'gap' && Array.isArray(ex.a)) return ex.a.map((a, i) => [a, ...asArray(ex.alt?.[i])]);
    return [[ex.a, ...asArray(ex.alt)].filter(x => x !== undefined)];
  }
  function evaluate(ex, value) {
    switch (ex.t) {
      case 'choice': return { ok: value !== null && value !== undefined && value !== '' && Number(value) === ex.a, near: false };
      case 'rf': return { ok: typeof value === 'boolean' && value === ex.a, near: false };
      case 'match': {
        if (!Array.isArray(value) || value.length !== ex.pairs.length) return { ok: false, near: false };
        return { ok: value.every((right, left) => right === left), near: false };
      }
      case 'gap': {
        const sets = answerSets(ex), values = asArray(value);
        if (values.length !== sets.length) return { ok: false, near: false };
        const parts = sets.map((variants, i) => compareText(values[i], variants));
        const ok = parts.every(p => p.ok), near = !ok && parts.every(p => p.ok || p.near);
        return { ok, near, parts, hint: parts.find(p => p.hint)?.hint || null };
      }
      default: return compareText(value, answerSets(ex)[0]);
    }
  }

  /* ───────────── Estado ───────────── */
  function fresh(now = Date.now()) {
    return {
      schemaVersion: SCHEMA, createdAt: now,
      activeUnit: 'u01', units: {}, exercises: {}, cards: {}, log: [], readings: {},
      deck: { added: [], suspended: [] },
      pace: { day: '', quota: 0, history: {} },
      daily: {},
      settings: { language: 'es', theme: 'light', voice: '', autoAudio: true, slowAudio: false },
      notices: []
    };
  }
  function activity(state, now, key, n = 1) {
    const d = dayKey(now);
    const x = state.daily[d] || (state.daily[d] = { new: 0, reviews: 0, exercises: 0, again: 0, ms: 0 });
    x[key] = (x[key] || 0) + n;
  }

  /* Ejercicio de unidad. Un acierto sin ayuda crea su tarjeta de gramática. */
  const HELP_WINDOW = 10 * MINUTE;
  function recordExercise(state, ex, result, assisted = false, now = Date.now(), reviewable = true) {
    const prev = state.exercises[ex.id];
    const helpedAt = assisted ? now : prev?.helpedAt;
    const recentHelp = Number.isFinite(helpedAt) && now - helpedAt < HELP_WINDOW;
    const correct = !assisted && !!result?.ok;
    const record = { correct, assisted: assisted || recentHelp, tries: (prev?.tries || 0) + 1, at: now };
    if (Number.isFinite(helpedAt)) record.helpedAt = helpedAt;
    if (prev?.correct && !prev.assisted && !correct) record.everCorrect = true;
    if (prev?.everCorrect) record.everCorrect = true;
    state.exercises[ex.id] = record;
    activity(state, now, 'exercises');
    const key = 'g:' + ex.id;
    if (reviewable && correct && !record.assisted && !state.cards[key]) {
      // Ya recuperado una vez: entra directamente en repaso, como un "Bien" inicial.
      state.cards[key] = review(null, 3, now, null);
      state.cards[key] = { ...state.cards[key], st: 2, step: 0, due: dayStart(now, 1), ivl: 1 };
    }
    return correct;
  }
  const exerciseDone = (state, id) => { const e = state.exercises[id]; return !!(e && e.correct && !e.assisted); };
  function unitProgress(unit, state) {
    const total = unit.exercises.length, done = unit.exercises.filter(e => exerciseDone(state, e.id)).length;
    return { done, total, ratio: total ? done / total : 0, mastered: total > 0 && done / total >= 0.8 };
  }

  /* ───────────── Ritmo adaptativo de nuevas ─────────────
     Sin selector manual. Empieza en 12/día y sube +2 cada día de estudio completado mientras la
     retención real (tarjetas en repaso, últimos 7 días) se mantiene ≥ 86 % y la carga es sostenible.
     Baja si la retención cae bajo 80 % o la acumulación supera 12 × cuota. Techo 40/día. */
  const PACE = { start: 12, step: 2, min: 6, max: 40, upRetention: 0.86, downRetention: 0.80, minEvidence: 20 };
  function retentionStats(state, now, days = 7) {
    const since = dayStart(now, -days + 1);
    let pass = 0, total = 0;
    for (const e of state.log) if (e[0] >= since && e[3] === 2) { total++; if (e[2] > 1) pass++; }
    return { pass, total, rate: total ? pass / total : null };
  }
  function planDay(state, now = Date.now(), dueBacklog = 0) {
    const today = dayKey(now);
    if (state.pace.day === today && state.pace.quota) return state.pace;
    const prev = state.pace.quota || 0;
    let quota, reason;
    if (!prev) { quota = PACE.start; reason = 'start'; }
    else {
      const last = state.pace.day, lastDaily = state.daily[last] || {};
      const completed = (lastDaily.new || 0) >= Math.floor(prev * 0.9);
      const ret = retentionStats(state, now);
      if ((ret.total >= PACE.minEvidence && ret.rate < PACE.downRetention) || dueBacklog > prev * 12) { quota = Math.max(PACE.min, prev - 4); reason = 'down'; }
      else if (completed && (ret.total < PACE.minEvidence || ret.rate >= PACE.upRetention) && dueBacklog <= prev * 8) { quota = Math.min(PACE.max, prev + PACE.step); reason = 'up'; }
      else { quota = prev; reason = completed ? 'hold' : 'incomplete'; }
    }
    state.pace = { day: today, quota, reason, history: { ...state.pace.history, [today]: quota } };
    const keys = Object.keys(state.pace.history).sort();
    if (keys.length > 120) for (const k of keys.slice(0, keys.length - 120)) delete state.pace.history[k];
    return state.pace;
  }

  /* ───────────── Cola de repaso ─────────────
     deck: lista ordenada de IDs léxicos (orden del curso). canProduce(id) indica si la palabra
     admite tarjeta de producción. Producción (L1→DE) se desbloquea cuando el reconocimiento
     alcanza estabilidad ≥ 3 días. */
  const PRODUCTION_STABILITY = 3, LEARN_AHEAD = 20 * MINUTE;
  function queueState(state, deck, now = Date.now(), canProduce = () => true) {
    const suspended = new Set(state.deck.suspended);
    const learn = [], due = [], ahead = [];
    for (const [key, c] of Object.entries(state.cards)) {
      if (suspended.has(key) || !c.st) continue;
      if (c.st === 1 || c.st === 3) { if (c.due <= now) learn.push(key); else if (c.due <= now + LEARN_AHEAD) ahead.push(key); }
      else if (c.due <= now) due.push(key);
    }
    learn.sort((a, b) => state.cards[a].due - state.cards[b].due);
    ahead.sort((a, b) => state.cards[a].due - state.cards[b].due);
    due.sort((a, b) => cardR(state.cards[a], now) - cardR(state.cards[b], now) || state.cards[a].due - state.cards[b].due);
    const pace = planDay(state, now, due.length);
    const today = state.daily[dayKey(now)] || {};
    const newRemaining = Math.max(0, pace.quota - (today.new || 0));
    const fresh = [], production = [];
    if (newRemaining) {
      for (const id of deck) {
        const r = state.cards['w:' + id + ':r'], p = state.cards['w:' + id + ':p'];
        if (!r) { if (!suspended.has('w:' + id + ':r') && fresh.length < newRemaining) fresh.push('w:' + id + ':r'); }
        else if (!p && r.st === 2 && r.s >= PRODUCTION_STABILITY && canProduce(id) && !suspended.has('w:' + id + ':p')) production.push('w:' + id + ':p');
        if (fresh.length >= newRemaining && production.length >= newRemaining) break;
      }
    }
    // Producción primero (consolida lo conocido), sin superar la mitad de la cuota diaria.
    const prodToday = today.production || 0, prodCap = Math.max(0, Math.ceil(pace.quota / 2) - prodToday);
    const prodTake = production.slice(0, Math.min(prodCap, newRemaining));
    const newKeys = [...prodTake, ...fresh].slice(0, newRemaining);
    return { learn, due, ahead, newKeys, newRemaining, pace };
  }
  function nextCard(state, deck, now = Date.now(), session = {}, canProduce) {
    const q = queueState(state, deck, now, canProduce);
    const avoid = k => k === session.last;
    const pick = list => list.find(k => !avoid(k)) || null;
    let key = pick(q.learn);
    if (!key) {
      const review = pick(q.due), fresh = pick(q.newKeys);
      if (review && fresh) {
        const every = Math.max(1, Math.min(6, Math.round(q.due.length / Math.max(1, q.newKeys.length))));
        key = (session.sinceNew || 0) >= every ? fresh : review;
      } else key = review || fresh;
    }
    if (!key) key = pick(q.ahead) || q.learn[0] || null;
    return { key, isNew: !!key && !state.cards[key], queue: q };
  }
  function rateCard(state, key, g, now = Date.now(), rand = Math.random, ms = 0) {
    const prev = state.cards[key];
    const isNew = !prev;
    const card = review(prev, g, now, rand);
    state.cards[key] = card;
    state.log.push([now, key, g, prev ? prev.st : 0, Math.min(ms, 120000) | 0]);
    if (state.log.length > 12000) state.log.splice(0, state.log.length - 12000);
    activity(state, now, 'reviews');
    if (ms) activity(state, now, 'ms', Math.min(ms, 120000));
    if (g === 1) activity(state, now, 'again');
    if (isNew && key.startsWith('w:')) { activity(state, now, 'new'); if (key.endsWith(':p')) activity(state, now, 'production'); }
    return card;
  }

  /* ───────────── Estadísticas ───────────── */
  function deckStats(state, now = Date.now()) {
    const out = { total: 0, learning: 0, young: 0, mature: 0, words: 0, wordsMature: 0, grammar: 0 };
    const words = new Map();
    for (const [key, c] of Object.entries(state.cards)) {
      if (!c.st) continue;
      out.total++;
      if (c.st === 1 || c.st === 3) out.learning++; else if (c.s >= 21) out.mature++; else out.young++;
      if (key.startsWith('g:')) out.grammar++;
      if (key.startsWith('w:')) { const id = key.slice(2, -2); words.set(id, Math.max(words.get(id) || 0, c.st === 2 ? c.s : 0)); }
    }
    out.words = words.size; out.wordsMature = [...words.values()].filter(s => s >= 21).length;
    return out;
  }
  function forecast(state, now = Date.now(), days = 14) {
    const counts = Array(days).fill(0), end = dayStart(now, days);
    for (const c of Object.values(state.cards)) {
      if (!c.st || c.due >= end) continue;
      const idx = Math.max(0, daysBetween(now, Math.max(c.due, now)));
      if (idx < days) counts[idx]++;
    }
    return counts;
  }

  /* ───────────── Validación y migración ───────────── */
  const isObj = o => o && typeof o === 'object' && !Array.isArray(o);
  const finite = (n, min = 0, max = Number.MAX_SAFE_INTEGER) => Number.isFinite(n) && n >= min && n <= max;
  function cleanCard(c) {
    if (!isObj(c) || ![1, 2, 3].includes(c.st) || !finite(c.s, S_MIN, 1e6) || !finite(c.d, 1, 10) || !finite(c.due) || !finite(c.last)) return null;
    return { st: c.st, s: c.s, d: c.d, step: Number.isInteger(c.step) && c.step >= 0 && c.step < 5 ? c.step : 0, reps: Number.isInteger(c.reps) && c.reps >= 0 ? c.reps : 1, lapses: Number.isInteger(c.lapses) && c.lapses >= 0 ? c.lapses : 0, due: c.due, last: c.last, ivl: finite(c.ivl, 0, 36500) ? c.ivl : 0 };
  }
  function validCardKey(key, ids) {
    const m = /^(w):(.+):(r|p)$/.exec(key) || /^(g):(.+)$/.exec(key);
    if (!m) return false;
    return m[1] === 'w' ? ids.vocab(m[2]) : ids.exercises.has(m[2]);
  }
  function validateState(raw, ids) {
    if (!isObj(raw)) throw new Error('Respaldo inválido.');
    if (raw.schemaVersion === 1) return migrateV1(raw, ids);
    if (raw.schemaVersion !== SCHEMA) throw new Error('Respaldo incompatible: versión ' + raw.schemaVersion + '.');
    const s = fresh(finite(raw.createdAt) ? raw.createdAt : Date.now());
    if (ids.units.has(raw.activeUnit)) s.activeUnit = raw.activeUnit;
    if (isObj(raw.units)) for (const [id, u] of Object.entries(raw.units)) if (ids.units.has(id) && isObj(u)) s.units[id] = { visited: finite(u.visited) ? u.visited : 0, tab: typeof u.tab === 'string' && u.tab.length < 20 ? u.tab : undefined };
    if (isObj(raw.exercises)) for (const [id, e] of Object.entries(raw.exercises)) {
      if (!ids.exercises.has(id) || !isObj(e) || typeof e.correct !== 'boolean' || typeof e.assisted !== 'boolean' || !Number.isInteger(e.tries) || !finite(e.at)) continue;
      s.exercises[id] = { correct: e.correct, assisted: e.assisted, tries: e.tries, at: e.at };
      if (finite(e.helpedAt, 0, e.at)) s.exercises[id].helpedAt = e.helpedAt;
      if (e.everCorrect === true) s.exercises[id].everCorrect = true;
    }
    if (isObj(raw.cards)) for (const [key, c] of Object.entries(raw.cards)) { if (!validCardKey(key, ids)) continue; const clean = cleanCard(c); if (clean) s.cards[key] = clean; }
    if (Array.isArray(raw.log)) s.log = raw.log.filter(e => Array.isArray(e) && finite(e[0]) && typeof e[1] === 'string' && [1, 2, 3, 4].includes(e[2]) && [0, 1, 2, 3].includes(e[3])).slice(-12000).map(e => [e[0], e[1], e[2], e[3], finite(e[4], 0, 120000) ? e[4] : 0]);
    if (isObj(raw.readings)) for (const [id, r] of Object.entries(raw.readings)) if (ids.readings.has(id) && isObj(r)) s.readings[id] = { read: finite(r.read) ? r.read : 0, score: finite(r.score, 0, 1) ? r.score : undefined };
    if (isObj(raw.deck)) {
      if (Array.isArray(raw.deck.added)) s.deck.added = [...new Set(raw.deck.added.filter(id => typeof id === 'string' && ids.vocab(id)))];
      if (Array.isArray(raw.deck.suspended)) s.deck.suspended = [...new Set(raw.deck.suspended.filter(k => typeof k === 'string' && validCardKey(k, ids)))];
    }
    if (isObj(raw.pace) && /^\d{4}-\d{2}-\d{2}$/.test(raw.pace.day || '') && finite(raw.pace.quota, PACE.min, PACE.max)) {
      s.pace = { day: raw.pace.day, quota: raw.pace.quota, reason: typeof raw.pace.reason === 'string' ? raw.pace.reason : 'hold', history: {} };
      if (isObj(raw.pace.history)) for (const [d, q] of Object.entries(raw.pace.history)) if (/^\d{4}-\d{2}-\d{2}$/.test(d) && finite(q, 0, PACE.max)) s.pace.history[d] = q;
    }
    copyDaily(raw.daily, s);
    copySettings(raw.settings, s);
    return s;
  }
  function copyDaily(daily, s) {
    if (!isObj(daily)) return;
    for (const [day, d] of Object.entries(daily)) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(day) || !isObj(d)) continue;
      s.daily[day] = {};
      for (const k of ['new', 'reviews', 'exercises', 'again', 'ms', 'production']) s.daily[day][k] = Number.isInteger(d[k]) && d[k] >= 0 ? d[k] : 0;
    }
  }
  function copySettings(raw, s) {
    if (!isObj(raw)) return;
    if (['es', 'en'].includes(raw.language)) s.settings.language = raw.language;
    if (['light', 'dark'].includes(raw.theme)) s.settings.theme = raw.theme;
    if (typeof raw.voice === 'string' && raw.voice.length < 200) s.settings.voice = raw.voice;
    if (typeof raw.autoAudio === 'boolean') s.settings.autoAudio = raw.autoAudio;
    if (typeof raw.slowAudio === 'boolean') s.settings.slowAudio = raw.slowAudio;
  }
  /* v1 (SM-2 propio, unidades unit-XX): se conservan preferencias, actividad, lecturas
     equivalentes y tarjetas de palabras que siguen existiendo; los ejercicios de la ruta
     antigua no tienen equivalente y se informan en `notices`. */
  function migrateV1(raw, ids) {
    const s = fresh(Date.now());
    copySettings(raw.settings, s);
    copyDaily(raw.daily, s);
    const map = ids.legacyUnits || {};
    if (map[raw.activeUnit] && ids.units.has(map[raw.activeUnit])) s.activeUnit = map[raw.activeUnit];
    let cards = 0, dropped = 0;
    if (isObj(raw.cards)) for (const [key, c] of Object.entries(raw.cards)) {
      const [id, dir] = key.split(':');
      if (!isObj(c) || !ids.vocab(id) || !['de-es', 'es-de', 'de-en', 'en-de'].includes(dir) || !finite(c.interval, 0, 3650) || !finite(c.due) || !finite(c.last)) { dropped++; continue; }
      const nk = 'w:' + id + ':' + (dir.startsWith('de-') ? 'r' : 'p');
      const ease = finite(c.ease, 1.3, 3.2) ? c.ease : 2.5;
      const card = { st: c.interval < 1 ? 1 : 2, s: Math.max(0.5, c.interval), d: clampD(11 - (ease - 1.3) / 1.9 * 9), step: 0, reps: Number.isInteger(c.reps) ? c.reps : 1, lapses: Number.isInteger(c.lapses) ? c.lapses : 0, due: c.due, last: c.last, ivl: Math.round(c.interval) };
      if (!s.cards[nk] || s.cards[nk].last < card.last) { if (!s.cards[nk]) cards++; s.cards[nk] = card; }
    }
    if (Array.isArray(raw.added)) s.deck.added = [...new Set(raw.added.filter(id => typeof id === 'string' && ids.vocab(id)))];
    if (isObj(raw.readings)) for (const [id, v] of Object.entries(raw.readings)) { const nid = (ids.legacyReadings || {})[id] || id; if (v === true && ids.readings.has(nid)) s.readings[nid] = { read: Date.now() }; }
    const oldExercises = isObj(raw.exercises) ? Object.keys(raw.exercises).length : 0;
    s.notices.push({ type: 'migrated-v1', at: Date.now(), cards, dropped, oldExercises });
    return s;
  }

  return {
    MINUTE, DAY, SCHEMA, FSRS, PACE, W,
    dayKey, dayStart, daysBetween, shiftDay,
    retrievability, intervalDays, review, preview, cardR, newCard,
    normalize, levenshtein, compareText, evaluate, answerSets,
    fresh, activity, recordExercise, exerciseDone, unitProgress,
    retentionStats, planDay, queueState, nextCard, rateCard,
    deckStats, forecast, validateState, migrateV1
  };
});
