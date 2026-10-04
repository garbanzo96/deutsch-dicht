#!/usr/bin/env python3
"""Regenera en index.html las etiquetas <script> del corpus (unidades, gramática, lecturas).

Uso: python3 scripts/sync-index.py
Mantiene el orden: course → frequency → units → grammar → readings → audio-manifest.
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / 'index.html'
VERSION = '3.1'

def tags(folder):
    path = ROOT / 'data' / folder
    if not path.exists():
        return []
    return [f'  <script defer src="data/{folder}/{p.name}?v={VERSION}"></script>' for p in sorted(path.glob('*.js'))]

lines = [
    '  <!-- Corpus -->',
    f'  <script defer src="data/course.js?v={VERSION}"></script>',
    f'  <script defer src="data/frequency.js?v={VERSION}"></script>',
    *tags('units'), *tags('grammar'), *tags('readings'),
    f'  <script defer src="data/audio-manifest.js?v={VERSION}"></script>',
]
html = INDEX.read_text(encoding='utf-8')
html = re.sub(r'  <!-- Corpus -->\n(?:  <script defer src="data/[^"]+"></script>\n)+', '\n'.join(lines) + '\n', html)
INDEX.write_text(html, encoding='utf-8')
print(f'{len(lines) - 1} scripts de datos en index.html')
