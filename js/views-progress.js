/* Deutsch Dicht · Progreso: memoria, actividad, previsión, ruta, respaldos y ajustes. */
(function () {
  'use strict';
  const App = window.DDApp;
  const { t, loc, esc, icon, bar, fmtNum } = App;
  const Core = () => App.Core;
  const main = document.getElementById('main');

  /* Columnas de una sola serie: barras ≤ 24 px, extremo redondeado, base recta, tooltip por barra. */
  function columns(values, labels, tips, { height = 150, highlight = -1 } = {}) {
    const W = 640, H = height, padL = 34, padB = 22, padT = 10;
    const max = Math.max(1, ...values);
    const step = niceStep(max), top = Math.ceil(max / step) * step;
    const n = values.length, band = (W - padL) / n, bw = Math.min(24, band * 0.62);
    const y = v => padT + (H - padT - padB) * (1 - v / top);
    let g = '';
    for (let v = 0; v <= top; v += step) g += `<line class="grid-line" x1="${padL}" x2="${W}" y1="${y(v)}" y2="${y(v)}"/><text x="${padL - 8}" y="${y(v) + 4}" text-anchor="end">${fmtNum(v)}</text>`;
    const bars = values.map((v, i) => {
      const x = padL + band * i + (band - bw) / 2, h = Math.max(0, (H - padB) - y(v));
      const r = Math.min(4, h, bw / 2);
      const path = h > 0 ? `M${x},${H - padB} V${y(v) + r} Q${x},${y(v)} ${x + r},${y(v)} H${x + bw - r} Q${x + bw},${y(v)} ${x + bw},${y(v) + r} V${H - padB} Z` : '';
      return `<g class="hit" data-tip="${esc(tips[i])}"><rect x="${padL + band * i}" y="${padT}" width="${band}" height="${H - padT - padB}" fill="transparent"/>${path ? `<path d="${path}" fill="${i === highlight ? 'var(--accent)' : 'color-mix(in srgb, var(--accent) 62%, var(--surface))'}"/>` : ''}</g>`;
    }).join('');
    const every = Math.ceil(n / 10);
    const xl = labels.map((l, i) => i % every === 0 || i === n - 1 ? `<text x="${padL + band * i + band / 2}" y="${H - 6}" text-anchor="middle">${esc(l)}</text>` : '').join('');
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img">${g}<line class="axis" x1="${padL}" x2="${W}" y1="${H - padB}" y2="${H - padB}"/>${bars}${xl}</svg>`;
  }
  function niceStep(max) { const raw = max / 4, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p; }
  /* Barra apilada de estados (orden secuencial: aprendiendo → joven → consolidada). */
  function stack(parts) {
    const total = parts.reduce((n, p) => n + p.v, 0) || 1;
    let x = 0;
    const W = 640, H = 28;
    const segs = parts.map(p => { const w = Math.max(0, (W - 2 * (parts.length - 1)) * p.v / total); const s = p.v ? `<g class="hit" data-tip="${esc(p.label + ': ' + fmtNum(p.v))}"><rect x="${x}" y="0" width="${w}" height="${H}" rx="4" fill="${p.color}"/></g>` : ''; x += w + (p.v ? 2 : 0); return s; }).join('');
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img">${segs}</svg><div class="legend" style="margin-top:10px">${parts.map(p => `<span><i style="background:${p.color}"></i>${esc(p.label)} · ${fmtNum(p.v)}</span>`).join('')}</div>`;
  }
  function streak() {
    let n = 0, day = Core().dayKey();
    const active = d => { const x = App.state.daily[d]; return x && (x.reviews || x.exercises); };
    if (!active(day)) day = Core().shiftDay(day, -1);
    while (active(day)) { n++; day = Core().shiftDay(day, -1); }
    return n;
  }

  App.views.progress = function () {
    const s = App.state, C = App.C, now = Date.now();
    const ds = Core().deckStats(s, now);
    const ret30 = Core().retentionStats(s, now, 30);
    const mastered = C.units.filter(u => Core().unitProgress(u, s).mastered).length;
    const total = C.lexicon.filter(e => e.deck).length;
    const days = [], labels = [], tips = [];
    for (let i = 29; i >= 0; i--) {
      const key = Core().shiftDay(Core().dayKey(now), -i), d = s.daily[key] || {};
      days.push((d.reviews || 0) + (d.exercises || 0));
      labels.push(key.slice(8)); tips.push(`${key}: ${d.reviews || 0} ${t('repasos', 'reviews')} · ${d.exercises || 0} ${t('ejercicios', 'exercises')} · ${d.new || 0} ${t('nuevas', 'new')}`);
    }
    const fc = Core().forecast(s, now, 14);
    const fcLabels = fc.map((_, i) => i === 0 ? t('hoy', 'today') : '+' + i);
    const fcTips = fc.map((v, i) => `${i === 0 ? t('Hoy', 'Today') : t('En ', 'In ') + i + t(' días', ' days')}: ${v}`);
    const suspended = s.deck.suspended.length;
    const kpi = (v, l, d) => `<div class="card kpi"><span class="v">${v}</span><span class="l">${l}</span>${d ? `<span class="d">${d}</span>` : ''}</div>`;
    return `<div class="page">
      <header class="page-head"><div><div class="eyebrow">Fortschritt</div><h1>${t('Progreso', 'Progress')}</h1><p class="lede">${t('Lo que ya está en tu memoria a largo plazo y lo que viene. Todo se guarda solo en este navegador.', 'What is already in your long-term memory and what is coming. Everything is stored only in this browser.')}</p></div></header>
      <div class="grid g4">
        ${kpi(`${fmtNum(ds.words)}<small> / ${fmtNum(total)}</small>`, t('palabras en tu memoria', 'words in your memory'), `${fmtNum(ds.wordsMature)} ${t('consolidadas (≥ 21 días)', 'mature (≥ 21 days)')}`)}
        ${kpi(`${mastered}<small> / ${C.units.length}</small>`, t('unidades dominadas', 'units mastered'), `${Object.keys(s.exercises).length} ${t('ejercicios intentados', 'exercises attempted')}`)}
        ${kpi(ret30.rate === null ? '—' : Math.round(ret30.rate * 100) + '<small> %</small>', t('retención real · 30 días', 'true retention · 30 days'), ret30.total ? `${fmtNum(ret30.total)} ${t('repasos maduros', 'review answers')}` : t('aparece tras tus primeros repasos', 'appears after your first reviews'))}
        ${kpi(streak(), t('días seguidos', 'day streak'), `${t('ritmo actual', 'current pace')}: ${s.pace.quota || Core().PACE.start} ${t('nuevas/día', 'new/day')}`)}
      </div>
      <div class="grid g2" style="margin-top:16px">
        <section class="card"><div class="card-head"><h3>${t('Actividad · últimos 30 días', 'Activity · last 30 days')}</h3><span class="sub">${t('respuestas por día', 'answers per day')}</span></div>${columns(days, labels, tips, { highlight: 29 })}</section>
        <section class="card"><div class="card-head"><h3>${t('Previsión · próximos 14 días', 'Forecast · next 14 days')}</h3><span class="sub">${t('tarjetas que vencerán', 'cards falling due')}</span></div>${columns(fc, fcLabels, fcTips, { highlight: 0 })}</section>
      </div>
      <section class="card" style="margin-top:16px"><div class="card-head"><h3>${t('Estado del mazo', 'Deck state')}</h3><span class="sub">${fmtNum(ds.total)} ${t('tarjetas', 'cards')} · ${fmtNum(ds.grammar)} ${t('de gramática', 'grammar')}</span></div>
        ${stack([{ label: t('Aprendiendo', 'Learning'), v: ds.learning, color: 'color-mix(in srgb, var(--accent) 30%, var(--surface))' }, { label: t('En repaso (< 21 d)', 'Young (< 21 d)'), v: ds.young, color: 'color-mix(in srgb, var(--accent) 62%, var(--surface))' }, { label: t('Consolidadas (≥ 21 d)', 'Mature (≥ 21 d)'), v: ds.mature, color: 'var(--accent)' }])}
        <p class="small muted" style="margin-top:12px">${t('Calendario FSRS-6 con parámetros por defecto (retención objetivo 90 %). La estabilidad es el número de días en que la probabilidad de recordar baja al 90 %.', 'FSRS-6 schedule with default parameters (90 % target retention). Stability is the number of days until recall probability falls to 90 %.')}</p></section>
      <section class="card" style="margin-top:16px"><div class="card-head"><h3>${t('Ruta', 'Path')}</h3><a class="small" href="#learn">${t('Ver mapa', 'View map')}</a></div><div class="module-progress-list">${C.modules.map(m => {
        const us = C.units.filter(u => u.module === m.id), prog = us.map(u => Core().unitProgress(u, s));
        const done = prog.reduce((n, p) => n + p.done, 0), tot = prog.reduce((n, p) => n + p.total, 0) || 1;
        return `<div class="mp-row"><span class="module-code">${esc(m.code)}</span><span><span lang="de">${esc(m.de)}</span> <span class="muted small">· ${esc(loc(m))}</span></span>${bar(done / tot)}<span class="small muted" style="text-align:right">${prog.filter(p => p.mastered).length}/${us.length}</span></div>`;
      }).join('')}</div></section>
      <div class="grid g2" style="margin-top:16px">
        <section class="card"><div class="card-head"><h3>${t('Audio', 'Audio')}</h3></div><div class="stack">
          <label class="row spread"><span>${t('Reproducir automáticamente palabras y dictados', 'Auto-play words and dictations')}</span><input type="checkbox" id="set-auto" ${s.settings.autoAudio ? 'checked' : ''}></label>
          <label class="row spread"><span>${t('Velocidad lenta (0,78×)', 'Slow speed (0.78×)')}</span><input type="checkbox" id="set-slow" ${s.settings.slowAudio ? 'checked' : ''}></label>
          <p class="small muted">${App.audioInfo()}</p></div></section>
        <section class="card"><div class="card-head"><h3>${t('Respaldo', 'Backup')}</h3></div><div class="stack">
          <p class="small muted">${t('El progreso vive en este navegador y en esta dirección web. Exporta un respaldo antes de cambiar de navegador o equipo.', 'Progress lives in this browser at this web address. Export a backup before switching browser or computer.')}</p>
          <div class="row"><button class="btn primary" data-action="export">${icon('download', 's')} ${t('Exportar JSON', 'Export JSON')}</button><button class="btn" data-action="import">${icon('upload', 's')} ${t('Importar', 'Import')}</button><input type="file" id="import-file" accept="application/json,.json" hidden></div>
          ${suspended ? `<div class="row spread"><span class="small">${suspended} ${t('tarjetas suspendidas', 'suspended cards')}</span><button class="btn sm" data-action="unsuspend">${t('Reactivar todas', 'Reactivate all')}</button></div>` : ''}
          <div class="divider"></div>
          <div class="row spread"><span class="small muted">${t('Borra todo el progreso de este navegador.', 'Erase all progress in this browser.')}</span><button class="btn sm danger" data-action="reset">${t('Reiniciar', 'Reset')}</button></div></div></section>
      </div>
    </div>`;
  };
  // Tooltip de gráficos
  const tip = document.createElement('div');
  tip.className = 'popup'; tip.style.cssText = 'width:auto;padding:8px 11px;font-size:12.5px;pointer-events:none;gap:0'; tip.hidden = true;
  document.body.appendChild(tip);
  main.addEventListener('pointermove', e => {
    const g = e.target.closest?.('.chart .hit');
    if (!g) { tip.hidden = true; return; }
    tip.textContent = g.dataset.tip; tip.hidden = false;
    tip.style.left = Math.min(innerWidth - tip.offsetWidth - 10, e.clientX + 14) + 'px';
    tip.style.top = (e.clientY - tip.offsetHeight - 10) + 'px';
  });
  main.addEventListener('pointerleave', () => { tip.hidden = true; });
  main.addEventListener('change', async e => {
    const s = App.state.settings;
    if (e.target.id === 'set-auto') { s.autoAudio = e.target.checked; App.save(); }
    if (e.target.id === 'set-slow') { s.slowAudio = e.target.checked; App.save(); }
    if (e.target.id === 'import-file') {
      const file = e.target.files?.[0]; if (!file) return;
      if (file.size > 20e6) return App.toast(t('El archivo supera 20 MB.', 'The file exceeds 20 MB.'));
      try {
        const next = Core().validateState(JSON.parse(await file.text()), App.ids);
        App.confirm(t('Importar respaldo', 'Import backup'), t('El respaldo reemplazará el progreso actual de este navegador.', 'The backup will replace the current progress in this browser.'), () => { App.state = next; App.ui.session = { sinceNew: 0, last: null, count: 0 }; App.ui.ex = {}; App.save(); App.render(); App.toast(t('Respaldo importado.', 'Backup imported.')); });
      } catch (err) { App.toast(t('Respaldo inválido o incompatible.', 'Invalid or incompatible backup.')); }
    }
  });
  Object.assign(App.actions, {
    export: () => {
      const blob = new Blob([JSON.stringify({ ...App.state, exportedAt: new Date().toISOString() })], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `deutsch-dicht-${Core().dayKey()}.json`;
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1500);
      App.toast(t('Respaldo exportado.', 'Backup exported.'));
    },
    import: () => document.getElementById('import-file')?.click(),
    unsuspend: () => { App.state.deck.suspended = []; App.save(); App.render({ noFocus: true }); },
    reset: () => App.confirm(t('Reiniciar progreso', 'Reset progress'), t('Se borrará todo el progreso de este navegador. Exporta antes un respaldo si quieres conservarlo.', 'All progress in this browser will be erased. Export a backup first if you want to keep it.'), () => { App.state = Core().fresh(); App.ui.session = { sinceNew: 0, last: null, count: 0 }; App.ui.ex = {}; App.save(); App.go('#learn'); App.toast(t('Progreso reiniciado.', 'Progress reset.')); })
  });
})();
