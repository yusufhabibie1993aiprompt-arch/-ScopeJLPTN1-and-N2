const STORAGE = {
  theme: 'goiscope_v8_theme',
  vocab: 'goiscope_v8_vocab',
  lookups: 'goiscope_v8_lookups',
  article: 'goiscope_v8_article',
  font: 'goiscope_v8_font'
};

const themes = [
  {id:'sakura',name:'Sakura',desc:'pink lembut',swatch:'linear-gradient(135deg,#fff8fb,#f3a6c2,#db5f92)'},
  {id:'sumi',name:'Sumi Night',desc:'hitam + merah',swatch:'linear-gradient(135deg,#101114,#292c31,#e84f5f)'},
  {id:'matcha',name:'Matcha',desc:'cream + hijau',swatch:'linear-gradient(135deg,#f5f5eb,#b6c69a,#6f8c54)'},
  {id:'seigaiha',name:'Seigaiha',desc:'biru Jepang',swatch:'linear-gradient(135deg,#f5faff,#91c9ee,#3078b8)'},
  {id:'neon',name:'Tokyo Neon',desc:'night + neon',swatch:'linear-gradient(135deg,#0d0b18,#d252ff,#46d9ff)'},
  {id:'shinbun',name:'Shinbun',desc:'koran Jepang',swatch:'linear-gradient(135deg,#f8f5eb,#c8c0ad,#393733)'}
];

const demoArticle = {
  title:'物価上昇を踏まえ、消費者の選択にも変化',
  category:'経済・社会',
  paragraphs:[
    {
      jp:'物価の上昇を踏まえ、消費者の間では日々の支出を見直す動きが広がっている。特に、これまで習慣的に購入していた商品についても、本当に必要かどうかを慎重に判断する人が増えた。',
      furigana:'ぶっか の じょうしょう を ふまえ、しょうひしゃ の あいだ では ひび の ししゅつ を みなおす うごき が ひろがっている。とくに、これまで しゅうかんてき に こうにゅう していた しょうひん についても、ほんとう に ひつよう か どうか を しんちょう に はんだん する ひと が ふえた。',
      id:'Dengan mempertimbangkan kenaikan harga, semakin banyak konsumen yang meninjau kembali pengeluaran sehari-hari. Bahkan untuk barang yang sebelumnya dibeli karena kebiasaan, semakin banyak orang menilai dengan hati-hati apakah barang tersebut benar-benar diperlukan.',
      highlights:['物価','踏まえ','支出','見直す','習慣的','慎重']
    },
    {
      jp:'一方、企業側も価格だけでなく、品質や利便性をどのように訴求するかが問われている。値上げを余儀なくされた企業の中には、内容量やサービスを工夫することで顧客離れを防ごうとする動きも見られる。',
      furigana:'いっぽう、きぎょうがわ も かかく だけ でなく、ひんしつ や りべんせい を どのように そきゅう するか が とわれている。ねあげ を よぎなくされた きぎょう の なか には、ないようりょう や サービス を くふう することで こきゃくばなれ を ふせごう とする うごき も みられる。',
      id:'Di sisi lain, perusahaan juga dituntut memikirkan cara menonjolkan bukan hanya harga, tetapi kualitas dan kemudahan. Sejumlah perusahaan yang terpaksa menaikkan harga berupaya mencegah pelanggan pergi dengan mengubah isi produk atau layanan.',
      highlights:['訴求','問われている','余儀なくされた','顧客離れ']
    },
    {
      jp:'こうした変化は一時的な節約志向にとどまらず、消費行動そのものを大きく変える可能性がある。専門家は、家計への影響を見極めながら、中長期的な傾向を注視する必要があると指摘している。',
      furigana:'こうした へんか は いちじてき な せつやくしこう に とどまらず、しょうひこうどう そのもの を おおきく かえる かのうせい が ある。せんもんか は、かけい への えいきょう を みきわめながら、ちゅうちょうきてき な けいこう を ちゅうし する ひつよう が ある と してき している。',
      id:'Perubahan ini mungkin tidak berhenti pada kecenderungan berhemat sementara, tetapi dapat mengubah perilaku konsumsi itu sendiri. Para ahli menunjukkan perlunya mengamati tren jangka menengah dan panjang sambil menilai dampaknya terhadap rumah tangga.',
      highlights:['節約志向','にとどまらず','見極め','中長期的','注視','指摘']
    }
  ]
};

