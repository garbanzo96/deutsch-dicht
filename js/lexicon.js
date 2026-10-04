(function(root,factory){const api=factory();if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.DeutschLexicon=api;})(typeof window!=='undefined'?window:globalThis,function(){
'use strict';
const key=s=>String(s||'').normalize('NFC').toLocaleLowerCase('de').trim();
function lemma(entry){return entry.lemma||String(entry.de).replace(/^(der|die|das)\s+/,'').split(' / ')[0].replace(/\s*\([^)]*\)/g,'').trim();}
function merge(curated,dictionary){
 const preferred=new Map(),result=curated.map(v=>({...v,gender:v.gender||v.article,lemma:lemma(v),curated:true}));
 for(const v of result){const k=key(v.lemma)+'|'+v.category.normalize('NFD').replace(/[\u0300-\u036f]/g,'');preferred.set(k,v);}
 for(const entry of dictionary||[]){const k=key(lemma(entry))+'|'+entry.category.normalize('NFD').replace(/[\u0300-\u036f]/g,''),known=preferred.get(k);if(known){for(const name of ['frequencyRank','frequencyCount','frequencyOrder','ipa'])if(entry[name]!==undefined)known[name]=entry[name];known.aliases=[...new Set([...(known.aliases||[]),...(entry.aliases||[])])];if(!known.source)known.source=entry.source;if(!known.en&&entry.en)known.en=entry.en;}else result.push({...entry,category:entry.category==='particulas'?'partículas':entry.category,lemma:lemma(entry),curated:false});}
 result.sort((a,b)=>(a.frequencyRank??Infinity)-(b.frequencyRank??Infinity)||a.lemma.localeCompare(b.lemma,'de')||a.category.localeCompare(b.category));
 result.forEach((v,i)=>v.frequencyOrder=i+1);return result;
}
function buildIndex(vocabulary){
 const ids=new Map(vocabulary.map(v=>[v.id,v])),index=new Map();
 function add(text,v){const k=key(text);if(!k||/\s/.test(k))return;if(!index.has(k))index.set(k,[]);const a=index.get(k);if(!a.some(x=>x.id===v.id))a.push(v);}
 for(const v of vocabulary){add(v.lemma||lemma(v),v);if(!/\s/.test(v.de))add(v.de,v);for(const alias of v.aliases||[])add(alias,v);if(v.curated){if(v.plural&&!v.plural.startsWith('—'))add(v.plural.replace(/^die /,'').replace(/\s*\([^)]*\)/g,''),v);if(v.forms){const forms=v.forms.split(' / ');forms.forEach((form,i)=>add(i===2?form.split(/\s+/).at(-1):form.split(/\s+/)[0],v));}}}
 // Inflected function words are usually absent as dictionary headwords.
 const groups={der:['der','den','dem','des'],die:['die','der','den'],das:['das','dem','des'],ich:['ich','mich','mir'],du:['du','dich','dir'],er:['er','ihn','ihm'],sie:['sie','ihr','ihnen'],es:['es','ihm'],wir:['wir','uns'],ihr:['ihr','euch'],ein:['ein','eine','einen','einem','einer','eines'],kein:['kein','keine','keinen','keinem','keiner','keines']};
 for(const [base,forms] of Object.entries(groups)){const v=vocabulary.find(x=>x.curated&&key(x.lemma)===base)||vocabulary.find(x=>key(x.lemma)===base);if(v)forms.forEach(f=>add(f,v));}
 return {ids,index};
}
function lookup(index,word,readingId,readingLemmas={},readingSurfaceLemmas={}){
 const form=key(word),mapped=readingSurfaceLemmas?.[readingId]?.[String(word)]||readingLemmas?.[readingId]?.[form];
 const score=v=>(v.curated?1000:0)+(v.lemma===word?200:0)+(key(v.lemma)===form?100:0);
 let candidates=[...(index.index.get(form)||[])].sort((a,b)=>score(b)-score(a));
 if(typeof mapped==='string'){const mappedCandidates=index.index.get(key(mapped))||[];const canonical=mappedCandidates.filter(v=>v.lemma===mapped);const folded=mappedCandidates.filter(v=>key(v.lemma)===key(mapped));const preferred=index.ids.get(mapped)||(canonical.length?canonical:folded.length?folded:mappedCandidates).sort((a,b)=>score(b)-score(a))[0];if(preferred)candidates=[preferred,...candidates.filter(v=>v.id!==preferred.id)];}
 return candidates;
}
function tokens(text){return String(text).match(/[\p{L}\p{M}]+(?:[-’'][\p{L}\p{M}]+)*|[^\p{L}\p{M}]+/gu)||[];}
return {key,lemma,merge,buildIndex,lookup,tokens};
});
