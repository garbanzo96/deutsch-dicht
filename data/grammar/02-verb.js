/* Gramática · Das Verb */
(function () {
  const M = (es, en) => ({ es, en });
  const SV = { es: 'Significado', en: 'Meaning' };
  const COLS = ['Infinitiv', 'er / sie / es', 'Präteritum', 'Partizip II', SV];

  DD.grammarTopic('k-verb', [
    {
      id: 'g-present', level: 'A1', de: 'Präsens: regelmäßige Verben', es: 'Presente: verbos regulares', en: 'Present tense: regular verbs',
      summary: M('Raíz del infinitivo (sin -en / -n) + terminaciones -e, -st, -t, -en, -t, -en. Un solo presente alemán cubre el presente simple, el progresivo y, con un adverbio, el futuro.', 'Infinitive stem (without -en / -n) + endings -e, -st, -t, -en, -t, -en. A single German present covers the simple present, the progressive and, with an adverb, the future.'),
      blocks: [
        { b: 'table', h: M('Terminaciones del presente', 'Present-tense endings'), c: ['', 'machen', 'arbeiten', 'tanzen', 'wandern', 'sein'], r: [
          ['ich', 'mach[e]', 'arbeit[e]', 'tanz[e]', 'wander[e]', 'bin'],
          ['du', 'mach[st]', 'arbeit[est]', 'tanz[t]', 'wander[st]', 'bist'],
          ['er / sie / es', 'mach[t]', 'arbeit[et]', 'tanz[t]', 'wander[t]', 'ist'],
          ['wir', 'mach[en]', 'arbeit[en]', 'tanz[en]', 'wander[n]', 'sind'],
          ['ihr', 'mach[t]', 'arbeit[et]', 'tanz[t]', 'wander[t]', 'seid'],
          ['sie / Sie', 'mach[en]', 'arbeit[en]', 'tanz[en]', 'wander[n]', 'sind']
        ], n: M('Raíz en -t/-d (arbeiten, finden) o consonante + m/n (öffnen, rechnen): -e- de unión (du arbeitest, er öffnet). Raíz en -s, -ß, -z, -x: du solo + t (du tanzt, du heißt). Verbos en -ern / -eln: wir/sie wandern, ich wand(e)re, ich samm(e)le.', 'Stem in -t/-d (arbeiten, finden) or consonant + m/n (öffnen, rechnen): linking -e- (du arbeitest, er öffnet). Stem in -s, -ß, -z, -x: du only + t (du tanzt, du heißt). Verbs in -ern / -eln: wir/sie wandern, ich wand(e)re, ich samm(e)le.') },
        { b: 'table', h: M('haben y werden', 'haben and werden'), c: ['', 'haben', 'werden', 'wissen', 'tun'], r: [
          ['ich', 'habe', 'werde', 'weiß', 'tue'], ['du', 'hast', 'wirst', 'weißt', 'tust'], ['er / sie / es', 'hat', 'wird', 'weiß', 'tut'],
          ['wir', 'haben', 'werden', 'wissen', 'tun'], ['ihr', 'habt', 'werdet', 'wisst', 'tut'], ['sie / Sie', 'haben', 'werden', 'wissen', 'tun']
        ] },
        { b: 'table', h: M('Usos del presente', 'Uses of the present'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example')], r: [
          [M('acción actual', 'current action'), 'Ich [lerne] gerade Deutsch.'],
          [M('hábito, verdad general', 'habit, general truth'), 'Wasser [kocht] bei 100 Grad.'],
          [M('futuro (con indicación de tiempo)', 'future (with time indication)'), 'Morgen [fahre] ich nach Berlin.'],
          [M('pasado que dura hasta hoy (seit)', 'past continuing until now (seit)'), 'Ich [wohne] seit zwei Jahren hier.'],
          [M('presente histórico', 'historic present'), '1989 [fällt] die Mauer.']
        ], n: M('seit + presente = «desde hace / hace … que»: Ich warte seit einer Stunde (llevo una hora esperando). No uses Perfekt aquí.', 'seit + present = “for / since”: Ich warte seit einer Stunde (I have been waiting for an hour). Do not use the Perfekt here.') }
      ],
      examples: [['Was machst du am Wochenende?', '¿Qué haces el fin de semana?', 'What are you doing at the weekend?'], ['Sie arbeitet seit Mai in Leipzig.', 'Trabaja en Leipzig desde mayo.', 'She has been working in Leipzig since May.'], ['Wir wandern gern in den Bergen.', 'Nos gusta caminar en la montaña.', 'We like hiking in the mountains.']]
    },
    {
      id: 'g-present-irregular', level: 'A1', de: 'Präsens: Vokalwechsel', es: 'Presente: cambio vocálico', en: 'Present tense: vowel change',
      summary: M('Muchos verbos fuertes cambian la vocal de la raíz solo en du y er/sie/es: e → i, e → ie, a → ä, au → äu, o → ö. Las demás personas son regulares.', 'Many strong verbs change the stem vowel only in du and er/sie/es: e → i, e → ie, a → ä, au → äu, o → ö. The other persons are regular.'),
      blocks: [
        { b: 'table', h: M('Los cinco tipos de cambio', 'The five change types'), c: [M('Cambio', 'Change'), 'Infinitiv', 'du', 'er / sie / es', M('Otros verbos', 'Other verbs')], r: [
          ['e → i', 'sprechen', 'spr[i]chst', 'spr[i]cht', 'essen, geben, helfen, nehmen, treffen, vergessen, werfen, sterben, brechen, gelten'],
          ['e → ie', 'sehen', 's[ie]hst', 's[ie]ht', 'lesen, empfehlen, stehlen, geschehen, befehlen'],
          ['a → ä', 'fahren', 'f[ä]hrst', 'f[ä]hrt', 'fallen, halten, lassen, schlafen, tragen, waschen, wachsen, schlagen, raten, fangen'],
          ['au → äu', 'laufen', 'l[äu]fst', 'l[äu]ft', 'saufen'],
          ['o → ö', 'stoßen', 'st[ö]ßt', 'st[ö]ßt', '—']
        ], n: M('Irregulares especiales: nehmen → du nimmst, er nimmt (también cambia la consonante); treten → du trittst, er tritt; halten → er hält (sin -et); werden → du wirst, er wird; wissen → ich/er weiß.', 'Special irregulars: nehmen → du nimmst, er nimmt (consonant changes too); treten → du trittst, er tritt; halten → er hält (no -et); werden → du wirst, er wird; wissen → ich/er weiß.') },
        { b: 'note', tone: 'tip', t: M('El cambio e → i/ie y a → ä nunca afecta a ich, wir, ihr ni al imperativo de a → ä (fahr!), pero sí al imperativo de e → i/ie: sprich!, lies!, nimm!, gib!', 'The e → i/ie and a → ä change never affects ich, wir, ihr nor the imperative of a → ä verbs (fahr!), but it does affect the imperative of e → i/ie verbs: sprich!, lies!, nimm!, gib!') }
      ],
      examples: [['Er spricht drei Sprachen.', 'Habla tres idiomas.', 'He speaks three languages.'], ['Liest du gern Krimis?', '¿Te gusta leer novelas policiales?', 'Do you like reading crime novels?'], ['Sie fährt jeden Tag mit dem Rad.', 'Va todos los días en bici.', 'She cycles every day.']]
    },
    {
      id: 'g-strong-verbs', level: 'A2', de: 'Stammformen der starken und unregelmäßigen Verben', es: 'Formas principales de los verbos fuertes e irregulares', en: 'Principal parts of strong and irregular verbs',
      summary: M('Los verbos fuertes forman el Präteritum y el participio con cambio vocálico (Ablaut) y el participio en -en. Se agrupan en patrones: aprender el patrón reduce la memoria necesaria a la mitad. Aquí están los ~140 verbos fuertes e irregulares más frecuentes.', 'Strong verbs form the Präteritum and participle with a vowel change (ablaut) and the participle in -en. They fall into patterns: learning the pattern halves the memory load. Here are the ~140 most frequent strong and irregular verbs.'),
      blocks: [
        { b: 'concept', de: 'Ablaut', t: M('Tres formas principales: infinitivo – Präteritum – Partizip II (+ 3.ª sg. presente si cambia). Los compuestos siguen al verbo base: verstehen como stehen, bekommen como kommen, anfangen como fangen. Verbo con ist en el Perfekt: marcado como «ist …».', 'Three principal parts: infinitive – Präteritum – Partizip II (+ 3rd sg. present if it changes). Compounds follow the base verb: verstehen like stehen, bekommen like kommen, anfangen like fangen. Verbs taking ist in the Perfekt are marked “ist …”.') },
        { b: 'table', h: M('Patrón ei – i – i', 'Pattern ei – i – i'), c: COLS, r: [
          ['beißen', 'beißt', 'biss', 'gebissen', M('morder', 'bite')], ['gleichen', 'gleicht', 'glich', 'geglichen', M('parecerse', 'resemble')], ['greifen', 'greift', 'griff', 'gegriffen', M('agarrar', 'grasp')],
          ['leiden', 'leidet', 'litt', 'gelitten', M('sufrir', 'suffer')], ['pfeifen', 'pfeift', 'pfiff', 'gepfiffen', M('silbar', 'whistle')], ['reißen', 'reißt', 'riss', 'gerissen', M('rasgar', 'tear')],
          ['reiten', 'reitet', 'ritt', 'ist geritten', M('cabalgar', 'ride')], ['schneiden', 'schneidet', 'schnitt', 'geschnitten', M('cortar', 'cut')], ['schreiten', 'schreitet', 'schritt', 'ist geschritten', M('avanzar (a paso)', 'stride')],
          ['streiten', 'streitet', 'stritt', 'gestritten', M('discutir', 'argue')], ['vergleichen', 'vergleicht', 'verglich', 'verglichen', M('comparar', 'compare')], ['begreifen', 'begreift', 'begriff', 'begriffen', M('comprender', 'grasp')]
        ] },
        { b: 'table', h: M('Patrón ei – ie – ie', 'Pattern ei – ie – ie'), c: COLS, r: [
          ['bleiben', 'bleibt', 'blieb', 'ist geblieben', M('quedarse', 'stay')], ['leihen', 'leiht', 'lieh', 'geliehen', M('prestar', 'lend')], ['meiden', 'meidet', 'mied', 'gemieden', M('evitar', 'avoid')],
          ['reiben', 'reibt', 'rieb', 'gerieben', M('frotar', 'rub')], ['scheiden', 'scheidet', 'schied', 'geschieden', M('separar', 'separate')], ['scheinen', 'scheint', 'schien', 'geschienen', M('brillar; parecer', 'shine; seem')],
          ['schreiben', 'schreibt', 'schrieb', 'geschrieben', M('escribir', 'write')], ['schreien', 'schreit', 'schrie', 'geschrien', M('gritar', 'scream')], ['schweigen', 'schweigt', 'schwieg', 'geschwiegen', M('callar', 'be silent')],
          ['steigen', 'steigt', 'stieg', 'ist gestiegen', M('subir', 'climb')], ['treiben', 'treibt', 'trieb', 'getrieben', M('impulsar; practicar', 'drive; do (sport)')], ['weisen', 'weist', 'wies', 'gewiesen', M('indicar', 'point')],
          ['beweisen', 'beweist', 'bewies', 'bewiesen', M('demostrar', 'prove')], ['verzeihen', 'verzeiht', 'verzieh', 'verziehen', M('perdonar', 'forgive')], ['entscheiden', 'entscheidet', 'entschied', 'entschieden', M('decidir', 'decide')]
        ] },
        { b: 'table', h: M('Patrón ie – o – o', 'Pattern ie – o – o'), c: COLS, r: [
          ['biegen', 'biegt', 'bog', 'gebogen', M('doblar', 'bend')], ['bieten', 'bietet', 'bot', 'geboten', M('ofrecer', 'offer')], ['fliegen', 'fliegt', 'flog', 'ist geflogen', M('volar', 'fly')],
          ['fliehen', 'flieht', 'floh', 'ist geflohen', M('huir', 'flee')], ['fließen', 'fließt', 'floss', 'ist geflossen', M('fluir', 'flow')], ['frieren', 'friert', 'fror', 'gefroren', M('tener frío; congelar', 'freeze')],
          ['genießen', 'genießt', 'genoss', 'genossen', M('disfrutar', 'enjoy')], ['gießen', 'gießt', 'goss', 'gegossen', M('regar; verter', 'pour; water')], ['riechen', 'riecht', 'roch', 'gerochen', M('oler', 'smell')],
          ['schieben', 'schiebt', 'schob', 'geschoben', M('empujar', 'push')], ['schießen', 'schießt', 'schoss', 'geschossen', M('disparar', 'shoot')], ['schließen', 'schließt', 'schloss', 'geschlossen', M('cerrar', 'close')],
          ['verlieren', 'verliert', 'verlor', 'verloren', M('perder', 'lose')], ['wiegen', 'wiegt', 'wog', 'gewogen', M('pesar', 'weigh')], ['ziehen', 'zieht', 'zog', 'gezogen', M('tirar; mudarse (ist)', 'pull; move (ist)')],
          ['lügen', 'lügt', 'log', 'gelogen', M('mentir', 'lie')], ['heben', 'hebt', 'hob', 'gehoben', M('levantar', 'lift')], ['schwören', 'schwört', 'schwor', 'geschworen', M('jurar', 'swear')]
        ] },
        { b: 'table', h: M('Patrón i – a – u / i – a – o', 'Pattern i – a – u / i – a – o'), c: COLS, r: [
          ['binden', 'bindet', 'band', 'gebunden', M('atar', 'tie')], ['finden', 'findet', 'fand', 'gefunden', M('encontrar', 'find')], ['gelingen', 'gelingt', 'gelang', 'ist gelungen', M('salir bien', 'succeed')],
          ['klingen', 'klingt', 'klang', 'geklungen', M('sonar', 'sound')], ['singen', 'singt', 'sang', 'gesungen', M('cantar', 'sing')], ['sinken', 'sinkt', 'sank', 'ist gesunken', M('hundirse; bajar', 'sink')],
          ['springen', 'springt', 'sprang', 'ist gesprungen', M('saltar', 'jump')], ['stinken', 'stinkt', 'stank', 'gestunken', M('apestar', 'stink')], ['trinken', 'trinkt', 'trank', 'getrunken', M('beber', 'drink')],
          ['zwingen', 'zwingt', 'zwang', 'gezwungen', M('obligar', 'force')], ['verschwinden', 'verschwindet', 'verschwand', 'ist verschwunden', M('desaparecer', 'disappear')], ['dringen', 'dringt', 'drang', 'ist gedrungen', M('penetrar', 'penetrate')],
          ['beginnen', 'beginnt', 'begann', 'begonnen', M('comenzar', 'begin')], ['gewinnen', 'gewinnt', 'gewann', 'gewonnen', M('ganar', 'win')], ['schwimmen', 'schwimmt', 'schwamm', 'ist geschwommen', M('nadar', 'swim')]
        ] },
        { b: 'table', h: M('Patrón e – a – o (presente con i / ie)', 'Pattern e – a – o (present with i / ie)'), c: COLS, r: [
          ['brechen', 'bricht', 'brach', 'gebrochen', M('romper', 'break')], ['empfehlen', 'empfiehlt', 'empfahl', 'empfohlen', M('recomendar', 'recommend')], ['befehlen', 'befiehlt', 'befahl', 'befohlen', M('ordenar', 'command')],
          ['erschrecken', 'erschrickt', 'erschrak', 'ist erschrocken', M('asustarse', 'be startled')], ['gelten', 'gilt', 'galt', 'gegolten', M('valer', 'be valid')], ['helfen', 'hilft', 'half', 'geholfen', M('ayudar', 'help')],
          ['nehmen', 'nimmt', 'nahm', 'genommen', M('tomar', 'take')], ['sprechen', 'spricht', 'sprach', 'gesprochen', M('hablar', 'speak')], ['stechen', 'sticht', 'stach', 'gestochen', M('picar', 'sting')],
          ['stehlen', 'stiehlt', 'stahl', 'gestohlen', M('robar', 'steal')], ['sterben', 'stirbt', 'starb', 'ist gestorben', M('morir', 'die')], ['treffen', 'trifft', 'traf', 'getroffen', M('encontrar(se)', 'meet')],
          ['verderben', 'verdirbt', 'verdarb', 'verdorben', M('estropear', 'spoil')], ['werben', 'wirbt', 'warb', 'geworben', M('hacer publicidad', 'advertise')], ['werfen', 'wirft', 'warf', 'geworfen', M('lanzar', 'throw')],
          ['kommen', 'kommt', 'kam', 'ist gekommen', M('venir', 'come')]
        ] },
        { b: 'table', h: M('Patrón e – a – e (presente con i / ie) y afines', 'Pattern e – a – e (present with i / ie) and related'), c: COLS, r: [
          ['essen', 'isst', 'aß', 'gegessen', M('comer', 'eat')], ['fressen', 'frisst', 'fraß', 'gefressen', M('comer (animales)', 'eat (animals)')], ['geben', 'gibt', 'gab', 'gegeben', M('dar', 'give')],
          ['geschehen', 'geschieht', 'geschah', 'ist geschehen', M('suceder', 'happen')], ['lesen', 'liest', 'las', 'gelesen', M('leer', 'read')], ['messen', 'misst', 'maß', 'gemessen', M('medir', 'measure')],
          ['sehen', 'sieht', 'sah', 'gesehen', M('ver', 'see')], ['treten', 'tritt', 'trat', 'ist/hat getreten', M('pisar; entrar', 'step; kick')], ['vergessen', 'vergisst', 'vergaß', 'vergessen', M('olvidar', 'forget')],
          ['bitten', 'bittet', 'bat', 'gebeten', M('pedir', 'ask')], ['liegen', 'liegt', 'lag', 'gelegen', M('estar tendido', 'lie')], ['sitzen', 'sitzt', 'saß', 'gesessen', M('estar sentado', 'sit')]
        ] },
        { b: 'table', h: M('Patrón a – u – a (presente con ä)', 'Pattern a – u – a (present with ä)'), c: COLS, r: [
          ['fahren', 'fährt', 'fuhr', 'ist gefahren', M('ir (en vehículo); conducir', 'go; drive')], ['graben', 'gräbt', 'grub', 'gegraben', M('cavar', 'dig')], ['laden', 'lädt', 'lud', 'geladen', M('cargar', 'load')],
          ['schlagen', 'schlägt', 'schlug', 'geschlagen', M('golpear', 'hit')], ['tragen', 'trägt', 'trug', 'getragen', M('llevar', 'carry; wear')], ['wachsen', 'wächst', 'wuchs', 'ist gewachsen', M('crecer', 'grow')],
          ['waschen', 'wäscht', 'wusch', 'gewaschen', M('lavar', 'wash')], ['schaffen', 'schafft', 'schuf', 'geschaffen', M('crear (fuerte; «lograr» es débil)', 'create (strong; “manage” is weak)')], ['einladen', 'lädt ein', 'lud ein', 'eingeladen', M('invitar', 'invite')]
        ] },
        { b: 'table', h: M('Patrón a – ie – a y otros con ie / i en el Präteritum', 'Pattern a – ie – a and others with ie / i in the Präteritum'), c: COLS, r: [
          ['blasen', 'bläst', 'blies', 'geblasen', M('soplar', 'blow')], ['braten', 'brät', 'briet', 'gebraten', M('freír; asar', 'fry; roast')], ['fallen', 'fällt', 'fiel', 'ist gefallen', M('caer', 'fall')],
          ['halten', 'hält', 'hielt', 'gehalten', M('sostener; detenerse', 'hold; stop')], ['lassen', 'lässt', 'ließ', 'gelassen', M('dejar', 'let; leave')], ['raten', 'rät', 'riet', 'geraten', M('adivinar; aconsejar', 'guess; advise')],
          ['schlafen', 'schläft', 'schlief', 'geschlafen', M('dormir', 'sleep')], ['fangen', 'fängt', 'fing', 'gefangen', M('atrapar', 'catch')], ['hängen', 'hängt', 'hing', 'gehangen', M('estar colgado', 'hang (intr.)')],
          ['gehen', 'geht', 'ging', 'ist gegangen', M('ir', 'go')], ['heißen', 'heißt', 'hieß', 'geheißen', M('llamarse', 'be called')], ['laufen', 'läuft', 'lief', 'ist gelaufen', M('correr; caminar', 'run; walk')],
          ['rufen', 'ruft', 'rief', 'gerufen', M('llamar', 'call')], ['stoßen', 'stößt', 'stieß', 'gestoßen', M('empujar; chocar', 'push; bump')], ['stehen', 'steht', 'stand', 'gestanden', M('estar de pie', 'stand')]
        ] },
        { b: 'table', h: M('Verbos irregulares básicos y mixtos', 'Basic irregular and mixed verbs'), c: COLS, r: [
          ['sein', 'ist', 'war', 'ist gewesen', M('ser; estar', 'be')], ['haben', 'hat', 'hatte', 'gehabt', M('tener', 'have')], ['werden', 'wird', 'wurde', 'ist geworden', M('llegar a ser', 'become')],
          ['tun', 'tut', 'tat', 'getan', M('hacer', 'do')], ['wissen', 'weiß', 'wusste', 'gewusst', M('saber', 'know')], ['bringen', 'bringt', 'brachte', 'gebracht', M('traer', 'bring')],
          ['denken', 'denkt', 'dachte', 'gedacht', M('pensar', 'think')], ['kennen', 'kennt', 'kannte', 'gekannt', M('conocer', 'know')], ['nennen', 'nennt', 'nannte', 'genannt', M('nombrar', 'name')],
          ['rennen', 'rennt', 'rannte', 'ist gerannt', M('correr', 'run')], ['brennen', 'brennt', 'brannte', 'gebrannt', M('arder', 'burn')], ['senden', 'sendet', 'sandte / sendete', 'gesandt / gesendet', M('enviar; transmitir', 'send; broadcast')],
          ['wenden', 'wendet', 'wandte / wendete', 'gewandt / gewendet', M('volver; dar vuelta', 'turn')], ['dürfen', 'darf', 'durfte', 'gedurft', M('poder (permiso)', 'be allowed')], ['können', 'kann', 'konnte', 'gekonnt', M('poder; saber', 'can')],
          ['mögen', 'mag', 'mochte', 'gemocht', M('gustar', 'like')], ['müssen', 'muss', 'musste', 'gemusst', M('tener que', 'must')], ['sollen', 'soll', 'sollte', 'gesollt', M('deber', 'should')], ['wollen', 'will', 'wollte', 'gewollt', M('querer', 'want')]
        ], n: M('Mixtos (brennen, bringen, denken, kennen, nennen, rennen…): cambian la vocal como los fuertes, pero toman -te y -t como los débiles.', 'Mixed verbs (brennen, bringen, denken, kennen, nennen, rennen…): they change the vowel like strong verbs but take -te and -t like weak ones.') }
      ],
      examples: [['Wir sind gestern nach Dresden gefahren.', 'Ayer fuimos a Dresde.', 'We drove to Dresden yesterday.'], ['Sie schrieb ihm einen langen Brief.', 'Le escribió una larga carta.', 'She wrote him a long letter.'], ['Der Zug ist pünktlich angekommen.', 'El tren llegó puntual.', 'The train arrived on time.']]
    },
    {
      id: 'g-separable', level: 'A1', de: 'Trennbare und untrennbare Verben', es: 'Verbos separables e inseparables', en: 'Separable and inseparable verbs',
      summary: M('Los prefijos tónicos (an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-…) se separan en presente y Präteritum y van al final de la oración; en el participio, ge- va entre prefijo y raíz (angerufen); con zu: anzurufen. Los prefijos átonos (be-, ge-, er-, ver-, zer-, ent-, emp-, miss-) nunca se separan y el participio no lleva ge-.', 'Stressed prefixes (an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-…) separate in the present and Präteritum and go to the end of the clause; in the participle, ge- goes between prefix and stem (angerufen); with zu: anzurufen. Unstressed prefixes (be-, ge-, er-, ver-, zer-, ent-, emp-, miss-) never separate and the participle has no ge-.'),
      blocks: [
        { b: 'table', h: M('El verbo separable en todas las posiciones', 'The separable verb in every position'), c: [M('Forma', 'Form'), 'anrufen', 'aufstehen'], r: [
          [M('presente', 'present'), 'Ich [rufe] dich morgen [an].', 'Er [steht] um sieben [auf].'],
          [M('con modal', 'with modal'), 'Ich will dich morgen [anrufen].', 'Er muss um sieben [aufstehen].'],
          [M('subordinada', 'subordinate clause'), '…, weil ich dich morgen [anrufe].', '…, dass er um sieben [aufsteht].'],
          ['Perfekt', 'Ich habe dich [angerufen].', 'Er ist um sieben [aufgestanden].'],
          [M('infinitivo con zu', 'zu-infinitive'), 'Ich vergesse oft, dich [anzurufen].', 'Es ist schwer, früh [aufzustehen].'],
          [M('imperativo', 'imperative'), '[Ruf] mich [an]!', '[Steh] [auf]!']
        ] },
        { b: 'table', h: M('Prefijos separables frecuentes', 'Frequent separable prefixes'), c: [M('Prefijo', 'Prefix'), M('Idea básica', 'Basic idea'), M('Ejemplos', 'Examples')], r: [
          ['ab-', M('separación, partida', 'separation, departure'), 'abfahren, abholen, absagen'], ['an-', M('contacto, inicio', 'contact, start'), 'anrufen, anfangen, ankommen'],
          ['auf-', M('hacia arriba, abrir', 'up, open'), 'aufstehen, aufmachen, aufhören'], ['aus-', M('hacia afuera, fin', 'out, end'), 'aussteigen, ausmachen, aussehen'],
          ['ein-', M('hacia adentro', 'in'), 'einsteigen, einkaufen, einladen'], ['mit-', M('compañía', 'together'), 'mitkommen, mitbringen, mitmachen'],
          ['vor-', M('adelante, antes', 'forward, before'), 'vorstellen, vorbereiten, vorhaben'], ['zu-', M('cerrar, dirección', 'closing, direction'), 'zumachen, zuhören, zustimmen'],
          ['zurück-', M('regreso', 'return'), 'zurückkommen, zurückgeben'], ['weg-', M('alejamiento', 'away'), 'wegfahren, wegwerfen'], ['fern- · fest- · los- · teil- · statt-', M('otros', 'others'), 'fernsehen, festhalten, losgehen, teilnehmen, stattfinden']
        ] },
        { b: 'table', h: M('Prefijos dobles: separables o no', 'Two-way prefixes: separable or not'), c: [M('Prefijo', 'Prefix'), M('Separable (tónico, literal)', 'Separable (stressed, literal)'), M('Inseparable (átono, figurado)', 'Inseparable (unstressed, figurative)')], r: [
          ['über-', 'ÜBERsetzen (cruzar) → hat übergesetzt', 'überSETZen (traducir) → hat übersetzt'],
          ['um-', 'UMfahren (atropellar) → hat umgefahren', 'umFAHRen (rodear) → hat umfahren'],
          ['unter-', 'UNTERgehen (hundirse) → ist untergegangen', 'unterRICHTen (enseñar) → hat unterrichtet'],
          ['durch-', 'DURCHlesen (leer entero) → hat durchgelesen', 'durchSUCHen (registrar) → hat durchsucht'],
          ['wieder-', 'WIEDERsehen (volver a ver) → hat wiedergesehen', 'wiederHOLen (repetir) → hat wiederholt']
        ] }
      ],
      examples: [['Der Film fängt um acht an.', 'La película empieza a las ocho.', 'The film starts at eight.'], ['Kannst du mich vom Bahnhof abholen?', '¿Puedes pasar a buscarme a la estación?', 'Can you pick me up from the station?'], ['Ich habe vergessen, das Licht auszumachen.', 'Olvidé apagar la luz.', 'I forgot to switch off the light.']]
    },
    {
      id: 'g-modal', level: 'A1', de: 'Modalverben', es: 'Verbos modales', en: 'Modal verbs',
      summary: M('Seis modales (können, müssen, dürfen, sollen, wollen, mögen/möchte) + infinitivo sin zu al final. Singular irregular (ich kann, ich muss), 1.ª y 3.ª persona sin terminación. Perfekt con doble infinitivo (hat kommen müssen).', 'Six modals (können, müssen, dürfen, sollen, wollen, mögen/möchte) + infinitive without zu at the end. Irregular singular (ich kann, ich muss), 1st and 3rd person without ending. Perfekt with double infinitive (hat kommen müssen).'),
      blocks: [
        { b: 'table', h: M('Conjugación en presente', 'Present conjugation'), c: ['', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen', 'möchten'], r: [
          ['ich', 'kann', 'muss', 'darf', 'soll', 'will', 'mag', 'möchte'], ['du', 'kannst', 'musst', 'darfst', 'sollst', 'willst', 'magst', 'möchtest'], ['er / sie / es', 'kann', 'muss', 'darf', 'soll', 'will', 'mag', 'möchte'],
          ['wir', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen', 'möchten'], ['ihr', 'könnt', 'müsst', 'dürft', 'sollt', 'wollt', 'mögt', 'möchtet'], ['sie / Sie', 'können', 'müssen', 'dürfen', 'sollen', 'wollen', 'mögen', 'möchten']
        ] },
        { b: 'table', h: M('Significados objetivos', 'Objective meanings'), c: [M('Modal', 'Modal'), M('Significado', 'Meaning'), M('Ejemplo', 'Example')], r: [
          ['können', M('capacidad, posibilidad, permiso informal', 'ability, possibility, informal permission'), 'Ich [kann] schwimmen. · [Kann] ich gehen?'],
          ['müssen', M('necesidad, obligación', 'necessity, obligation'), 'Ich [muss] morgen früh aufstehen.'],
          ['nicht müssen', M('no es necesario (≠ prohibido)', 'not necessary (≠ forbidden)'), 'Du [musst] nicht kommen. = Du brauchst nicht zu kommen.'],
          ['dürfen', M('permiso', 'permission'), 'Hier [darf] man parken.'],
          ['nicht dürfen', M('prohibición', 'prohibition'), 'Hier [darf] man nicht rauchen.'],
          ['sollen', M('encargo de otro, consejo, norma', 'someone else’s instruction, advice, rule'), 'Der Arzt sagt, ich [soll] mehr schlafen.'],
          ['wollen', M('voluntad, plan firme', 'will, firm plan'), 'Ich [will] Deutsch lernen.'],
          ['mögen', M('gusto (con sustantivo)', 'liking (with noun)'), 'Ich [mag] Kaffee.'],
          ['möchten', M('deseo cortés', 'polite wish'), 'Ich [möchte] einen Tee.']
        ], n: M('Para los usos subjetivos (Er muss krank sein; Er soll reich sein) véase «Subjektive Modalverben».', 'For subjective uses (Er muss krank sein; Er soll reich sein) see “Subjective modal verbs”.') },
        { b: 'table', h: M('Modales en los tiempos', 'Modals across tenses'), c: [M('Tiempo', 'Tense'), M('Forma', 'Form'), M('Ejemplo', 'Example')], r: [
          ['Präteritum', M('sin Umlaut + -te', 'no umlaut + -te'), 'Ich [konnte] nicht kommen. · Sie [musste] arbeiten.'],
          ['Perfekt + Inf.', 'hat + Inf. + Modal (Inf.)', 'Ich [habe] nicht [kommen können].'],
          ['Perfekt sin Inf.', 'hat + gekonnt / gemusst', 'Das [habe] ich nicht [gekonnt].'],
          ['Konjunktiv II', 'könnte, müsste, dürfte, sollte, wollte, möchte', 'Du [solltest] mehr schlafen.']
        ], n: M('En la práctica, con modales se prefiere el Präteritum al Perfekt incluso al hablar.', 'In practice, with modals the Präteritum is preferred to the Perfekt even in speech.') }
      ],
      examples: [['Darf ich hier sitzen?', '¿Puedo sentarme aquí?', 'May I sit here?'], ['Wir mussten lange warten.', 'Tuvimos que esperar mucho.', 'We had to wait a long time.'], ['Du musst das nicht heute machen.', 'No tienes que hacerlo hoy.', 'You don’t have to do it today.']]
    },
    {
      id: 'g-imperative', level: 'A1', de: 'Imperativ', es: 'Imperativo', en: 'Imperative',
      summary: M('Tres formas: du (raíz, sin -st: komm!), ihr (como presente: kommt!), Sie (infinitivo + Sie: kommen Sie!). Verbos con e → i/ie lo mantienen en du (gib!, lies!). Partículas: bitte, mal, doch, ruhig, bloß.', 'Three forms: du (stem, no -st: komm!), ihr (like the present: kommt!), Sie (infinitive + Sie: kommen Sie!). Verbs with e → i/ie keep it in du (gib!, lies!). Particles: bitte, mal, doch, ruhig, bloß.'),
      blocks: [
        { b: 'table', h: M('Formas del imperativo', 'Imperative forms'), c: ['Infinitiv', 'du', 'ihr', 'Sie', 'wir'], r: [
          ['kommen', 'Komm!', 'Kommt!', 'Kommen Sie!', 'Kommen wir!'], ['warten', 'Warte!', 'Wartet!', 'Warten Sie!', 'Warten wir!'], ['geben', 'Gib!', 'Gebt!', 'Geben Sie!', 'Geben wir!'],
          ['lesen', 'Lies!', 'Lest!', 'Lesen Sie!', 'Lesen wir!'], ['fahren', 'Fahr!', 'Fahrt!', 'Fahren Sie!', 'Fahren wir!'], ['anrufen', 'Ruf an!', 'Ruft an!', 'Rufen Sie an!', 'Rufen wir an!'],
          ['sein', 'Sei!', 'Seid!', 'Seien Sie!', 'Seien wir!'], ['haben', 'Hab!', 'Habt!', 'Haben Sie!', 'Haben wir!'], ['werden', 'Werd(e)!', 'Werdet!', 'Werden Sie!', 'Werden wir!']
        ], n: M('Raíz en -t, -d, -ig, consonante + m/n: -e obligatoria (Warte! Öffne! Entschuldige!). a → ä no pasa al imperativo (Fahr!, no ✗Fähr!).', 'Stem in -t, -d, -ig, consonant + m/n: -e obligatory (Warte! Öffne! Entschuldige!). a → ä does not carry over (Fahr!, not ✗Fähr!).') },
        { b: 'list', h: M('Alternativas al imperativo', 'Alternatives to the imperative'), cols: 2, r: [['Könnten Sie bitte …?', M('cortesía (K2)', 'politeness (K2)')], ['Bitte nicht rauchen!', M('infinitivo (avisos)', 'infinitive (notices)')], ['Aufstehen!', M('orden tajante', 'blunt order')], ['Jetzt wird geschlafen!', M('pasiva impersonal (enérgica)', 'impersonal passive (emphatic)')]] }
      ],
      examples: [['Sprich bitte langsamer!', '¡Habla más despacio, por favor!', 'Please speak more slowly!'], ['Kommt doch mit!', '¡Vengan con nosotros, anden!', 'Do come along!'], ['Seien Sie bitte pünktlich.', 'Sea puntual, por favor.', 'Please be on time.']]
    },
    {
      id: 'g-reflexive', level: 'A2', de: 'Reflexive Verben', es: 'Verbos reflexivos', en: 'Reflexive verbs',
      summary: M('El pronombre reflexivo concuerda con el sujeto y va en acusativo (ich wasche mich) o en dativo si ya hay otro objeto en acusativo (ich wasche mir die Hände). Solo ich y du distinguen mich/mir y dich/dir; las terceras personas usan sich.', 'The reflexive pronoun agrees with the subject and is accusative (ich wasche mich) or dative when there is already an accusative object (ich wasche mir die Hände). Only ich and du distinguish mich/mir and dich/dir; third persons use sich.'),
      blocks: [
        { b: 'table', h: M('Pronombres reflexivos', 'Reflexive pronouns'), c: ['', 'Akkusativ', 'Dativ', M('Ejemplo Akk', 'Acc. example'), M('Ejemplo Dat', 'Dat. example')], r: [
          ['ich', '{A mich}', '{D mir}', 'Ich freue [mich].', 'Ich wünsche [mir] Ruhe.'], ['du', '{A dich}', '{D dir}', 'Du ärgerst [dich].', 'Du putzt [dir] die Zähne.'], ['er / sie / es', 'sich', 'sich', 'Er setzt [sich].', 'Sie kauft [sich] ein Buch.'],
          ['wir', 'uns', 'uns', 'Wir treffen [uns].', 'Wir sehen [uns] den Film an.'], ['ihr', 'euch', 'euch', 'Ihr beeilt [euch].', 'Ihr merkt [euch] das.'], ['sie / Sie', 'sich', 'sich', 'Sie erholen [sich].', 'Sie leisten [sich] ein Auto.']
        ] },
        { b: 'table', h: M('Tipos de verbos reflexivos', 'Types of reflexive verbs'), c: [M('Tipo', 'Type'), M('Ejemplos', 'Examples')], r: [
          [M('siempre reflexivos', 'always reflexive'), 'sich beeilen, sich erholen, sich verlieben, sich bedanken, sich erkälten, sich weigern'],
          [M('reflexivos con preposición', 'reflexive with preposition'), 'sich freuen auf/über, sich interessieren für, sich erinnern an, sich kümmern um, sich gewöhnen an'],
          [M('opcionalmente reflexivos', 'optionally reflexive'), 'waschen / sich waschen, anziehen / sich anziehen, ärgern / sich ärgern'],
          [M('con dativo reflexivo', 'with reflexive dative'), 'sich etwas vorstellen, sich etwas merken, sich etwas wünschen, sich etwas ansehen, sich etwas leisten'],
          [M('recíprocos (= einander)', 'reciprocal (= einander)'), 'Wir kennen uns. · Sie helfen sich / einander.']
        ], n: M('Posición: el reflexivo va lo más a la izquierda del campo medio, tras el verbo o tras un pronombre sujeto: Gestern hat sich mein Bruder erkältet / Gestern hat er sich erkältet.', 'Position: the reflexive goes as far left in the middle field as possible, after the verb or a pronoun subject: Gestern hat sich mein Bruder erkältet / Gestern hat er sich erkältet.') }
      ],
      examples: [['Ich habe mich sehr über dein Geschenk gefreut.', 'Me alegré mucho por tu regalo.', 'I was very pleased about your present.'], ['Kannst du dir das vorstellen?', '¿Te lo puedes imaginar?', 'Can you imagine that?'], ['Sie hat sich die Haare geschnitten.', 'Se cortó el pelo.', 'She cut her hair.']]
    },
    {
      id: 'g-verbs-case', level: 'A2', de: 'Verbvalenz: Ergänzungen im Akkusativ, Dativ, Genitiv', es: 'Valencia verbal: complementos en acusativo, dativo y genitivo', en: 'Verb valency: accusative, dative and genitive complements',
      summary: M('El verbo decide qué casos exige. La mayoría pide acusativo; un grupo cerrado de verbos frecuentes pide dativo (helfen, danken, gefallen…); muchos verbos de dar y decir piden dativo (persona) + acusativo (cosa); unos pocos verbos formales piden genitivo.', 'The verb decides which cases it requires. Most take the accusative; a closed group of frequent verbs takes the dative (helfen, danken, gefallen…); many verbs of giving and saying take dative (person) + accusative (thing); a few formal verbs take the genitive.'),
      blocks: [
        { b: 'table', h: M('Verbos con dativo', 'Verbs with the dative'), c: [M('Verbo', 'Verb'), M('Ejemplo', 'Example'), M('Significado', 'Meaning')], r: [
          ['helfen', 'Ich helfe {D dir}.', M('ayudar', 'help')], ['danken', 'Wir danken {D Ihnen}.', M('agradecer', 'thank')], ['gefallen', 'Das Buch gefällt {D mir}.', M('gustar', 'please')],
          ['gehören', 'Das Rad gehört {D ihm}.', M('pertenecer', 'belong')], ['passen', 'Der Termin passt {D uns}.', M('venir bien; quedar', 'suit; fit')], ['schmecken', 'Schmeckt es {D dir}?', M('saber (rico)', 'taste good')],
          ['antworten', 'Sie antwortet {D dem Lehrer}.', M('responder', 'answer')], ['glauben', 'Ich glaube {D dir}.', M('creer (a alguien)', 'believe')], ['folgen', 'Folgen Sie {D mir}!', M('seguir', 'follow')],
          ['gratulieren', 'Wir gratulieren {D dir}.', M('felicitar', 'congratulate')], ['vertrauen', 'Ich vertraue {D ihr}.', M('confiar', 'trust')], ['begegnen', 'Ich bin {D ihm} begegnet.', M('encontrarse con', 'meet')],
          ['fehlen', 'Du fehlst {D mir}.', M('faltar; echar de menos', 'be missing')], ['wehtun', 'Der Kopf tut {D mir} weh.', M('doler', 'hurt')], ['zuhören', 'Hör {D mir} zu!', M('escuchar', 'listen')],
          ['widersprechen', 'Ich widerspreche {D dir}.', M('contradecir', 'contradict')], ['gelingen', 'Es ist {D ihr} gelungen.', M('salir bien', 'succeed')], ['leidtun', 'Es tut {D mir} leid.', M('lamentar', 'be sorry')]
        ] },
        { b: 'table', h: M('Dativo + acusativo', 'Dative + accusative'), c: [M('Verbos', 'Verbs'), M('Ejemplo', 'Example')], r: [
          ['geben, schenken, bringen, schicken, leihen, zeigen', 'Ich gebe {D dem Kind} {A den Ball}.'],
          ['erklären, erzählen, sagen, empfehlen, beschreiben', 'Er erklärt {D mir} {A die Regel}.'],
          ['wegnehmen, verbieten, erlauben, wünschen, bieten', 'Wir wünschen {D dir} {A viel Glück}.']
        ], n: M('Orden en el campo medio: dos sustantivos → Dat antes que Akk; un pronombre → va primero; dos pronombres → Akk antes que Dat (Ich gebe es ihm).', 'Middle-field order: two nouns → dat. before acc.; one pronoun → it goes first; two pronouns → acc. before dat. (Ich gebe es ihm).') },
        { b: 'table', h: M('Verbos con genitivo (registro formal)', 'Verbs with the genitive (formal register)'), c: [M('Verbo', 'Verb'), M('Ejemplo', 'Example')], r: [
          ['sich bedienen', 'Sie bedient sich {G ihres Verstandes}.'], ['sich erinnern (elevado)', 'Er erinnert sich {G jenes Tages}.'], ['bedürfen', 'Das bedarf {G einer Erklärung}.'],
          ['gedenken', 'Wir gedenken {G der Opfer}.'], ['jemanden beschuldigen / anklagen', 'Man klagt ihn {G des Diebstahls} an.'], ['sich schämen (elevado)', 'Sie schämt sich {G ihrer Worte}.']
        ] }
      ],
      examples: [['Gefällt dir die neue Wohnung?', '¿Te gusta el nuevo departamento?', 'Do you like the new flat?'], ['Kannst du mir das Salz geben?', '¿Me pasas la sal?', 'Can you pass me the salt?'], ['Das bedarf keiner weiteren Erklärung.', 'Eso no requiere más explicación.', 'That needs no further explanation.']]
    },
    {
      id: 'g-rection', level: 'B1', de: 'Verben, Adjektive und Nomen mit festen Präpositionen', es: 'Verbos, adjetivos y sustantivos con preposición fija', en: 'Verbs, adjectives and nouns with fixed prepositions',
      summary: M('Muchas palabras exigen una preposición fija con un caso fijo, que no se deduce de su sentido. Se aprenden como bloque: sich freuen auf + A. Con cosas se pregunta con wo(r)- y se retoma con da(r)-: Worauf freust du dich? – Darauf.', 'Many words require a fixed preposition with a fixed case that cannot be deduced from meaning. Learn them as a block: sich freuen auf + A. With things, ask with wo(r)- and refer back with da(r)-: Worauf freust du dich? – Darauf.'),
      blocks: [
        { b: 'table', h: M('Verbos + preposición (acusativo)', 'Verbs + preposition (accusative)'), c: [M('Verbo', 'Verb'), M('Preposición', 'Preposition'), M('Ejemplo', 'Example')], r: [
          ['sich freuen', 'auf + A', M('alegrarse de algo futuro: …auf den Urlaub', 'look forward to: …auf den Urlaub')], ['sich freuen', 'über + A', M('alegrarse de algo dado: …über das Geschenk', 'be pleased about: …über das Geschenk')],
          ['warten', 'auf + A', 'Ich warte auf {A den Bus}.'], ['sich interessieren', 'für + A', 'Sie interessiert sich für {A Musik}.'], ['denken', 'an + A', 'Ich denke oft an {A dich}.'],
          ['sich erinnern', 'an + A', 'Erinnerst du dich an {A den Tag}?'], ['sich gewöhnen', 'an + A', 'Ich gewöhne mich an {A das Wetter}.'], ['sich kümmern', 'um + A', 'Wer kümmert sich um {A den Hund}?'],
          ['sich bewerben', 'um + A / bei + D', 'Er bewirbt sich um {A die Stelle} bei {D der Firma}.'], ['sich ärgern', 'über + A', 'Ich ärgere mich über {A den Lärm}.'], ['sich beschweren', 'über + A / bei + D', 'Sie beschwert sich über {A das Essen}.'],
          ['sprechen / reden', 'über + A / mit + D', 'Wir sprechen über {A das Problem}.'], ['sich verlassen', 'auf + A', 'Du kannst dich auf {A mich} verlassen.'], ['achten / aufpassen', 'auf + A', 'Pass auf {A das Kind} auf!'],
          ['sich entscheiden', 'für / gegen + A', 'Wir entscheiden uns für {A Leipzig}.'], ['sich bedanken', 'für + A / bei + D', 'Ich bedanke mich bei {D Ihnen} für {A die Hilfe}.'], ['bitten', 'um + A', 'Darf ich Sie um {A Hilfe} bitten?']
        ] },
        { b: 'table', h: M('Verbos + preposición (dativo)', 'Verbs + preposition (dative)'), c: [M('Verbo', 'Verb'), M('Preposición', 'Preposition'), M('Ejemplo', 'Example')], r: [
          ['teilnehmen', 'an + D', 'Ich nehme an {D dem Kurs} teil.'], ['zweifeln', 'an + D', 'Ich zweifle an {D der These}.'], ['arbeiten', 'an + D', 'Sie arbeitet an {D einem Projekt}.'],
          ['sich fürchten / Angst haben', 'vor + D', 'Er hat Angst vor {D Hunden}.'], ['warnen', 'vor + D', 'Man warnt vor {D dem Sturm}.'], ['schützen', 'vor + D', 'Die Jacke schützt vor {D Regen}.'],
          ['fragen', 'nach + D', 'Er fragt nach {D dem Weg}.'], ['suchen', 'nach + D', 'Ich suche nach {D einer Lösung}.'], ['sich erkundigen', 'nach + D', 'Sie erkundigt sich nach {D dem Preis}.'],
          ['abhängen', 'von + D', 'Das hängt von {D dir} ab.'], ['träumen', 'von + D', 'Ich träume von {D einer Reise}.'], ['erzählen / berichten', 'von + D / über + A', 'Sie erzählt von {D ihrer Kindheit}.'],
          ['sich verabschieden', 'von + D', 'Wir verabschieden uns von {D allen}.'], ['bestehen', 'aus + D', 'Das Team besteht aus {D fünf Leuten}.'], ['gehören', 'zu + D', 'Das gehört zu {D meinen Aufgaben}.'],
          ['passen', 'zu + D', 'Die Jacke passt zu {D der Hose}.'], ['einladen', 'zu + D', 'Wir laden dich zu {D dem Fest} ein.'], ['gratulieren', 'zu + D', 'Ich gratuliere dir zu {D der Prüfung}.'],
          ['telefonieren / sich treffen', 'mit + D', 'Ich treffe mich mit {D Lena}.'], ['aufhören / anfangen', 'mit + D', 'Hör mit {D dem Rauchen} auf!'], ['sich beschäftigen', 'mit + D', 'Er beschäftigt sich mit {D Philosophie}.']
        ] },
        { b: 'table', h: M('Adjetivos y sustantivos + preposición', 'Adjectives and nouns + preposition'), c: [M('Palabra', 'Word'), M('Preposición', 'Preposition'), M('Ejemplo', 'Example')], r: [
          ['stolz', 'auf + A', 'Ich bin stolz auf {A dich}.'], ['gespannt', 'auf + A', 'Wir sind gespannt auf {A das Ergebnis}.'], ['zufrieden', 'mit + D', 'Sie ist zufrieden mit {D der Arbeit}.'],
          ['interessiert', 'an + D', 'Ich bin interessiert an {D dem Kurs}.'], ['verantwortlich', 'für + A', 'Wer ist verantwortlich für {A den Fehler}?'], ['abhängig', 'von + D', 'Das ist abhängig von {D dem Wetter}.'],
          ['die Angst', 'vor + D', 'die Angst vor {D der Prüfung}'], ['das Interesse', 'an + D / für + A', 'das Interesse an {D Sprachen}'], ['die Frage', 'nach + D', 'die Frage nach {D dem Sinn}'], ['der Grund', 'für + A', 'der Grund für {A die Entscheidung}']
        ] },
        { b: 'table', h: M('Preguntar y retomar: wo(r)- / da(r)-', 'Asking and referring back: wo(r)- / da(r)-'), c: [M('Preposición', 'Preposition'), M('Pregunta (cosas)', 'Question (things)'), M('Retomar (cosas)', 'Refer back (things)'), M('Personas', 'People')], r: [
          ['auf', 'worauf?', 'darauf', 'auf wen? · auf ihn'], ['an', 'woran?', 'daran', 'an wen? · an sie'], ['über', 'worüber?', 'darüber', 'über wen? · über ihn'],
          ['mit', 'womit?', 'damit', 'mit wem? · mit ihr'], ['von', 'wovon?', 'davon', 'von wem? · von ihm'], ['für', 'wofür?', 'dafür', 'für wen? · für sie'], ['vor', 'wovor?', 'davor', 'vor wem? · vor ihm']
        ], n: M('Con preposición que empieza por vocal se intercala -r-: worauf, darüber. El da-compuesto también anticipa una subordinada: Ich freue mich darauf, dass du kommst.', 'With a preposition beginning with a vowel, -r- is inserted: worauf, darüber. The da-compound also anticipates a clause: Ich freue mich darauf, dass du kommst.') }
      ],
      examples: [['Worauf wartest du? – Auf den Bus.', '¿Qué esperas? – El bus.', 'What are you waiting for? – The bus.'], ['Ich kann mich nicht daran erinnern.', 'No me puedo acordar de eso.', 'I can’t remember that.'], ['Es hängt davon ab, ob du Zeit hast.', 'Depende de si tienes tiempo.', 'It depends on whether you have time.']]
    },
    {
      id: 'g-positional-verbs', level: 'A2', de: 'Positionsverben: legen/liegen, stellen/stehen …', es: 'Verbos de posición: legen/liegen, stellen/stehen…', en: 'Positional verbs: legen/liegen, stellen/stehen…',
      summary: M('Parejas de verbos: uno de movimiento (débil, transitivo, + Akk: wohin?) y uno de estado (fuerte, intransitivo, + Dat: wo?). La pareja depende de la forma del objeto: tendido, de pie, sentado, colgado.', 'Verb pairs: one of movement (weak, transitive, + acc.: wohin?) and one of state (strong, intransitive, + dat.: wo?). The pair depends on the object’s shape: lying, standing, sitting, hanging.'),
      blocks: [
        { b: 'table', h: M('Las cuatro parejas', 'The four pairs'), c: [M('Posición', 'Position'), M('Wohin? (acción, + Akk)', 'Wohin? (action, + acc.)'), M('Wo? (estado, + Dat)', 'Wo? (state, + dat.)')], r: [
          [M('tendido', 'lying'), 'legen – legte – hat gelegt · Ich lege das Buch auf {A den Tisch}.', 'liegen – lag – hat gelegen · Das Buch liegt auf {D dem Tisch}.'],
          [M('de pie', 'standing'), 'stellen – stellte – hat gestellt · Ich stelle die Flasche in {A den Kühlschrank}.', 'stehen – stand – hat gestanden · Die Flasche steht in {D dem Kühlschrank}.'],
          [M('sentado', 'sitting'), 'setzen – setzte – hat gesetzt · Ich setze das Kind auf {A den Stuhl}.', 'sitzen – saß – hat gesessen · Das Kind sitzt auf {D dem Stuhl}.'],
          [M('colgado', 'hanging'), 'hängen – hängte – hat gehängt · Ich hänge das Bild an {A die Wand}.', 'hängen – hing – hat gehangen · Das Bild hängt an {D der Wand}.']
        ], n: M('También: stecken (meter/estar metido), sich legen / sich stellen / sich setzen (acción reflexiva). En el sur de Alemania, Austria y Suiza: ist gelegen / gestanden / gesessen.', 'Also: stecken (put in / be stuck in), sich legen / sich stellen / sich setzen (reflexive action). In southern Germany, Austria and Switzerland: ist gelegen / gestanden / gesessen.') }
      ],
      examples: [['Wo liegt mein Handy? – Du hast es auf das Sofa gelegt.', '¿Dónde está mi celular? – Lo dejaste en el sofá.', 'Where is my phone? – You put it on the sofa.'], ['Setz dich doch!', '¡Siéntate, anda!', 'Do sit down!'], ['Die Lampe hängt über dem Tisch.', 'La lámpara cuelga sobre la mesa.', 'The lamp hangs above the table.']]
    },
    {
      id: 'g-infinitive', level: 'B1', de: 'Infinitiv mit und ohne zu; Infinitivsätze', es: 'Infinitivo con y sin zu; oraciones de infinitivo', en: 'Infinitive with and without zu; infinitive clauses',
      summary: M('Sin zu: tras modales, werden, lassen, bleiben, gehen, fahren y verbos de percepción (sehen, hören, fühlen). Con zu: tras la mayoría de los demás verbos, adjetivos y sustantivos. Conectores de infinitivo: um … zu, ohne … zu, (an)statt … zu; mismo sujeto.', 'Without zu: after modals, werden, lassen, bleiben, gehen, fahren and verbs of perception (sehen, hören, fühlen). With zu: after most other verbs, adjectives and nouns. Infinitive connectors: um … zu, ohne … zu, (an)statt … zu; same subject.'),
      blocks: [
        { b: 'table', h: M('¿Con zu o sin zu?', 'With zu or without?'), c: [M('Sin zu', 'Without zu'), M('Ejemplo', 'Example'), M('Con zu', 'With zu'), M('Ejemplo', 'Example')], r: [
          [M('modales', 'modals'), 'Ich muss arbeiten.', M('verbos de inicio, fin, intento', 'verbs of starting, stopping, trying'), 'Ich fange an [zu] arbeiten.'],
          ['werden', 'Ich werde kommen.', M('verbos de opinión, plan, promesa', 'verbs of opinion, plan, promise'), 'Ich hoffe, dich bald [zu] sehen.'],
          ['lassen', 'Ich lasse das Auto reparieren.', M('es + adjetivo', 'es + adjective'), 'Es ist schwer, Deutsch [zu] lernen.'],
          [M('sehen, hören, fühlen', 'sehen, hören, fühlen'), 'Ich höre ihn singen.', M('sustantivo + Lust/Zeit/Angst', 'noun + Lust/Zeit/Angst'), 'Ich habe keine Lust, [zu] kochen.'],
          ['gehen, fahren, bleiben', 'Wir gehen schwimmen.', 'haben / sein + zu', 'Ich habe noch viel [zu] tun.']
        ], n: M('Separables: zu entre prefijo y raíz (anzurufen, aufzustehen). brauchen + nicht/nur + zu = no tener que: Du brauchst nicht zu kommen.', 'Separable verbs: zu between prefix and stem (anzurufen, aufzustehen). brauchen + nicht/nur + zu = not have to: Du brauchst nicht zu kommen.') },
        { b: 'table', h: M('Oraciones de infinitivo con conector', 'Infinitive clauses with connectors'), c: [M('Conector', 'Connector'), M('Sentido', 'Meaning'), M('Ejemplo', 'Example'), M('Con otro sujeto', 'With another subject')], r: [
          ['um … zu', M('finalidad', 'purpose'), 'Ich lerne Deutsch, [um] in Leipzig [zu] studieren.', 'damit: …, damit meine Kinder es verstehen.'],
          ['ohne … zu', M('falta de algo', 'absence'), 'Er ging, [ohne] ein Wort [zu] sagen.', 'ohne dass: …, ohne dass es jemand merkte.'],
          ['(an)statt … zu', M('sustitución', 'substitution'), '[Statt] [zu] lernen, sah er fern.', '(an)statt dass: …, statt dass er half.']
        ] },
        { b: 'table', h: M('Infinitivo de pasado y pasivo', 'Past and passive infinitive'), c: [M('Forma', 'Form'), M('Construcción', 'Construction'), M('Ejemplo', 'Example')], r: [
          [M('pasado activo', 'past active'), 'PII + zu haben / zu sein', 'Ich freue mich, dich [kennengelernt zu haben].'],
          [M('pasivo presente', 'present passive'), 'PII + zu werden', 'Er hofft, eingeladen [zu werden].'],
          [M('pasivo pasado', 'past passive'), 'PII + worden zu sein', 'Sie ist froh, gewählt [worden zu sein].']
        ] }
      ],
      examples: [['Ich habe vergessen, dich anzurufen.', 'Olvidé llamarte.', 'I forgot to call you.'], ['Er spart, um ein Auto zu kaufen.', 'Ahorra para comprar un auto.', 'He is saving to buy a car.'], ['Sie hörte ihn kommen.', 'Lo oyó venir.', 'She heard him coming.']]
    },
    {
      id: 'g-participles', level: 'B1', de: 'Partizip I und Partizip II', es: 'Participio I y participio II', en: 'Present and past participle',
      summary: M('Partizip I = infinitivo + d (lachend): simultáneo y activo. Partizip II = ge- + raíz + -t / -en (gemacht, gefahren): terminado; pasivo en transitivos. Ambos se usan como adjetivo (declinados), como adverbio y en construcciones participiales.', 'Partizip I = infinitive + d (lachend): simultaneous and active. Partizip II = ge- + stem + -t / -en (gemacht, gefahren): completed; passive with transitives. Both work as adjectives (declined), adverbs and in participial phrases.'),
      blocks: [
        { b: 'table', h: M('Formación del Partizip II', 'Forming the past participle'), c: [M('Tipo de verbo', 'Verb type'), M('Regla', 'Rule'), M('Ejemplos', 'Examples')], r: [
          [M('débil', 'weak'), 'ge- + Stamm + -(e)t', 'machen → gemacht · arbeiten → gearbeitet'],
          [M('fuerte', 'strong'), 'ge- + Stamm (Ablaut) + -en', 'fahren → gefahren · schreiben → geschrieben'],
          [M('mixto', 'mixed'), 'ge- + Stamm (Ablaut) + -t', 'bringen → gebracht · denken → gedacht'],
          [M('separable', 'separable'), 'Präfix + ge- + Stamm', 'anrufen → angerufen · einkaufen → eingekauft'],
          [M('prefijo inseparable', 'inseparable prefix'), M('sin ge-', 'no ge-'), 'besuchen → besucht · verstehen → verstanden'],
          [M('en -ieren', 'in -ieren'), M('sin ge-', 'no ge-'), 'studieren → studiert · reparieren → repariert']
        ] },
        { b: 'table', h: M('Usos de los participios', 'Uses of the participles'), c: [M('Uso', 'Use'), 'Partizip I', 'Partizip II'], r: [
          [M('tiempos compuestos', 'compound tenses'), '—', 'Ich habe [gelernt].'],
          [M('pasiva', 'passive'), '—', 'Das Haus wird [gebaut].'],
          [M('atributo', 'attribute'), 'das [schlafende] Kind', 'das [gebaute] Haus'],
          [M('adverbio', 'adverb'), 'Sie kam [lachend] herein.', 'Er saß [gelangweilt] da.'],
          [M('sustantivado', 'nominalised'), 'die [Reisenden]', 'das [Gelernte]'],
          [M('zu + Partizip I', 'zu + present participle'), 'die [zu lösende] Aufgabe', '—']
        ] }
      ],
      examples: [['Die lachenden Kinder spielen im Garten.', 'Los niños que ríen juegan en el jardín.', 'The laughing children are playing in the garden.'], ['Das gestern gekaufte Brot ist hart.', 'El pan comprado ayer está duro.', 'The bread bought yesterday is hard.'], ['Sie verließ singend das Zimmer.', 'Salió de la pieza cantando.', 'She left the room singing.']]
    },
    {
      id: 'g-double-inf', level: 'B2', de: 'Doppelter Infinitiv (Ersatzinfinitiv)', es: 'Doble infinitivo (infinitivo sustituto)', en: 'Double infinitive (substitute infinitive)',
      summary: M('En el Perfekt, el Plusquamperfekt y el K2 de pasado, los modales y lassen (y a menudo sehen, hören, helfen, brauchen) usan su infinitivo en lugar del participio si dependen de otro infinitivo: hat kommen müssen, hätte fragen sollen. En subordinadas, el verbo conjugado se coloca delante del bloque: …, dass er hat kommen müssen.', 'In the Perfekt, Plusquamperfekt and past K2, modals and lassen (and often sehen, hören, helfen, brauchen) use their infinitive instead of the participle when they depend on another infinitive: hat kommen müssen, hätte fragen sollen. In subordinate clauses the finite verb goes in front of the block: …, dass er hat kommen müssen.'),
      blocks: [
        { b: 'table', h: M('El doble infinitivo en principal y subordinada', 'The double infinitive in main and subordinate clauses'), c: [M('Tiempo', 'Tense'), M('Principal', 'Main clause'), M('Subordinada', 'Subordinate clause')], r: [
          ['Perfekt', 'Er [hat] [kommen müssen].', '…, weil er [hat] [kommen müssen].'],
          ['Plusquamperfekt', 'Er [hatte] [kommen müssen].', '…, weil er [hatte] [kommen müssen].'],
          ['K2 Vergangenheit', 'Er [hätte] [kommen müssen].', '…, dass er [hätte] [kommen müssen].'],
          ['Futur I', 'Er [wird] [kommen müssen].', '…, dass er [wird] [kommen müssen].'],
          ['lassen', 'Ich [habe] das Auto [reparieren lassen].', '…, weil ich das Auto [habe] [reparieren lassen].'],
          ['sehen / hören', 'Ich [habe] ihn [kommen sehen].', '…, dass ich ihn [habe] [kommen sehen].']
        ], n: M('Sin infinitivo dependiente, el modal usa su participio normal: Das habe ich nicht gekonnt. Con sehen/hören en la lengua hablada también se oye el participio (Ich habe ihn kommen gesehen), pero el doble infinitivo es la norma escrita.', 'Without a dependent infinitive, the modal uses its normal participle: Das habe ich nicht gekonnt. With sehen/hören the participle is also heard in speech (Ich habe ihn kommen gesehen), but the double infinitive is the written norm.') }
      ],
      examples: [['Ich habe gestern länger arbeiten müssen.', 'Ayer tuve que trabajar más.', 'I had to work longer yesterday.'], ['Du hättest mich fragen können.', 'Podrías haberme preguntado.', 'You could have asked me.'], ['Ich weiß, dass ich das hätte sagen sollen.', 'Sé que debería haberlo dicho.', 'I know I should have said that.']]
    },
    {
      id: 'g-lassen', level: 'B1', de: 'lassen: alle Verwendungen', es: 'lassen: todos sus usos', en: 'lassen: all uses',
      summary: M('lassen es uno de los verbos más versátiles: dejar (algo en un lugar), permitir, encargar a otro (hacer hacer), y con sich: posibilidad pasiva (Das lässt sich machen). Como modal, lleva infinitivo sin zu y forma doble infinitivo.', 'lassen is one of the most versatile verbs: leave (something somewhere), allow, have something done by someone else, and with sich: passive possibility (Das lässt sich machen). Like a modal, it takes an infinitive without zu and forms a double infinitive.'),
      blocks: [
        { b: 'table', h: M('Los usos de lassen', 'The uses of lassen'), c: [M('Uso', 'Use'), M('Ejemplo', 'Example'), M('Significado', 'Meaning')], r: [
          [M('dejar (en un lugar)', 'leave (somewhere)'), 'Ich [lasse] den Schlüssel zu Hause.', M('dejo la llave en casa', 'I leave the key at home')],
          [M('permitir', 'allow'), 'Meine Eltern [lassen] mich ausgehen.', M('me dejan salir', 'they let me go out')],
          [M('encargar (hacer hacer)', 'causative (have done)'), 'Ich [lasse] mir die Haare schneiden.', M('me corto el pelo (en la peluquería)', 'I have my hair cut')],
          [M('dejar en paz / no hacer', 'leave alone / stop'), '[Lass] das! · [Lass] mich in Ruhe!', M('¡déjalo! · ¡déjame en paz!', 'stop it! · leave me alone!')],
          [M('propuesta (lass uns)', 'suggestion (lass uns)'), '[Lass] uns gehen!', M('¡vamos!', 'let’s go!')],
          [M('sich lassen = posibilidad pasiva', 'sich lassen = passive possibility'), 'Das [lässt sich] leicht erklären.', M('se explica fácilmente', 'it is easy to explain')]
        ], n: M('Perfekt: con infinitivo → doble infinitivo (Ich habe das Auto reparieren lassen); sin infinitivo → gelassen (Ich habe den Schlüssel zu Hause gelassen).', 'Perfekt: with an infinitive → double infinitive (Ich habe das Auto reparieren lassen); without → gelassen (Ich habe den Schlüssel zu Hause gelassen).') }
      ],
      examples: [['Wir lassen die Heizung reparieren.', 'Vamos a hacer reparar la calefacción.', 'We are having the heating repaired.'], ['Lass uns morgen weiterreden.', 'Sigamos hablando mañana.', 'Let’s talk more tomorrow.'], ['Das Fenster lässt sich nicht öffnen.', 'La ventana no se puede abrir.', 'The window won’t open.']]
    },
    {
      id: 'g-werden', level: 'A2', de: 'Die Verwendungen von werden', es: 'Los usos de werden', en: 'The uses of werden',
      summary: M('werden es verbo pleno (llegar a ser), auxiliar del futuro (+ infinitivo), auxiliar de la pasiva (+ participio) y, en K2, forma la perífrasis würde + infinitivo. Distinguir los cuatro usos es clave para leer.', 'werden is a full verb (become), the future auxiliary (+ infinitive), the passive auxiliary (+ participle) and, in K2, forms würde + infinitive. Telling the four uses apart is key to reading.'),
      blocks: [
        { b: 'table', h: M('Cuatro usos, una forma', 'Four uses, one form'), c: [M('Uso', 'Use'), M('Estructura', 'Structure'), M('Ejemplo', 'Example')], r: [
          [M('verbo pleno: llegar a ser', 'full verb: become'), 'werden + Nom / Adj', 'Sie [wird] Ärztin. · Es [wird] kalt.'],
          [M('futuro / suposición', 'future / assumption'), 'werden + Infinitiv', 'Ich [werde] dich [anrufen]. · Er [wird] krank [sein].'],
          [M('pasiva de proceso', 'process passive'), 'werden + Partizip II', 'Das Haus [wird] [gebaut].'],
          [M('Konjunktiv II', 'Konjunktiv II'), 'würde + Infinitiv', 'Ich [würde] gern [kommen].']
        ] },
        { b: 'table', h: M('werden en todos los tiempos', 'werden in every tense'), c: [M('Tiempo', 'Tense'), M('Verbo pleno', 'Full verb'), M('Auxiliar de pasiva', 'Passive auxiliary')], r: [
          ['Präsens', 'Sie wird müde.', 'Es wird gebaut.'], ['Präteritum', 'Sie wurde müde.', 'Es wurde gebaut.'],
          ['Perfekt', 'Sie ist müde [geworden].', 'Es ist gebaut [worden].'], ['Plusquamperfekt', 'Sie war müde [geworden].', 'Es war gebaut [worden].']
        ], n: M('geworden (verbo pleno) ≠ worden (auxiliar de pasiva, sin ge-).', 'geworden (full verb) ≠ worden (passive auxiliary, without ge-).') }
      ],
      examples: [['Mein Bruder wird nächstes Jahr dreißig.', 'Mi hermano cumple treinta el próximo año.', 'My brother turns thirty next year.'], ['Die Brücke ist 2010 gebaut worden.', 'El puente se construyó en 2010.', 'The bridge was built in 2010.'], ['Würdest du mir helfen?', '¿Me ayudarías?', 'Would you help me?']]
    }
  ]);
})();