const localDictionary = {
  '踏まえる':{reading:'ふまえる',meaning:'mempertimbangkan; berlandaskan pada',jlpt:'N1',register:'formal / tulisan',nuance:'Dipakai ketika keputusan atau pembahasan dibuat dengan menjadikan fakta, kondisi, pengalaman, atau hasil tertentu sebagai dasar.',synonyms:['考慮する','基づく'],collocations:['状況を踏まえる','結果を踏まえる','経験を踏まえる']},
  '踏まえ':{reading:'ふまえ',meaning:'dengan mempertimbangkan; berdasarkan',jlpt:'N1',register:'formal / tulisan',nuance:'Bentuk 連用形 dari 踏まえる yang sering muncul sebagai ～を踏まえ(て).',synonyms:['考慮して','基づいて'],collocations:['現状を踏まえ','結果を踏まえて']},
  '物価':{reading:'ぶっか',meaning:'harga barang secara umum; tingkat harga',jlpt:'N2',register:'berita / ekonomi',nuance:'Mengacu pada tingkat harga barang dan jasa secara umum, bukan harga satu produk saja.',synonyms:['価格水準'],collocations:['物価が上昇する','物価高','物価指数']},
  '支出':{reading:'ししゅつ',meaning:'pengeluaran',jlpt:'N2',register:'formal',nuance:'Uang yang dikeluarkan; sering dipakai dalam konteks rumah tangga, perusahaan, atau anggaran.',synonyms:['出費'],collocations:['支出を抑える','支出が増える','家計支出']},
  '見直す':{reading:'みなおす',meaning:'meninjau kembali; mengevaluasi ulang',jlpt:'N2',register:'umum / bisnis',nuance:'Melihat kembali sesuatu lalu mempertimbangkan perubahan atau perbaikan.',synonyms:['再検討する'],collocations:['計画を見直す','制度を見直す','支出を見直す']},
  '習慣的':{reading:'しゅうかんてき',meaning:'bersifat kebiasaan; habitual',jlpt:'N2+',register:'formal',nuance:'Menunjukkan tindakan yang dilakukan sebagai kebiasaan secara berulang.',synonyms:['日常的'],collocations:['習慣的に行う','習慣的な行動']},
  '慎重':{reading:'しんちょう',meaning:'hati-hati; cermat',jlpt:'N2',register:'umum',nuance:'Tidak tergesa-gesa dan mempertimbangkan risiko atau akibat dengan teliti.',synonyms:['用心深い'],collocations:['慎重に判断する','慎重な姿勢']},
  '訴求':{reading:'そきゅう',meaning:'menonjolkan daya tarik; appeal/promotion',jlpt:'N1+',register:'bisnis / marketing',nuance:'Menyampaikan nilai atau daya tarik produk kepada target agar menarik perhatian atau mendorong tindakan.',synonyms:['アピールする'],collocations:['魅力を訴求する','訴求力','顧客に訴求する']},
  '問われている':{reading:'とわれている',meaning:'sedang dipertanyakan / dituntut',jlpt:'N1',register:'berita / formal',nuance:'Dalam tulisan berita sering berarti kemampuan, sikap, atau tanggung jawab sedang diuji atau dituntut.',synonyms:['求められている'],collocations:['姿勢が問われる','対応力が問われる']},
  '余儀なくされた':{reading:'よぎなくされた',meaning:'terpaksa; tidak punya pilihan selain',jlpt:'N1',register:'sangat formal / berita',nuance:'Menekankan bahwa situasi eksternal memaksa seseorang melakukan sesuatu.',synonyms:['せざるを得なかった'],collocations:['変更を余儀なくされる','撤退を余儀なくされる']},
  '顧客離れ':{reading:'こきゃくばなれ',meaning:'hilangnya pelanggan; customer attrition',jlpt:'ADV',register:'bisnis',nuance:'Keadaan ketika pelanggan berhenti memilih perusahaan, merek, atau layanan tertentu.',synonyms:['客離れ'],collocations:['顧客離れを防ぐ','顧客離れが進む']},
  '節約志向':{reading:'せつやくしこう',meaning:'kecenderungan untuk berhemat',jlpt:'ADV',register:'berita / ekonomi',nuance:'志向 menunjukkan orientasi atau kecenderungan; frasa ini sering muncul dalam berita konsumsi.',synonyms:['倹約志向'],collocations:['節約志向が強まる','節約志向の消費者']},
  '見極め':{reading:'みきわめ',meaning:'menilai dengan cermat; memastikan',jlpt:'N1',register:'formal',nuance:'Menentukan hakikat, kondisi, atau waktu yang tepat setelah mengamati dengan teliti.',synonyms:['見定める','判断する'],collocations:['影響を見極める','時期を見極める']},
  '注視':{reading:'ちゅうし',meaning:'mengamati dengan saksama',jlpt:'N1',register:'berita / formal',nuance:'Lebih formal daripada 見る; sering dipakai untuk perkembangan ekonomi, politik, atau risiko.',synonyms:['注意深く見る','監視する'],collocations:['動向を注視する','推移を注視する']},
  '指摘':{reading:'してき',meaning:'menunjukkan; mengemukakan suatu masalah/poin',jlpt:'N2',register:'formal / berita',nuance:'Menyebutkan poin yang dianggap penting, terutama masalah, kekurangan, atau fakta.',synonyms:['言及する'],collocations:['問題点を指摘する','専門家が指摘する']}
};

