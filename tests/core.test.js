'use strict';
/* Núcleo: FSRS-6, ritmo adaptativo, cola de repaso, evaluación de respuestas, estado y migración. */
const assert = require('node:assert/strict');
const test = require('node:test');
const C = require('../js/core.js');

const NOW = Date.UTC(2026, 9, 2, 12);
const later = (ms) => NOW + ms;

test('FSRS: estabilidad inicial = pesos w0–w3 y pasos de aprendizaje 1 min / 10 min', () => {
  for (const g of [1, 2, 3, 4]) assert.equal(C.review(null, g, NOW, null).s, Math.max(0.001, C.W[g - 1]));
  const again = C.review(null, 1, NOW, null);
  assert.equal(again.st, 1); assert.equal(again.due, NOW + C.MINUTE);
  const good = C.review(null, 3, NOW, null);
  assert.equal(good.st, 1); assert.equal(good.due, NOW + 10 * C.MINUTE);
  const easy = C.review(null, 4, NOW, null);
  assert.equal(easy.st, 2); assert(easy.ivl >= 1);
});

test('FSRS: graduación, intervalos crecientes y reaprendizaje tras olvido', () => {
  let c = C.review(null, 3, NOW, null);
  c = C.review(c, 3, later(10 * C.MINUTE), null);
  assert.equal(c.st, 2); assert(c.ivl >= 1);
  const ivls = [c.ivl];
  for (let i = 0; i < 4; i++) { c = C.review(c, 3, c.due + 3600e3, null); ivls.push(c.ivl); }
  for (let i = 1; i < ivls.length; i++) assert(ivls[i] > ivls[i - 1], `intervalos crecientes: ${ivls}`);
  const lapse = C.review(c, 1, c.due + 3600e3, null);
  assert.equal(lapse.st, 3); assert.equal(lapse.lapses, c.lapses + 1); assert.equal(lapse.due, c.due + 3600e3 + 10 * C.MINUTE);
  assert(lapse.s < c.s);
});

test('FSRS: retención 0,9 en el intervalo óptimo y fuzz acotado', () => {
  assert(Math.abs(C.retrievability(10, 10) - 0.9) < 1e-9);
  assert.equal(C.intervalDays(10), 10);
  const c = C.review(C.review(null, 3, NOW, null), 3, later(10 * C.MINUTE), null);
  const big = { ...c, s: 100, last: NOW - 100 * C.DAY };
  const a = C.review(big, 3, NOW, () => 0), b = C.review(big, 3, NOW, () => 0.999);
  assert(a.ivl <= b.ivl && b.ivl - a.ivl <= Math.ceil(0.15 * a.ivl) + 10);
  assert.throws(() => C.review(c, 5, NOW));
});

test('Ritmo: empieza en 12, sube +2 con día completo y buena retención, baja con acumulación', () => {
  const s = C.fresh(NOW);
  assert.equal(C.planDay(s, NOW).quota, 12);
  s.daily[C.dayKey(NOW)] = { new: 12, reviews: 30 };
  for (let i = 0; i < 25; i++) s.log.push([NOW - i * 1000, 'w:x:r', 3, 2, 4000]);
  assert.equal(C.planDay(s, NOW + C.DAY).quota, 14);
  s.daily[C.dayKey(NOW + C.DAY)] = { new: 14 };
  assert.equal(C.planDay(s, NOW + 2 * C.DAY, 14 * 13).quota, 10, 'acumulación > 12 × cuota → −4');
  const t = C.fresh(NOW); t.pace = { day: '2026-01-01', quota: 40, history: {} }; t.daily['2026-01-01'] = { new: 40 };
  assert.equal(C.planDay(t, NOW).quota, 40, 'techo 40');
});

test('Cola: nuevas limitadas por la cuota; producción solo tras estabilidad ≥ 3 días', () => {
  const s = C.fresh(NOW);
  const deck = Array.from({ length: 50 }, (_, i) => 'v' + i);
  const q = C.queueState(s, deck, NOW);
  assert.equal(q.newKeys.length, 12);
  assert(q.newKeys.every(k => /^w:v\d+:r$/.test(k)));
  s.cards['w:v0:r'] = { st: 2, s: 5, d: 5, step: 0, reps: 3, lapses: 0, due: NOW + 5 * C.DAY, last: NOW - C.DAY, ivl: 5 };
  s.cards['w:v1:r'] = { st: 2, s: 1, d: 5, step: 0, reps: 2, lapses: 0, due: NOW + C.DAY, last: NOW - C.DAY, ivl: 1 };
  const q2 = C.queueState(s, deck, NOW + 1);
  assert(q2.newKeys.includes('w:v0:p'));
  assert(!q2.newKeys.includes('w:v1:p'));
});

