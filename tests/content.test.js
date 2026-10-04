'use strict';
/* Corpus: integridad, cobertura de lecturas, gramática, validador editorial y textos de audio. */
const assert = require('node:assert/strict');
const test = require('node:test');
const { spawnSync } = require('child_process');
const path = require('path');
const { ROOT, DD, C, M } = require('./_corpus');

test('40 unidades completas, IDs únicos y sin duplicados léxicos', () => {
  assert.equal(C.units.length, 40);
  assert.deepEqual(C.duplicates, []);
  for (const u of C.units) {
    assert(u.lesson?.length >= 3, u.id + ' lección');
    assert(u.exercises.length >= 15, u.id + ' ejercicios');
    assert(C.readingById.has(u.reading), u.id + ' lectura');
    for (const ph of [1, 2, 3]) assert(u.exercises.filter(e => e.ph === ph).length >= 3, `${u.id} fase ${ph}`);
  }
  const ex = C.units.flatMap(u => u.exercises.map(e => e.id));
  assert.equal(new Set(ex).size, ex.length);
  assert(C.lexicon.length > 2500);
});

test('Todas las lecturas tienen 100 % de palabras apoyadas (léxico o glosa)', () => {
  for (const r of C.readings) {
    const cov = C.coverage(r);
    assert.equal(cov.supported, 1, `${r.id}: ${[...cov.unknown.keys()].join(', ')}`);
    for (const p of r.p) assert(p[1] && p[2], r.id + ' traducción');
  }
  assert(C.readings.filter(r => r.kind === 'library').length >= 15);
});

test('Gramática: cada tema citado por una unidad existe; referencias internas válidas', () => {
  for (const u of C.units) for (const g of u.grammar || []) assert(C.grammarById.has(g), `${u.id} → ${g}`);
  for (const g of C.grammar) for (const b of g.blocks) if (b.b === 'ref') assert(C.grammarById.has(b.id), `${g.id} → ${b.id}`);
  assert(C.grammar.length >= 80);
});

test('Validador editorial sin errores', () => {
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts/check-content.js'), '--quiet'], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stdout.split('\n').filter(l => l.includes('✗')).join('\n'));
});

test('Audio: separadores como pausas y nombres de letras con grafía fonética', () => {
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts/audio-texts.js')], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const items = new Map(JSON.parse(r.stdout).map(x => [x.key, x]));
  assert.deepEqual(items.get('danke! – bitte!').speak, ['Danke!', 'Bitte!']);
  assert.deepEqual(items.get('letter:en').speak, ['Enn']);
  for (const x of items.values()) for (const s of x.speak) assert(!/\s[–—\/·]\s/.test(s), x.key);
  assert(items.size > 8000);
});