let currentView = 'home';
let currentArticle = JSON.parse(localStorage.getItem(STORAGE.article) || 'null');
let vocabBank = JSON.parse(localStorage.getItem(STORAGE.vocab) || '[]');
let lookupCount = Number(localStorage.getItem(STORAGE.lookups) || 0);
let currentLookup = null;
let reviewIndex = 0;
let readerFont = Number(localStorage.getItem(STORAGE.font) || 20);
let selectedSound = 'lofi';
let audioCtx = null, masterGain = null, soundTimer = null, localAudio = null, activeNodes = [];
let deferredPrompt = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),1800)}
function escapeHTML(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function setView(id){
  currentView=id;
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===id));
  $$('.nav-btn[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  const titles={home:'Dashboard',reader:'Interactive Reader',vocab:'Vocabulary Bank',review:'Review',studio:'Theme & Focus Studio'};
  $('#viewTitle').textContent=titles[id]||'GoiScope';
  if(id==='vocab') renderVocab();
  if(id==='review') renderReview();
  if(id==='studio') renderThemes();
  window.scrollTo({top:0,behavior:'smooth'});
}

function initNav(){
  $$('.nav-btn[data-view],.go-view').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  $('#themeQuickBtn').addEventListener('click',()=>setView('studio'));
  $('#focusQuickBtn').addEventListener('click',()=>setView('studio'));
}

function applyTheme(id){
  const t=themes.find(x=>x.id===id)||themes[0];
  document.documentElement.dataset.theme=t.id;
  localStorage.setItem(STORAGE.theme,t.id);
  $('#statTheme').textContent=t.name;
  const colorMap={sakura:'#f6d7e5',sumi:'#17191c',matcha:'#e5ead5',seigaiha:'#e5f3ff',neon:'#171129',shinbun:'#e6e0d3'};
  document.querySelector('meta[name="theme-color"]').setAttribute('content',colorMap[t.id]);
  renderThemes();
}
function renderThemes(){
  const active=localStorage.getItem(STORAGE.theme)||'sakura';
  $('#themeGrid').innerHTML=themes.map(t=>`<button class="theme-card ${active===t.id?'active':''}" data-theme-id="${t.id}"><div class="theme-swatch" style="background:${t.swatch}"></div><b>${t.name}</b><small>${t.desc}</small></button>`).join('');
  $$('#themeGrid [data-theme-id]').forEach(b=>b.addEventListener('click',()=>{applyTheme(b.dataset.themeId);toast(`Tema ${themes.find(t=>t.id===b.dataset.themeId).name} aktif`)}));
}

