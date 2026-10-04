#!/usr/bin/env node
/* Verificación editorial del corpus: duplicados, esquema de ejercicios, bloques y cobertura léxica.
   Uso: node scripts/check-content.js [--unit u05] [--quiet] */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const only = args.includes('--unit') ? args[args.indexOf('--unit') + 1] : null;
const quiet = args.includes('--quiet');

function load() {
  const context = { window: {}, console };
  context.window.window = context.window;
  vm.createContext(context);
  const run = file => vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
  for (const f of ['data/course.js', 'data/frequency.js']) run(f);
  vm.runInContext('var DD = window.DD;', context);
  for (const dir of ['data/units', 'data/readings', 'data/grammar']) {
    const full = path.join(ROOT, dir);
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full).filter(f => f.endsWith('.js')).sort()) run(path.join(dir, f));
  }
  return context.window.DD;
}

const M = require(path.join(ROOT, 'js/morph.js'));
const Content = require(path.join(ROOT, 'js/content.js'));
const DD = load();
const C = Content.build(DD, M);
let errors = 0, warnings = 0;
const err = msg => { errors++; console.log('  ✗ ' + msg); };
const warn = msg => { warnings++; if (!quiet) console.log('  ! ' + msg); };
const bi = (x, where) => { if (!x || typeof x !== 'object' || typeof x.es !== 'string' || typeof x.en !== 'string' || !x.es.trim() || !x.en.trim()) err(where + ': texto bilingüe incompleto'); };

console.log(`Corpus: ${C.units.length} unidades · ${C.lexicon.length} entradas léxicas · ${C.readings.length} lecturas · ${C.grammar.length} temas de gramática · ${C.exercises.size} ejercicios`);
if (C.duplicates.length) { console.log('Duplicados léxicos:'); for (const [id, a, b] of C.duplicates) err(`${id} definido en ${a} y otra vez en ${b}`); }

// Lemas repetidos en categorías distintas (señal de entrada redundante)
const byLemma = new Map();
for (const e of C.lexicon) { const k = e.lemma; if (!byLemma.has(k)) byLemma.set(k, []); byLemma.get(k).push(e); }
for (const [k, list] of byLemma) if (list.length > 1 && !list.every(e => e.opts?.homonym)) warn(`lema repetido «${k}»: ${list.map(e => e.id + '@' + e.unit).join(', ')}`);

