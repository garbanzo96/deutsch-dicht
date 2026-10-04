#!/bin/zsh
cd "${0:A:h}" || exit 1
print 'Deutsch Dicht · abre http://127.0.0.1:8765/ en tu navegador.'
print 'Detener: Ctrl+C. Mantén esta ventana abierta mientras estudias.'
python3 scripts/serve.py --port 8765