function initSourceTabs(){
  $$('.mini-tab').forEach(b=>b.addEventListener('click',()=>{
    $$('.mini-tab').forEach(x=>x.classList.toggle('active',x===b));
    $$('.source-pane').forEach(p=>p.classList.toggle('active',p.dataset.sourcePane===b.dataset.sourceTab));
  }));
  $('#loadDemoBtn').addEventListener('click',()=>{currentArticle=structuredClone(demoArticle);saveAndRenderArticle();toast('Artikel demo dimuat')});
  $('#analyzeTextBtn').addEventListener('click',analyzeTextArticle);
  $('#importUrlBtn').addEventListener('click',importUrlArticle);
}

function saveAndRenderArticle(){
  localStorage.setItem(STORAGE.article,JSON.stringify(currentArticle));
  renderArticle();updateStats();
}

function renderArticle(){
  $('#articleBody').style.setProperty('--reader-size',readerFont+'px');
  document.documentElement.style.setProperty('--reader-size',readerFont+'px');
  $('#fontSizeLabel').textContent=readerFont+'px';
  if(!currentArticle){$('#articleEmpty').classList.remove('hidden');$('#articleView').classList.add('hidden');renderContinue();return}
  $('#articleEmpty').classList.add('hidden');$('#articleView').classList.remove('hidden');
  $('#articleTitle').textContent=currentArticle.title||'Artikel Jepang';
  $('#articleCategory').textContent=currentArticle.category||'Artikel';
  $('#articleBody').innerHTML=(currentArticle.paragraphs||[]).map((p,i)=>{
    const marked=markHighlights(p.jp,p.highlights||[]);
    return `<section class="article-paragraph" data-p="${i}"><div class="jp-line" data-p="${i}">${marked}</div>${p.furigana?`<div class="furigana-line">${escapeHTML(p.furigana)}</div>`:''}${p.id?`<div class="translation">${escapeHTML(p.id)}</div>`:''}</section>`;
  }).join('');
  applyReaderToggles();bindArticleWordClicks();renderContinue();
}

function markHighlights(text,words){
  if(!words.length)return escapeHTML(text);
  const sorted=[...words].sort((a,b)=>b.length-a.length);
  const escaped=escapeHTML(text);
  const pattern=sorted.map(w=>escapeRegExp(w)).join('|');
  return escaped.replace(new RegExp(`(${pattern})`,'g'),m=>`<span class="ai-word" data-word="${escapeHTML(m)}">${escapeHTML(m)}</span>`);
}
function escapeRegExp(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}

function bindArticleWordClicks(){
  $$('.ai-word').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const p=el.closest('.article-paragraph');openWordLookup(el.dataset.word,p.querySelector('.jp-line').textContent,'AI HIGHLIGHT')}));
  $$('.jp-line').forEach(line=>{
    line.addEventListener('click',e=>{
      if(e.target.closest('.ai-word'))return;
      const word=getJapaneseWordAtPoint(line,e.clientX,e.clientY);
      if(word && /[\u3040-\u30ff\u3400-\u9fff々〆ヵヶ]/.test(word)) openWordLookup(word,line.textContent,'YOUR TAP');
    });
  });
}

function getJapaneseWordAtPoint(container,x,y){
  let node=null,offset=0;
  if(document.caretPositionFromPoint){const pos=document.caretPositionFromPoint(x,y);node=pos?.offsetNode;offset=pos?.offset||0}
  else if(document.caretRangeFromPoint){const r=document.caretRangeFromPoint(x,y);node=r?.startContainer;offset=r?.startOffset||0}
  if(!node)return '';
  if(node.nodeType!==Node.TEXT_NODE){node=node.firstChild;if(!node)return ''}
  if(!container.contains(node))return '';
  const full=container.textContent;
  let globalOffset=0;const walker=document.createTreeWalker(container,NodeFilter.SHOW_TEXT);let n;
  while((n=walker.nextNode())){if(n===node){globalOffset+=offset;break}globalOffset+=n.textContent.length}
  if(Intl.Segmenter){
    const seg=new Intl.Segmenter('ja',{granularity:'word'});
    for(const item of seg.segment(full)){if(globalOffset>=item.index && globalOffset<item.index+item.segment.length){const s=item.segment.trim();if(item.isWordLike!==false && s)return s}}
  }
  const chars=/[\u3040-\u30ff\u3400-\u9fff々〆ヵヶ]/;
  let a=Math.min(globalOffset,full.length-1),b=a;
  while(a>0&&chars.test(full[a-1]))a--;while(b<full.length&&chars.test(full[b]))b++;
  return full.slice(a,b).slice(0,12);
}

