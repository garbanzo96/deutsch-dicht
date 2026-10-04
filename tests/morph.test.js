'use strict';
/* Analizador morfológico: formas, separables, compuestos, números, sustantivación. */
const assert = require('node:assert/strict');
const test = require('node:test');
const { C, M } = require('./_corpus');

/* Lema y etiquetas del análisis de `word` dentro de `text`. */
function analyse(text, word, nth = 0) {
  const a = M.analyze(text, C.index);
  const idx = a.tokens.map((t, i) => t === word ? i : -1).filter(i => i >= 0)[nth];
  assert.notEqual(idx, undefined, `«${word}» no está en «${text}»`);
  const top = (a.analysis[idx] || [])[0];
  return top ? { lemma: C.byId.get(top.id).lemma, tags: top.tags } : null;
}

test('Presente con cambio vocálico, Präteritum y participio', () => {
  assert.equal(analyse('Er spricht Deutsch.', 'spricht').lemma, 'sprechen');
  assert(analyse('Er spricht Deutsch.', 'spricht').tags.includes('pres.3s'));
  assert.equal(analyse('Sie ging nach Hause.', 'ging').lemma, 'gehen');
  assert.equal(analyse('Wir haben gegessen.', 'gegessen').lemma, 'essen');
});

test('Verbos separables por cláusula', () => {
  const r = analyse('Ich rufe dich morgen an.', 'rufe');
  assert.equal(r.lemma, 'anrufen');
  assert.equal(analyse('Ich rufe dich morgen an.', 'an').lemma, 'anrufen');
  assert.equal(analyse('Die Daten legen nahe, dass es stimmt.', 'legen').lemma, 'nahelegen');
  assert.equal(analyse('Stimmen beide überein, ist nichts zu tun.', 'Stimmen').lemma, 'übereinstimmen');
});

test('Sustantivos: plural, declinación n, contracciones', () => {
  assert.equal(analyse('Die Häuser sind alt.', 'Häuser').lemma, 'Haus');
  const st = analyse('Ich spreche mit dem Studenten.', 'Studenten');
  assert.equal(st.lemma, 'Student');
  assert.equal(analyse('Wir gehen ins Kino.', 'ins').lemma, 'in');
  assert.notEqual(analyse('Danke! Bitte!', 'Danke').lemma, 'Dank', 'sin dativo arcaico en -e');
});

test('Compuestos, numerales, ordinales y multiplicativos', () => {
  const comp = analyse('Das ist eine Wohnungstür.', 'Wohnungstür');
  assert(comp && comp.tags.includes('compound'));
  assert(analyse('Er ist neunundneunzig.', 'neunundneunzig').tags.includes('numeral'));
  assert(analyse('die elfte These', 'elfte').tags.includes('ordinal'));
  assert(analyse('Ich war dreimal dort.', 'dreimal').tags.includes('times'));
});

test('Sustantivación de adjetivos e infinitivos', () => {
  const g = analyse('Das Wahre ist das Ganze.', 'Ganze');
  assert.equal(g.lemma, 'ganz'); assert(g.tags.includes('subst'));
  assert(analyse('Beim Lesen lerne ich.', 'Lesen').tags.includes('subst'));
});

test('Tokenización reversible (el texto se reconstruye exacto)', () => {
  for (const s of ['Er hat’s gesagt – „Danke!“ E-Mail, 3. Mai.', 'Über allen Gipfeln\nIst Ruh,']) assert.equal(M.tokens(s).join(''), s);
});
