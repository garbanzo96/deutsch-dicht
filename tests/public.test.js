'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('Every static HTML asset resolves under a GitHub Pages project path', () => {
  const base = new URL('https://example.github.io/deutsch-dicht/');
  const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m => m[1]).filter(s => !/^(?:data:|https?:|#)/.test(s));
  assert.ok(assets.length > 50);
  for (const ref of assets) {
    const url = new URL(ref, base);
    assert.ok(url.pathname.startsWith(base.pathname), ref);
    assert.ok(fs.statSync(path.join(root, decodeURIComponent(url.pathname.slice(base.pathname.length)))).isFile(), ref);
  }
  assert.ok(fs.existsSync(path.join(root, 'data/dictionary.js')), 'lazy-loaded dictionary');
});

test('The public audio manifest never requests private macOS recordings', () => {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'data/audio-manifest.js'), 'utf8'), context);
  assert.equal(context.window.DD.audio.locale, 'de-DE');
  assert.equal(context.window.DD.audio.mode, 'browser');
  assert.equal(Object.keys(context.window.DD.audio.clips).length, 0);
  assert.equal(fs.existsSync(path.join(root, 'audio')), false);
  assert.equal(fs.existsSync(path.join(root, 'legacy')), false);
});

test('Corpus loads in the exact order used by the static website', () => {
  const context = { window: {}, console };
  context.window.window = context.window;
  vm.createContext(context);
  for (const m of html.matchAll(/<script defer src="(data\/[^"]+)"/g)) {
    const ref = m[1].split('?')[0];
    vm.runInContext(fs.readFileSync(path.join(root, ref), 'utf8'), context, { filename: ref });
    if (ref === 'data/course.js') vm.runInContext('var DD = window.DD;', context);
  }
  const data = require('../js/content.js').build(context.window.DD, require('../js/morph.js'));
  assert.equal(data.duplicates.length, 0);
  assert.ok(data.units.length >= 40);
  for (const unit of data.units) {
    assert.ok(data.readingById.has(unit.reading), unit.id + ' reading');
    for (const id of unit.grammar || []) assert.ok(data.grammarById.has(id), unit.id + ' grammar ' + id);
  }
});

test('A failed new flashcard returns sooner than a successfully recalled card', () => {
  const core = require('../js/core.js');
  const now = Date.UTC(2026, 9, 3, 12);
  const again = core.review(core.newCard(), 1, now, null);
  const easy = core.review(core.newCard(), 4, now, null);
  assert.equal(again.due - now, core.MINUTE);
  assert.ok(easy.due > again.due);
  assert.equal(again.st, 1);
  assert.equal(easy.st, 2);
});