function sentenceAround(word,context){
  const idx=context.indexOf(word); if(idx<0)return context;
  const left=Math.max(context.lastIndexOf('。',idx-1)+1,0); let right=context.indexOf('。',idx); if(right<0)right=context.length;else right+=1;
  return context.slice(left,right).trim();
}

async function openWordLookup(word,context,source){
  const clean=word.replace(/^[、。！？「」『』（）\s]+|[、。！？「」『』（）\s]+$/g,'');if(!clean)return;
  currentLookup={word:clean,context:sentenceAround(clean,context),source};
  lookupCount++;localStorage.setItem(STORAGE.lookups,String(lookupCount));updateStats();
  $('#lookupWord').textContent=clean;$('#lookupReading').textContent='';$('#lookupSourceBadge').textContent=source;
  $('#lookupContent').innerHTML='';$('#lookupLoading').classList.remove('hidden');
  $('#lookupSheet').classList.add('open');$('#lookupSheet').setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  const known=localDictionary[clean];
  if(known){currentLookup={...currentLookup,...known};renderLookup(currentLookup);return}
  try{
    const res=await fetch('/api/lookup-word',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({word:clean,sentence:currentLookup.context,articleTitle:currentArticle?.title||''})});
    if(!res.ok)throw new Error('lookup unavailable');
    const data=await res.json();currentLookup={...currentLookup,...data};renderLookup(currentLookup);
  }catch(err){
    currentLookup={...currentLookup,reading:'',meaning:'Belum ada analisis lokal untuk kata ini.',jlpt:'?',register:'',nuance:'Hubungkan endpoint AI V8 untuk mendapatkan reading, arti kontekstual, nuansa, sinonim, dan collocation secara otomatis.',synonyms:[],collocations:[]};renderLookup(currentLookup,true);
  }
}

function renderLookup(d,fallback=false){
  $('#lookupLoading').classList.add('hidden');$('#lookupReading').textContent=d.reading||'';
  $('#lookupContent').innerHTML=`
    <div class="lookup-block"><small>ARTI DALAM KONTEKS</small><p><strong>${escapeHTML(d.meaning||'—')}</strong></p></div>
    <div class="lookup-block"><small>JLPT / REGISTER</small><div class="lookup-chips"><span>${escapeHTML(d.jlpt||'?')}</span>${d.register?`<span>${escapeHTML(d.register)}</span>`:''}${fallback?'<span>AI offline</span>':''}</div></div>
    <div class="lookup-block"><small>NUANSA</small><p>${escapeHTML(d.nuance||'—')}</p></div>
    <div class="lookup-block"><small>KONTEKS ARTIKEL</small><div class="context-box">${escapeHTML(d.context||'')}</div></div>
    ${d.synonyms?.length?`<div class="lookup-block"><small>SINONIM / KATA MIRIP</small><div class="lookup-chips">${d.synonyms.map(x=>`<span>${escapeHTML(x)}</span>`).join('')}</div></div>`:''}
    ${d.collocations?.length?`<div class="lookup-block"><small>COLLOCATION</small><div class="lookup-chips">${d.collocations.map(x=>`<span>${escapeHTML(x)}</span>`).join('')}</div></div>`:''}`;
  const exists=vocabBank.some(v=>v.word===d.word);$('#addVocabBtn').textContent=exists?'✓ Sudah di Vocabulary':'＋ Tambah ke Vocabulary';$('#addVocabBtn').disabled=exists;
}

