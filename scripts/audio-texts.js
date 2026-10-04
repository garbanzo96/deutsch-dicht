#!/usr/bin/env node
/* Recolecta todo el texto alemán que la app puede reproducir y lo emite como JSON para scripts/build-audio.py.
   Cada elemento: { key, speak, voice } · key = clave normalizada (igual que js/audio.js · norm);
   speak = texto para el sintetizador (separadores convertidos en partes con pausa: lista de cadenas).
   Uso: node scripts/audio-texts.js [--stats] */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');

function load() {
  const context = { window: {}, console };
  context.window.window = context.window;
  vm.createContext(context);
  const run = file => vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
  for (const f of ['data/course.js', 'data/frequency.js']) run(f);
  vm.runInContext('var DD = window.DD;', context);
  for (const dir of ['data/units', 'data/grammar', 'data/readings']) {
    const full = path.join(ROOT, dir);
    if (!fs.existsSync(full)) continue;
    for (const f of fs.readdirSync(full).filter(f => f.endsWith('.js')).sort()) run(path.join(dir, f));
  }
  return context.window.DD;
}
const M = require(path.join(ROOT, 'js/morph.js'));
const DD = load();
const C = require(path.join(ROOT, 'js/content.js')).build(DD, M);

/* Igual que js/audio.js */
const norm = s => String(s ?? '').normalize('NFC').replace(/[‘’]/g, '’').replace(/\s+/g, ' ').trim().toLocaleLowerCase('de');
const plain = s => String(s ?? '').replace(/\{[mfnpNADGV] ([^{}]*)\}/g, '$1').replace(/\[([^\[\]]+)\]/g, '$1');
const SEPARATORS = /\s+[–—]\s+|\s+\/\s+|\s*·\s*|\s*→\s*|\s*\|\s*|(?<=\p{L})\/(?=\p{L})/u;
const parts = text => String(text ?? '').replace(/\{[mfnpNADGV] ([^{}]*)\}/g, '$1').replace(/[\[\]]/g, '')
  .split(SEPARATORS).map(s => s.replace(/^[\s–—-]+|[\s–—-]+$/g, '').replace(/\s*\+\s*/g, ' ').trim()).filter(s => /\p{L}/u.test(s));
const LETTERS = { a: 'Aah', b: 'Beh', be: 'Beh', c: 'Zeh', ce: 'Zeh', d: 'Deh', de: 'Deh', e: 'Eeh', f: 'Eff', ef: 'Eff', g: 'Geh', ge: 'Geh', h: 'Haa', ha: 'Haa', i: 'Ieh', j: 'Jott', jott: 'Jott', k: 'Kaa', ka: 'Kaa', l: 'Ell', el: 'Ell', m: 'Emm', em: 'Emm', n: 'Enn', en: 'Enn', o: 'Ooh', p: 'Peh', pe: 'Peh', q: 'Kuh', ku: 'Kuh', r: 'Ärr', er: 'Ärr', s: 'Ess', es: 'Ess', t: 'Teh', te: 'Teh', u: 'Uuh', v: 'Fau', vau: 'Fau', w: 'Weh', we: 'Weh', x: 'Ix', ix: 'Ix', y: 'Üpsilon', 'üpsilon': 'Üpsilon', ypsilon: 'Üpsilon', z: 'Zett', zett: 'Zett', 'ä': 'Äh', 'ö': 'Öh', 'ü': 'Üh', 'ß': 'Esszett', eszett: 'Esszett' };

const items = new Map();   // key → {key, speak, voice, kind}
const add = (text, kind, voice) => {
  const p = plain(text).trim();
  if (!p || !/\p{L}/u.test(p)) return;
  const key = (voice === 'm' ? 'm|' : '') + norm(p);
  if (items.has(key)) return;
  const sp = parts(p);
  if (!sp.length) return;
  items.set(key, { key, speak: sp, voice: voice || 'f', kind });
};
const tokensOf = text => M.tokens(plain(text)).filter(t => M.isWord(t) && t.length > 1 && !/^\d+$/.test(t));
const words = new Set();
const harvest = text => { if (typeof text === 'string') for (const w of tokensOf(text)) words.add(w); };
const germanCells = row => (Array.isArray(row) ? row : []).filter(c => typeof c === 'string');

