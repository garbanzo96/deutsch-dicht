/* Deutsch Dicht · Aprender: mapa del curso, unidad (lección, texto, práctica). */
(function () {
  'use strict';
  const App = window.DDApp;
  const { t, loc, esc, icon, mark, pad2, bar, ring, headword, formsLine, meaning, sayBtn, audioBtn, blocks, exampleLine, fmtNum } = App;
  const Core = () => App.Core;
  const main = document.getElementById('main');

  const unitNo = u => pad2(u.order);
  const moduleOf = u => App.C.modules.find(m => m.id === u.module);
  const progressOf = u => Core().unitProgress(u, App.state);
  const ready = u => Array.isArray(u.lesson) && u.lesson.length > 0;
  function cardState(id) {
    const c = App.state.cards['w:' + id + ':r'];
    if (!c) return 'none';
    if (c.st === 1 || c.st === 3) return 'learning';
    return c.s >= 21 ? 'mature' : 'young';
  }
  App.cardState = cardState;
  const deckDot = id => { const s = cardState(id); return `<span class="deck-dot ${s === 'none' ? '' : s}" title="${esc({ none: t('Aún no en tu mazo', 'Not in your deck yet'), learning: t('Aprendiendo', 'Learning'), young: t('En repaso', 'In review'), mature: t('Consolidada (≥ 21 días)', 'Mature (≥ 21 days)') }[s])}"></span>`; };
  App.deckDot = deckDot;

  /* ───────────── Mapa del curso ───────────── */
  App.views.learn = function () {
    const C = App.C, s = App.state;
    const cur = C.unitById.get(s.activeUnit) || C.units[0];
    const st = progressOf(cur), mod = moduleOf(cur);
    const sum = App.dueSummary();
    const vocab = (C.vocabByUnit.get(cur.id) || []).filter(e => e.kind !== 'name').length;
    const reading = suggestReading(cur);
    const mastered = C.units.filter(u => progressOf(u).mastered).length;
    const hero = `<section class="hero">
      <article class="card continue">
        <div class="row spread"><div class="eyebrow">${esc(mod.code)} <span class="sep">·</span> ${t('Unidad', 'Unit')} ${unitNo(cur)}</div><span class="level">${cur.level}</span></div>
        <div><div class="title" lang="de">${esc(cur.de)}</div><div class="sub">${esc(loc(cur))} — ${esc(loc(cur.focus))}</div></div>
        <div class="meta"><span>${icon('clock', 's')} ${cur.minutes || 40} min</span><span>${icon('words', 's')} ${vocab} ${t('palabras nuevas', 'new words')}</span><span>${icon('pen', 's')} ${st.done}/${st.total} ${t('ejercicios', 'exercises')}</span></div>
        ${bar(st.ratio)}
        <div class="row"><a class="btn primary lg" href="#unit/${cur.id}">${st.done ? t('Continuar', 'Continue') : t('Empezar', 'Start')} ${icon('arrow', 's')}</a>${st.mastered && next(cur) ? `<a class="btn lg" href="#unit/${next(cur).id}">${t('Siguiente unidad', 'Next unit')}</a>` : ''}</div>
      </article>
      <article class="card today">
        <div class="card-head"><h2>${t('Plan de hoy', 'Today’s plan')}</h2><span class="sub">${mastered}/${C.units.length} ${t('unidades dominadas', 'units mastered')}</span></div>
        <div class="today-list">
          <a class="today-item" href="#review"><span class="n">${icon('review')}</span><span><strong>${t('Repaso espaciado', 'Spaced review')}</strong><span>${sum.due} ${t('pendientes', 'due')} · ${Math.max(0, sum.quota - sum.done)} ${t('nuevas', 'new')} (${t('cuota', 'quota')} ${sum.quota})</span></span><span class="v">${sum.due + sum.fresh}</span></a>
          <a class="today-item" href="#unit/${cur.id}"><span class="n">${icon('learn')}</span><span><strong>${t('Unidad', 'Unit')} ${unitNo(cur)} · <span lang="de">${esc(cur.de)}</span></strong><span>${t('Lección, texto y práctica', 'Lesson, text and practice')}</span></span><span class="v">${Math.round(st.ratio * 100)} %</span></a>
          ${reading ? `<a class="today-item" href="#read/${reading.id}"><span class="n">${icon('read')}</span><span><strong lang="de">${esc(reading.de)}</strong><span>${reading.level} · ${reading.words} ${t('palabras', 'words')} · ${esc(loc(reading.genre))}</span></span><span class="v">${icon('right', 's')}</span></a>` : ''}
        </div>
        <p class="small muted">${t('Orden recomendado: repaso → unidad → lectura. El repaso primero aprovecha el olvido acumulado; la lectura consolida lo aprendido en contexto.', 'Recommended order: review → unit → reading. Review first exploits accumulated forgetting; reading consolidates in context.')}</p>
      </article>
    </section>`;
    const modules = C.modules.map(m => {
      const units = C.units.filter(u => u.module === m.id);
      const done = units.filter(u => progressOf(u).mastered).length;
      return `<section class="module">
        <header class="module-head"><span class="module-code">${esc(m.code)}</span><h2 class="module-title" lang="de">${esc(m.de)}<span lang="${App.state.settings.language}">${esc(loc(m))}</span></h2><span class="module-progress">${done} / ${units.length}</span></header>
        <div class="units">${units.map(u => tile(u, cur)).join('')}</div>
      </section>`;
    }).join('');
    return `<div class="page">
      <header class="page-head"><div><div class="eyebrow">Deutsch Dicht · A1 → C1</div><h1>${t('Tu ruta', 'Your path')}</h1><p class="lede">${t('40 unidades, de los sonidos a la lectura filosófica. Cada una: regla explícita, formas, ejemplos con audio, vocabulario nuevo, texto graduado y práctica en tres fases.', '40 units, from sounds to philosophical reading. Each one: explicit rule, forms, audio examples, new vocabulary, graded text and three-phase practice.')}</p></div></header>
      ${hero}${modules}
    </div>`;
  };
  function tile(u, cur) {
    const p = progressOf(u), visited = !!App.state.units[u.id]?.visited;
    const state = p.mastered ? 'done' : (visited || p.done) ? 'progress' : '';
    const status = p.mastered ? icon('check', 's') : state === 'progress' ? icon('play', 's fill') : '';
    if (!ready(u)) return `<div class="unit-tile" style="opacity:.55"><div class="top"><span class="num">${unitNo(u)}</span><span class="chip outline">${t('en preparación', 'in preparation')}</span></div><div class="t" lang="de">${esc(u.de)}</div><div class="s">${esc(loc(u.focus))}</div></div>`;
    return `<a class="unit-tile ${u.id === cur.id ? 'current' : ''} ${p.mastered ? 'done' : ''}" href="#unit/${u.id}">
      <div class="top"><span class="num">${t('UNIDAD', 'UNIT')} ${unitNo(u)}</span><span class="status-dot ${state}">${status}</span></div>
      <div class="t" lang="de">${esc(u.de)}</div>
      <div class="s">${esc(loc(u))}</div>
      <div class="bottom"><div class="state"><span>${p.done}/${p.total}</span><span>${p.mastered ? t('dominada', 'mastered') : state === 'progress' ? t('en curso', 'in progress') : ''}</span></div>${bar(p.ratio, p.mastered ? 'good' : '')}</div>
    </a>`;
  }
  const next = u => App.C.units[App.C.unitIndex.get(u.id) + 1];
  const prev = u => App.C.units[App.C.unitIndex.get(u.id) - 1];
  function suggestReading(u) {
    const idx = App.C.unitIndex.get(u.id);
    const list = App.C.readings.filter(r => !App.state.readings[r.id]?.read && (r.unitIndex ?? 0) <= idx);
    return list.find(r => r.unit === u.id) || list[list.length - 1] || App.C.readingById.get(u.reading) || null;
  }

  /* ───────────── Unidad ───────────── */
  App.views.unit = function (r) {
    const C = App.C, s = App.state;
    const u = C.unitById.get(r.id) || C.units[0];
    if (!ready(u)) return `<div class="page"><div class="empty"><h2 lang="de">${esc(u.de)}</h2><p>${t('Esta unidad está en preparación.', 'This unit is in preparation.')}</p><a class="btn" href="#learn">${t('Volver a la ruta', 'Back to the path')}</a></div></div>`;
    const tabs = ['lesson', 'text', 'practice'];
    let tab = tabs.includes(r.sub) ? r.sub : (s.units[u.id]?.tab || 'lesson');
    if (!s.units[u.id]?.visited || s.activeUnit !== u.id || s.units[u.id]?.tab !== tab) { s.units[u.id] = { ...(s.units[u.id] || {}), visited: s.units[u.id]?.visited || Date.now(), tab }; s.activeUnit = u.id; App.save(); }
    const p = progressOf(u), mod = moduleOf(u);
    const words = (C.vocabByUnit.get(u.id) || []).filter(e => e.kind !== 'name');
    const reading = C.readingById.get(u.reading);
    const readDone = reading && App.state.readings[reading.id]?.read;
    const head = `<nav class="crumbs"><a href="#learn">${t('Ruta', 'Path')}</a>${icon('right', 's')}<span>${esc(mod.code)} · <span lang="de">${esc(mod.de)}</span></span>${icon('right', 's')}<span>${t('Unidad', 'Unit')} ${unitNo(u)}</span></nav>
      <header class="unit-head"><div><div class="eyebrow"><span class="level">${u.level}</span> ${t('Unidad', 'Unit')} ${unitNo(u)} <span class="sep">·</span> ${esc(loc(u))}</div><h1 lang="de">${esc(u.de)}</h1><p class="sub">${esc(loc(u.focus))}</p>
        <div class="unit-meta"><span>${icon('clock', 's')} ${u.minutes || 40} min</span><span>${icon('words', 's')} ${words.length} ${t('palabras nuevas', 'new words')}</span><span>${icon('pen', 's')} ${u.exercises.length} ${t('ejercicios', 'exercises')}</span>${reading ? `<span>${icon('read', 's')} ${reading.words} ${t('palabras de lectura', 'reading words')}</span>` : ''}</div></div>
        <div class="unit-score">${ring(p.ratio, Math.round(p.ratio * 100) + '%')}<span class="small muted">${p.mastered ? t('Unidad dominada', 'Unit mastered') : t('Dominio: ≥ 80 % sin ayuda', 'Mastery: ≥ 80 % unassisted')}</span></div>
      </header>`;
    const tabBar = `<div class="unit-tabs"><div class="tabs" role="tablist">
      ${[['lesson', 'Lektion', t('Lección', 'Lesson'), ''], ['text', 'Text', t('Lectura', 'Reading'), readDone ? icon('check', 's') : ''], ['practice', 'Übungen', t('Práctica', 'Practice'), `${p.done}/${p.total}`]].map(([id, de, l, meta], i) => `<a href="#unit/${u.id}/${id}" role="tab" aria-selected="${tab === id}"><span class="num">${i + 1}</span><span class="de-tab">${de}</span><span class="small muted">${l}</span>${meta ? `<span class="meta">${meta}</span>` : ''}</a>`).join('')}
    </div></div>`;
    let content;
    if (tab === 'text') {
      content = reading ? App.Reader.render(reading, { embedded: true }) : `<p class="empty">${t('Sin lectura.', 'No reading.')}</p>`;
      const more = (u.more || []).map(id => C.readingById.get(id)).filter(Boolean);
      if (more.length) content += `<section class="reader-side"><div class="card flat"><div class="card-head"><h3>${t('Más lecturas para esta unidad', 'More readings for this unit')}</h3></div><div class="lines">${more.map(r => `<a class="line" href="#read/${r.id}" style="color:inherit"><span class="level">${r.level}</span><span class="de" lang="de">${esc(r.de)}</span><span class="tr">${esc(loc(r.genre))} · ${r.words} ${t('palabras', 'words')}</span></a>`).join('')}</div></div></section>`;
    }
    else if (tab === 'practice') content = practice(u);
    else content = lesson(u, words);
    return `<div class="page">${head}${tabBar}${content}${unitFoot(u, tab)}</div>`;
  };
  function unitFoot(u, tab) {
    const pv = prev(u), nx = next(u);
    const forward = tab === 'lesson' ? `<a class="next" href="#unit/${u.id}/text"><small>${t('Siguiente paso', 'Next step')}</small><span>Text · ${t('Lectura', 'Reading')} →</span></a>` : tab === 'text' ? `<a class="next" href="#unit/${u.id}/practice"><small>${t('Siguiente paso', 'Next step')}</small><span>Übungen · ${t('Práctica', 'Practice')} →</span></a>` : nx ? `<a class="next" href="#unit/${nx.id}"><small>${t('Unidad', 'Unit')} ${unitNo(nx)}</small><span lang="de">${esc(nx.de)} →</span></a>` : '<span></span>';
    const back = pv ? `<a href="#unit/${pv.id}"><small>${t('Unidad', 'Unit')} ${unitNo(pv)}</small><span lang="de">← ${esc(pv.de)}</span></a>` : '<span></span>';
    return `<nav class="unit-foot">${back}${forward}</nav>`;
  }

  /* ───────────── Lección ───────────── */
  const SECTIONS = [
    ['ziele', 'Ziele', ['Objetivos', 'Goals']], ['regel', 'Regel', ['Regla y formas', 'Rule and forms']], ['redemittel', 'Redemittel', ['Expresiones útiles', 'Useful phrases']],
    ['fehler', 'Typische Fehler', ['Errores típicos', 'Typical mistakes']], ['beispiele', 'Beispiele', ['Ejemplos', 'Examples']], ['wortschatz', 'Wortschatz', ['Vocabulario nuevo', 'New vocabulary']], ['merkkasten', 'Merkkasten', ['Resumen', 'Summary']]
  ];
  function lesson(u, words) {
    const parts = {
      ziele: `<div class="goals">${u.goals.map(g => `<div class="goal">${esc(loc(g))}</div>`).join('')}</div>`,
      regel: blocks(u.lesson),
      redemittel: u.chunks?.length ? `<div class="lines">${u.chunks.map(exampleLine).join('')}</div>` : '',
      fehler: u.errors?.length ? `<div class="errors">${u.errors.map(([w, r, why]) => `<div class="err"><div class="wrong" lang="de">${icon('x')}<span class="strike">${mark(w)}</span></div><div class="right" lang="de">${icon('check')}<span>${mark(r)}</span>${App.audioBtn(r)}</div>${why ? `<div class="why">${esc(loc(why))}</div>` : ''}</div>`).join('')}</div>` : '',
      beispiele: u.examples?.length ? `<div class="lines">${u.examples.map(exampleLine).join('')}</div>` : '',
      wortschatz: vocabSection(u, words),
      merkkasten: u.summary?.length ? `<div class="summary"><ol>${u.summary.map(x => `<li>${esc(loc(x))}</li>`).join('')}</ol></div>` : ''
    };
    const present = SECTIONS.filter(([id]) => parts[id]);
    const asides = { wortschatz: `${words.length} · ${words.filter(e => cardState(e.id) !== 'none').length} ${t('en tu mazo', 'in your deck')}`, beispiele: t('con audio', 'with audio') };
    const toc = `<nav class="toc" aria-label="${t('Índice de la lección', 'Lesson contents')}"><div class="label">${t('En esta lección', 'In this lesson')}</div>${present.map(([id, de, l], i) => `<a href="#unit/${u.id}/lesson" data-jump="${id}"><b>${pad2(i + 1)}</b><span><span class="de">${de}</span></span></a>`).join('')}<div class="divider" style="margin:10px 0"></div><a href="#unit/${u.id}/practice"><b>${icon('pen', 's')}</b><span>${t('Ir a la práctica', 'Go to practice')}</span></a></nav>`;
    const sections = present.map(([id, de, l], i) => `<section class="section" id="sec-${id}"><header class="section-head"><span class="n">${pad2(i + 1)}</span><h2 lang="de">${de}<span lang="${App.state.settings.language}">${esc(t(...l))}</span></h2><span class="aside">${asides[id] || ''}</span></header>${parts[id]}</section>`).join('');
    return `<div class="lesson-layout"><div class="stack xl">${sections}</div>${toc}</div>`;
  }
  function vocabSection(u, words) {
    if (!words.length) return '';
    const core = words.filter(e => !e.ext), ext = words.filter(e => e.ext);
    let html = vocabGroups(core.length ? core : ext);
    if (core.length && ext.length) html += `<details class="vocab-ext"><summary><span>${t('Ampliación · vocabulario básico del nivel', 'Extension · core vocabulary for this level')}</span><span class="small muted">${ext.length} ${t('palabras', 'words')}</span></summary><p class="small muted">${t('Palabras de alta frecuencia del nivel que completan la lista de referencia A1–B1. Entran al mazo igual que las demás; aquí quedan agrupadas para no recargar la lección.', 'High-frequency words of this level that complete the A1–B1 reference list. They enter the deck like the rest; they are grouped here to keep the lesson light.')}</p>${vocabGroups(ext)}</details>`;
    const names = (App.C.vocabByUnit.get(u.id) || []).filter(e => e.kind === 'name');
    if (names.length) html += `<p class="small muted">${t('Nombres propios de los textos', 'Proper names in the texts')}: <span lang="de">${names.map(e => esc(e.lemma)).join(' · ')}</span></p>`;
    html += `<p class="small muted">${icon('review', 's')} ${t('Estas palabras entran automáticamente en tu mazo de repaso, en orden de frecuencia, al ritmo diario adaptativo.', 'These words enter your review deck automatically, in frequency order, at the adaptive daily pace.')}</p>`;
    return `<div class="stack l">${html}</div>`;
  }

  function vocabGroups(words) {
    const by = k => words.filter(e => e.kind === k);
    const nouns = by('n');
    const genderCol = (g, label) => {
      const list = nouns.filter(e => e.g === g);
      return `<div class="gender-col ${g}"><header><span>${label}</span><small>${list.length}</small></header>${list.map(e => `<div class="vw"><span class="hw">${App.sayBtn(e.lemma, `<span class="${App.gclass(e.g)}">${esc(e.lemma)}</span>`)}<span class="pl">${e.pl ? esc(App.M.pluralNotation(e.lemma, e.pl) || '· ' + e.pl) : t('sin pl.', 'no pl.')}</span></span><span class="st">${deckDot(e.id)}</span><span class="m">${meaning(e)}</span></div>`).join('') || `<div class="vw"><span class="m">—</span></div>`}</div>`;
    };
    const pluralOnly = nouns.filter(e => e.g === 'pl' || !e.g);
    let html = '';
    if (nouns.length) html += `<div class="vocab-group"><h3><span>${t('Sustantivos', 'Nouns')} · Nomen</span><span>${nouns.length}</span></h3><div class="gender-cols">${genderCol('m', 'der · ' + t('masculino', 'masculine'))}${genderCol('f', 'die · ' + t('femenino', 'feminine'))}${genderCol('n', 'das · ' + t('neutro', 'neuter'))}</div>${pluralOnly.length ? `<div class="term-list c2">${pluralOnly.map(e => `<div class="term">${App.sayBtn(e.lemma, headword(e))}<span class="m">${meaning(e)} ${e.g === 'pl' ? '· ' + t('solo plural', 'plural only') : ''}</span></div>`).join('')}</div>` : ''}<p class="small muted">${t('Notación: «-e» = se añade -e en plural (Tisch → Tische); «¨-er» = Umlaut + -er (Haus → Häuser); «–» = plural igual al singular.', 'Notation: “-e” = add -e in the plural (Tisch → Tische); “¨-er” = umlaut + -er (Haus → Häuser); “–” = plural same as singular.')}</p></div>`;
    const verbs = by('v');
    if (verbs.length) html += `<div class="vocab-group vtable"><h3><span>${t('Verbos', 'Verbs')} · Verben</span><span>${verbs.length}</span></h3><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Infinitiv</th><th>er/sie/es</th><th>Präteritum</th><th>Perfekt</th><th>${t('Significado', 'Meaning')}</th><th></th></tr></thead><tbody>${verbs.map(e => `<tr><th scope="row">${App.sayBtn(e.de)}</th><td class="de">${esc(e.v.p3 || '')}</td><td class="de">${esc(e.v.prt || '')}</td><td class="de">${esc([e.v.aux, e.v.pp].join(' '))}</td><td>${meaning(e)}${e.v.rek ? ` · <span class="hl">${esc(e.v.rek)}</span>` : ''}${e.v.obj === 'D' ? ` · <span class="c-D">+ Dat.</span>` : ''}</td><td>${deckDot(e.id)}</td></tr>`).join('')}</tbody></table></div></div>`;
    const adjs = by('a');
    if (adjs.length) html += `<div class="vocab-group"><h3><span>${t('Adjetivos', 'Adjectives')} · Adjektive</span><span>${adjs.length}</span></h3><div class="term-list c2">${adjs.map(e => `<div class="term">${App.sayBtn(e.lemma)}<span class="m">${meaning(e)}${e.a.cmp || e.a.sup ? ` · <span class="de">${esc([e.a.cmp, e.a.sup].filter(Boolean).join(', '))}</span>` : ''}</span></div>`).join('')}</div></div>`;
    const rest = [['pron', t('Pronombres', 'Pronouns') + ' · Pronomen'], ['art', t('Artículos', 'Articles') + ' · Artikel'], ['prep', t('Preposiciones', 'Prepositions') + ' · Präpositionen'], ['conj', t('Conectores', 'Connectors') + ' · Konnektoren'], ['adv', t('Adverbios', 'Adverbs') + ' · Adverbien'], ['part', t('Partículas', 'Particles') + ' · Partikeln'], ['num', t('Números', 'Numbers') + ' · Zahlen'], ['interj', t('Interjecciones', 'Interjections')], ['phr', t('Expresiones', 'Phrases') + ' · Wendungen']];
    for (const [k, label] of rest) {
      const list = by(k);
      if (!list.length) continue;
      html += `<div class="vocab-group"><h3><span>${label}</span><span>${list.length}</span></h3><div class="term-list ${k === 'num' ? 'c4' : 'c2'}">${list.map(e => `<div class="term">${App.sayBtn(e.de)}<span class="m">${meaning(e)}${e.case ? ` · <span class="hl">${esc(formsLine(e))}</span>` : ''}</span></div>`).join('')}</div></div>`;
    }
    return html;
  }

  /* ───────────── Práctica ───────────── */
  const PHASE = [null, ['Erkennen', 'Reconocer', 'Recognise'], ['Üben', 'Practicar', 'Practise'], ['Anwenden', 'Aplicar', 'Apply']];
  function P(id) { return App.ui.ex[id] || (App.ui.ex[id] = { i: firstPending(App.C.unitById.get(id)), vals: {}, res: {}, tried: {}, fails: {}, sel: {}, finished: false }); }
  function firstPending(u) { const i = u.exercises.findIndex(e => !Core().exerciseDone(App.state, e.id)); return i < 0 ? 0 : i; }
  function dotClass(ex, isCur) {
    const r = App.state.exercises[ex.id];
    let c = !r ? '' : (r.correct && !r.assisted) ? 'ok' : r.assisted ? 'help' : 'bad';
    return c + (isCur ? ' cur' : '');
  }
  function practice(u) {
    const st = P(u.id), list = u.exercises;
    st.i = Math.min(Math.max(0, st.i), list.length - 1);
    const ex = list[st.i];
    const phases = [1, 2, 3].map(ph => {
      const items = list.map((e, i) => [e, i]).filter(([e]) => e.ph === ph);
      if (!items.length) return '';
      const ok = items.filter(([e]) => Core().exerciseDone(App.state, e.id)).length;
      return `<div class="phase"><h4><span><span class="de">${PHASE[ph][0]}</span> · ${t(PHASE[ph][1], PHASE[ph][2])}</span><span>${ok}/${items.length}</span></h4><div class="dots">${items.map(([e, i]) => `<button type="button" class="dot ${dotClass(e, !st.finished && i === st.i)}" data-action="ex-goto" data-i="${i}" aria-label="${t('Ejercicio', 'Exercise')} ${i + 1}">${i + 1}</button>`).join('')}</div></div>`;
    }).join('');
    const prog = progressOf(u);
    const legend = `<div class="small muted" style="display:grid;gap:6px"><span><span class="deck-dot mature"></span> ${t('correcto sin ayuda', 'correct, unassisted')}</span><span><span class="deck-dot learning"></span> ${t('con solución', 'with solution')}</span><span><span class="deck-dot" style="background:var(--bad)"></span> ${t('por consolidar', 'to consolidate')}</span></div>`;
    const side = `<aside class="phases">${phases}${bar(prog.ratio, prog.mastered ? 'good' : '')}<div class="small muted">${prog.done}/${prog.total} ${t('sin ayuda', 'unassisted')} · ${t('dominio con', 'mastery at')} ${Math.ceil(prog.total * .8)}</div>${legend}</aside>`;
    if (st.finished) return `<div class="practice">${side}${summaryCard(u)}</div>`;
    const res = st.res[ex.id];
    const locked = !!(res && (res.ok || res.assisted || res.shown));
    const ctx = { mode: 'unit', val: st.vals[ex.id], res, locked, tried: st.tried[ex.id], sel: st.sel[ex.id], reveal: res?.shown || res?.assisted, top: `${t(PHASE[ex.ph][1], PHASE[ex.ph][2])} · ${st.i + 1} / ${list.length}` };
    const last = st.i === list.length - 1;
    ctx.actions = locked
      ? `<button class="btn primary" data-action="ex-next">${last ? t('Ver resultado', 'See results') : t('Siguiente', 'Next')} <span class="kbd">⏎</span></button><span class="grow"></span><button class="btn ghost sm" data-action="ex-prev" ${st.i === 0 ? 'disabled' : ''}>${icon('left', 's')} ${t('Anterior', 'Previous')}</button>`
      : `${['choice', 'rf', 'match'].includes(ex.t) ? '' : `<button class="btn primary" data-action="ex-check">${t('Comprobar', 'Check')} <span class="kbd">⏎</span></button>`}<button class="btn ghost" data-action="ex-solution">${icon('eye', 's')} ${t('Ver solución', 'Show solution')}</button><span class="grow"></span><button class="btn ghost sm" data-action="ex-prev" ${st.i === 0 ? 'disabled' : ''}>${icon('left', 's')}</button><button class="btn ghost sm" data-action="ex-skip">${t('Saltar', 'Skip')} ${icon('right', 's')}</button>`;
    return `<div class="practice">${side}<div>${App.Exercise.card(ex, ctx)}</div></div>`;
  }
  function summaryCard(u) {
    const p = progressOf(u), nx = next(u);
    const pending = u.exercises.filter(e => !Core().exerciseDone(App.state, e.id)).length;
    return `<div class="ex-card ex-done"><span class="chip ${p.mastered ? 'good' : 'warn'}">${p.mastered ? t('Unidad dominada', 'Unit mastered') : t('Aún no dominada', 'Not mastered yet')}</span><div class="big">${p.done}<span class="muted" style="font-size:22px"> / ${p.total}</span></div><p class="muted">${t('ejercicios correctos sin ayuda', 'exercises correct without help')}</p>
      <p class="small muted" style="max-width:460px">${t('Cada ejercicio resuelto sin ayuda pasa a tu repaso espaciado como tarjeta de gramática: volverá mañana y luego a intervalos crecientes.', 'Every exercise solved without help joins your spaced review as a grammar card: it returns tomorrow and then at growing intervals.')}</p>
      <div class="row" style="justify-content:center">${pending ? `<button class="btn primary" data-action="ex-pending">${t('Practicar pendientes', 'Practise pending')} (${pending})</button>` : ''}<a class="btn" href="#review">${icon('review', 's')} ${t('Ir al repaso', 'Go to review')}</a>${nx && p.mastered ? `<a class="btn primary" href="#unit/${nx.id}">${t('Siguiente unidad', 'Next unit')} ${icon('arrow', 's')}</a>` : ''}</div></div>`;
  }

  /* Acciones de práctica */
  const curUnit = () => App.C.unitById.get(App.route().id);
  const curEx = () => { const u = curUnit(); if (!u) return null; const st = P(u.id); return { u, st, ex: u.exercises[st.i] }; };
  function syncInputs(ex, st) { const v = App.Exercise.readInputs(ex, main.querySelector('.ex-card') || main); if (v !== undefined) st.vals[ex.id] = v; }
  function check() {
    const c = curEx(); if (!c) return; const { ex, st } = c;
    syncInputs(ex, st);
    const val = st.vals[ex.id];
    if (!App.Exercise.complete(ex, val)) { App.toast(t('Completa la respuesta antes de comprobar.', 'Complete your answer before checking.')); return; }
    const res = Core().evaluate(ex, App.Exercise.valueForEval(ex, val));
    if (res.near) { st.res[ex.id] = res; App.render(); return; }
    const oneShot = ex.t === 'rf' || (ex.t === 'choice' && ex.o.length <= 2) || ex.t === 'match';
    if (!res.ok) st.fails[ex.id] = (st.fails[ex.id] || 0) + 1;
    if (ex.t === 'choice' && !res.ok) (st.tried[ex.id] ||= []).push(val);
    const reveal = !res.ok && (oneShot || st.fails[ex.id] >= 2);
    Core().recordExercise(App.state, ex, res, false, Date.now(), ex.reviewable);
    st.res[ex.id] = { ...res, shown: reveal };
    App.save(); App.render();
  }
  function solutionNow() {
    const c = curEx(); if (!c) return; const { ex, st } = c;
    Core().recordExercise(App.state, ex, { ok: false }, true, Date.now(), ex.reviewable);
    st.res[ex.id] = { ok: false, assisted: true };
    App.save(); App.render();
  }
  function move(delta) {
    const c = curEx(); if (!c) return; const { u, st } = c;
    const n = st.i + delta;
    if (n >= u.exercises.length) { st.finished = true; }
    else { st.i = Math.max(0, n); st.finished = false; }
    const ex = u.exercises[st.i];
    if (ex && st.res[ex.id] && !st.res[ex.id].ok && !st.res[ex.id].assisted && !st.res[ex.id].shown) delete st.res[ex.id];
    App.render({ noFocus: true });
    document.querySelector('.practice')?.scrollIntoView({ block: 'nearest' });
  }
  Object.assign(App.actions, {
    'ex-check': check,
    'ex-solution': solutionNow,
    'ex-next': () => move(1),
    'ex-skip': () => move(1),
    'ex-prev': () => move(-1),
    'ex-goto': b => { const c = curEx(); if (!c) return; c.st.i = Number(b.dataset.i); c.st.finished = false; App.render({ noFocus: true }); },
    'ex-pending': () => { const c = curEx(); if (!c) return; const i = c.u.exercises.findIndex(e => !Core().exerciseDone(App.state, e.id)); c.st.i = Math.max(0, i); c.st.finished = false; for (const e of c.u.exercises) if (!Core().exerciseDone(App.state, e.id)) { delete c.st.res[e.id]; delete c.st.tried[e.id]; delete c.st.fails[e.id]; delete c.st.vals[e.id]; } App.render({ noFocus: true }); },
    'ex-pick': b => {
      const c = App.route().view === 'review' ? null : curEx(); if (!c) return App.reviewPick?.(b);
      const { ex, st } = c;
      st.vals[ex.id] = ex.t === 'rf' ? b.dataset.val === 'true' : Number(b.dataset.val);
      check();
    },
    'tok-add': b => tokens(b, (list, i) => list.push(i)),
    'tok-del': b => tokens(b, (list, k) => list.splice(k, 1), 'k'),
    'match-left': b => matchPick(b, 'left'),
    'match-right': b => matchPick(b, 'right'),
    'umlaut': b => App.Exercise.insertChar(b.dataset.c),
    'say-slow': b => App.say(b.dataset.text, null, { slow: true }),
    'jump': b => document.getElementById('sec-' + b.dataset.id)?.scrollIntoView({ behavior: 'smooth' })
  });
  function host() { return App.route().view === 'review' ? App.reviewHost() : curEx(); }
  function tokens(b, op, attr = 'i') {
    const c = host(); if (!c) return; const { ex, st } = c;
    const list = Array.isArray(st.vals[ex.id]) ? st.vals[ex.id] : (st.vals[ex.id] = []);
    op(list, Number(b.dataset[attr]));
    if (st.res[ex.id] && !st.res[ex.id].ok) delete st.res[ex.id];
    App.render({ noFocus: true });
  }
  function matchPick(b, side) {
    const c = host(); if (!c) return; const { ex, st } = c;
    const vals = Array.isArray(st.vals[ex.id]) ? st.vals[ex.id] : (st.vals[ex.id] = Array(ex.pairs.length).fill(null));
    const i = Number(b.dataset.i);
    if (side === 'left') { if (vals[i] !== null) vals[i] = null; st.sel[ex.id] = i; }
    else {
      const sel = st.sel[ex.id];
      const owner = vals.indexOf(i);
      if (owner >= 0) vals[owner] = null;
      if (sel !== null && sel !== undefined) { vals[sel] = i; st.sel[ex.id] = vals.findIndex(x => x === null); if (st.sel[ex.id] < 0) st.sel[ex.id] = null; }
    }
    App.render({ noFocus: true });
    if (vals.every(x => x !== null) && App.route().view !== 'review') check();
  }
  main.addEventListener('input', e => {
    if (!e.target.matches('.gap-in, .ex-input')) return;
    const c = host(); if (!c) return;
    const v = App.Exercise.readInputs(c.ex, main.querySelector('.ex-card') || main);
    if (v !== undefined) c.st.vals[c.ex.id] = v;
    if (c.st.res[c.ex.id]?.near) { delete c.st.res[c.ex.id]; }
  });

  App.views.unitKey = function (e, r) {
    if (r.sub !== 'practice' && (App.state.units[r.id]?.tab !== 'practice' || r.sub)) return;
    const c = curEx(); if (!c || c.st.finished) return;
    const { ex, st } = c;
    const res = st.res[ex.id], locked = !!(res && (res.ok || res.assisted || res.shown));
    const inField = e.target.matches?.('input, textarea, select');
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); locked ? move(1) : check(); return; }
    if (inField || locked) return;
    if (ex.t === 'choice' && /^[1-9]$/.test(e.key)) { const order = App.Exercise.shuffled(ex.o.length, ex.id); const oi = order[Number(e.key) - 1]; const b = main.querySelector(`[data-action="ex-pick"][data-val="${oi}"]`); if (b && !b.disabled) b.click(); }
    if (ex.t === 'rf' && ['1', '2', 'r', 'f'].includes(e.key.toLowerCase())) main.querySelector(`[data-action="ex-pick"][data-val="${['1', 'r'].includes(e.key.toLowerCase())}"]`)?.click();
    if (ex.t === 'order' && e.key === 'Backspace') { const list = st.vals[ex.id]; if (Array.isArray(list) && list.length) { list.pop(); App.render({ noFocus: true }); } }
  };
  App.views.unitMounted = function (r) {
    const tab = r.sub || App.state.units[r.id]?.tab;
    if (tab === 'practice') {
      const c = curEx(); if (!c || c.st.finished) return;
      const res = c.st.res[c.ex.id];
      if (!(res && (res.ok || res.assisted || res.shown))) main.querySelector('.gap-in, .ex-input')?.focus({ preventScroll: true });
      if (c.ex.t === 'listen' && !res && App.state.settings.autoAudio) App.say(c.ex.a, document.getElementById('ex-audio'));
    }
    if (tab === 'lesson' || !tab) {
      const links = [...main.querySelectorAll('.toc [data-jump]')];
      links.forEach(a => a.addEventListener('click', ev => { ev.preventDefault(); document.getElementById('sec-' + a.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
      if ('IntersectionObserver' in window && links.length) {
        const obs = new IntersectionObserver(entries => {
          for (const en of entries) if (en.isIntersecting) { const id = en.target.id.slice(4); links.forEach(a => a.classList.toggle('active', a.dataset.jump === id)); }
        }, { rootMargin: '-20% 0px -70% 0px' });
        main.querySelectorAll('.section').forEach(s => obs.observe(s));
      }
    }
    if (tab === 'text') App.Reader.mounted?.();
  };
})();