function closeLookup(){
  $('#lookupSheet').classList.remove('open');$('#lookupSheet').setAttribute('aria-hidden','true');document.body.style.overflow='';
}
function initLookup(){
  $('#closeLookupBtn').addEventListener('click',closeLookup);$('#lookupBackdrop').addEventListener('click',closeLookup);
  $('#addVocabBtn').addEventListener('click',()=>{if(!currentLookup)return;addCurrentLookupToVocab()});
  $('#speakWordBtn').addEventListener('click',()=>{if(!currentLookup)return;const u=new SpeechSynthesisUtterance(currentLookup.word);u.lang='ja-JP';u.rate=.82;speechSynthesis.cancel();speechSynthesis.speak(u)});
  $('.tap-demo').addEventListener('click',()=>openWordLookup('踏まえる','結果を踏まえて、今後の方針を決めます。','DEMO TAP'));
}
function addCurrentLookupToVocab(){
  if(vocabBank.some(v=>v.word===currentLookup.word))return;
  vocabBank.unshift({id:crypto.randomUUID?.()||Date.now().toString(),word:currentLookup.word,reading:currentLookup.reading||'',meaning:currentLookup.meaning||'',jlpt:currentLookup.jlpt||'?',register:currentLookup.register||'',nuance:currentLookup.nuance||'',synonyms:currentLookup.synonyms||[],collocations:currentLookup.collocations||[],context:currentLookup.context||'',sourceArticle:currentArticle?.title||'',addedAt:new Date().toISOString(),rating:0});
  localStorage.setItem(STORAGE.vocab,JSON.stringify(vocabBank));renderLookup(currentLookup);updateStats();toast('Ditambahkan ke Vocabulary Bank ✓');
}

async function analyzeTextArticle(){
  const text=$('#articleTextInput').value.trim();if(!text){toast('Tempel teks Jepang dulu');return}
  const title=$('#articleTitleInput').value.trim()||'Artikel Jepang';
  const btn=$('#analyzeTextBtn');btn.disabled=true;btn.textContent='Menganalisis...';
  try{
    const res=await fetch('/api/analyze-text',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,text})});
    if(!res.ok)throw new Error('AI unavailable');currentArticle=await res.json();saveAndRenderArticle();setView('reader');toast('Analisis artikel selesai');
  }catch(e){
    currentArticle={title,category:'Custom',paragraphs:text.split(/\n\s*\n/).filter(Boolean).map(p=>({jp:p,furigana:'',id:'',highlights:[]}))};saveAndRenderArticle();toast('Teks dimuat. AI backend belum tersambung.');
  }finally{btn.disabled=false;btn.textContent='Analisis dengan AI'}
}

async function importUrlArticle(){
  const url=$('#articleUrlInput').value.trim();if(!url){toast('Masukkan URL artikel');return}
  const btn=$('#importUrlBtn');btn.disabled=true;btn.textContent='Mengambil artikel...';
  try{
    const res=await fetch('/api/import-url',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url})});
    if(!res.ok)throw new Error(await res.text());currentArticle=await res.json();saveAndRenderArticle();toast('Artikel berhasil diimpor');
  }catch(e){toast('URL gagal diambil. Coba Tempel teks.')}finally{btn.disabled=false;btn.textContent='Ambil & Analisis Artikel'}
}

function applyReaderToggles(){
  const b=$('#articleBody');b.classList.toggle('hide-furigana',!$('#furiganaToggle').checked);b.classList.toggle('hide-translation',!$('#translationToggle').checked);b.classList.toggle('no-highlight',!$('#aiHighlightToggle').checked)
}
function initReaderControls(){
  ['furiganaToggle','translationToggle','aiHighlightToggle'].forEach(id=>$('#'+id).addEventListener('change',applyReaderToggles));
  $('#fontMinus').addEventListener('click',()=>setReaderFont(readerFont-1));$('#fontPlus').addEventListener('click',()=>setReaderFont(readerFont+1));
  $('#saveArticleBtn').addEventListener('click',()=>toast('Artikel sudah tersimpan lokal ✓'));
}
function setReaderFont(n){readerFont=Math.max(16,Math.min(30,n));localStorage.setItem(STORAGE.font,String(readerFont));document.documentElement.style.setProperty('--reader-size',readerFont+'px');$('#fontSizeLabel').textContent=readerFont+'px'}

