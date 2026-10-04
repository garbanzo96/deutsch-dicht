/* U35 · Insofern, als … */
DD.lexicon.push({ unit: 'u35', words: [
  ['conj', 'insofern … als', 'en la medida en que', 'insofar as', { id: 'conj-insofern', type: 'two', forms: { insofern: 'phr', insoweit: 'phr' } }],
  ['conj', 'sofern', 'siempre que; con tal de que', 'provided that', { type: 'sub' }],
  ['conj', 'soweit', 'en la medida en que; por lo que', 'as far as', { type: 'sub' }],
  ['conj', 'sodass', 'de modo que', 'so that (result)', { type: 'sub', forms: { 'so dass': 'phr' } }],
  ['conj', 'zu … als dass', 'demasiado… como para que', 'too… for', { id: 'conj-zu-als-dass', type: 'two' }],
  ['conj', 'wohingegen', 'mientras que', 'whereas', { type: 'sub' }],
  ['conj', 'wobei', 'aunque (matiz); con lo cual', 'although; whereby', { type: 'sub' }],
  ['conj', 'zumal', 'tanto más cuanto que; sobre todo porque', 'especially as', { type: 'sub' }],
  ['conj', 'je nachdem', 'según; dependiendo de', 'depending on', { type: 'sub', forms: { nachdem: 'phr' } }],
  ['conj', 'es sei denn', 'a menos que', 'unless', { id: 'conj-es-sei-denn', type: 'adv' }],
  ['conj', 'geschweige denn', 'y mucho menos', 'let alone', { id: 'conj-geschweige', type: 'adv', forms: { geschweige: 'phr' } }],
  ['adv', 'folglich', 'por consiguiente', 'consequently', { type: 'adv' }],
  ['adv', 'somit', 'con ello; por lo tanto', 'thus', { type: 'adv' }],
  ['adv', 'demnach', 'según esto; por consiguiente', 'accordingly', { type: 'adv' }],
  ['adv', 'infolgedessen', 'como consecuencia', 'as a result', { type: 'adv' }],
  ['adv', 'gleichwohl', 'no obstante', 'nonetheless', { type: 'adv' }],
  ['adv', 'ferner', 'además; asimismo', 'furthermore', { type: 'adv' }],
  ['adv', 'dadurch', 'con ello; por eso', 'thereby', { note: ['dadurch, dass … = por el hecho de que…', 'dadurch, dass … = by the fact that…'] }],
  ['n', 'die Übersetzung', 'Übersetzungen', 'la traducción', 'translation'],
  ['n', 'die Spracherkennung', '—', 'el reconocimiento del habla', 'speech recognition'],
  ['n', 'die Software', 'Softwares', 'el software', 'software'],
  ['n', 'das Werkzeug', 'Werkzeuge', 'la herramienta', 'tool'],
  ['n', 'das Missverständnis', 'Missverständnisse', 'el malentendido', 'misunderstanding'],
  ['n', 'der Kontext', 'Kontexte', 'el contexto', 'context'],
  ['n', 'der Humor', '—', 'el humor', 'humour'],
  ['n', 'die Ironie', '—', 'la ironía', 'irony'],
  ['n', 'die Begegnung', 'Begegnungen', 'el encuentro', 'encounter'],
  ['n', 'die Perspektive', 'Perspektiven', 'la perspectiva', 'perspective'],
  ['n', 'der Gesprächspartner', 'Gesprächspartner', 'el interlocutor', 'interlocutor (m.)'],
  ['n', 'die Gesprächspartnerin', 'Gesprächspartnerinnen', 'la interlocutora', 'interlocutor (f.)'],
  ['v', 'missverstehen', 'missversteht', 'missverstand', 'hat missverstanden', 'malentender', 'misunderstand'],
  ['v', 'erlernen', 'erlernt', 'erlernte', 'hat erlernt', 'aprender (a fondo)', 'learn; acquire'],
  ['a', 'überflüssig', null, null, 'superfluo; innecesario', 'superfluous'],
  ['a', 'unersetzlich', '—', '—', 'insustituible', 'irreplaceable']
] });