test('Evaluación: la puntuación y los guiones nunca son obligatorios', () => {
  const ex = { t: 'write', a: 'Danke! – Bitte!', alt: ['Danke! Bitte!'] };
  for (const v of ['Danke - Bitte', 'danke bitte', 'Danke! - Bitte!', 'Danke – Bitte', 'danke. bitte']) assert.equal(C.evaluate(ex, v).ok, true, v);
  assert.equal(C.evaluate(ex, 'danke bitte').hint, null, 'tras «–» la mayúscula no se exige');
  assert.equal(C.evaluate({ t: 'write', a: 'Wie geht’s?' }, "wie geht's").ok, true);
  assert.equal(C.evaluate({ t: 'write', a: 'Wie geht’s?' }, 'Wie gehts').ok, true);
  assert.equal(C.evaluate({ t: 'write', a: 'Wie geht’s?' }, 'Wie geht es').ok, true);
  assert.equal(C.evaluate({ t: 'write', a: 'Ich schreibe eine E-Mail.' }, 'ich schreibe eine e-mail').ok, true);
});

test('Evaluación: casi-aciertos (Umlaut, ß, errata) y aviso de mayúscula de sustantivo', () => {
  assert.deepEqual([C.evaluate({ t: 'write', a: 'schön' }, 'schoen').near, C.evaluate({ t: 'write', a: 'schön' }, 'schoen').hint], [true, 'umlaut']);
  assert.equal(C.evaluate({ t: 'write', a: 'Straße' }, 'Strasse').hint, 'eszett');
  assert.equal(C.evaluate({ t: 'write', a: 'Ich habe einen Bruder.' }, 'Ich habe einen Bruuder').hint, 'typo');
  assert.equal(C.evaluate({ t: 'write', a: 'Ich habe einen Bruder.' }, 'ich habe einen bruder').hint, 'case');
  assert.equal(C.evaluate({ t: 'choice', a: 1, o: ['a', 'b'] }, '').ok, false);
  assert.equal(C.evaluate({ t: 'choice', a: 1, o: ['a', 'b'] }, '1').ok, true);
  const gap = C.evaluate({ t: 'gap', q: 'Ich ___ ___.', a: ['bin', 'müde'] }, ['bin', 'mude']);
  assert.equal(gap.ok, false); assert.equal(gap.near, true);
});

test('Ejercicios: la ayuda no cuenta y el acierto sin ayuda crea la tarjeta de gramática', () => {
  const s = C.fresh(NOW), ex = { id: 'u01-01' };
  C.recordExercise(s, ex, { ok: false }, true, NOW);
  assert.equal(C.exerciseDone(s, ex.id), false);
  C.recordExercise(s, ex, { ok: true }, false, NOW + 5 * C.MINUTE);
  assert.equal(C.exerciseDone(s, ex.id), false, 'dentro de la ventana de 10 min');
  assert.equal(s.cards['g:u01-01'], undefined);
  C.recordExercise(s, ex, { ok: true }, false, NOW + 11 * C.MINUTE);
  assert.equal(C.exerciseDone(s, ex.id), true);
  assert.equal(s.cards['g:u01-01'].st, 2);
});

test('Estado: validación filtra desconocidos y migración v1 conserva tarjetas y ajustes', () => {
  const ids = { units: new Set(['u01']), exercises: new Set(['u01-01']), readings: new Set(['r-u01']), vocab: id => id === 'noun-tisch', legacyUnits: { 'unit-01': 'u01' } };
  const s = C.fresh(NOW);
  s.cards['w:noun-tisch:r'] = C.review(null, 3, NOW, null);
  s.cards['w:desconocida:r'] = C.review(null, 3, NOW, null);
  s.settings.theme = 'dark';
  const clean = C.validateState(JSON.parse(JSON.stringify(s)), ids);
  assert.deepEqual(Object.keys(clean.cards), ['w:noun-tisch:r']);
  assert.equal(clean.settings.theme, 'dark');
  assert.throws(() => C.validateState({ schemaVersion: 99 }, ids));
  const v1 = { schemaVersion: 1, activeUnit: 'unit-01', settings: { language: 'en' }, cards: { 'noun-tisch:de-es': { interval: 6, ease: 2.5, due: NOW + C.DAY, last: NOW - 5 * C.DAY, reps: 4, lapses: 0 }, 'nada:de-es': { interval: 1, due: NOW, last: NOW } } };
  const m = C.migrateV1(v1, ids);
  assert.equal(m.activeUnit, 'u01'); assert.equal(m.settings.language, 'en');
  assert.equal(m.cards['w:noun-tisch:r'].st, 2); assert.equal(m.cards['w:noun-tisch:r'].s, 6);
  assert.equal(m.notices[0].dropped, 1);
});