function renderVocab(){
  const q=($('#vocabSearch')?.value||'').trim().toLowerCase();const items=vocabBank.filter(v=>`${v.word} ${v.reading} ${v.meaning}`.toLowerCase().includes(q));
  if(!items.length){$('#vocabGrid').innerHTML='<div class="panel empty-state"><h3>Vocabulary Bank masih kosong</h3><p>Tap kata di Reader lalu tekan “Tambah ke Vocabulary”.</p></div>';return}
  $('#vocabGrid').innerHTML=items.map(v=>`<article class="vocab-card"><div class="word">${escapeHTML(v.word)}</div><div class="kana">${escapeHTML(v.reading)}</div><div class="gloss">${escapeHTML(v.meaning)}</div><div class="tag-row" style="justify-content:flex-start"><span>${escapeHTML(v.jlpt||'?')}</span>${v.register?`<span>${escapeHTML(v.register)}</span>`:''}</div><div class="context">${escapeHTML(v.context||'')}</div><div class="actions"><button class="text-btn speak-vocab" data-id="${v.id}">🔊 Dengar</button><button class="danger-text delete-vocab" data-id="${v.id}">Hapus</button></div></article>`).join('');
  $$('.delete-vocab').forEach(b=>b.addEventListener('click',()=>{vocabBank=vocabBank.filter(v=>v.id!==b.dataset.id);saveVocab();renderVocab()}));
  $$('.speak-vocab').forEach(b=>b.addEventListener('click',()=>{const v=vocabBank.find(x=>x.id===b.dataset.id);if(v){const u=new SpeechSynthesisUtterance(v.word);u.lang='ja-JP';u.rate=.82;speechSynthesis.speak(u)}}));
}
function saveVocab(){localStorage.setItem(STORAGE.vocab,JSON.stringify(vocabBank));updateStats()}

function renderReview(){
  $('#reviewCounter').textContent=vocabBank.length?`${Math.min(reviewIndex+1,vocabBank.length)} / ${vocabBank.length}`:'0 / 0';
  if(!vocabBank.length){$('#reviewArea').innerHTML='<div class="empty-state"><h3>Belum ada kartu</h3><p>Tambahkan vocab dari Reader dulu.</p></div>';return}
  if(reviewIndex>=vocabBank.length)reviewIndex=0;const v=vocabBank[reviewIndex];
  $('#reviewArea').innerHTML=`<div class="review-card" id="reviewCard"><small>KANJI → ARTI</small><div class="q">${escapeHTML(v.word)}</div><button id="revealReview" class="secondary" style="margin-top:20px">Lihat Jawaban</button><div class="answer"><div class="reading">${escapeHTML(v.reading)}</div><h3>${escapeHTML(v.meaning)}</h3><div class="context-box">${escapeHTML(v.context||'')}</div><div class="rating-row"><button class="rate" data-r="1">Again</button><button class="rate" data-r="2">Hard</button><button class="rate" data-r="3">Good</button><button class="rate" data-r="4">Easy</button></div></div></div>`;
  $('#revealReview').addEventListener('click',()=>$('#reviewCard').classList.add('revealed'));
  $$('.rate').forEach(b=>b.addEventListener('click',()=>{v.rating=Number(b.dataset.r);saveVocab();reviewIndex=(reviewIndex+1)%vocabBank.length;renderReview()}));
}

function renderContinue(){
  if(!currentArticle){$('#continueCard').innerHTML='<strong>Belum ada artikel</strong><br><small>Buka Reader dan muat artikel demo.</small>';return}
  $('#continueCard').innerHTML=`<strong>${escapeHTML(currentArticle.title)}</strong><br><small>${currentArticle.paragraphs?.length||0} paragraf • tap untuk lanjut membaca</small>`;$('#continueCard').onclick=()=>setView('reader');
}
function updateStats(){
  $('#statVocab').textContent=vocabBank.length;$('#statLookup').textContent=lookupCount;$('#statAudio').textContent=(soundTimer||localAudio&&!localAudio.paused)?'ON':'OFF';
  const id=localStorage.getItem(STORAGE.theme)||'sakura';$('#statTheme').textContent=(themes.find(t=>t.id===id)||themes[0]).name;renderContinue();
}