function blocks(list) {
  for (const b of list || []) {
    if (b.de) harvest(b.de);
    for (const x of b.ex || []) { add(x, 'example'); harvest(x); }
    if (b.b === 'formula') for (const p of b.f || []) if (typeof p === 'string') harvest(p);
    if (b.b === 'letters') for (const [, name] of b.r || []) { const k = 'letter:' + norm(name); if (!items.has(k)) items.set(k, { key: k, speak: [LETTERS[norm(name)] || name], voice: 'f', kind: 'letter' }); }
    else if (b.b === 'sounds') for (const [, , ws] of b.r || []) for (const w of ws || []) { add(w, 'word'); harvest(w); }
    else if (b.b === 'minimal') for (const [a, z] of b.r || []) { add(a, 'word'); add(z, 'word'); harvest(a); harvest(z); }
    else if (b.b === 'list') for (const [de, m] of b.r || []) {
      if (/^\d+$/.test(de)) { if (b.audio && typeof m === 'string') add(m, 'word'); harvest(m); }
      else { if (b.audio) add(de, 'phrase'); harvest(de); }
    }
    else if (b.b === 'examples') for (const e of b.r || []) { add(e[0], 'example'); harvest(e[0]); }
    else for (const row of b.r || []) for (const c of germanCells(row)) harvest(c);
  }
}

// 1 · Léxico
for (const e of C.lexicon) {
  add(e.lemma, 'lemma'); harvest(e.lemma);
  if (e.de && e.de !== e.lemma) { add(e.de, 'lemma'); harvest(e.de); }
  if (e.kind === 'n' && e.g && e.g !== 'pl') add(({ m: 'der', f: 'die', n: 'das' })[e.g] + ' ' + e.lemma, 'lemma');
  if (e.ex?.de) { add(e.ex.de, 'example'); harvest(e.ex.de); }
}
// 2 · Unidades
for (const u of C.units) {
  blocks(u.lesson);
  for (const x of u.chunks || []) { add(x[0], 'example'); harvest(x[0]); }
  for (const x of u.examples || []) { add(x[0], 'example'); harvest(x[0]); }
  for (const x of u.errors || []) { add(x[1], 'example'); harvest(x[1]); harvest(x[0]); }
  for (const ex of u.exercises || []) {
    const audio = ex.audio || (ex.t === 'listen' ? ex.a : null);
    if (audio) add(audio, 'exercise');
    for (const f of [ex.q, ex.a, ...(Array.isArray(ex.a) ? ex.a : []), ...(ex.alt || []).flat(), ...(ex.w || [])]) if (typeof f === 'string') harvest(f);
    for (const o of ex.o || []) if (typeof o === 'string') harvest(o);
    for (const pr of ex.pairs || []) for (const c of pr) if (typeof c === 'string') harvest(c);
  }
}
// 3 · Gramática
for (const g of C.grammar) { blocks(g.blocks); harvest(g.de); for (const x of g.examples || []) { add(x[0], 'example'); harvest(x[0]); } }
// 4 · Lecturas: frases (mismo corte que el lector) y voz masculina para hablantes masculinos
const male = new Set(Object.entries(DD.speakers || {}).filter(([, g]) => g === 'm').map(([n]) => n));
for (const r of C.readings) {
  harvest(r.de);
  r.p.forEach(p => {
    for (const s of M.sentences(p[0])) { add(s, 'sentence'); if (p[3] && male.has(p[3])) add(s, 'sentence', 'm'); }
    harvest(p[0]);
  });
  for (const q of r.q || []) { harvest(q.q); for (const o of q.o || []) if (typeof o === 'string') harvest(o); }
  for (const [w] of r.gloss || []) { add(w, 'word'); harvest(w); }
}
// 5 · Formas sueltas (consulta de palabras)
for (const w of words) add(w, 'word');

const list = [...items.values()];
if (process.argv.includes('--stats')) {
  const by = {}; for (const x of list) by[x.kind + (x.voice === 'm' ? '·m' : '')] = (by[x.kind + (x.voice === 'm' ? '·m' : '')] || 0) + 1;
  console.log(JSON.stringify({ total: list.length, by }, null, 1));
} else process.stdout.write(JSON.stringify(list));
