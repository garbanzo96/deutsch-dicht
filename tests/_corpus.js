'use strict';
/* Carga el corpus estático (como el navegador) y construye el modelo de contenido. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
function loadDD() {
  const context = { window: {}, console };
  context.window.window = context.window;
  vm.createContext(context);
  const run = file => vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
  for (const f of ['data/course.js', 'data/frequency.js']) run(f);
  vm.runInContext('var DD = window.DD;', context);
  for (const dir of ['data/units', 'data/grammar', 'data/readings']) {
    const full = path.join(ROOT, dir);
    if (fs.existsSync(full)) for (const f of fs.readdirSync(full).filter(f => f.endsWith('.js')).sort()) run(path.join(dir, f));
  }
  return context.window.DD;
}
const M = require(path.join(ROOT, 'js/morph.js'));
const DD = loadDD();
const C = require(path.join(ROOT, 'js/content.js')).build(DD, M);
module.exports = { ROOT, DD, C, M };