function ensureAudio(){if(!audioCtx){audioCtx=new (window.AudioContext||window.webkitAudioContext)();masterGain=audioCtx.createGain();masterGain.gain.value=Number($('#audioVolume').value)/100;masterGain.connect(audioCtx.destination)}if(audioCtx.state==='suspended')audioCtx.resume()}
function stopSynth(){if(soundTimer){clearInterval(soundTimer);soundTimer=null}activeNodes.forEach(n=>{try{n.stop()}catch{}});activeNodes=[];$$('.sound-card').forEach(b=>b.classList.toggle('active',b.dataset.sound===selectedSound));updateAudioStatus()}
function playSynth(){stopAllAudio(false);ensureAudio();let step=0;const notes={lofi:[261.63,329.63,392,493.88],rain:[174.61,220,261.63,329.63],train:[130.81,196,146.83,220],forest:[293.66,392,329.63,440]}[selectedSound];const interval={lofi:650,rain:900,train:520,forest:1050}[selectedSound];
  const tick=()=>{if(!audioCtx)return;const osc=audioCtx.createOscillator(),g=audioCtx.createGain();osc.type=selectedSound==='lofi'?'sine':'triangle';osc.frequency.value=notes[step%notes.length];g.gain.setValueAtTime(0.0001,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(selectedSound==='rain'?0.018:0.035,audioCtx.currentTime+.03);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+.5);osc.connect(g);g.connect(masterGain);osc.start();osc.stop(audioCtx.currentTime+.55);activeNodes.push(osc);step++};tick();soundTimer=setInterval(tick,interval);updateAudioStatus()}
function stopAllAudio(resetLocal=true){stopSynth();if(localAudio&&resetLocal){localAudio.pause();localAudio.currentTime=0}updateAudioStatus()}
function updateAudioStatus(){const on=!!soundTimer||!!(localAudio&&!localAudio.paused);$('#audioStatus').textContent=on?'ON':'OFF';$('#audioToggleBtn').textContent=on?'⏸ Pause Focus':'▶ Play Focus';updateStats()}
function initAudio(){
  $$('.sound-card').forEach(b=>b.addEventListener('click',()=>{selectedSound=b.dataset.sound;$$('.sound-card').forEach(x=>x.classList.toggle('active',x===b));toast(`${b.querySelector('b').textContent} dipilih`)}));
  $$('.sound-card')[0]?.classList.add('active');
  $('#audioToggleBtn').addEventListener('click',()=>{if(soundTimer){stopSynth()}else if(localAudio&&!localAudio.paused){localAudio.pause();updateAudioStatus()}else playSynth()});
  $('#audioStopBtn').addEventListener('click',()=>stopAllAudio(true));
  $('#audioVolume').addEventListener('input',e=>{if(masterGain)masterGain.gain.value=Number(e.target.value)/100;if(localAudio)localAudio.volume=Number(e.target.value)/100});
  $('#localAudioInput').addEventListener('change',e=>{const file=e.target.files?.[0];if(!file)return;stopAllAudio(true);if(localAudio&&localAudio._url)URL.revokeObjectURL(localAudio._url);const url=URL.createObjectURL(file);localAudio=new Audio(url);localAudio._url=url;localAudio.loop=true;localAudio.volume=Number($('#audioVolume').value)/100;localAudio.play().then(()=>{toast(`Memutar ${file.name}`);updateAudioStatus()}).catch(()=>toast('Tap Play Focus untuk mulai audio'));localAudio.onpause=updateAudioStatus;localAudio.onplay=updateAudioStatus});
}

function initInstall(){
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').classList.remove('hidden')});
  $('#installBtn').addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').classList.add('hidden')});
  if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}

function init(){
  applyTheme(localStorage.getItem(STORAGE.theme)||'sakura');initNav();initSourceTabs();initLookup();initReaderControls();initAudio();initInstall();
  $('#vocabSearch').addEventListener('input',renderVocab);setReaderFont(readerFont);renderArticle();renderVocab();renderReview();updateStats();
}
init();
