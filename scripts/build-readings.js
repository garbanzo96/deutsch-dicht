const fs=require('fs');const dir=require('node:path').resolve(__dirname, '..');
global.window={};for(const n of ['vocabulary','lessons','grammar','readings','connections'])require(dir+'/data/'+n+'.js');
const B=(es,en)=>({es,en});
const bridges=[];const readingSupport={};const readingLemmas={};
function G(de,es,en,lemma,forms){return{de,es,en,lemma:lemma||de.replace(/^(der|die|das) /,''),...(forms?{forms:forms.split('|')}: {})};}
function Q(prompt,promptEn,options,optionsEn,answer,explanation,explanationEn){return{prompt,promptEn,options,optionsEn,answer,explanation,explanationEn};}
function bridge(n,title,titleEn,paragraphs,glossary,questions,grammarIds){
 const id='reading-unit-'+String(n).padStart(2,'0'); const r={id,title,titleEn,level:n<6?'A1':'A2',kind:'lectura puente',kindEn:'bridge reading',source:{type:'original',label:'Texto didáctico original · puente U'+String(n).padStart(2,'0'),labelEn:'Original teaching text · U'+String(n).padStart(2,'0')+' bridge',licenseNote:'Texto alemán y traducciones propios; introduce solo las estructuras de esta unidad y las anteriores. No es una cita.',licenseNoteEn:'Original German text and translations; introduces only structures from this unit and earlier ones. Not a quotation.'},paragraphs:paragraphs.map(p=>({de:p[0],es:p[1],en:p[2]})),glossary,questions};bridges.push(r);
 readingSupport[id]={minUnit:'unit-'+String(n).padStart(2,'0'),grammarIds,intro:B('Lectura puente: recupera la estructura de la unidad; las palabras nuevas están glosadas.','Bridge reading: recall the unit’s structure; new words are glossed.'),teachingGlossary:glossary};
}
bridge(1,'Ich komme aus Chile · Identidad y V2','Ich komme aus Chile · Identity and V2',[
['Ich heiße Gabriel. Ich komme aus Chile. Jetzt wohne ich in Santiago. Ich spreche Spanisch und Englisch. Ich lerne Deutsch.','Me llamo Gabriel. Soy de Chile. Ahora vivo en Santiago. Hablo español e inglés. Aprendo alemán.','My name is Gabriel. I am from Chile. Now I live in Santiago. I speak Spanish and English. I am learning German.'],
['Heute lerne ich Deutsch. Du lernst auch Deutsch. Wir sind hier. Die Sprache ist interessant.','Hoy aprendo alemán. Tú también aprendes alemán. Estamos aquí. La lengua es interesante.','Today I am learning German. You are learning German too. We are here. The language is interesting.']],[G('jetzt','ahora','now'),G('heute','hoy','today'),G('auch','también','also; too'),G('die Sprache','lengua; idioma','language','Sprache'),G('interessant','interesante','interesting'),G('Spanisch','español (idioma)','Spanish (language)'),G('Englisch','inglés (idioma)','English (language)'),G('Deutsch','alemán (idioma)','German (language)')],[Q('En Heute lerne ich Deutsch, ¿qué ocupa posición 2?','In Heute lerne ich Deutsch, what occupies position 2?',['Heute','lerne','ich'],['Heute','lerne','ich'],1,'El verbo conjugado lerne va en posición 2.','The finite verb lerne occupies position 2.'),Q('¿Dónde vive Gabriel ahora?','Where does Gabriel live now?',['Chile (sin ciudad)','Santiago','Berlín'],['Chile (no city given)','Santiago','Berlin'],1,'Jetzt wohne ich in Santiago.','Jetzt wohne ich in Santiago.')],['present','personal-pronouns','word-order','articles']);
bridge(2,'Ein Hund, ein Buch · Sujeto y objeto','Ein Hund, ein Buch · Subject and object',[
['Der Mann hat einen Hund. Der Hund sieht die Frau. Die Frau hat ein Buch. Das Buch ist interessant.','El hombre tiene un perro. El perro ve a la mujer. La mujer tiene un libro. El libro es interesante.','The man has a dog. The dog sees the woman. The woman has a book. The book is interesting.'],
['Ich sehe den Hund. Ich sehe ihn. Du liest das Buch. Du liest es. Wir haben Bücher. Die Bücher sind interessant.','Veo al perro. Lo veo. Lees el libro. Lo lees. Tenemos libros. Los libros son interesantes.','I see the dog. I see him. You read the book. You read it. We have books. The books are interesting.']],[G('der Mann','hombre','man','Mann'),G('der Hund','perro','dog','Hund'),G('die Frau','mujer','woman','Frau'),G('das Buch','libro; plural Bücher','book; plural Bücher','Buch','Bücher'),G('sehen','ver','see','sehen','sieht|sehe'),G('lesen','leer','read','lesen','liest'),G('haben','tener','have','haben','hat')],[Q('¿Quién ve a la mujer en la primera parte?','Who sees the woman in the first part?',['El hombre','El perro','El libro'],['The man','The dog','The book'],1,'Der Hund es el sujeto de sieht.','Der Hund is the subject of sieht.'),Q('En Ich sehe ihn, ¿qué sustituye ihn?','In Ich sehe ihn, what does ihn replace?',['der Hund como sujeto','den Hund como objeto','die Frau'],['der Hund as subject','den Hund as object','die Frau'],1,'ihn es pronombre acusativo masculino: den Hund.','ihn is the masculine accusative pronoun: den Hund.')],['articles','accusative','personal-pronouns','present']);
bridge(3,'Was liest du? · Preguntar y negar','Was liest du? · Questions and negation',[
['„Liest du ein Buch?“ — „Nein, ich lese kein Buch. Ich lese einen Text.“ — „Ist der Text schwierig?“ — „Nein, er ist nicht schwierig. Er ist einfach.“','«¿Lees un libro?» — «No, no leo un libro. Leo un texto». — «¿El texto es difícil?» — «No, no es difícil. Es simple».','“Are you reading a book?” — “No, I am not reading a book. I am reading a text.” — “Is the text difficult?” — “No, it is not difficult. It is simple.”'],
['„Was verstehst du?“ — „Ich verstehe die Frage. Ich kenne die Antwort nicht.“ — „Wer kennt die Antwort?“ — „Vielleicht Anna.“','«¿Qué entiendes?» — «Entiendo la pregunta. No conozco la respuesta». — «¿Quién conoce la respuesta?» — «Quizás Anna».','“What do you understand?” — “I understand the question. I do not know the answer.” — “Who knows the answer?” — “Perhaps Anna.”']],[G('nein','no (respuesta)','no (answer)'),G('kein','ningún; niega un nombre indefinido','no; not a; negates an indefinite noun','kein','keinen'),G('nicht','no (negación)','not'),G('schwierig','difícil','difficult'),G('einfach','simple; fácil','simple; easy'),G('verstehen','entender','understand','verstehen','verstehst|verstehe'),G('kennen','conocer','know; be familiar with','kennen','kenne|kennt'),G('die Frage','pregunta','question','Frage'),G('die Antwort','respuesta','answer','Antwort'),G('vielleicht','quizás','perhaps')],[Q('¿Por qué aparece kein Buch?','Why does kein Buch appear?',['Niega un nombre indefinido','Buch es masculino','Es una pregunta'],['It negates an indefinite noun','Buch is masculine','It is a question'],0,'kein niega ein Buch; nicht se usa ante schwierig.','kein negates ein Buch; nicht is used before schwierig.'),Q('¿Conoce quien habla la respuesta?','Does the speaker know the answer?',['Sí','No','Solo en inglés'],['Yes','No','Only in English'],1,'Ich kenne die Antwort nicht.','Ich kenne die Antwort nicht.')],['questions','negation','accusative','word-order']);
bridge(4,'Ich muss aufstehen · Modal y prefijo','Ich muss aufstehen · Modal and prefix',[
['Ich stehe um sieben Uhr auf. Heute muss ich arbeiten. Ich kann Deutsch lernen, aber ich muss zuerst arbeiten. Ich fange um neun Uhr an.','Me levanto a las siete. Hoy tengo que trabajar. Puedo aprender alemán, pero primero tengo que trabajar. Comienzo a las nueve.','I get up at seven. Today I have to work. I can learn German, but I have to work first. I start at nine.'],
['Anna möchte ein Buch lesen. Sie darf hier lesen. Sie muss heute nicht arbeiten. „Kannst du Deutsch sprechen?“ — „Ja, ich kann Deutsch sprechen.“','Anna quisiera leer un libro. Puede leer aquí (tiene permiso). Hoy no tiene que trabajar. «¿Puedes hablar alemán?» — «Sí, puedo hablar alemán».','Anna would like to read a book. She is allowed to read here. She does not have to work today. “Can you speak German?” — “Yes, I can speak German.”']],[G('aufstehen','levantarse','get up','aufstehen','stehe|auf'),G('arbeiten','trabajar','work','arbeiten','arbeite'),G('anfangen','empezar','begin','anfangen','fange|an'),G('zuerst','primero','first'),G('sieben','siete','seven'),G('neun','nueve','nine'),G('die Uhr','reloj; con número, hora','clock; with number, time','Uhr'),G('möchten','quisiera; querer cortés','would like','mögen','möchte'),G('müssen','tener que','have to','müssen','muss'),G('dürfen','tener permiso para','be allowed to','dürfen','darf'),G('können','poder; saber hacer','can; be able to','können','kann|kannst')],[Q('¿Qué significa Sie muss heute nicht arbeiten?','What does Sie muss heute nicht arbeiten mean?',['Tiene prohibido trabajar','No tiene que trabajar hoy','No sabe trabajar'],['She is forbidden to work','She does not have to work today','She does not know how to work'],1,'nicht müssen niega obligación, no permiso.','nicht müssen negates obligation, not permission.'),Q('¿Dónde queda el prefijo de aufstehen en Ich stehe um sieben Uhr auf?','Where is the prefix of aufstehen in Ich stehe um sieben Uhr auf?',['Dentro de stehe','Al final: auf','Se elimina'],['Inside stehe','At the end: auf','It is deleted'],1,'El prefijo separable cierra la principal.','The separable prefix closes the main clause.')],['modal-verbs','word-order','present','numbers']);
bridge(5,'Auf dem Tisch · Ubicación y destino','Auf dem Tisch · Location and destination',[
['Das Buch liegt auf dem Tisch. Ich lege das Buch auf den Tisch. Der Stuhl steht neben dem Bett. Ich stelle den Stuhl vor das Fenster.','El libro está sobre la mesa. Coloco el libro sobre la mesa. La silla está al lado de la cama. Coloco la silla delante de la ventana.','The book is on the table. I put the book onto the table. The chair is beside the bed. I put the chair in front of the window.'],
['Ich bin im Zimmer. Dann gehe ich ins Zimmer nebenan. Ich gebe dem Kind ein Buch. Das Kind hilft mir. Wir sprechen mit dem Lehrer.','Estoy en la habitación. Después voy a la habitación de al lado. Le doy un libro al niño. El niño me ayuda. Hablamos con el profesor.','I am in the room. Then I go into the room next door. I give the child a book. The child helps me. We speak with the teacher.']],[G('liegen','estar situado; estar tendido','be located; lie','liegen','liegt'),G('legen','colocar en posición horizontal','lay; put','legen','lege'),G('stehen','estar de pie/situado','stand; be located','stehen','steht'),G('stellen','colocar en posición vertical','place upright','stellen','stelle'),G('der Tisch','mesa','table','Tisch'),G('der Stuhl','silla','chair','Stuhl'),G('das Bett','cama','bed','Bett'),G('das Fenster','ventana','window','Fenster'),G('das Zimmer','habitación','room','Zimmer'),G('nebenan','al lado (otra habitación/lugar)','next door'),G('dann','entonces; después','then'),G('geben','dar','give','geben','gebe'),G('helfen','ayudar + dativo','help + dative','helfen','hilft'),G('das Kind','niño/a','child','Kind'),G('im','en el: in dem, Dat','in the: in dem, Dat','in'),G('ins','hacia/dentro del: in das, Akk','into the: in das, Akk','in')],[Q('¿Por qué auf den Tisch lleva Akk?','Why does auf den Tisch take Akk?',['Expresa el destino al colocar el libro','Tisch es femenino','Todo verbo exige Akk'],['It expresses the destination when placing the book','Tisch is feminine','Every verb requires Akk'],0,'legen cambia la relación espacial: el libro pasa a la mesa.','legen changes the spatial relation: the book ends up on the table.'),Q('En Das Kind hilft mir, ¿qué caso tiene mir?','In Das Kind hilft mir, what case is mir?',['Nominativo','Acusativo','Dativo'],['Nominative','Accusative','Dative'],2,'helfen rige dativo.','helfen governs dative.')],['dative','two-way-prepositions','prepositions','personal-pronouns']);
bridge(6,'Gestern in Berlin · Reconstruir el pasado','Gestern in Berlin · Reconstruct the past',[
['Gestern bin ich nach Berlin gefahren. Ich bin um zehn Uhr angekommen. Am Bahnhof habe ich Anna getroffen. Wir sind in ein Café gegangen.','Ayer viajé a Berlín. Llegué a las diez. En la estación me encontré con Anna. Fuimos a un café.','Yesterday I travelled to Berlin. I arrived at ten. At the station I met Anna. We went into a café.'],
['Danach haben wir ein Museum besucht. Ich habe viel gelernt. Am Abend war ich müde. Ich hatte Zeit, aber ich habe nicht gelesen. Heute lese ich wieder.','Después visitamos un museo. Aprendí mucho. Por la tarde estaba cansado. Tenía tiempo, pero no leí. Hoy vuelvo a leer.','Then we visited a museum. I learned a lot. In the evening I was tired. I had time, but I did not read. Today I am reading again.']],[G('gestern','ayer','yesterday'),G('fahren','viajar; ir en vehículo','travel; go by vehicle','fahren','gefahren'),G('ankommen','llegar','arrive','ankommen','angekommen'),G('treffen','encontrarse con','meet','treffen','getroffen'),G('das Café','café (local)','café (place)','Café'),G('das Museum','museo','museum','Museum'),G('besuchen','visitar','visit','besuchen','besucht'),G('danach','después','afterwards'),G('der Abend','tarde/noche','evening','Abend'),G('müde','cansado','tired'),G('wieder','otra vez; de nuevo','again'),G('zehn','diez','ten')],[Q('¿Qué auxiliar se usa con angekommen?','Which auxiliary is used with angekommen?',['haben','sein','werden'],['haben','sein','werden'],1,'ankommen forma Perfekt con sein.','ankommen forms Perfekt with sein.'),Q('¿Qué forma de sein expresa el pasado en el segundo párrafo?','Which form of sein expresses past in the second paragraph?',['bin','war','sind'],['bin','war','sind'],1,'war es Präteritum de sein para ich/er.','war is the Präteritum of sein for ich/er.')],['perfect','past','irregular-verbs','word-order']);
bridge(7,'Weil ich lernen möchte · Razón y condición','Weil ich lernen möchte · Reason and condition',[
['Ich lerne Deutsch, weil ich Bücher lesen möchte. Ich weiß, dass Anna auch Deutsch lernt. Wenn ich Zeit habe, lese ich. Ich frage Anna, ob sie den Text versteht.','Aprendo alemán porque quisiera leer libros. Sé que Anna también aprende alemán. Si tengo tiempo, leo. Le pregunto a Anna si entiende el texto.','I am learning German because I would like to read books. I know that Anna is learning German too. If I have time, I read. I ask Anna whether she understands the text.'],
['Weil ich gestern gearbeitet habe, bin ich müde. Ich lese trotzdem. Obwohl der Text schwierig ist, verstehe ich die Frage. Als ich in Berlin war, habe ich oft Deutsch gesprochen.','Como ayer trabajé, estoy cansado. Aun así leo. Aunque el texto es difícil, entiendo la pregunta. Cuando estuve en Berlín, hablé alemán a menudo.','Because I worked yesterday, I am tired. I read nevertheless. Although the text is difficult, I understand the question. When I was in Berlin, I often spoke German.']],[G('wissen','saber (hecho)','know (a fact)','wissen','weiß'),G('fragen','preguntar','ask','fragen','frage'),G('weil','porque; verbo final','because; verb final'),G('dass','que (contenido); verbo final','that (content); verb final'),G('wenn','si/cuando (condición/repetición)','if/when (condition/recurrence)'),G('ob','si (pregunta indirecta)','whether (indirect question)'),G('obwohl','aunque; verbo final','although; verb final'),G('als','cuando (evento único pasado)','when (single past event)'),G('trotzdem','aun así; ocupa posición de la principal','nevertheless; occupies a main-clause position'),G('oft','a menudo','often')],[Q('¿Qué distingue ob de wenn aquí?','What distinguishes ob from wenn here?',['ob pregunta si; wenn pone condición','Ambos indican lugar','wenn exige verbo primero'],['ob asks whether; wenn gives a condition','Both indicate place','wenn requires verb first'],0,'ob introduce una pregunta indirecta; wenn introduce condición.','ob introduces an indirect question; wenn introduces a condition.'),Q('Tras Weil ich gestern gearbeitet habe, ¿qué empieza la principal?','After Weil ich gestern gearbeitet habe, what begins the main clause?',['ich','bin','habe'],['ich','bin','habe'],1,'La subordinada completa ocupa posición 1; bin va en posición 2.','The complete subordinate clause occupies position 1; bin is in position 2.')],['subordinate','connectors','perfect','word-order']);
bridge(8,'Mein Buch, ihr Hund · Posesión y futuro','Mein Buch, ihr Hund · Possession and future',[
['Anna hat einen Hund. Ihr Hund ist klein. Ich spiele mit ihrem Hund. Das Buch meines Lehrers liegt auf meinem Tisch. Die Bücher der Kinder liegen neben dem Fenster.','Anna tiene un perro. Su perro es pequeño. Juego con su perro. El libro de mi profesor está sobre mi mesa. Los libros de los niños están junto a la ventana.','Anna has a dog. Her dog is small. I play with her dog. My teacher’s book is on my table. The children’s books are beside the window.'],
['Heute habe ich wenig Zeit. Wegen der Arbeit lese ich nicht. Morgen werde ich das Buch lesen. Anna wird mir helfen. Dann werde ich die Frage verstehen.','Hoy tengo poco tiempo. Por el trabajo no leo. Mañana leeré el libro. Anna me ayudará. Entonces entenderé la pregunta.','Today I have little time. Because of work I am not reading. Tomorrow I will read the book. Anna will help me. Then I will understand the question.']],[G('spielen','jugar','play','spielen','spiele'),G('mein','mi; declina según lo poseído','my; declines with the possessed noun','mein','meines|meinem'),G('ihr','su (de ella/ellos); aquí de Anna','her/their; here Anna’s','ihr','ihrem'),G('wenig','poco','little; few'),G('wegen','por; a causa de + genitivo','because of + genitive'),G('morgen','mañana','tomorrow'),G('werden','auxiliar de futuro aquí','future auxiliary here','werden','werde|wird'),G('der Lehrer','profesor','teacher','Lehrer','Lehrers'),G('die Kinder','los niños; plural de Kind','the children; plural of Kind','Kind')],[Q('¿A quién se refiere ihr en Ihr Hund?','Who does ihr refer to in Ihr Hund?',['Al profesor','A Anna','A los niños'],['The teacher','Anna','The children'],1,'La raíz ihr señala poseedora femenina Anna; Hund sigue siendo masculino.','The stem ihr identifies female possessor Anna; Hund remains masculine.'),Q('En Das Buch meines Lehrers, ¿qué caso tiene meines Lehrers?','In Das Buch meines Lehrers, what case is meines Lehrers?',['Nominativo','Dativo','Genitivo'],['Nominative','Dative','Genitive'],2,'Indica relación con el profesor; Gen masculino: meines + Lehrers.','It expresses the relationship to the teacher; masculine Gen: meines + Lehrers.')],['possessives','genitive','future','dative']);
const lexicon=[];const surfaceIndex=new Map();
function L(block){for(const line of block.trim().split('\n')){if(!line.trim())continue;const[de,forms,es,en]=line.split('|');const lemma=de.replace(/^(der|die|das) /,'');const g=G(de,es,en,lemma);lexicon.push(g);for(const f of [lemma,de,...(forms||'').split(',')])if(f)surfaceIndex.set(f.toLocaleLowerCase('de'),g);}}
L(`
sein|bin,bist,ist,sind,seid,war,warst,waren,wäre,wären|ser; estar|be
haben|habe,hast,hat,haben,habt,hatte,hatten,hätte,hätten|tener; auxiliar de perfecto|have; perfect auxiliary
werden|wird,werde,werden,geworden,wurden,wurde|volverse; auxiliar de futuro/pasiva|become; future/passive auxiliary
heißen|heiße,heißt|llamarse; significar|be called; mean
kommen|komme,kommt,gekommen|venir; proceder|come; be from
wohnen|wohne,wohnt,wohnst|vivir; residir|live; reside
sprechen|spreche,spricht,sprechen,gesprochen|hablar|speak
lernen|lerne,lernt,lernen,lernte,gelernt|aprender; estudiar|learn; study
lesen|lese,liest,lesen,gelesen|leer|read
verstehen|verstehe,verstehst,versteht,verstehen,verstanden|entender|understand
trinken|trinkt,trinke|beber|drink
essen|isst,esse|comer|eat
gehen|geht,gehe,gehen,gegangen|ir; caminar|go; walk
beginnen|beginnt|comenzar|begin
liegen|liegt,liegen,liegenden|estar tendido/situado|lie; be located
sitzen|sitze|estar sentado|sit
hören|höre|oír; escuchar|hear; listen
kennen|kenne,kennt,kennen|conocer|know; be familiar with
sehen|sehe,sieht,siehst,sehen|ver|see
denken|denken,dachte|pensar|think
fahren|gefahren|viajar; conducir|travel; drive
ankommen|angekommen|llegar|arrive
treffen|getroffen|encontrarse con|meet
besuchen|besucht|visitar|visit
suchen|suche,suchen|buscar|look for
mögen|mag,möchte,möchten|gustar; möchten = quisiera|like; möchten = would like
dürfen|darf,dürfte|tener permiso; dürfte puede expresar conjetura|be allowed; dürfte may express conjecture
kosten|kostet|costar|cost
nehmen|nehme|tomar; aquí comprar/llevarse|take; here buy/take it
helfen|hilft,helfen|ayudar + dativo|help + dative
müssen|muss,müssen,müsste|tener que; obligación/inferencia|have to; obligation/inference
wiederholen|wiederhole|repasar; repetir|revise; repeat
machen|mache,machte,macht|hacer|do; make
stehen|stehen,steht|estar de pie; estar situado|stand; be located
abhängen|hängt|depender; abhängen von + Dat|depend; abhängen von + Dat
beschreiben|beschreiben,beschreibt|describir|describe
funktionieren|funktioniert|funcionar|work; function
einschalten|eingeschaltet|encender; activar|switch on; activate
bleiben|bleibt,bleiben,blieben|permanecer; quedarse|remain; stay
prüfen|geprüft,prüfen|comprobar; examinar|check; examine
schließen|geschlossen,schließen|cerrar; inferir según contexto|close; infer depending on context
können|kann,kannst,können,konnte,könnte,könnten|poder; saber hacer|can; be able to
schicken|schicken|enviar|send
ansehen|ansieht|mirar; revisar, sich etwas ansehen|look at; inspect, sich etwas ansehen
anrufen|rufen|llamar por teléfono|telephone; call
wollen|wollte,will|querer|want
wissen|wissen,weiß|saber (un hecho)|know (a fact)
erinnern|erinnern,erinnert|recordar; sich erinnern an + Akk|remember; sich erinnern an + Akk
bemerken|bemerkte|advertir; notar|notice
ziehen|ziehen|tirar; eine Schlussfolgerung ziehen = sacar una conclusión|draw; eine Schlussfolgerung ziehen = draw a conclusion
verwenden|verwenden,verwendet|utilizar|use
diskutieren|diskutieren|discutir; debatir|discuss; debate
sollen|sollen,soll,sollten|deber por encargo/consejo|be supposed to; should
wählen|wählen|elegir|choose
unterscheiden|unterscheiden,unterschieden|distinguir|distinguish
berücksichtigen|berücksichtigen|tener en cuenta|take into account
beantworten|beantwortet,beantworten|responder una pregunta|answer a question
legen|gelegt,lege,legt|poner horizontalmente; colocar|lay; put
sagen|sagt|decir|say
stecken|gesteckt|meter; poner dentro|put; stick
finden|finde|encontrar|find
glauben|glaube|creer; glauben + Dat creer a alguien|believe; glauben + Dat believe someone
folgen|folgt|seguir; sich daraus ergeben según uso|follow; result depending on use
zeigen|zeigt,zeigen,gezeigt|mostrar|show
erwägen|erwägt|considerar; sopesar|consider; weigh up
sperren|sperren|cerrar; bloquear el acceso|close; block access
erwarten|erwarten|esperar (anticipar)|expect
befürchten|befürchten|temer|fear
erreichen|erreichen|alcanzar; llegar a|reach
berufen|berufen|sich berufen auf + Akk: invocar/apelar a|sich berufen auf + Akk: invoke/appeal to
vergleichen|verglichen|comparar|compare
beurteilen|beurteilen|evaluar; juzgar|assess; judge
untersuchen|untersucht,untersuchen|investigar; examinar|investigate; examine
betreffen|betroffen|afectar; concernir|affect; concern
vorhersagen|vorhersagen|predecir|predict
abbilden|abzubilden|representar; reproducir mediante un modelo|represent; model
liefern|liefern|entregar; producir resultados|deliver; produce results
beanspruchen|beansprucht|reivindicar; pretender ofrecer|claim; purport to offer
auftreten|auftritt|ocurrir; aparecer|occur; arise
verändern|verändert|cambiar; modificar|change; modify
benötigen|benötigten|necesitar|need
beweisen|beweist,beweisen|demostrar|prove
vorschlagen|vorgeschlagene|proponer|propose
bestimmen|bestimmt,bestimmen,bestimmte|determinar|determine
bestehen|besteht|existir; bestehen aus estar compuesto de|exist; bestehen aus consist of
spielen|spielt,spiele|jugar; desempeñar un papel|play; play a role
erlauben|erlaubt|permitir|allow
besitzen|besitzen|poseer|possess
klären|geklärt|aclarar|clarify
erklären|erklärt,erklären|explicar|explain
leisten|leistet|hacer; rendir; lograr|perform; accomplish
anfühlen|anfühlt|sich anfühlen sentirse (experiencia)|sich anfühlen feel (experience)
erhalten|erhalten|recibir; conservar|receive; retain
fragen|fragen,frage|preguntar|ask
bedeuten|bedeuten,bedeutet|significar|mean
ausdrücken|ausdrücken|expresar|express
ändern|ändern|cambiar|change
anregen|angeregt|inspirar; estimular|inspire; stimulate
auffordern|fordert|invitar/exhortar a hacer algo|call on; urge
behaupten|behauptet|afirmar; sostener|assert; claim
enthalten|enthält|contener|contain
gehören|gehört|pertenecer; corresponder|belong
verlangen|verlangt|exigir|require
bezeichnen|bezeichnet|designar|designate
zurechnen|zugerechnete|atribuir; imputar|attribute; impute
vollenden|vollendet,vollendende|completar; sich vollenden realizarse|complete; sich vollenden fulfil itself
substantivieren|substantivierte|sustantivar|nominalise
erweitern|erweiterte|ampliar|expand
auflösen|auflösen|descomponer; aquí convertir en otra estructura|break down; here convert into another structure
erleichtern|erleichtert|facilitar|make easier
ersetzen|ersetzt|sustituir|replace
angeben|angeben|indicar; especificar|state; specify
berichten|berichten|informar; comunicar|report
lassen|lässt,ließe|dejar; lässt sich + Inf posibilidad de pasiva|let; lässt sich + Inf passive possibility
erleben|erlebt|experimentar; vivir una experiencia|experience
festlegen|fest|fijar; determinar|set; determine
verhindern|verhindert|impedir|prevent
ausgeben|ausgegeben|ausgeben als presentar como|ausgeben als present as
annehmen|angenommen|suponer; Angenommen supongamos|assume; Angenommen suppose
fehlen|Fehlen|faltar; das Fehlen ausencia|be missing; das Fehlen absence
bilden|bilden|formar; constituir|form; constitute
erfassen|erfassen|captar; registrar|capture; record
darstellen|stellt|representar; constituir|represent; constitute
nehmen|genommen|tomar; für sich genommen considerado en sí|take; für sich genommen taken by itself
offenlegen|offenzulegen|hacer explícito; revelar|disclose; make explicit
feststehen|feststanden|estar fijado/establecido|be fixed/established
scheitern|scheitern|fracasar|fail
ausweisen|auszuweisen|indicar; explicitar|indicate; state explicitly
verzichten|verzichten|renunciar; verzichten auf + Akk|forgo; verzichten auf + Akk
tragen|getragen|llevar; aquí respaldar/sostener|carry; here support
arbeiten|gearbeitet,arbeiten|trabajar|work
aufstehen|auf|levantarse|get up
anfangen||comenzar|begin
geben|gebe|dar|give
stellen|stelle|colocar en posición vertical|place upright
`);
L(`
der Text|Texte,Text|texto|text
die Sprache|Sprache|lengua; idioma|language
das Wort|Wörter,Worte|palabra; Wörter entradas léxicas, Worte palabras en discurso|word; Wörter lexical items, Worte words in discourse
die Uhr|Uhr|reloj; hora en expresiones horarias|clock; time in time expressions
das Haus|Haus,Hause|casa; zu Hause en casa, nach Hause a casa|house; zu Hause at home, nach Hause homewards
das Wasser|Wasser|agua|water
das Brot|Brot|pan|bread
der Kaffee|Kaffee|café|coffee
die Arbeit|Arbeit|trabajo|work
die Zeit|Zeit|tiempo|time
das Zimmer|Zimmer|habitación|room
der Tisch|Tisch|mesa|table
der Stuhl|Stühle,Stuhl|silla|chair
das Bett|Bett|cama|bed
das Buch|Buch,Bücher|libro|book
der Stift|Stift|lápiz; bolígrafo|pencil; pen
das Fenster|Fenster|ventana|window
der Zug|Zug|tren|train
der Bahnhof|Bahnhof|estación ferroviaria|railway station
die Frage|Frage,Fragen|pregunta; cuestión|question
die Antwort|Antwort,Antworten|respuesta|answer
der Freund|Freund,Freunde|amigo|friend
die Idee|Idee|idea|idea
das Beispiel|Beispiel,Beispiele|ejemplo|example
die Freundin|Freundin|amiga|female friend
das Café|Café|café (local)|café (place)
das Museum|Museum|museo|museum
der Abend|Abend|tarde/noche|evening
der Tag|Tag,Tagen|día|day
die Geschichte|Geschichten,Geschichte|historia; relato|story
die Philosophie|Philosophie|filosofía|philosophy
die Übersetzung|Übersetzung|traducción|translation
der Euro|Euro|euro|euro
der Dank|Dank|agradecimiento; Vielen Dank muchas gracias|thanks; Vielen Dank thank you very much
der Unterschied|Unterschiede|diferencia|difference
das Nomen|Nomen|sustantivo|noun
der Artikel|Artikel|artículo|article
der Plural|Plural|plural|plural
der Fehler|Fehler|error|mistake
die Regel|Regel,Regeln|regla|rule
die Tasse|Tassen,Tasse|taza|cup
das Tageslicht|Tageslicht|luz del día|daylight
die Farbe|Farben|color|colour
die Lampe|Lampe|lámpara|lamp
das Licht|Licht|luz|light
die Beobachtung|Beobachtung|observación|observation
die Umgebung|Umgebung|entorno|surroundings
die Frau|Frau|mujer; señora en tratamiento|woman; Ms in address
die Heizung|Heizung|calefacción|heating
die Wohnung|Wohnung|vivienda; departamento|apartment
das Wohnzimmer|Wohnzimmer|sala de estar|living room
der Mittwoch|Mittwoch|miércoles|Wednesday
der Termin|Termin|cita; horario acordado|appointment; agreed time
die Hilfe|Hilfe|ayuda|help
der Gruß|Grüßen|saludo; Mit freundlichen Grüßen atentamente|greeting; Mit freundlichen Grüßen kind regards
die Studentin|Studentin|estudiante universitaria|female university student
die Musik|Musik|música|music
das Lernen|Lernen|aprender; el aprendizaje (infinitivo sustantivado)|learning (nominalised infinitive)
der Montag|Montag|lunes|Monday
der Dienstag|Dienstag|martes|Tuesday
der Test|Test|prueba|test
die Ursache|Ursache|causa|cause
die Schlussfolgerung|Schlussfolgerung|conclusión; inferencia|conclusion; inference
der Vergleich|Vergleich|comparación|comparison
der Begriff|Begriffe,Begriffen|concepto; término|concept; term
der Grund|Gründe|razón; fundamento|reason; basis
die Entscheidung|Entscheidung,Entscheidungen|decisión|decision
der Wunsch|Wunsch|deseo|wish
das Ziel|Ziel|objetivo|goal
die Woche|Woche|semana|week
das Kapitel|Kapiteln|capítulo|chapter
die Begründung|Begründung|justificación|justification
der Schlüssel|Schlüssel|llave|key
die Schwester|Schwester|hermana|sister
die Jackentasche|Jackentasche|bolsillo de la chaqueta|jacket pocket
die Jacke|Jacke|chaqueta|jacket
die Erinnerung|Erinnerung|recuerdo; memoria|memory
das Gefühl|Gefühl|sensación; sentimiento|feeling
die Sicherheit|Sicherheit|seguridad; certeza|certainty; security
der Beweis|Beweis|prueba; demostración|proof
der Stadtrat|Stadtrat|concejo municipal|city council
die Straße|Straße|calle|street
das Wochenende|Wochenende|fin de semana|weekend
das Auto|Autos|automóvil|car
der Befürworter|Befürworter|partidario; defensor|supporter
der Lärm|Lärm|ruido|noise
der Platz|Platz|espacio; lugar|space; place
der Fußgänger|Fußgänger|peatón|pedestrian
der Geschäftsinhaber|Geschäftsinhaber|comerciante; dueño de un negocio|business owner
der Kunde|Kunden|cliente; declinación débil|customer; weak noun
das Geschäft|Geschäfte,Geschäft|negocio; tienda|business; shop
die Seite|Seiten|lado; parte en una discusión|side; party in a debate
die Erfahrung|Erfahrungen|experiencia|experience
die Erprobung|Erprobung|prueba; ensayo|trial; testing
die Folge|Folgen|consecuencia|consequence
der Umsatz|Umsätze|ventas; volumen de negocio|sales; turnover
die Zugänglichkeit|Zugänglichkeit|accesibilidad|accessibility
die Aufenthaltsqualität|Aufenthaltsqualität|calidad de un lugar para permanecer allí|quality of a place for spending time
das Modell|Modell,Modelle,Modells|modelo|model
der Denkprozess|Denkprozess|proceso de pensamiento|thinking process
das Ergebnis|Ergebnisse|resultado|result
die Annahme|Annahmen|supuesto|assumption
die Beurteilung|Beurteilung|evaluación|assessment
die Art|Art|tipo; clase|kind; type
die Leistung|Leistung|desempeño; logro|performance; achievement
die Vorhersage|Vorhersage,Vorhersagen|predicción|prediction
die Beschreibung|Beschreibung|descripción|description
die Erklärung|Erklärung|explicación|explanation
die Bedingung|Bedingungen|condición|condition
der Prozess|Prozess|proceso|process
die Messung|Messungen|medición|measurement
die Übereinstimmung|Übereinstimmung|concordancia|agreement; fit
die Messgröße|Messgrößen|magnitud medida|measured quantity
der Mechanismus|Mechanismus|mecanismo|mechanism
die Auffassung|Auffassung|concepción; postura|conception; view
der Zustand|Zustände,Zuständen,Zustand|estado|state
die Beziehung|Beziehungen|relación|relation
die Wahrnehmung|Wahrnehmungen|percepción|perception
die Handlung|Handlungen|acción|action
die Überzeugung|Überzeugung|creencia; convicción|belief; conviction
der Träger|Träger|portador; soporte|bearer; substrate
die Rolle|Rolle|papel; función|role
der Zusammenhang|Zusammenhang|relación; contexto|connection; context
das System|Systeme,System|sistema|system
die Funktion|Funktionen|función|function
das Erleben|Erleben,Erlebens|experiencia vivida; vivencia|subjective experience
der Gegenstand|Gegenstand|objeto; tema|object; subject matter
die Diskussion|Diskussion|discusión|discussion
die Situation|Situation|situación|situation
das Gespräch|Gespräch|conversación|conversation
die Zugverbindung|Zugverbindung|conexión ferroviaria|rail connection
die Aussage|Aussage|afirmación; enunciado|statement
die Person|Person|persona|person
der Fahrplan|Fahrplan|horario de transporte|timetable
der Streit|Streit|discusión; disputa|dispute
die Formulierung|Formulierung|formulación|formulation
die Ungeduld|Ungeduld|impaciencia|impatience
die Aufgabe|Aufgabe|tarea; función|task; function
die Überlegung|Überlegung|reflexión; consideración|reflection; consideration
die Aufmerksamkeit|Aufmerksamkeit|atención|attention
der Sprachgebrauch|Sprachgebrauch|uso del lenguaje|language use
die Verwendung|Verwendungen|uso|use
der Ausdruck|Ausdrucks|expresión|expression
die Bedeutung|Bedeutung|significado|meaning
die Aufklärung|Aufklärung|Ilustración; emancipación intelectual en Kant|Enlightenment; intellectual emancipation in Kant
der Ausgang|Ausgang|salida|exit; emergence
der Mensch|Menschen|ser humano; nombre de declinación débil|human being; weak noun
die Unmündigkeit|Unmündigkeit|minoría de edad; aquí falta de autonomía intelectual|immaturity; here lack of intellectual autonomy
der Kommentar|Kommentar|comentario|commentary
der Originaltext|Originaltext|texto original|original text
der Satz|Satz|oración; proposición|sentence; proposition
der Genitiv|Genitiv|genitivo: caso de relación nominal|genitive: nominal relationship case
die Präposition|Präposition|preposición|preposition
der Dativ|Dativ|dativo: caso regido por aus aquí|dative: case governed by aus here
die Verantwortung|Verantwortung|responsabilidad|responsibility
die Angabe|Angabe|indicación; dato|specification; detail
das Lebensalter|Lebensalters|edad cronológica|chronological age
das Wahre|Wahre|lo verdadero; adjetivo sustantivado|the true; nominalised adjective
das Ganze|Ganze|el todo; totalidad|the whole
die Entwicklung|Entwicklung|desarrollo|development
das Wesen|Wesen|esencia; ser según contexto|essence; being depending on context
das Adjektiv|Adjektive|adjetivo|adjective
die Partizipialgruppe|Partizipialgruppe|grupo participial|participial phrase
das Verständnis|Verständnis|comprensión|understanding
der Relativsatz|Relativsatz|oración relativa|relative clause
die Umformung|Umformung|reformulación; transformación|reformulation; transformation
die Syntax|Syntax|sintaxis|syntax
die Interpretation|Interpretation|interpretación|interpretation
das Bewusstsein|Bewusstsein|conciencia|consciousness
das Phänomen|Phänomen|fenómeno|phenomenon
die Fähigkeit|Fähigkeit|capacidad|ability
die Information|Informationen|información|information
die Unterscheidung|Unterscheidung|distinción|distinction
die Theorie|Theorie|teoría|theory
der Erfolg|Erfolg|éxito; logro|success; achievement
die Erklärungsebene|Erklärungsebene|nivel explicativo|level of explanation
die Lösung|Lösung|solución|solution
das Vorhandensein|Vorhandensein|presencia; existencia|presence; existence
das Fehlen|Fehlen|ausencia|absence
das Verhalten|Verhalten|conducta; comportamiento|behaviour
der Teil|Teil|parte|part
die Auseinandersetzung|Auseinandersetzung|debate; confrontación argumentativa|debate; argumentative dispute
die Anpassung|Anpassung|ajuste; adaptación|fit; adjustment
die Bewährung|Bewährung|desempeño al ponerse a prueba|performance when put to the test
die Besonderheit|Besonderheiten|particularidad|peculiarity
die Stichprobe|Stichprobe|muestra|sample
die Anpassungsgüte|Anpassungsgüte|calidad de ajuste|goodness of fit
der Beleg|Beleg|prueba; evidencia documental/empírica|evidence; supporting instance
die Tragfähigkeit|Tragfähigkeit|solidez; capacidad de sostener una conclusión|soundness; capacity to support a conclusion
die Prüfung|Prüfung|comprobación; contrastación|testing; examination
die Auswertung|Auswertung|análisis; evaluación de resultados|analysis; evaluation of results
die Sichtung|Sichtung|examen; revisión inicial|inspection; initial review
die Unsicherheit|Unsicherheit|incertidumbre|uncertainty
die Erkenntnis|Erkenntnis|conocimiento; comprensión|knowledge; understanding
der Befund|Befunde|hallazgo; resultado observado|finding; observed result
die Stelle|Stelle|punto; lugar|point; place
die Untersuchung|Untersuchung|investigación|investigation
der Lehrer|Lehrer,Lehrers|profesor|teacher
der Hund|Hund|perro|dog
das Kind|Kind,Kinder|niño/a|child
`);
L(`
einfach|einfache,einfacher|simple; fácil; einfacher más fácil|simple; easy; einfacher easier
interessant||interesante|interesting
kurz|kurzen,kurze,kurzes,kurzen|breve; corto|short
warm|warmes|caliente; cálido|warm
klein||pequeño|small
offen||abierto|open
weit||lejos; hasta dónde según uso|far; how far depending on use
wahr||verdadero|true
müde||cansado|tired
schwierig|schwierige,schwierigeres|difícil; schwierigeres más difícil + terminación|difficult; schwierigeres more difficult + ending
gut|gut,gute,guten|bueno; bien|good; well
ähnlich|ähnliche|parecido|similar
neu|neues,neue,neuen|nuevo|new
besser|besser,besseren|mejor; comparativo de gut|better; comparative of gut
weiß||blanco (adjetivo); weiß también forma de wissen|white (adjective); weiß also a form of wissen
blau||azul|blue
anders||distinto; de otra manera|different; differently
genau|genauer|preciso; exactamente; genauer con mayor precisión|precise; exactly; genauer more precisely
geehrt|geehrte|estimado en saludo formal|honoured in formal address
richtig||correcto; adecuado|correct; proper
kalt||frío|cold
möglich|mögliche|posible|possible
freundlich|freundlichen|amable; cordial|friendly; cordial
sicher|sichere|seguro; cierto|certain; secure
gemeinsam|gemeinsamen|en conjunto; compartido|together; shared
persönlich|persönlichen|personal|personal
anspruchsvoll|anspruchsvollen|exigente|demanding
deutlich||claro; nítido|clear; vivid
falsch||incorrecto; falso|wrong; false
stark|starkes|fuerte; intenso|strong; intense
befristet|befristete|limitado en el tiempo|time-limited
systematisch||sistemático; sistemáticamente|systematic; systematically
durchschnittlich|durchschnittlichen|promedio; medio|average
unverändert||sin cambios|unchanged
einzeln|einzelne|individual; cada uno|individual; single
gleichermaßen||en la misma medida|equally; to the same extent
menschlich|menschliche|humano|human
zuverlässig||fiable; confiablemente|reliable; reliably
tatsächlich|tatsächlichen|efectivo; real; de hecho|actual; actually
kognitiv|kognitiven|cognitivo|cognitive
entscheidend||decisivo|decisive
zusätzlich|Zusätzliche,zusätzliche|adicional|additional
konkurrierend|konkurrierende|rival; competidor|competing
automatisch||automático; automáticamente|automatic; automatically
einzig|einzig,einzigen|único|only; sole
funktionalistisch|funktionalistische|funcionalista|functionalist
mental|mentale,mentalen|mental|mental
groß|größeren|grande; größeren mayor + terminación|large; größeren larger + ending
unterschiedlich|unterschiedliche|diferente|different
physisch|physische|físico|physical
subjektiv|subjektive,subjektiv,subjektiven|subjetivo; subjetivamente|subjective; subjectively
vollständig||completo; completamente|complete; completely
philosophisch|philosophischer,philosophischen|filosófico|philosophical
gleich||igual|same; equal
didaktisch|didaktische,Didaktischer|didáctico|didactic; instructional
konkret|konkrete|concreto|concrete
beliebig||arbitrario; a voluntad|arbitrary; at will
unwichtig||sin importancia|unimportant
grammatisch||gramatical; gramaticalmente|grammatical; grammatically
abstrakt|abstrakte|abstracto|abstract
verschuldet|verschuldeten|debido a la propia responsabilidad|self-incurred
bloß|bloße|mero|mere
zweite|zweiten|segundo; ordinal declinado|second; declined ordinal
erklärungsbedürftig||que requiere explicación|requiring explanation
bestimmt|bestimmte|determinado; particular|particular; specific
vorschnell||precipitadamente|prematurely
intern|internen|interno|internal
unmittelbar||directamente; inmediato|directly; immediate
erforderlich||necesario; requerido|required
beobachtbar|beobachtbarem|observable|observable
wesentlich|wesentlichen|esencial; sustancial|essential; substantial
vorhanden|vorhandene|existente; disponible|existing; available
flexibel|flexibler|flexible; flexibler más flexible|flexible; flexibler more flexible
leicht|leichter|fácil; leichter más fácilmente|easy; leichter more easily
verlässlich|verlässliche|fiable|reliable
hoch|hohe|alto; elevado|high
hinreichend|hinreichenden|suficiente|sufficient
überzeugend|überzeugende|convincente|convincing
präzise||preciso; con precisión|precise; precisely
sichtbar||visible|visible
vorliegend|vorliegenden|disponible; presente|available; at hand
weiter|weitere|adicional; ulterior|further; additional
früh||temprano|early
nebenan||al lado; en el lugar contiguo|next door
wenig|wenig,weniger|poco; weniger menos|little; weniger less
viel|viele,viel,vielen|mucho; viele muchos (plural)|much; viele many (plural)
mehr||más; comparativo de viel|more; comparative of viel
alle|alles,alle|todo; todos|all; everything
anderer|andere,anderen|otro; distinto|other; different
beide|beide|ambos|both
einige|einige,einigen|algunos; determinante/pronombre plural|some; plural determiner/pronoun
mehrere|mehrere,mehreren|varios|several
sämtlich|sämtliche|todos sin excepción|all without exception
derselbe|dieselbe,dieselben|el/la mismo/a; los mismos|the same
jeder|jede,jedes,jeden|cada|each; every
zuerst||primero|first
danach||después|afterwards
jetzt||ahora|now
heute||hoy|today
gestern||ayer|yesterday
morgen||mañana|tomorrow
gern||con gusto; expresa que gusta una actividad|gladly; expresses liking an activity
zusammen||juntos|together
dann||entonces; después|then
manchmal||a veces|sometimes
so||así; de ese modo|so; in this way
also||por tanto; así pues|therefore
bereits||ya|already
gerade||precisamente; en este momento|precisely; right now
sehr||muy|very
daraus||de ello; de ahí|from this
bisher||hasta ahora|so far
jedoch||sin embargo|however
dabei||al hacerlo; en ese contexto|in doing so; in that context
daher||por ello|therefore
außerdem||además|in addition
weshalb||por qué; razón por la que|why; the reason why
etwa||por ejemplo; aproximadamente|for example; approximately
allerdings||sin embargo; eso sí|however
dadurch||por ello; mediante ello|thereby
woraus||de qué; de lo que|from what
zumindest||al menos|at least
damit||con ello; para que según estructura|with this; so that depending on structure
zunächst||primero; en primer término|first; initially
letztlich||en último término|ultimately
dagegen||en cambio|in contrast
lediglich||solamente|merely
dazu||para ello; además|for this; in addition
außerhalb||fuera de + genitivo|outside + genitive
zugrunde||a la base; zugrunde liegen subyacer|underlying; zugrunde liegen underlie
erst||solo entonces; recién|only then; only after
vielmehr||más bien|rather
hier||aquí|here
dort||allí|there
wieder||otra vez|again
oft||a menudo|often
vielleicht||quizás|perhaps
deshalb||por eso|therefore
hingegen||en cambio|in contrast
trotzdem||aun así|nevertheless
`);
L(`
ich|Ich,mich,mir|yo; mich acusativo, mir dativo|I; mich accusative, mir dative
du|Du,dich,dir|tú; dich acusativo, dir dativo|you informal singular; dich accusative, dir dative
er|Er,ihn,ihm|él; ihn acusativo, ihm dativo|he; ihn accusative, ihm dative
sie|sie|ella/ellos; forma según contexto|she/they; form depends on context
es|Es|ello; referente neutro/sujeto impersonal|it; neuter reference/impersonal subject
wir|Wir,uns|nosotros; uns acusativo/dativo|we; uns accusative/dative
ihr|ihr|vosotros; su (de ella/ellos) según contexto|you informal plural; her/their depending on context
Sie|Sie,Ihnen|usted(es) formal|formal you
man||uno; sujeto general|one; general subject
jemand|jemand,jemanden|alguien; jemanden acusativo|someone; jemanden accusative
sich||se; reflexivo de tercera persona|third-person reflexive
wer|wer|quién; sujeto|who; subject
was|Was|qué|what
wann||cuándo|when
wo||dónde|where
wie|Wie|cómo|how
welcher|welche,welches,welchen,welcher|qué/cuál; declina según caso/género/número|which; declines for case/gender/number
dieser|dieser,diesem,dieses,diese|este; declina según caso/género/número|this; declines for case/gender/number
mein|mein,meine,meinen,meinem,meiner|mi; mío, declina según lo poseído|my; mine, declines with possessed noun
sein|seine,seiner|su de él/ello; determinante posesivo|his/its; possessive determiner
ihr|ihre,Ihre|su de ella/ellos; Ihre formal|her/their; Ihre formal
kein|keine,keinen,kein|ningún; no un; negación nominal|no; not a; nominal negation
der|der,den,dem,des|artículo definido/relativo masculino; forma según caso|masculine definite article/relative; form depends on case
die|die|artículo/relativo femenino o plural|feminine or plural article/relative
das|das|artículo/relativo neutro|neuter article/relative
ein|ein,eine,einen,einem,einer,eines|artículo indefinido declinado; no tiene plural|declined indefinite article; no plural
dessen||cuyo; genitivo relativo/demostrativo|whose; relative/demonstrative genitive
und||y|and
oder||o|or
aber||pero|but
sondern||sino; corrección tras negación|but rather; correction after negation
weil||porque; subordinada|because; subordinate clause
dass||que; contenido, subordinada|that; content, subordinate clause
wenn||si/cuando; condición o repetición|if/when; condition or repetition
ob||si; pregunta indirecta|whether; indirect question
obwohl||aunque|although
falls||en caso de que; si|in case; if
bevor||antes de que|before
während||mientras; durante + genitivo|while; during + genitive
als||cuando; como; que en comparación según contexto|when; as; than in comparison depending on context
nicht||no (negación)|not
nur||solo; solamente|only
auch||también|also; too
noch||aún; todavía; otro más según contexto|still; yet; another depending on context
ja||sí|yes
nein||no (respuesta)|no (answer)
bitte||por favor|please
selbst||mismo; incluso|self; even
allein||solo; por sí solo|alone; by itself
je||cuanto (comparación correlativa)|the (correlative comparison)
desto||tanto (comparación correlativa)|the (correlative comparison)
weder||ni; weder…noch ni…ni|neither; weder…noch neither…nor
zu||a; en; partícula de infinitivo; demasiado según contexto|to; at; infinitive marker; too depending on context
zur||al/a la: zu der|to the: zu der
zum||al: zu dem|to the: zu dem
in||en; dentro de; hacia|in; into
im||en el: in dem|in the: in dem
ins||hacia/dentro del: in das|into the: in das
an||en/junto a; en contacto; prefijo según contexto|at/on; in contact; prefix depending on context
am||en el: an dem; con fecha/hora por/en|at/on the: an dem; with time at/on
auf||sobre; hacia encima; prefijo según contexto|on; onto; prefix depending on context
neben||al lado de + Dat ubicación / Akk destino|beside + Dat location / Akk destination
vor||delante de; antes de|in front of; before
über||sobre; acerca de|over; about
mit||con + Dat|with + Dat
nach||hacia; después de + Dat|to; after + Dat
von||de; por + Dat|of; by + Dat
vom||del: von dem|of/from the: von dem
bei||junto a; durante + Dat|at; during + Dat
beim||en/al: bei dem|at/while: bei dem
seit||desde/hace (duración vigente) + Dat|since/for (ongoing duration) + Dat
für||para + Akk|for + Akk
ohne||sin + Akk; ohne…zu sin hacer|without + Akk; ohne…zu without doing
um||a (hora); alrededor de; um…zu para|at (time); around; um…zu in order to
aus||de; desde dentro + Dat|from; out of + Dat
ab||desde; a partir de (hora)|from (time) onwards
zwischen||entre; Dat ubicación / Akk destino|between; Dat location / Akk destination
wegen||por; a causa de + Gen|because of + Gen
anhand||a partir de; mediante + Gen|on the basis of; by means of + Gen
sieben||siete|seven
acht||ocho|eight
neun||nueve|nine
zehn||diez|ten
zwölf||doce|twelve
vierzehn||catorce|fourteen
zwei||dos|two
drei||tres|three
Deutsch||alemán (idioma)|German (language)
Spanisch||español (idioma)|Spanish (language)
Englisch||inglés (idioma)|English (language)
`);
L(`
deutsch|deutsche|alemán (adjetivo)|German (adjective)
etwas||algo; un poco|something; a little
unter||debajo de; bajo; Dat ubicación/Akk destino|under; Dat location/Akk destination
durch||por; a través de; mediante + Akk|through; by means of + Akk
die Daten|Daten|datos; plural|data; plural
würde|würde,würden|auxiliar Konjunktiv II: würde + infinitivo|Konjunktiv II auxiliary: würde + infinitive
lernen|lernst|aprender|learn
der Mann|Mann|hombre|man
ihr|ihrem,ihrer|su de ella/ellos; posesivo, Dat/Gen según forma|her/their; possessive, Dat/Gen according to form
mein|meines|mi; posesivo Gen masculino/neutro|my; masculine/neuter Gen possessive
sollen|sollte|deber; sollte aquí consejo/hipótesis|should; sollte here advice/hypothesis
`);
surfaceIndex.set('sie',G('sie','ella/ellos; forma según contexto','she/they; form depends on context','sie'));
const properNames={Gabriel:['Gabriel; nombre propio','Gabriel; proper name'],Chile:['Chile; país, nombre propio','Chile; country, proper name'],Santiago:['Santiago; ciudad, nombre propio','Santiago; city, proper name'],Anna:['Anna; nombre propio','Anna; proper name'],Berlin:['Berlín; ciudad, nombre propio','Berlin; city, proper name'],Weber:['Weber; apellido de la destinataria ficticia','Weber; fictional recipient’s surname'],Daniel:['Daniel; nombre propio','Daniel; proper name'],Rojas:['Rojas; apellido','Rojas; surname'],Lea:['Lea; nombre propio','Lea; proper name'],Amir:['Amir; nombre propio','Amir; proper name'],Wittgenstein:['Wittgenstein; filósofo, nombre propio','Wittgenstein; philosopher, proper name'],Hegel:['Hegel; filósofo, nombre propio','Hegel; philosopher, proper name']};
for(const [de,[es,en]]of Object.entries(properNames)){const g={...G(de,es,en,de),kind:'proper-name',dictionary:false};surfaceIndex.set(de.toLowerCase(),g);surfaceIndex.set((de+'s').toLowerCase(),g);lexicon.push(g);}
const foreign={...G('house','house = casa en inglés; comparación interlingüística','house is English; used for cross-language comparison','house'),kind:'foreign-word',dictionary:false};surfaceIndex.set('house',foreign);lexicon.push(foreign);
const mins={
'reading-a1-1':9,'reading-a1-2':8,'reading-a1-3':8,'reading-a1-4':8,
'reading-a2-1':8,'reading-a2-2':9,'reading-a2-3':9,'reading-a2-4':9,
'reading-b1-1':12,'reading-b1-2':12,'reading-b1-3':12,'reading-b1-4':9,
'reading-b2-1':13,'reading-b2-2':14,'reading-b2-3':14,'reading-b2-4':15,
'reading-c1-1':14,'reading-c1-2':14,'reading-c1-3':17,'reading-c1-4':18
};
const grammars={
'reading-a1-1':['present','word-order','accusative','adjective-endings'],
'reading-a1-2':['present','possessives','prepositions','numbers'],
'reading-a1-3':['present','accusative','two-way-prepositions','possessives'],
'reading-a1-4':['present','questions','negation','possessives','prepositions'],
'reading-a2-1':['perfect','past','possessives','two-way-prepositions','connectors'],
'reading-a2-2':['modal-verbs','questions','accusative','adjective-endings','demonstratives'],
'reading-a2-3':['subordinate','modal-verbs','adjective-endings','comparative','demonstratives'],
'reading-a2-4':['perfect','subordinate','possessives','two-way-prepositions','adjective-endings'],
'reading-b1-1':['perfect','relative','konjunktiv2','reflexive','subordinate','adjective-endings'],
'reading-b1-2':['past','subordinate','konjunktiv2','reflexive','comparative','adjective-endings'],
'reading-b1-3':['subordinate','infinitive','passive','comparative','adjective-endings'],
'reading-b1-4':['perfect','past','subordinate','possessives','two-way-prepositions','adjective-endings'],
'reading-b2-1':['relative','passive','konjunktiv2','infinitive','reflexive','connectors','adjective-endings'],
'reading-b2-2':['passive','infinitive','participles','genitive','adjective-endings','subordinate'],
'reading-b2-3':['passive','genitive','infinitive','reflexive','participles','subordinate'],
'reading-b2-4':['passive','perfect','infinitive','konjunktiv1','konjunktiv2','subordinate'],
'reading-c1-1':['genitive','noun-declension','adjective-endings','participles','subordinate'],
'reading-c1-2':['participles','adjective-endings','noun-declension','relative','reflexive'],
'reading-c1-3':['subordinate','passive','infinitive','konjunktiv2','genitive','noun-declension','connectors'],
'reading-c1-4':['comparative','genitive','participles','infinitive','konjunktiv2','passive','subordinate']
};
const intros={
'reading-a1-1':['A1 por tema, U09 por forma: einen kurzen Text requiere declinación. Lee palabras frecuentes, adjetivos y V2.','A1 by topic, U09 by form: einen kurzen Text requires adjective declension. Read frequent words, adjectives and V2.'],
'reading-a1-2':['Requiere posesivos y dativo: Ihr Kaffee / zur Arbeit. Los números y zu Hause se recuperan como expresiones aprendidas.','Requires possessives and dative: Ihr Kaffee / zur Arbeit. Numbers and zu Hause are recalled as learned expressions.'],
'reading-a1-3':['Requiere dativo espacial y posesivo: auf dem Tisch / auf einem Stuhl / Mein Zimmer.','Requires locative dative and possessives: auf dem Tisch / auf einem Stuhl / Mein Zimmer.'],
'reading-a1-4':['Pregunta elemental con posesivo y régimen temático: über das Buch + Akk.','Elementary question with possessive and topical government: über das Buch + Akk.'],
'reading-a2-1':['Requiere Perfekt, war, posesivos y destino espacial. Reconstruye auxiliares y secuencia antes de traducir.','Requires Perfekt, war, possessives and spatial destination. Restore auxiliaries and sequence before translating.'],
'reading-a2-2':['Requiere modal, determinantes y adjetivos atributivos. möchten/darf se distinguen por deseo y permiso.','Requires modals, determiners and attributive adjectives. Distinguish möchten/darf as desire and permission.'],
'reading-a2-3':['La causa y condición ya se enseñaron en U07; U09 añade neues/deutsche y besser. house se identifica como palabra inglesa.','Reason and condition were taught in U07; U09 adds neues/deutsche and besser. house is identified as an English word.'],
'reading-a2-4':['Distingue apariencia y objeto: sehen…aus es aussehen, hängt…ab es abhängen. Perfekt: geworden.','Distinguish appearance and object: sehen…aus is aussehen, hängt…ab is abhängen. Perfekt: geworden.'],
'reading-b1-1':['Reúne relativa, reflexivo, Perfekt y cortesía. Sie formal se diferencia de sie referido a la calefacción.','Combines relative clauses, reflexives, Perfekt and politeness. Formal Sie differs from sie referring to the heating.'],
'reading-b1-2':['Compara hechos en Präteritum con propuesta en müsste; sich erinnern an + Akk requiere U12.','Compare facts in Präteritum with a proposal in müsste; sich erinnern an + Akk requires U12.'],
'reading-b1-3':['Objetivo infinitivo y pasiva modal: über einen Text zu sprechen / beantwortet werden soll.','Infinitive goal and modal passive: über einen Text zu sprechen / beantwortet werden soll.'],
'reading-b1-4':['Caso, Perfekt y adjetivo starkes sostienen el contraste entre certeza y prueba; no introduce aún contrafácticos.','Case, Perfekt and adjective starkes support the contrast between certainty and proof; it does not yet introduce counterfactuals.'],
'reading-b2-1':['Integra relativa, pasiva, hipótesis y coordinación no solo…sino también. Kunden es plural de un nombre débil.','Integrates relatives, passive, hypotheses and not only…but also. Kunden is the plural of a weak noun.'],
'reading-b2-2':['U14 permite descomprimir der benötigten Zeit y konkurrierende Modelle. Predicción y explicación son objetivos diferentes.','U14 allows expansion of der benötigten Zeit and konkurrierende Modelle. Prediction and explanation are different goals.'],
'reading-b2-3':['Los nombres abstractos y el genitivo anhand ihrer Beziehungen requieren glosas; la sintaxis reutiliza pasiva e interrogativas indirectas.','Abstract nouns and genitive anhand ihrer Beziehungen need glosses; syntax reuses passive and indirect questions.'],
'reading-b2-4':['La paráfrasis original combina discurso referido (seien), hipótesis (wäre) y uso contextual de weiß.','The original paraphrase combines reported speech (seien), hypothesis (wäre) and contextual use of weiß.'],
'reading-c1-1':['Cita histórica breve con comentario original: genitivo débil des Menschen y atributo verschuldeten. La complejidad conceptual no mide la longitud.','Short historical quotation with original commentary: weak genitive des Menschen and modifier verschuldeten. Conceptual complexity is not measured by length.'],
'reading-c1-2':['U14 enseña sustantivación y atributo participial ampliado; convierte el grupo en relativa antes de interpretar.','U14 teaches nominalisation and expanded participial modifiers; convert the phrase to a relative clause before interpreting.'],
'reading-c1-3':['Integra definición de fenómeno, alcance de negación e hipótesis: lässt/ließe sich + infinitivo expresan posibilidad pasiva.','Integrates definition of the phenomenon, negation scope and hypothesis: lässt/ließe sich + infinitive express passive possibility.'],
'reading-c1-4':['U18 enseña je…desto; la lectura integra además atributos participiales, pasiva e hipótesis metodológica.','U18 teaches je…desto; the reading also integrates participial modifiers, passive and methodological hypotheses.']
};
const overrideLemmas={
'reading-unit-04':{stehe:'aufstehen',fange:'anfangen',auf:'reading-prefix-auf-aufstehen',an:'reading-prefix-an-anfangen'},
'reading-unit-05':{stelle:'stellen'},
'reading-unit-07':{frage:'fragen',weiß:'wissen'},
'reading-a2-3':{besser:'gut'},
'reading-a2-4':{sehen:'aussehen',hängt:'abhängen',aus:'aussehen',ab:'abhängen',weiß:'weiß'},
'reading-b1-1':{rufen:'anrufen',an:'anrufen'},
'reading-b1-2':{besser:'gut',einfacher:'einfach',besseren:'gut'},
'reading-b1-3':{schwierigeres:'schwierig'},
'reading-b2-1':{weniger:'wenig',mehr:'viel',genauer:'genau'},
'reading-b2-2':{vorhersagen:'vorhersagen'},
'reading-b2-4':{weiß:'wissen',fragen:'fragen',fordert:'auffordern',auf:'auffordern',seien:'sein'},
'reading-c1-3':{legt:'festlegen',fest:'festlegen'},
'reading-c1-4':{stellt:'darstellen',dar:'darstellen',flexibler:'flexibel',leichter:'leicht',genommen:'nehmen',liegenden:'liegen'}
};
const referenceLexemes=[
G('aussehen','parecer; verse de cierta manera: sehen…aus','look; appear: sehen…aus','aussehen'),
G('festlegen','fijar; determinar: legt…fest','set; determine: legt…fest','festlegen'),
G('darstellen','representar; constituir: stellt…dar','represent; constitute: stellt…dar','darstellen')
];
referenceLexemes.forEach(g=>lexicon.push(g));
const all=[...window.DeutschData.readings,...bridges];
const curated=window.DeutschData.vocabulary;
const curatedFor=new Map(curated.map(v=>[v.de.replace(/^(der|die|das|sich) /,'').split(' / ')[0].replace(/ \(.*\)/,''),v.id]));
const functionIds={ich:'pron-ich',mich:'pron-ich',mir:'pron-ich',du:'pron-du',dich:'pron-du',dir:'pron-du',er:'pron-er',ihn:'pron-er',ihm:'pron-er',es:'pron-es',wir:'pron-wir',uns:'pron-wir',sich:'pron-sich',man:'pron-man',jemand:'pron-jemand',jemanden:'pron-jemand',wer:'pron-wer',was:'pron-was',nicht:'particle-nicht'};
const readingSurfaceLemmas={};
for(const r of all){
 const words=[...new Set(r.paragraphs.map(p=>p.de).join(' ').match(/[\p{L}\p{M}]+(?:[-’'][\p{L}\p{M}]+)*/gu)||[])];
 if(!readingSupport[r.id])readingSupport[r.id]={minUnit:'unit-'+String(mins[r.id]).padStart(2,'0'),grammarIds:grammars[r.id],intro:B(...intros[r.id]),teachingGlossary:[]};
 const gathered=[...readingSupport[r.id].teachingGlossary];const map={};const exact={};
 for(const word of words){const f=word.toLowerCase();let g=surfaceIndex.get(f);let lemma=overrideLemmas[r.id]?.[f]||g?.lemma;
   if(lemma==='weiß'&&r.id==='reading-a2-4')g=lexicon.find(x=>x.de==='weiß');
   if(lemma==='wissen'&&['reading-b2-4','reading-unit-07'].includes(r.id))g=lexicon.find(x=>x.de==='wissen');
   if(overrideLemmas[r.id]?.[f])g=lexicon.find(x=>x.lemma===lemma)||g;
   if(word==='Lernen'){g=lexicon.find(x=>x.de==='das Lernen');lemma='Lernen';}
   if(word==='Deutsch'){g=G('Deutsch','alemán (idioma)','German (language)','Deutsch');lemma='Deutsch';}
   if(!g)continue;
   let id=functionIds[f]||curatedFor.get(lemma)||lemma;
   if((r.id==='reading-unit-07'&&f==='frage')||(r.id==='reading-b2-4'&&f==='fragen')){id='dict-15497623ef69ba44';g=G(word,'preguntar','ask','fragen');}
   if(r.id==='reading-b1-2'&&word==='Lernen'){id='dict-4b2c91818fa849c5';g=G('das Lernen','el aprendizaje; infinitivo sustantivado','learning; nominalised infinitive','Lernen');}
   if(r.id==='reading-b2-3'&&f==='erhalten'){id='dict-0438814afb2f84b7';g=G(word,'recibir; aquí recibir una respuesta','receive; here receive an answer','erhalten');}
   if(r.id==='reading-b2-3'&&f==='bestimmt'){id='dict-b89dabc8a7caa7a1';g=G(word,'determinado; participio en wird bestimmt: se determina','determined; participle in wird bestimmt: is determined','bestimmen');}
   if(r.id==='reading-c1-1'&&word==='Menschen'){id='dict-3183a0b77355cfb1';g=G('der Mensch','ser humano; aquí genitivo débil des Menschen','human being; here weak genitive des Menschen','Mensch');}
   if(['alle','alles'].includes(f)){id='reading-determiner-all';g=G(word,'todo; todos; determinante/pronombre, no agotado','all; everything; determiner/pronoun, not used up','all');}
   if(f==='ab'&&r.id==='reading-b1-1'){id='dict-bbce57da9492c437';g=G(word,'a partir de; preposición de tiempo','from…onwards; time preposition','ab');}
   if(f==='gerade'&&['reading-b1-3','reading-c1-3'].includes(r.id)){id='dict-fd5bbc53ff0c5e8e';g=G(word,r.id==='reading-c1-3'?'precisamente; adverbio focal':'en este momento; adverbio temporal',r.id==='reading-c1-3'?'precisely; focus adverb':'currently; time adverb','gerade');}

   if(r.id==='reading-unit-04'&&f==='auf'){id='reading-prefix-auf-aufstehen';g=G(word,'prefijo separable de aufstehen: levantarse','separable prefix of aufstehen: get up','auf');}
   if(r.id==='reading-unit-04'&&f==='an'){id='reading-prefix-an-anfangen';g=G(word,'prefijo separable de anfangen: empezar','separable prefix of anfangen: begin','an');}
   if(f==='damit'&&['reading-b2-1','reading-b2-3'].includes(r.id)){id='reading-adverb-damit';g=G(word,'con ello; de ese modo (adverbio, no para que)','with this; thereby (adverb, not so that)','damit');}
   if(f==='zu'&&r.id==='reading-a2-2'){id='reading-adverb-zu';g=G(word,'demasiado: zu schwierig demasiado difícil','too: zu schwierig too difficult','zu');}
   if(f==='zu'&&['reading-b1-3','reading-b2-1','reading-b2-2','reading-c1-3','reading-c1-4'].includes(r.id)){id='reading-particle-zu';g=G(word,'marcador de infinitivo; no es aquí preposición','infinitive marker; not a preposition here','zu');}
   if(f==='als'&&r.id==='reading-c1-3'){id='reading-particle-als';g=G(word,'como; en función de (aquí no cuando)','as; in the role of (not when here)','als');}
   if(['sein','seine','seiner'].includes(f)&&f!=='sein'){
      id='reading-possessive-sein';g=G(word,'su de él/ello; posesivo, no forma verbal','his/its; possessive, not a verb form','sein');
   }
   if(['ihr','ihre','ihrem','ihrer'].includes(f)){
      if(r.id==='reading-b1-4'&&f==='ihr'){id='pron-sie-singular';g=G(word,'a ella; Dat de sie, aquí creerle a la hermana','her; Dat of sie, here believing the sister','sie');}
      else {id=word==='Ihre'&&r.id==='reading-b1-1'?'reading-possessive-Ihr':'reading-possessive-ihr';g=G(word,id==='reading-possessive-Ihr'?'su de usted/ustedes; posesivo formal':'su de ella/ellos; posesivo',id==='reading-possessive-Ihr'?'formal your; possessive':'her/their; possessive','ihr');}
   }
   if(f==='sie'){g=G(word,word==='Sie'&&r.id==='reading-b1-1'?'usted/ustedes formal':'ella/ellos según contexto',word==='Sie'&&r.id==='reading-b1-1'?'formal you':'she/they depending on context','sie');}

   map[f]=id;exact[word]=id;
   if(g.kind==='proper-name'||g.kind==='foreign-word')g={...g,de:word};
   if(!gathered.some(x=>x.de===g.de))gathered.push(g);
 }
 // Context resolves grammatical homographs; exact surface has priority over lowercase.
 if(r.id==='reading-b1-1'){exact.Sie='pron-sie-formal';map.sie='pron-sie-singular';exact.sie='pron-sie-singular';exact.Ihre='reading-possessive-Ihr';}
 const pluralSie=['reading-a2-4','reading-b1-3','reading-b2-2'].includes(r.id);
 if(map.sie){const sid=pluralSie?'pron-sie-plural':'pron-sie-singular';map.sie=sid;for(const w of words)if(w.toLowerCase()==='sie')exact[w]=sid;if(r.id==='reading-b1-1')exact.Sie='pron-sie-formal';}
 // ihr in these texts is possessive or dative she, not subject you plural.
 if(r.id==='reading-b1-4'){map.ihr='pron-sie-singular';exact.ihr='pron-sie-singular';}
 if(r.id==='reading-a2-4'){map.weiß='weiß';exact.weiß='weiß';}
 readingSupport[r.id].teachingGlossary=gathered;
 readingLemmas[r.id]=map;readingSurfaceLemmas[r.id]=exact;
}
// Add only absent dictionary headwords plus explicit article reference entries.
require(dir+'/data/dictionary.js');
const dictionaryHeads=new Set(window.DeutschData.dictionary.map(x=>x.lemma.toLowerCase()));
const curatedHeads=new Set([...curatedFor.keys()].map(x=>x.toLowerCase()));
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/ß/g,'ss').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const supplemental=[];const seen=new Set();
const extraVerbs=new Set(['zurechnen','substantivieren','feststehen']);
const extraAdjectives=new Set(['geehrt','anspruchsvoll','befristet','systematisch','konkurrierend','funktionalistisch','subjektiv','erklärungsbedürftig','intern','beobachtbar','hinreichend','vorliegend','weiter','anderer']);
const extraPronouns=new Set(['derselbe','jeder','ihr','einige']);
const extraPrepositions=new Set(['am','vom','beim']);
const extraAdverbs=new Set(['woraus']);

for(const g of lexicon){const k=g.lemma.toLowerCase();if(seen.has(k)||(['der','die','das'].includes(k)))continue;seen.add(k);if(!g.kind&&(dictionaryHeads.has(k)||curatedHeads.has(k)))continue;
 const noun=/^(der|die|das) /.test(g.de);let category=g.kind==='proper-name'?'nombres-propios':g.kind==='foreign-word'?'otros':noun?'sustantivos':/^\p{Lu}/u.test(g.lemma)?'sustantivos':'otros';
 if(extraVerbs.has(g.lemma))category='verbos';else if(extraAdjectives.has(g.lemma))category='adjetivos';else if(extraPronouns.has(g.lemma))category='pronombres';else if(extraPrepositions.has(g.lemma))category='preposiciones';else if(extraAdverbs.has(g.lemma))category='adverbios';
 const aliases=[...surfaceIndex.entries()].filter(([,v])=>v.lemma===g.lemma).map(([f])=>f);
 supplemental.push({id:'reading-lex-'+slug(g.lemma),de:g.de,lemma:g.lemma,es:g.es,en:g.en,category,aliases,note:'Glosa didáctica original para las lecturas. No es una entrada importada ni una clasificación MCER.',noteEn:'Original teaching gloss for the readings. Not an imported entry or a CEFR classification.',source:{name:'Deutsch Dicht · glosa didáctica original',kind:'original-teaching-gloss'},...(g.kind?{contextualKind:g.kind}:{}),...(noun?{article:g.de.split(' ')[0]}:{})});
}
const articles=[{id:'reading-article-der',de:'der',lemma:'der',es:'el; artículo definido masculino (Nom); den Akk, dem Dat, des Gen',en:'the; masculine definite article (Nom); den Akk, dem Dat, des Gen',category:'articulos',aliases:['der','den','dem','des']},{id:'reading-article-die',de:'die',lemma:'die',es:'la/los/las; femenino o plural; der Dat/Gen femenino, den Dat plural',en:'the; feminine or plural; der feminine Dat/Gen, den plural Dat',category:'articulos',aliases:['die','der','den']},{id:'reading-article-das',de:'das',lemma:'das',es:'el/la neutro; Nom/Akk das, Dat dem, Gen des',en:'the neuter; Nom/Akk das, Dat dem, Gen des',category:'articulos',aliases:['das','dem','des']}];
for(const a of articles){a.source={name:'Deutsch Dicht · gramática de referencia',kind:'original-teaching-gloss'};supplemental.push(a);}
const possessives=[
{id:'reading-possessive-ihr',de:'ihr / ihre',lemma:'ihr',es:'su; suyo de ella/ellos (posesivo); la terminación concuerda con lo poseído',en:'her/their (possessive); ending agrees with the possessed noun',category:'pronombres',aliases:['ihr','ihre','ihren','ihrem','ihrer','ihres']},
{id:'reading-possessive-Ihr',de:'Ihr / Ihre',lemma:'Ihr',es:'su; suyo de usted/ustedes (posesivo formal); mayúscula de cortesía',en:'formal your (possessive); capitalised for formal address',category:'pronombres',aliases:['Ihr','Ihre','Ihren','Ihrem','Ihrer','Ihres']},
{id:'reading-possessive-sein',de:'sein / seine',lemma:'sein',es:'su; suyo de él/ello (posesivo); la terminación concuerda con lo poseído',en:'his/its (possessive); ending agrees with the possessed noun',category:'pronombres',aliases:['sein','seine','seinen','seinem','seiner','seines']}
];
const contexts=[
{id:'reading-determiner-all',de:'all / alle / alles',lemma:'all',es:'todo; todos; alles todo (pronombre), alle todos (plural); se declina según uso',en:'all; everything; alles everything (pronoun), alle all (plural); declines with usage',category:'pronombres',aliases:['all','alle','alles','allen','aller']},
{id:'reading-prefix-auf-aufstehen',de:'auf · prefijo de aufstehen',lemma:'auf',es:'prefijo separable de aufstehen: levantarse; no es preposición en esta frase',en:'separable prefix of aufstehen: get up; not a preposition in this sentence',category:'partículas',aliases:['auf']},
{id:'reading-prefix-an-anfangen',de:'an · prefijo de anfangen',lemma:'an',es:'prefijo separable de anfangen: empezar; no es preposición en esta frase',en:'separable prefix of anfangen: begin; not a preposition in this sentence',category:'partículas',aliases:['an']},
{id:'reading-adverb-damit',de:'damit',lemma:'damit',es:'con ello; de ese modo (adverbio pronominal)',en:'with this; thereby (pronominal adverb)',category:'adverbios',aliases:['damit']},
{id:'reading-adverb-zu',de:'zu',lemma:'zu',es:'demasiado (ante adjetivo/adverbio)',en:'too (before an adjective/adverb)',category:'adverbios',aliases:['zu']},
{id:'reading-particle-zu',de:'zu · Infinitiv',lemma:'zu',es:'marcador de infinitivo; no se traduce siempre con a/para',en:'infinitive marker; not always translated with to',category:'partículas',aliases:['zu']},
{id:'reading-particle-als',de:'als · función',lemma:'als',es:'como; en función de, no cuando (en este uso)',en:'as; in the role of, not when (in this use)',category:'partículas',aliases:['als']}
];
for(const p of contexts){p.source={name:'Deutsch Dicht · gramática de referencia',kind:'original-teaching-gloss'};supplemental.push(p);}
for(const p of possessives){p.source={name:'Deutsch Dicht · gramática de referencia',kind:'original-teaching-gloss'};supplemental.push(p);}
const output='/* Reading bridges, prerequisites, contextual lemmas and original bilingual glosses. */\nwindow.DeutschData = window.DeutschData || {};\nwindow.DeutschData.bridgeReadings = '+JSON.stringify(bridges,null,2)+';\nwindow.DeutschData.readings.push(...window.DeutschData.bridgeReadings);\nwindow.DeutschData.readingSupport = '+JSON.stringify(readingSupport,null,2)+';\nwindow.DeutschData.readingLemmas = '+JSON.stringify(readingLemmas,null,2)+';\nwindow.DeutschData.readingSurfaceLemmas = '+JSON.stringify(readingSurfaceLemmas,null,2)+';\nwindow.DeutschData.readingVocabulary = '+JSON.stringify(supplemental,null,2)+';\n';
fs.writeFileSync(dir+'/data/reading-support.js',output);
// Derive only curated, actually encountered lexical additions; new imported headwords are added by the UI reading lookup.
const supportFile=dir+'/data/lesson-support.js';require(supportFile);
for(const s of Object.values(window.DeutschData.lessonSupport))s.additionalVocabIds=[...new Set(s.readingSequence.flatMap(id=>Object.values(readingLemmas[id]||{})).filter(id=>curated.some(v=>v.id===id)))];
fs.writeFileSync(supportFile,'/* Bilingual, applied instructional layer. Existing IDs remain stable. */\nwindow.DeutschData = window.DeutschData || {};\nwindow.DeutschData.lessonSupport = '+JSON.stringify(window.DeutschData.lessonSupport,null,2)+';\n');
console.log(JSON.stringify({bridges:bridges.length,support:Object.keys(readingSupport).length,glosses:Object.values(readingSupport).reduce((a,x)=>a+x.teachingGlossary.length,0),supplemental:supplemental.length}));
const misses=[];for(const r of all){const tokens=[...new Set(r.paragraphs.map(p=>p.de).join(' ').match(/[\p{L}\p{M}]+(?:[-’'][\p{L}\p{M}]+)*/gu))];const m=tokens.filter(w=>!readingLemmas[r.id][w.toLowerCase()]);if(m.length)misses.push([r.id,m]);}console.log(JSON.stringify(misses));