DD.unit('u35', {
  minutes: 65,
  goals: [
    { es: 'Usar conectores de precisión: insofern … als, sofern, soweit, sodass, zu … als dass, wohingegen, zumal, je nachdem, es sei denn.', en: 'Use precision connectors: insofern … als, sofern, soweit, sodass, zu … als dass, wohingegen, zumal, je nachdem, es sei denn.' },
    { es: 'Distinguir conectores subordinantes, adverbiales y coordinantes por su efecto en el orden.', en: 'Distinguish subordinating, adverbial and coordinating connectors by their effect on word order.' },
    { es: 'Deducir el significado de palabras nuevas por sus prefijos, sufijos y elementos de unión (Fugen-s).', en: 'Infer the meaning of new words from prefixes, suffixes and linking elements (Fugen-s).' }
  ],
  grammar: ['g-connectors-adv', 'g-word-formation'],
  lesson: [
    { b: 'table', h: { es: 'Conectores de precisión', en: 'Precision connectors' }, c: [{ es: 'Relación', en: 'Relation' }, { es: 'Conector', en: 'Connector' }, { es: 'Orden', en: 'Order' }, { es: 'Ejemplo', en: 'Example' }], r: [
      [{ es: 'restricción', en: 'restriction' }, 'insofern … als · soweit', { es: 'V final', en: 'V last' }, 'Das stimmt [insofern], [als] Maschinen schnell [sind].'],
      [{ es: 'condición', en: 'condition' }, 'sofern · falls', { es: 'V final', en: 'V last' }, '[Sofern] nichts dagegen [spricht], fangen wir an.'],
      [{ es: 'condición negativa', en: 'negative condition' }, 'es sei denn', { es: 'V2 / V final', en: 'V2 / V last' }, 'Ich komme, [es sei denn], es [regnet].'],
      [{ es: 'consecuencia', en: 'consequence' }, 'sodass · so …, dass', { es: 'V final', en: 'V last' }, 'Er sprach leise, [sodass] niemand ihn [verstand].'],
      [{ es: 'consecuencia negada', en: 'negated consequence' }, 'zu … als dass + K2', { es: 'V final', en: 'V last' }, 'Der Text ist [zu] lang, [als dass] man ihn schnell lesen [könnte].'],
      [{ es: 'contraste', en: 'contrast' }, 'während · wohingegen', { es: 'V final', en: 'V last' }, 'Sie liest viel, [wohingegen] er lieber Filme [sieht].'],
      [{ es: 'causa adicional', en: 'additional cause' }, 'zumal', { es: 'V final', en: 'V last' }, 'Ich bleibe zu Hause, [zumal] es kalt [ist].'],
      [{ es: 'dependencia', en: 'dependence' }, 'je nachdem, ob / wie', { es: 'V final', en: 'V last' }, '[Je nachdem], wie das Wetter [ist], fahren wir.'],
      [{ es: 'matiz, concesión', en: 'nuance, concession' }, 'wobei', { es: 'V final', en: 'V last' }, 'Das Buch ist gut, [wobei] das Ende schwach [ist].'],
      [{ es: 'gradación negativa', en: 'negative gradation' }, 'geschweige denn', { es: 'elíptico', en: 'elliptic' }, 'Er kann kaum lesen, [geschweige denn] schreiben.']
    ] },
    { b: 'concept', de: 'Konnektoren und Wortstellung', t: { es: 'Tres familias: (1) coordinantes en posición 0, no cambian el orden (und, aber, oder, denn, sondern); (2) subordinantes, verbo al final (weil, obwohl, sofern, zumal…); (3) adverbiales, ocupan el Vorfeld y el verbo va inmediatamente después (deshalb, folglich, dennoch, somit…).', en: 'Three families: (1) coordinating, position 0, no change in order (und, aber, oder, denn, sondern); (2) subordinating, verb last (weil, obwohl, sofern, zumal…); (3) adverbial, they fill the Vorfeld and the verb follows immediately (deshalb, folglich, dennoch, somit…).' } },
    { b: 'slots', h: { es: 'El mismo contenido con tres tipos de conector', en: 'The same content with three connector types' }, c: [{ es: 'Conector', en: 'Connector' }, { es: 'Verbo / Vorfeld', en: 'Verb / Vorfeld' }, 'Mittelfeld', { es: 'Verbo final', en: 'Final verb' }], v: [1, 3], r: [
      ['…, denn', 'die Maschine', 'übersetzt schnell.', ''],
      ['…, weil', '', 'die Maschine schnell', 'übersetzt.'],
      ['Folglich', 'übersetzt', 'die Maschine schnell.', '']
    ] },
    { b: 'table', h: { es: 'Conectores adverbiales del registro escrito', en: 'Written-register adverbial connectors' }, c: [{ es: 'Relación', en: 'Relation' }, { es: 'Conectores', en: 'Connectors' }, { es: 'Ejemplo', en: 'Example' }], r: [
      [{ es: 'consecuencia', en: 'consequence' }, 'folglich · somit · demnach · infolgedessen', '[Folglich] ist die Hypothese falsch.'],
      [{ es: 'concesión', en: 'concession' }, 'dennoch · trotzdem · gleichwohl', '[Dennoch] bleibt eine Frage offen.'],
      [{ es: 'adición', en: 'addition' }, 'außerdem · zudem · ferner', '[Ferner] ist der Kontext wichtig.'],
      [{ es: 'contraste', en: 'contrast' }, 'hingegen · dagegen · allerdings', 'Maschinen [hingegen] verstehen keine Ironie.']
    ], n: { es: 'hingegen y allerdings pueden ir también en el campo medio: Maschinen verstehen hingegen keine Ironie.', en: 'hingegen and allerdings can also stand in the middle field: Maschinen verstehen hingegen keine Ironie.' } },
    { b: 'concept', de: 'Wortbildung', t: { es: 'El alemán construye palabras como piezas de Lego. Si conoces las piezas, puedes descifrar miles de palabras sin diccionario: Spracherkennungssoftware = Sprache + Erkennung + s + Software («software de reconocimiento del habla»). El último elemento es el núcleo: decide el género y el significado básico.', en: 'German builds words like Lego. If you know the pieces you can decode thousands of words without a dictionary: Spracherkennungssoftware = Sprache + Erkennung + s + Software (“speech recognition software”). The last element is the head: it decides gender and basic meaning.' } },
    { b: 'table', h: { es: 'Prefijos verbales inseparables y su significado típico', en: 'Inseparable verb prefixes and their typical meaning' }, c: [{ es: 'Prefijo', en: 'Prefix' }, { es: 'Significado típico', en: 'Typical meaning' }, { es: 'Ejemplos', en: 'Examples' }], r: [
      ['[be-]', { es: 'vuelve transitivo; dirigir la acción a algo', en: 'makes transitive; directs action at something' }, 'antworten auf → [be]antworten · [be]suchen · [be]schreiben'],
      ['[ent-]', { es: 'separación; inicio', en: 'separation; beginning' }, '[ent]fernen · [ent]decken · [ent]stehen'],
      ['[er-]', { es: 'resultado; logro', en: 'result; achievement' }, '[er]reichen · [er]lernen · [er]finden'],
      ['[ver-]', { es: 'cambio; error; fin', en: 'change; error; ending' }, '[ver]ändern · sich [ver]laufen · [ver]brauchen'],
      ['[zer-]', { es: 'destrucción en pedazos', en: 'destruction into pieces' }, '[zer]stören · [zer]brechen · [zer]reißen'],
      ['[miss-]', { es: 'mal; falso', en: 'wrongly; mis-' }, '[miss]verstehen · [miss]brauchen · [miss]trauen']
    ], n: { es: 'über-, unter-, um-, durch- son separables cuando el sentido es literal y tónico (ÜBERsetzen = cruzar en bote) e inseparables cuando es figurado (überSETZen = traducir).', en: 'über-, unter-, um-, durch- are separable when literal and stressed (ÜBERsetzen = ferry across) and inseparable when figurative (überSETZen = translate).' } },
    { b: 'table', h: { es: 'Sufijos frecuentes', en: 'Frequent suffixes' }, c: [{ es: 'Sufijo', en: 'Suffix' }, { es: 'Forma', en: 'Forms' }, { es: 'Ejemplos', en: 'Examples' }], r: [
      ['[-schaft]', { es: 'sustantivos colectivos/abstractos (die)', en: 'collective/abstract nouns (die)' }, 'Freund[schaft] · Wissen[schaft] · Gesell[schaft]'],
      ['[-nis]', { es: 'resultado/estado (die/das)', en: 'result/state (die/das)' }, 'Erleb[nis] · Ergeb[nis] · Erlaub[nis]'],
      ['[-er] / [-erin]', { es: 'persona que hace', en: 'person who does' }, 'Les[er] · Forsch[erin] · Übersetz[er]'],
      ['[-los]', { es: 'sin', en: 'without' }, 'arbeits[los] · hoffnungs[los] · sinn[los]'],
      ['[-voll]', { es: 'lleno de', en: 'full of' }, 'sinn[voll] · wert[voll] · hoffnungs[voll]'],
      ['[-sam]', { es: 'con tendencia a', en: 'tending to' }, 'lang[sam] · sparsam · einsam'],
      ['[-haft]', { es: 'con carácter de', en: 'having the quality of' }, 'fehler[haft] · zweifel[haft] · ernst[haft]'],
      ['[-ig] / [-isch] / [-lich]', { es: 'adjetivos', en: 'adjectives' }, 'zufäll[ig] · typ[isch] · freund[lich]']
    ] },
    { b: 'note', tone: 'tip', t: { es: 'Fugenelemente: entre partes de un compuesto suele aparecer -s- (tras -ung, -heit, -keit, -ion, -tät: Erkennung[s]software), -n- / -en- (tras femeninos en -e: Straße[n]bahn) o -er- (Kind[er]garten). No cambian el significado.', en: 'Linking elements: between parts of a compound you often find -s- (after -ung, -heit, -keit, -ion, -tät: Erkennung[s]software), -n- / -en- (after feminines in -e: Straße[n]bahn) or -er- (Kind[er]garten). They don’t change the meaning.' } }
  ],
  chunks: [
    ['Das stimmt insofern, als Maschinen schneller sind.', 'Es cierto en la medida en que las máquinas son más rápidas.', 'That is true insofar as machines are faster.'],
    ['Sofern nichts dagegen spricht, fangen wir an.', 'Si nada lo impide, empezamos.', 'Provided nothing speaks against it, we’ll start.'],
    ['Das Problem ist zu komplex, als dass man es schnell lösen könnte.', 'El problema es demasiado complejo como para resolverlo rápido.', 'The problem is too complex to be solved quickly.'],
    ['Je nachdem, wie das Wetter ist, fahren wir oder nicht.', 'Según cómo esté el tiempo, vamos o no.', 'Depending on the weather, we’ll go or not.'],
    ['Er versteht kaum Englisch, geschweige denn Deutsch.', 'Apenas entiende inglés, y mucho menos alemán.', 'He hardly understands English, let alone German.']
  ],
  errors: [
    ['Folglich die Hypothese ist falsch.', 'Folglich ist die Hypothese falsch.', { es: 'Conector adverbial en el Vorfeld: verbo en posición 2.', en: 'Adverbial connector in the Vorfeld: verb in position 2.' }],
    ['…, zumal es ist kalt.', '…, zumal es kalt ist.', { es: 'zumal es subordinante: verbo al final.', en: 'zumal subordinates: verb last.' }],
    ['Der Text ist zu lang, als dass man ihn lesen kann.', '…, als dass man ihn lesen könnte.', { es: 'zu … als dass + Konjunktiv II.', en: 'zu … als dass + Konjunktiv II.' }],
    ['Ich komme, es sei denn, es regnen.', 'Ich komme, es sei denn, es regnet.', { es: 'Tras es sei denn: oración normal.', en: 'After es sei denn: normal clause.' }],
    ['die Erkennungsoftware', 'die Erkennungssoftware', { es: 'Tras -ung: Fugen-s.', en: 'After -ung: linking s.' }]
  ],
  examples: [
    ['Die Übersetzung ist gut, wobei einige Ausdrücke etwas steif klingen.', 'La traducción es buena, aunque algunas expresiones suenan algo rígidas.', 'The translation is good, although some expressions sound a bit stiff.'],
    ['Die Daten waren unvollständig, sodass keine Aussage möglich war.', 'Los datos estaban incompletos, de modo que no era posible afirmar nada.', 'The data were incomplete, so no statement was possible.'],
    ['Soweit ich weiß, beginnt der Kurs im Oktober.', 'Que yo sepa, el curso empieza en octubre.', 'As far as I know, the course starts in October.'],
    ['Kinder lernen die Aussprache leichter, wohingegen Erwachsene Regeln schneller verstehen.', 'Los niños aprenden la pronunciación con más facilidad, mientras que los adultos entienden más rápido las reglas.', 'Children learn pronunciation more easily, whereas adults understand rules faster.'],
    ['Ich nehme das Rad, zumal der Bus heute streikt.', 'Tomo la bici, sobre todo porque hoy hay paro de buses.', 'I’ll take the bike, especially as the buses are on strike today.'],
    ['Die Hypothese wurde bestätigt; somit ist die Frage beantwortet.', 'La hipótesis se confirmó; con ello la pregunta queda respondida.', 'The hypothesis was confirmed; thus the question is answered.']
  ],
  reading: 'r-u35',
  exercises: [
    { t: 'choice', ph: 1, q: 'Ich komme mit, ___ es regnet. (a menos que)', o: ['es sei denn', 'sofern', 'sodass'], a: 0, x: { es: 'es sei denn = a menos que.', en: 'es sei denn = unless.' } },
    { t: 'choice', ph: 1, q: 'Er sprach so leise, ___ niemand ihn verstand.', o: ['sodass', 'dass', 'damit'], a: 1, x: { es: 'so …, dass (consecuencia).', en: 'so …, dass (consequence).' } },
    { t: 'choice', ph: 1, q: 'Der Text ist zu lang, als dass man ihn schnell lesen ___.', o: ['kann', 'könnte', 'konnte'], a: 1, x: { es: 'zu … als dass + K2.', en: 'zu … als dass + K2.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona conector y relación.', en: 'Match connector and relation.' }, pairs: [['sofern', { es: 'condición', en: 'condition' }], ['wohingegen', { es: 'contraste', en: 'contrast' }], ['zumal', { es: 'causa adicional', en: 'additional cause' }], ['folglich', { es: 'consecuencia', en: 'consequence' }]], x: { es: 'Conectores de precisión.', en: 'Precision connectors.' } },
    { t: 'match', ph: 1, p: { es: 'Relaciona prefijo y significado típico.', en: 'Match prefix and typical meaning.' }, pairs: [['zer-', { es: 'destruir en pedazos', en: 'destroy into pieces' }], ['miss-', { es: 'mal, falso', en: 'wrongly' }], ['er-', { es: 'resultado, logro', en: 'result, achievement' }], ['ent-', { es: 'separación', en: 'separation' }]], x: { es: 'Prefijos inseparables.', en: 'Inseparable prefixes.' } },
    { t: 'choice', ph: 1, q: '«sinnlos» significa…', o: ['lleno de sentido', 'sin sentido', 'con sentido común'], a: 1, x: { es: '-los = sin.', en: '-los = without.' } },
    { t: 'gap', ph: 2, q: '___ ist die Hypothese falsch. (por consiguiente)', a: 'Folglich', alt: ['Somit', 'Demnach'], x: { es: 'Conector adverbial + verbo.', en: 'Adverbial connector + verb.' } },
    { t: 'gap', ph: 2, q: 'Ich bleibe zu Hause, zumal es sehr kalt ___.', a: 'ist', x: { es: 'zumal: verbo al final.', en: 'zumal: verb last.' } },
    { t: 'gap', ph: 2, q: '___ ich weiß, beginnt der Kurs im Oktober. (que yo sepa)', a: 'Soweit', x: { es: 'soweit = en la medida en que.', en: 'soweit = as far as.' } },
    { t: 'gap', ph: 2, q: 'Er kann kaum lesen, ___ denn schreiben.', a: 'geschweige', x: { es: 'geschweige denn = y mucho menos.', en: 'geschweige denn = let alone.' } },
    { t: 'gap', ph: 2, q: 'die Erkennung + Software = die Erkennung___software', a: 's', alt: ['-s-'], x: { es: 'Tras -ung: Fugen-s.', en: 'After -ung: linking s.' } },
    { t: 'gap', ph: 2, q: 'Das stimmt insofern, ___ Maschinen schneller sind.', a: 'als', x: { es: 'insofern … als.', en: 'insofern … als.' } },
    { t: 'order', ph: 2, w: ['Dennoch', 'bleibt', 'eine Frage', 'offen'], a: 'Dennoch bleibt eine Frage offen.', x: { es: 'Conector en el Vorfeld, verbo en 2.', en: 'Connector in the Vorfeld, verb in 2.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con «sodass».', en: 'Join with “sodass”.' }, q: 'Die Daten waren unvollständig. Man konnte nichts sagen.', a: 'Die Daten waren unvollständig, sodass man nichts sagen konnte.', x: { es: 'sodass + verbo al final.', en: 'sodass + verb last.' } },
    { t: 'transform', ph: 3, p: { es: 'Une con «wohingegen».', en: 'Join with “wohingegen”.' }, q: 'Lena liest gern. Mehmet sieht lieber Filme.', a: 'Lena liest gern, wohingegen Mehmet lieber Filme sieht.', x: { es: 'Contraste; verbo al final.', en: 'Contrast; verb last.' } },
    { t: 'transform', ph: 3, p: { es: 'Reescribe con «zu … als dass».', en: 'Rewrite with “zu … als dass”.' }, q: 'Das Problem ist sehr komplex. Man kann es nicht schnell lösen.', a: 'Das Problem ist zu komplex, als dass man es schnell lösen könnte.', x: { es: 'zu + adjetivo; als dass + K2.', en: 'zu + adjective; als dass + K2.' } },
    { t: 'write', ph: 3, s: { es: 'Si nada lo impide, empezamos mañana. (sofern)', en: 'Provided nothing speaks against it, we start tomorrow. (sofern)' }, a: 'Sofern nichts dagegen spricht, fangen wir morgen an.', alt: ['Sofern nichts dagegen spricht, beginnen wir morgen.'], x: { es: 'Subordinada en el Vorfeld + verbo.', en: 'Subordinate clause in the Vorfeld + verb.' } },
    { t: 'listen', ph: 3, a: 'Je nachdem, wie das Wetter ist, fahren wir oder nicht.', x: { es: 'je nachdem, wie …', en: 'je nachdem, wie …' } }
  ],
  summary: [
    { es: 'Restricción: insofern … als, soweit. Condición: sofern, falls; negativa: es sei denn.', en: 'Restriction: insofern … als, soweit. Condition: sofern, falls; negative: es sei denn.' },
    { es: 'Consecuencia: sodass, so …, dass; negada: zu … als dass + K2. Contraste: wohingegen, während. Causa adicional: zumal.', en: 'Consequence: sodass, so …, dass; negated: zu … als dass + K2. Contrast: wohingegen, während. Additional cause: zumal.' },
    { es: 'Adverbiales (Vorfeld + verbo): folglich, somit, demnach, dennoch, gleichwohl, ferner, zudem.', en: 'Adverbial (Vorfeld + verb): folglich, somit, demnach, dennoch, gleichwohl, ferner, zudem.' },
    { es: 'Formación: núcleo al final; be-/ent-/er-/ver-/zer-/miss-; -schaft, -nis, -los, -voll, -haft; Fugen-s tras -ung/-heit/-keit/-ion.', en: 'Word formation: head last; be-/ent-/er-/ver-/zer-/miss-; -schaft, -nis, -los, -voll, -haft; linking s after -ung/-heit/-keit/-ion.' }
  ]
});