const BLOCKS = new Set(['concept', 'table', 'slots', 'pairs', 'formula', 'list', 'letters', 'sounds', 'minimal', 'note', 'examples', 'ref']);
function checkBlocks(list, owner) {
  for (const [i, b] of list.entries()) {
    const where = `${owner} bloque ${i} (${b.b})`;
    if (!BLOCKS.has(b.b)) err(`${where}: tipo de bloque desconocido`);
    if (b.h) bi(b.h, where + ' h');
    if (b.t) bi(b.t, where + ' t');
    if (b.n) bi(b.n, where + ' n');
    if (b.b === 'table' || b.b === 'slots') for (const row of b.r) if (b.c && row.length !== b.c.length) err(`${where}: fila de ${row.length} celdas para ${b.c.length} columnas`);
    if (b.b === 'ref' && b.id && !C.grammarById.has(b.id) && !C.unitById.has(b.id)) err(`${where}: referencia inexistente ${b.id}`);
    for (const row of b.r || []) for (const cell of Array.isArray(row) ? row : []) {
      if (cell && typeof cell === 'object' && !Array.isArray(cell)) bi(cell, where + ' celda');
      if (typeof cell === 'string' && /\{(es|en)\s*:/.test(cell)) err(`${where}: marcado inválido en celda alemana «${cell}»`);
      if (typeof cell === 'string' && (cell.split('{').length !== cell.split('}').length || cell.split('[').length !== cell.split(']').length)) err(`${where}: llaves o corchetes desparejados «${cell}»`);
    }
  }
}

const TYPES = new Set(['choice', 'gap', 'order', 'write', 'transform', 'match', 'listen', 'rf']);
for (const u of C.units) {
  if (only && u.id !== only) continue;
  if (!u.lesson) { warn(`${u.id}: sin contenido todavía`); continue; }
  console.log(`\n${u.id} · ${u.de} — ${(C.vocabByUnit.get(u.id) || []).length} palabras nuevas · ${u.exercises.length} ejercicios`);
  (u.goals || []).forEach((g, i) => bi(g, `${u.id} goal ${i}`));
  (u.summary || []).forEach((g, i) => bi(g, `${u.id} summary ${i}`));
  checkBlocks(u.lesson || [], u.id);
  for (const ex of u.exercises) {
    const where = `${ex.id} (${ex.t})`;
    if (!TYPES.has(ex.t)) { err(`${where}: tipo desconocido`); continue; }
    if (![1, 2, 3].includes(ex.ph)) err(`${where}: fase inválida`);
    bi(ex.x, where + ' explicación');
    if (ex.p) bi(ex.p, where + ' consigna');
    if (ex.t === 'choice') { if (!Array.isArray(ex.o) || !Number.isInteger(ex.a) || ex.a < 0 || ex.a >= ex.o.length) err(`${where}: opciones/índice`); for (const o of ex.o || []) if (typeof o === 'object') bi(o, where + ' opción'); if (!ex.q && !ex.p && !ex.audio) err(`${where}: sin consigna`); }
    if (ex.t === 'gap') { const gaps = (ex.q.match(/___/g) || []).length; const n = Array.isArray(ex.a) ? ex.a.length : 1; if (gaps !== n) err(`${where}: ${gaps} huecos para ${n} respuestas`); }
    if (ex.t === 'order') { const words = M.key(ex.w.join(' ')).replace(/[.,!?;:„“"]/g, '').split(/\s+/).filter(Boolean).sort().join(' '); const ans = M.key(ex.a).replace(/[.,!?;:„“"]/g, '').split(/\s+/).sort().join(' '); if (words !== ans) err(`${where}: las fichas no reconstruyen la respuesta («${ex.w.join(' | ')}» vs «${ex.a}»)`); }
    if (ex.t === 'write') { bi(ex.s, where + ' fuente'); if (!ex.a) err(`${where}: sin respuesta`); }
    if (ex.t === 'transform' && (!ex.q || !ex.a || !ex.p)) err(`${where}: transformación incompleta`);
    if (ex.t === 'match' && (!Array.isArray(ex.pairs) || ex.pairs.length < 3)) err(`${where}: pares insuficientes`);
    if (ex.t === 'listen' && !ex.a) err(`${where}: sin texto`);
  }
  const counts = [1, 2, 3].map(ph => u.exercises.filter(e => e.ph === ph).length);
  if (counts.some(c => c < 3)) warn(`${u.id}: fases desequilibradas ${counts.join('/')}`);
  for (const [i, e] of (u.examples || []).entries()) if (e.length < 3) err(`${u.id} ejemplo ${i}: falta traducción`);
  for (const [i, e] of (u.chunks || []).entries()) if (e.length < 3) err(`${u.id} expresión ${i}: falta traducción`);
  if (u.reading && !C.readingById.has(u.reading)) err(`${u.id}: lectura ${u.reading} inexistente`);
  for (const g of u.grammar || []) if (C.grammar.length && !C.grammarById.has(g)) warn(`${u.id}: tema de gramática ${g} pendiente`);
}

console.log('\nLecturas — cobertura (conocidas al llegar a su unidad | con glosas):');
for (const r of C.readings) {
  if (only && r.unit !== only) continue;
  for (const [i, p] of r.p.entries()) if (!p[1] || !p[2]) err(`${r.id} párrafo ${i}: falta traducción`);
  for (const [i, q] of (r.q || []).entries()) { if (q.t === 'choice' && !(Number.isInteger(q.a) && q.a < q.o.length)) err(`${r.id} pregunta ${i}`); if (q.t === 'rf' && typeof q.a !== 'boolean') err(`${r.id} pregunta ${i}`); bi(q.x, `${r.id} pregunta ${i}`); }
  const cov = C.coverage(r);
  const pct = x => (x * 100).toFixed(1) + ' %';
  const flag = cov.supported < 0.98 ? '✗' : cov.ratio < 0.9 ? '!' : '✓';
  if (cov.supported < 0.98) errors++;
  console.log(`  ${flag} ${r.id.padEnd(14)} ${String(r.words).padStart(4)} palabras · ${pct(cov.ratio).padStart(7)} | ${pct(cov.supported).padStart(7)}`);
  if (cov.unknown.size && !quiet) console.log('      sin cubrir: ' + [...cov.unknown].map(([w, n]) => n > 1 ? `${w}×${n}` : w).join(', '));
}

// Gramática de referencia
if (!only || only === 'grammar') {
  const chapterIds = new Set(C.chapters.map(c => c.id));
  const seen = new Set();
  if (C.grammar.length) console.log(`\nGramática — ${C.chapters.length} capítulos · ${C.grammar.length} temas`);
  for (const g of C.grammar) {
    const where = `gramática ${g.id}`;
    if (seen.has(g.id)) err(`${where}: id duplicado`); seen.add(g.id);
    if (!chapterIds.has(g.chapter)) err(`${where}: capítulo inexistente ${g.chapter}`);
    if (!g.de || !g.es || !g.en) err(`${where}: título incompleto`);
    if (!g.level) err(`${where}: sin nivel`);
    if (g.summary) bi(g.summary, where + ' resumen'); else warn(`${where}: sin resumen`);
    if (!(g.blocks || []).length) err(`${where}: sin bloques`);
    checkBlocks(g.blocks || [], g.id);
    for (const [i, e] of (g.examples || []).entries()) if (e.length < 3) err(`${where} ejemplo ${i}: falta traducción`);
  }
  for (const c of C.chapters) if (!C.grammar.some(g => g.chapter === c.id)) warn(`capítulo ${c.id} vacío`);
  const used = new Set(C.units.flatMap(u => u.grammar || []));
  const orphan = C.grammar.filter(g => !used.has(g.id)).map(g => g.id);
  if (orphan.length && !quiet) console.log(`  · temas sin unidad asociada (solo referencia): ${orphan.length}`);
}

console.log(`\n${errors} errores · ${warnings} avisos`);
process.exitCode = errors ? 1 : 0;
