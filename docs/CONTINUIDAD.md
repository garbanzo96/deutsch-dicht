# Continuidad

## Estado (4 de octubre de 2026, v3.1)

Completo: 40 unidades, 722 ejercicios, 2 572 entradas, 58 lecturas (40 de unidad + 18 de biblioteca), 87 temas de gramática, 9 151 clips de audio, 20 pruebas automáticas, validador sin errores.

## Cómo añadir contenido

1. **Palabra**: búscala primero (`node scripts/check-content.js` informa duplicados). Añádela al bloque léxico de la unidad donde aparece por primera vez.
2. **Unidad o lectura**: sigue `docs/ESQUEMA-DATOS.md`; ejecuta `python3 scripts/sync-index.py` si creaste un archivo nuevo, y `node scripts/check-content.js --unit uNN` hasta tener 0 errores y 100 % de palabras apoyadas.
3. **Gramática**: añade el tema al capítulo correspondiente en `data/grammar/`; las unidades lo citan por ID.
4. **Audio**: `python3 scripts/build-audio.py`.
5. **Verificación**: `node --test tests/*.test.js` y revisión en el navegador en el puerto 8766.

## Personajes de la serie «Leipzig»

Tomás Rivas (estudiante chileno, protagonista), Lena Weiß (compañera de piso, psicología), Mehmet (compañero de piso, de Berlín, informática y reconocimiento del habla), Jonas (compañero de curso), Frau Berger (casera), Oma Ilse (abuela de Lena; U34 y U39). La serie termina en U40 con el regreso de Tomás a Chile.