DD.readings.push({
  id: 'r-u35', unit: 'u35', level: 'B2', kind: 'unit',
  de: 'Braucht man noch Fremdsprachen?', es: '¿Todavía hacen falta las lenguas extranjeras?', en: 'Do we still need foreign languages?',
  genre: { es: 'Ensayo argumentativo · serie Leipzig 35', en: 'Argumentative essay · Leipzig series 35' },
  intro: { es: 'Mehmet trabaja en una empresa de reconocimiento del habla en Berlín. Para el blog de la empresa escribe un breve ensayo sobre la pregunta que le hacen siempre: si las máquinas traducen, ¿para qué aprender idiomas?', en: 'Mehmet works for a speech-recognition company in Berlin. For the company blog he writes a short essay on the question he is always asked: if machines translate, why learn languages?' },
  focus: { es: 'insofern … als, sofern, es sei denn, zu … als dass, wohingegen, zumal, je nachdem, geschweige denn · folglich, somit, dennoch, ferner · compuestos con Fugen-s.', en: 'insofern … als, sofern, es sei denn, zu … als dass, wohingegen, zumal, je nachdem, geschweige denn · folglich, somit, dennoch, ferner · compounds with linking s.' },
  source: { type: 'original' },
  p: [
    ['Seit ich in der Spracherkennung arbeite, höre ich fast jede Woche dieselbe Frage: Warum soll man noch Fremdsprachen lernen, wenn das Handy alles übersetzt? Die Frage ist berechtigt, zumal die Übersetzungsprogramme in den letzten Jahren enorm besser geworden sind. Für eine Speisekarte, eine Wegbeschreibung oder eine einfache E-Mail reichen sie völlig aus.', 'Desde que trabajo en reconocimiento del habla, escucho casi cada semana la misma pregunta: ¿por qué aprender todavía idiomas si el celular lo traduce todo? La pregunta es legítima, sobre todo porque los programas de traducción han mejorado enormemente en los últimos años. Para una carta de restaurante, una indicación de camino o un correo sencillo bastan del todo.', 'Since I started working in speech recognition, I hear the same question almost every week: why still learn foreign languages if your phone translates everything? The question is justified, especially as translation programs have become enormously better in recent years. For a menu, directions or a simple e-mail they are completely sufficient.'],
    ['Die Antwort hängt davon ab, was man unter „eine Sprache können“ versteht. Wenn es nur darum geht, Informationen zu übertragen, sind Maschinen tatsächlich nützlich, insofern als sie schnell, billig und meistens korrekt sind. Eine Sprache ist aber mehr als ein Werkzeug zur Übertragung von Informationen. Sie ist voller Kontext: Humor, Ironie, Andeutungen, Pausen. Ein Witz, der übersetzt werden muss, ist meistens kein Witz mehr, geschweige denn ein guter.', 'La respuesta depende de qué se entienda por «saber un idioma». Si solo se trata de transmitir información, las máquinas sí son útiles, en la medida en que son rápidas, baratas y en general correctas. Pero una lengua es más que una herramienta para transmitir información. Está llena de contexto: humor, ironía, insinuaciones, pausas. Un chiste que hay que traducir casi nunca sigue siendo un chiste, y mucho menos uno bueno.', 'The answer depends on what one means by “knowing a language”. If it is only about transmitting information, machines are indeed useful, insofar as they are fast, cheap and mostly correct. But a language is more than a tool for transmitting information. It is full of context: humour, irony, hints, pauses. A joke that has to be translated is usually no longer a joke, let alone a good one.'],
    ['Ferner verändert das Lernen einer Sprache den Lernenden selbst. Wer eine fremde Sprache spricht, sieht die eigene Kultur plötzlich von außen. Meine Mitbewohnerin Lena denkt zum Beispiel sehr systematisch, wohingegen mein Mitbewohner Tomás, der aus Chile kommt, oft mit Geschichten argumentiert. Seit er Deutsch spricht, sagt er, denke er manchmal „deutscher“, je nachdem, mit wem er redet. Diese Erfahrung kann keine Software ersetzen.', 'Además, aprender un idioma transforma a quien aprende. Quien habla una lengua extranjera ve de pronto la propia cultura desde afuera. Mi compañera de piso Lena, por ejemplo, piensa de forma muy sistemática, mientras que mi compañero Tomás, que viene de Chile, a menudo argumenta con historias. Desde que habla alemán, dice, a veces piensa «más alemán», según con quién hable. Esa experiencia no la puede sustituir ningún software.', 'Furthermore, learning a language changes the learner. Anyone who speaks a foreign language suddenly sees their own culture from the outside. My flatmate Lena, for example, thinks very systematically, whereas my flatmate Tomás, who comes from Chile, often argues with stories. Since he has been speaking German, he says, he sometimes thinks “more German”, depending on who he’s talking to. No software can replace that experience.'],
    ['Schließlich geht es um Vertrauen. Ein Gespräch über ein Gerät ist zu langsam und zu unpersönlich, als dass echte Nähe entstehen könnte. Wer sich die Mühe macht, die Sprache des anderen zu lernen, zeigt Respekt. Folglich werden Fremdsprachen nicht überflüssig – es sei denn, wir wollen nur noch Informationen austauschen und keine Begegnungen mehr erleben. Dennoch benutze ich jeden Tag Übersetzungsprogramme, sofern ich ein Wort nicht kenne. Ein gutes Werkzeug ist eben ein gutes Werkzeug.', 'Por último, se trata de confianza. Una conversación a través de un aparato es demasiado lenta e impersonal como para que surja una verdadera cercanía. Quien se toma el trabajo de aprender la lengua del otro muestra respeto. Por consiguiente, las lenguas extranjeras no se vuelven superfluas, a menos que solo queramos intercambiar información y ya no vivir encuentros. Aun así, uso cada día programas de traducción cuando no conozco una palabra. Una buena herramienta es, simplemente, una buena herramienta.', 'Finally, it is about trust. A conversation through a device is too slow and too impersonal for real closeness to develop. Anyone who takes the trouble to learn the other person’s language shows respect. Consequently, foreign languages will not become superfluous – unless we only want to exchange information and no longer experience encounters. Nevertheless, I use translation programs every day whenever I don’t know a word. A good tool is simply a good tool.']
  ],
  gloss: [
    ['dieselbe', { es: 'la misma', en: 'the same' }],
    ['berechtigt', { es: 'legítima; justificada', en: 'justified' }],
    ['Übersetzungsprogramme', { es: 'programas de traducción', en: 'translation programs' }],
    ['enorm', { es: 'enormemente', en: 'enormously' }],
    ['Speisekarte', { es: 'carta (de restaurante)', en: 'menu' }],
    ['Wegbeschreibung', { es: 'indicación de camino', en: 'directions' }],
    ['hängt', { es: 'depende (abhängen von)', en: 'depends (abhängen von)' }],
    ['davon', { es: 'de eso', en: 'on it' }],
    ['darum', { es: 'es geht darum = se trata de', en: 'es geht darum = it is about' }],
    ['übertragen', { es: 'transmitir', en: 'transmit' }],
    ['korrekt', { es: 'correctas', en: 'correct' }],
    ['Übertragung', { es: 'transmisión', en: 'transmission' }],
    ['voller', { es: 'lleno de', en: 'full of' }],
    ['Andeutungen', { es: 'insinuaciones', en: 'hints' }],
    ['Pausen', { es: 'pausas', en: 'pauses' }],
    ['verändert', { es: 'transforma (verändern)', en: 'changes (verändern)' }],
    ['Lernenden', { es: 'a quien aprende', en: 'the learner' }],
    ['Mitbewohnerin', { es: 'compañera de piso', en: 'flatmate (f.)' }],
    ['systematisch', { es: 'sistemáticamente', en: 'systematically' }],
    ['argumentiert', { es: 'argumenta (argumentieren)', en: 'argues (argumentieren)' }],
    ['deutscher', { es: 'más alemán', en: 'more German' }],
    ['Gerät', { es: 'aparato', en: 'device' }],
    ['unpersönlich', { es: 'impersonal', en: 'impersonal' }],
    ['echte', { es: 'verdadera', en: 'real' }],
    ['entstehen', { es: 'surgir', en: 'develop; arise' }],
    ['Respekt', { es: 'respeto', en: 'respect' }],
    ['austauschen', { es: 'intercambiar', en: 'exchange' }],
    ['erleben', { es: 'vivir; experimentar', en: 'experience' }],
    ['benutze', { es: 'uso (benutzen)', en: 'use (benutzen)' }]
  ],
  q: [
    { t: 'choice', q: 'Wofür reichen Übersetzungsprogramme laut Mehmet völlig aus?', o: ['für Witze und Ironie', 'für Speisekarten, Wegbeschreibungen und einfache E-Mails', 'für Freundschaften'], a: 1, x: { es: 'Para transmitir información simple.', en: 'For simple information.' } },
    { t: 'rf', q: 'Mehmet meint, Maschinen seien völlig nutzlos.', a: false, x: { es: 'Son útiles en la medida en que son rápidas, baratas y correctas.', en: 'They are useful insofar as they are fast, cheap and correct.' } },
    { t: 'choice', q: 'Was passiert laut Mehmet mit einem übersetzten Witz?', o: ['Er wird lustiger.', 'Er ist meistens kein Witz mehr.', 'Er bleibt gleich.'], a: 1, x: { es: '«…kein Witz mehr, geschweige denn ein guter».', en: '“…kein Witz mehr, geschweige denn ein guter”.' } },
    { t: 'choice', q: 'Welchen Unterschied beschreibt er zwischen Lena und Tomás?', o: ['Lena denkt systematisch, Tomás argumentiert mit Geschichten.', 'Beide denken gleich.', 'Tomás denkt systematischer.'], a: 0, x: { es: 'wohingegen marca el contraste.', en: 'wohingegen marks the contrast.' } },
    { t: 'rf', q: 'Mehmet benutzt selbst nie Übersetzungsprogramme.', a: false, x: { es: 'Los usa cada día cuando no conoce una palabra.', en: 'He uses them every day when he doesn’t know a word.' } }
  ]
});
