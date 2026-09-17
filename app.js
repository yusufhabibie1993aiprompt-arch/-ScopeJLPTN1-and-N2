
const DB = [
  {id:"teimei",word:"低迷",reading:"ていめい",meaning:"stagnasi; kondisi lesu",level:"N1",topic:"経済",nuance:"Berada pada tingkat rendah atau lesu untuk suatu periode; sering untuk ekonomi, penjualan, dukungan.",similar:["停滞（ていたい）","不振（ふしん）","低調（ていちょう）"],collocations:["景気が低迷する","売上が低迷する","支持率が低迷する"],example:"国内需要が低迷している。",exampleReading:"こくない じゅよう が ていめい している。",exampleMeaning:"Permintaan domestik sedang lesu."},
  {id:"sokushin",word:"促進",reading:"そくしん",meaning:"mendorong; mempercepat kemajuan",level:"N2",topic:"経済",nuance:"Membuat suatu proses/perkembangan berlangsung lebih cepat.",similar:["推進（すいしん）","促す（うながす）","奨励（しょうれい）"],collocations:["消費を促進する","成長を促進する","交流を促進する"],example:"政府は消費を促進する政策を導入した。",exampleReading:"せいふ は しょうひ を そくしん する せいさく を どうにゅう した。",exampleMeaning:"Pemerintah memperkenalkan kebijakan untuk mendorong konsumsi."},
  {id:"hippaku",word:"逼迫",reading:"ひっぱく",meaning:"terdesak; sangat ketat; mengalami tekanan berat",level:"N1",topic:"経済",nuance:"Situasi kekurangan atau tekanan serius, misalnya keuangan, pasokan, tempat tidur rumah sakit.",similar:["切迫（せっぱく）","不足（ふそく）","窮迫（きゅうはく）"],collocations:["財政が逼迫する","需給が逼迫する","病床が逼迫する"],example:"原材料の供給が逼迫している。",exampleReading:"げんざいりょう の きょうきゅう が ひっぱく している。",exampleMeaning:"Pasokan bahan baku sedang sangat ketat."},
  {id:"kanwa",word:"緩和",reading:"かんわ",meaning:"pelonggaran; meredakan",level:"N1",topic:"経済",nuance:"Mengurangi tingkat keketatan, tekanan, gejala, atau aturan.",similar:["軽減（けいげん）","緩む（ゆるむ）","和らげる（やわらげる）"],collocations:["規制を緩和する","緊張を緩和する","痛みを緩和する"],example:"政府は一部の規制を緩和した。",exampleReading:"せいふ は いちぶ の きせい を かんわ した。",exampleMeaning:"Pemerintah melonggarkan sebagian regulasi."},
  {id:"zeisei",word:"是正",reading:"ぜせい",meaning:"koreksi; memperbaiki keadaan yang tidak tepat",level:"N1",topic:"社会",nuance:"Memperbaiki ketimpangan, kesalahan, atau keadaan yang dianggap tidak semestinya.",similar:["改善（かいぜん）","修正（しゅうせい）","訂正（ていせい）"],collocations:["格差を是正する","偏りを是正する","不公平を是正する"],example:"地域間の格差を是正する必要がある。",exampleReading:"ちいきかん の かくさ を ぜせい する ひつよう が ある。",exampleMeaning:"Perlu memperbaiki ketimpangan antarwilayah."},
  {id:"kencho",word:"顕著",reading:"けんちょ",meaning:"mencolok; nyata; signifikan",level:"N1",topic:"社会",nuance:"Sesuatu terlihat jelas dalam data, gejala, perbedaan, atau perubahan; nuansa formal.",similar:["著しい（いちじるしい）","明白（めいはく）","際立つ（きわだつ）"],collocations:["顕著な傾向","顕著な増加","顕著に表れる"],example:"高齢化の影響が顕著になっている。",exampleReading:"こうれいか の えいきょう が けんちょ に なっている。",exampleMeaning:"Dampak penuaan penduduk menjadi semakin nyata."},
  {id:"shutai",word:"衰退",reading:"すいたい",meaning:"kemunduran; decline",level:"N1",topic:"社会",nuance:"Kemunduran bertahap dari industri, budaya, organisasi, daerah, dan sebagainya.",similar:["減退（げんたい）","低下（ていか）","悪化（あっか）"],collocations:["産業が衰退する","地域が衰退する","文化の衰退"],example:"人口減少で地域産業が衰退している。",exampleReading:"じんこう げんしょう で ちいき さんぎょう が すいたい している。",exampleMeaning:"Industri daerah mengalami kemunduran akibat penurunan populasi."},
  {id:"kakusa",word:"格差",reading:"かくさ",meaning:"kesenjangan; disparity",level:"N2",topic:"社会",nuance:"Perbedaan tingkat atau kondisi antarkelompok, daerah, pendapatan, pendidikan, dll.",similar:["差（さ）","不均衡（ふきんこう）","隔たり（へだたり）"],collocations:["所得格差","地域格差","格差が広がる"],example:"所得格差の拡大が問題となっている。",exampleReading:"しょとく かくさ の かくだい が もんだい と なっている。",exampleMeaning:"Melebarnya kesenjangan pendapatan menjadi masalah."},
  {id:"shutoku",word:"習得",reading:"しゅうとく",meaning:"menguasai; memperoleh keterampilan",level:"N1",topic:"教育",nuance:"Memperoleh pengetahuan/keterampilan melalui belajar dan latihan sampai dapat digunakan.",similar:["修得（しゅうとく）","獲得（かくとく）","身につける"],collocations:["技能を習得する","語学を習得する","知識を習得する"],example:"専門技能を習得するには時間がかかる。",exampleReading:"せんもん ぎのう を しゅうとく する に は じかん が かかる。",exampleMeaning:"Diperlukan waktu untuk menguasai keterampilan khusus."},
  {id:"rishu",word:"履修",reading:"りしゅう",meaning:"mengambil/menyelesaikan mata kuliah",level:"N1",topic:"教育",nuance:"Istilah formal pendidikan untuk mengikuti mata pelajaran atau mata kuliah tertentu.",similar:["受講（じゅこう）","修了（しゅうりょう）"],collocations:["科目を履修する","履修登録","必修科目"],example:"学生は必修科目を履修しなければならない。",exampleReading:"がくせい は ひっしゅう かもく を りしゅう しなければ ならない。",exampleMeaning:"Mahasiswa harus mengambil mata kuliah wajib."},
  {id:"kyoiku_katei",word:"教育課程",reading:"きょういくかてい",meaning:"kurikulum; program pendidikan",level:"ADV",topic:"教育",nuance:"Istilah pendidikan formal untuk struktur/urutan mata pelajaran dan kegiatan belajar.",similar:["カリキュラム","学習指導要領（がくしゅうしどうようりょう）"],collocations:["教育課程を編成する","教育課程の改訂"],example:"学校は新しい教育課程を導入した。",exampleReading:"がっこう は あたらしい きょういくかてい を どうにゅう した。",exampleMeaning:"Sekolah menerapkan kurikulum baru."},
  {id:"kensho",word:"検証",reading:"けんしょう",meaning:"verifikasi; menguji kebenaran",level:"N1",topic:"技術",nuance:"Memeriksa berdasarkan data/bukti apakah sesuatu benar, efektif, atau sesuai.",similar:["確認（かくにん）","実証（じっしょう）","検討（けんとう）"],collocations:["効果を検証する","仮説を検証する","データで検証する"],example:"実験結果を詳しく検証する。",exampleReading:"じっけん けっか を くわしく けんしょう する。",exampleMeaning:"Memverifikasi hasil eksperimen secara rinci."},
  {id:"fukyu",word:"普及",reading:"ふきゅう",meaning:"penyebaran luas; adopsi luas",level:"N2",topic:"技術",nuance:"Sesuatu menjadi umum dan digunakan oleh banyak orang.",similar:["浸透（しんとう）","拡大（かくだい）","広まる"],collocations:["技術が普及する","スマホの普及","普及率"],example:"生成AIが急速に普及している。",exampleReading:"せいせい AI が きゅうそく に ふきゅう している。",exampleMeaning:"AI generatif menyebar dengan cepat."},
  {id:"kakushin",word:"革新",reading:"かくしん",meaning:"inovasi; pembaruan besar",level:"N1",topic:"技術",nuance:"Perubahan besar yang memperbarui sistem, teknologi, atau cara lama.",similar:["改革（かいかく）","刷新（さっしん）","イノベーション"],collocations:["技術革新","革新的な発想","制度を革新する"],example:"技術革新が産業構造を変えつつある。",exampleReading:"ぎじゅつ かくしん が さんぎょう こうぞう を かえつつ ある。",exampleMeaning:"Inovasi teknologi sedang mengubah struktur industri."},
  {id:"zeijakusei",word:"脆弱性",reading:"ぜいじゃくせい",meaning:"kerentanan; vulnerability",level:"ADV",topic:"技術",nuance:"Kelemahan yang dapat menimbulkan risiko, terutama keamanan sistem.",similar:["弱点（じゃくてん）","欠陥（けっかん）"],collocations:["システムの脆弱性","脆弱性を修正する"],example:"ソフトウェアの脆弱性が発見された。",exampleReading:"ソフトウェア の ぜいじゃくせい が はっけん された。",exampleMeaning:"Ditemukan kerentanan pada perangkat lunak."},
  {id:"hozen",word:"保全",reading:"ほぜん",meaning:"pelestarian; konservasi",level:"N1",topic:"環境",nuance:"Menjaga lingkungan, sumber daya, fasilitas atau kondisi agar tetap baik.",similar:["保護（ほご）","保存（ほぞん）","維持（いじ）"],collocations:["自然環境を保全する","生態系の保全","森林保全"],example:"生態系を保全する取り組みが進んでいる。",exampleReading:"せいたいけい を ほぜん する とりくみ が すすんでいる。",exampleMeaning:"Upaya melestarikan ekosistem sedang berkembang."},
  {id:"haishutsu",word:"排出",reading:"はいしゅつ",meaning:"emisi; pelepasan keluar",level:"N2",topic:"環境",nuance:"Mengeluarkan gas, limbah, zat, atau material dari suatu sistem.",similar:["放出（ほうしゅつ）","排気（はいき）"],collocations:["CO2を排出する","排出量","温室効果ガスの排出"],example:"企業は排出量の削減を求められている。",exampleReading:"きぎょう は はいしゅつりょう の さくげん を もとめられている。",exampleMeaning:"Perusahaan dituntut mengurangi jumlah emisi."},
  {id:"assho",word:"圧勝",reading:"あっしょう",meaning:"menang telak",level:"N1",topic:"スポーツ",nuance:"Kemenangan dengan selisih atau dominasi besar.",similar:["大勝（たいしょう）","完勝（かんしょう）"],collocations:["相手に圧勝する","圧勝を収める"],example:"代表チームは決勝で圧勝した。",exampleReading:"だいひょう チーム は けっしょう で あっしょう した。",exampleMeaning:"Tim nasional menang telak di final."},
  {id:"sekisen",word:"接戦",reading:"せっせん",meaning:"pertandingan ketat; close contest",level:"N1",topic:"スポーツ",nuance:"Pertandingan dengan selisih kecil dan hasil sulit diprediksi.",similar:["僅差（きんさ）","競り合い（せりあい）"],collocations:["接戦を制する","接戦になる"],example:"試合は最後まで接戦となった。",exampleReading:"しあい は さいご まで せっせん と なった。",exampleMeaning:"Pertandingan berlangsung ketat hingga akhir."},
  {id:"shuen",word:"主演",reading:"しゅえん",meaning:"pemeran utama; membintangi",level:"N2",topic:"エンタメ",nuance:"Menjadi aktor/aktris utama dalam film, drama, atau pertunjukan.",similar:["主役（しゅやく）","出演（しゅつえん）"],collocations:["映画に主演する","主演俳優","主演作"],example:"人気俳優が新作映画に主演する。",exampleReading:"にんき はいゆう が しんさく えいが に しゅえん する。",exampleMeaning:"Aktor populer membintangi film baru."},
  {id:"kogyou",word:"興行",reading:"こうぎょう",meaning:"pertunjukan komersial; box office/penyelenggaraan",level:"N1",topic:"エンタメ",nuance:"Penyelenggaraan pertunjukan sebagai bisnis; juga muncul pada 興行収入.",similar:["公演（こうえん）","上演（じょうえん）"],collocations:["興行収入","興行成績","興行を行う"],example:"その映画は高い興行収入を記録した。",exampleReading:"その えいが は たかい こうぎょう しゅうにゅう を きろく した。",exampleMeaning:"Film itu mencatat pendapatan box office yang tinggi."},
  {id:"uti_dasu",word:"打ち出す",reading:"うちだす",meaning:"mengemukakan; meluncurkan kebijakan/arah",level:"ADV",topic:"経済",nuance:"News/formal: secara jelas mengumumkan atau mengajukan kebijakan, strategi, konsep.",similar:["発表する（はっぴょうする）","掲げる（かかげる）","提示する（ていじする）"],collocations:["政策を打ち出す","方針を打ち出す","対策を打ち出す"],example:"政府は新たな支援策を打ち出した。",exampleReading:"せいふ は あらたな しえんさく を うちだした。",exampleMeaning:"Pemerintah mengumumkan langkah dukungan baru."},
  {id:"sakiiki",word:"先行き",reading:"さきゆき",meaning:"prospek ke depan; outlook",level:"ADV",topic:"経済",nuance:"Arah atau kondisi masa depan; sangat sering pada berita ekonomi.",similar:["見通し（みとおし）","将来（しょうらい）","今後（こんご）"],collocations:["先行きが不透明","先行きへの懸念","景気の先行き"],example:"景気の先行きには不透明感が残る。",exampleReading:"けいき の さきゆき に は ふとうめいかん が のこる。",exampleMeaning:"Masih ada ketidakpastian mengenai prospek ekonomi ke depan."},
  {id:"hatome",word:"歯止め",reading:"はどめ",meaning:"rem; penahan; upaya menghentikan tren buruk",level:"ADV",topic:"社会",nuance:"Kiasan berita: menghentikan memburuknya tren seperti penurunan populasi atau kenaikan harga.",similar:["抑制（よくせい）","阻止（そし）","食い止める（くいとめる）"],collocations:["減少に歯止めをかける","価格上昇に歯止め"],example:"人口減少に歯止めをかけるのは容易ではない。",exampleReading:"じんこう げんしょう に はどめ を かける の は ようい では ない。",exampleMeaning:"Tidak mudah menghentikan penurunan populasi."}
];

const DEMO = {
  title:"物価上昇と消費行動の変化",
  category:"経済",
  paragraphs:[
    {
      jp:"物価の上昇が続く中、家計の負担が増え、消費者の節約志向が一段と強まっている。特に食料品や光熱費の値上がりは生活に直接影響し、国内需要の低迷につながるとの懸念もある。",
      reading:"ぶっか の じょうしょう が つづく なか、かけい の ふたん が ふえ、しょうひしゃ の せつやく しこう が いちだん と つよまっている。とくに しょくりょうひん や こうねつひ の ねあがり は せいかつ に ちょくせつ えいきょう し、こくない じゅよう の ていめい に つながる との けねん も ある。",
      id:"Di tengah kenaikan harga yang terus berlanjut, beban rumah tangga meningkat dan kecenderungan konsumen untuk berhemat semakin kuat. Kenaikan harga makanan dan biaya listrik/gas khususnya berdampak langsung pada kehidupan sehari-hari, sehingga muncul kekhawatiran hal itu dapat menyebabkan lesunya permintaan domestik.",
      vocab:["teimei"]
    },
    {
      jp:"政府は消費を促進するため、新たな支援策を打ち出した。一方、原材料の供給逼迫や人手不足が続けば、企業のコスト負担はさらに増える可能性がある。",
      reading:"せいふ は しょうひ を そくしん する ため、あらたな しえんさく を うちだした。いっぽう、げんざいりょう の きょうきゅう ひっぱく や ひとでぶそく が つづけば、きぎょう の コスト ふたん は さらに ふえる かのうせい が ある。",
      id:"Pemerintah mengumumkan langkah dukungan baru untuk mendorong konsumsi. Namun, jika ketatnya pasokan bahan baku dan kekurangan tenaga kerja berlanjut, beban biaya perusahaan berpotensi meningkat lebih jauh.",
      vocab:["sokushin","uti_dasu","hippaku"]
    },
    {
      jp:"専門家は、規制緩和や賃上げだけでは十分ではなく、所得格差の是正や将来不安の軽減など、複数の施策を組み合わせる必要があると指摘する。",
      reading:"せんもんか は、きせい かんわ や ちんあげ だけ では じゅうぶん では なく、しょとく かくさ の ぜせい や しょうらい ふあん の けいげん など、ふくすう の しさく を くみあわせる ひつよう が ある と してき する。",
      id:"Para ahli menunjukkan bahwa pelonggaran regulasi dan kenaikan upah saja tidak cukup; diperlukan kombinasi berbagai kebijakan, termasuk memperbaiki kesenjangan pendapatan dan mengurangi kecemasan terhadap masa depan.",
      vocab:["kanwa","kakusa","zeisei"]
    },
    {
      jp:"景気の先行きには依然として不透明感が残っており、物価上昇に歯止めがかかるかどうかが今後の焦点となる。",
      reading:"けいき の さきゆき に は いぜん として ふとうめいかん が のこっており、ぶっか じょうしょう に はどめ が かかる か どうか が こんご の しょうてん と なる。",
      id:"Prospek ekonomi ke depan masih diliputi ketidakpastian. Apakah kenaikan harga dapat diredam atau tidak akan menjadi salah satu fokus utama selanjutnya.",
      vocab:["sakiiki","hatome"]
    }
  ]
};

const state = {
  view:"home",
  flashIndex:0,
  flashDeck:[],
  quiz:[],
  quizIndex:0,
  quizScore:0,
  quizAnswered:false,
  articleDeckIds:[],
  bookmarkOnly:false,
  weakOnly:false,
  currentArticleTitle:"",
  currentArticleCategory:""
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function loadProgress(){
  return JSON.parse(localStorage.getItem("goiLabProgress") || '{"ratings":{},"quizCorrect":0,"quizTotal":0,"activity":[],"bookmarks":[]}');
}
function saveProgress(p){
  if(!p.bookmarks) p.bookmarks=[];
  localStorage.setItem("goiLabProgress", JSON.stringify(p));
}
function isBookmarked(id){
  const p=loadProgress();
  return (p.bookmarks||[]).includes(id);
}
function toggleBookmark(id){
  const p=loadProgress();
  p.bookmarks=p.bookmarks||[];
  if(p.bookmarks.includes(id)) p.bookmarks=p.bookmarks.filter(x=>x!==id);
  else p.bookmarks.push(id);
  saveProgress(p);
  addActivity(`${p.bookmarks.includes(id)?"Bookmark":"Hapus bookmark"} ${DB.find(v=>v.id===id)?.word||id}`);
  renderVocab();
  renderHome();
}

function getAIEndpoint(){
  return localStorage.getItem("goiLabAIEndpoint") || "";
}
function setAIEndpoint(value){
  localStorage.setItem("goiLabAIEndpoint", value || "");
}
function syncAIEndpointUI(){
  const input=$("#aiEndpointInput");
  const pill=$("#aiStatusPill");
  const value=getAIEndpoint();
  if(input) input.value=value;
  if(pill) pill.textContent=value ? "Endpoint tersimpan" : "Belum terhubung";
}
function saveAIConfig(){
  const value=$("#aiEndpointInput").value.trim();
  setAIEndpoint(value);
  syncAIEndpointUI();
  addActivity(value ? "Menyimpan endpoint AI" : "Mengosongkan endpoint AI");
  alert(value ? "Endpoint AI disimpan." : "Endpoint AI dikosongkan.");
}

function addActivity(text){
  const p=loadProgress();
  p.activity.unshift({text,time:new Date().toLocaleString("id-ID")});
  p.activity=p.activity.slice(0,12);
  saveProgress(p);
}
function mastery(v){
  const r=loadProgress().ratings[v.id];
  const score={again:0,hard:1,good:2,easy:3}[r] ?? 0;
  return score;
}
function masteryPct(v){ return [10,40,72,100][mastery(v)]; }

function setView(id){
  state.view=id;
  $$(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  $$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  const titles={home:"Dashboard",article:"Artikel",vocab:"Vocabulary",flashcards:"Flashcard",quiz:"Quiz",progress:"Progress"};
  $("#viewTitle").textContent=titles[id]||"語彙Lab";
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="home") renderHome();
  if(id==="vocab") renderVocab();
  if(id==="flashcards" && !state.weakOnly) buildFlashDeck();
syncAIEndpointUI();
  if(id==="progress") renderProgress();
}

function topicLabel(t){
  const m={"経済":"Ekonomi","社会":"Sosial","教育":"Pendidikan","技術":"Teknologi","環境":"Lingkungan","スポーツ":"Olahraga","エンタメ":"Hiburan"};
  return m[t]||t;
}
function topics(){ return [...new Set(DB.map(x=>x.topic))]; }

function initSelects(){
  const options = `<option value="ALL">Semua bidang</option>`+topics().map(t=>`<option value="${t}">${t} · ${topicLabel(t)}</option>`).join("");
  $("#topicFilter").innerHTML=options;
  $("#flashTopic").innerHTML=options;
  $("#quizTopic").innerHTML=options;
}

function renderHome(){
  const p=loadProgress();
  const studied=Object.keys(p.ratings).length;
  const mastered=DB.filter(v=>mastery(v)>=2).length;
  const accuracy=p.quizTotal?Math.round(p.quizCorrect/p.quizTotal*100):0;
  const bookmarked=(p.bookmarks||[]).length;
  $("#homeStats").innerHTML=[
    ["Total bank",DB.length+" kata","N1/N2/Advanced"],
    ["Pernah direview",studied+" kata","Flashcard"],
    ["Good / Easy",mastered+" kata","Mastery"],
    ["Quiz accuracy",accuracy+"%","Dari semua quiz"],
    ["Bookmark",bookmarked+" kata","Kata sulit pilihanmu"]
  ].map(x=>`<div class="stat"><span>${x[0]}</span><b>${x[1]}</b><span>${x[2]}</span></div>`).join("");
  const review=DB.slice().sort((a,b)=>mastery(a)-mastery(b)).slice(0,5);
  $("#reviewList").innerHTML=review.map(v=>`<div class="compact-item"><div class="compact-jp"><b>${v.word}</b><span>${v.reading}</span></div><div class="compact-right">${v.meaning}<br>${v.topic} · ${v.level}</div></div>`).join("");
  $("#categoryBars").innerHTML=topics().map(t=>{
    const arr=DB.filter(v=>v.topic===t);
    const pct=Math.round(arr.reduce((s,v)=>s+masteryPct(v),0)/arr.length);
    return `<div class="bar-row"><div class="bar-label"><span>${t} · ${topicLabel(t)}</span><span>${pct}%</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div></div>`;
  }).join("");
}

function loadDemo(){
  state.currentArticleTitle=DEMO.title;
  state.currentArticleCategory=DEMO.category;
  $("#articleTitleInput").value=DEMO.title;
  $("#articleCategoryInput").value=DEMO.category;
  $("#articleTextInput").value=DEMO.paragraphs.map(p=>p.jp).join("\n\n");
  renderDemoArticle();
}
function renderDemoArticle(){
  state.currentArticleTitle=DEMO.title;
  state.currentArticleCategory=DEMO.category;
  state.articleDeckIds=[...new Set(DEMO.paragraphs.flatMap(p=>p.vocab))];
  const cards=DEMO.paragraphs.map((p,i)=>{
    const chips=p.vocab.map(id=>{
      const v=DB.find(x=>x.id===id);
      return `<button class="vocab-chip go-vocab" data-id="${v.id}">${v.word}<span>${v.reading}</span></button>`;
    }).join("");
    return `<article class="paragraph-card">
      <div class="jp-line">${p.jp}</div>
      <div class="furi-line">${p.reading}</div>
      <div class="id-line">${p.id}</div>
      <div class="vocab-chips">${chips}</div>
    </article>`;
  }).join("");
  $("#articleResult").innerHTML=`<div class="article-doc">
    <div class="article-header"><div><small>ARTICLE ANALYSIS</small><h2>${DEMO.title}</h2><div class="article-meta">${DEMO.category} · ${DEMO.paragraphs.length} paragraf · ${[...new Set(DEMO.paragraphs.flatMap(p=>p.vocab))].length} target vocab</div></div></div>
    ${cards}
  </div>`;
  $$(".go-vocab").forEach(b=>b.addEventListener("click",()=>{setView("vocab");$("#vocabSearch").value=DB.find(v=>v.id===b.dataset.id).word;renderVocab();}));
}


function renderAIArticle(data){
  const article = normalizeAIResponse(data);
  state.currentArticleTitle = article.title;
  state.currentArticleCategory = article.category;
  const articleVocabObjects = [];
  const cards = article.paragraphs.map((p, i) => {
    const vocabArr = (p.vocabulary || p.vocab || []).map(item => {
      if(typeof item === "string"){
        const found = DB.find(v => v.id===item || v.word===item);
        if(found){ articleVocabObjects.push(found); return found; }
        return null;
      }
      if(item && item.word){
        const existing = DB.find(v => v.word === item.word);
        const obj = existing || {
          id: "ai_" + (item.word + "_" + i).replace(/[^\w一-龯ぁ-んァ-ン]/g,""),
          word: item.word,
          reading: item.reading || "",
          meaning: item.meaning || "",
          level: item.level || "ADV",
          topic: item.topic || article.category || "経済",
          nuance: item.nuance || "Vocabulary hasil analisis AI.",
          similar: item.similar || [],
          collocations: item.collocations || [],
          example: item.example || p.japanese || p.jp || "",
          exampleReading: item.exampleReading || p.furigana || p.reading || "",
          exampleMeaning: item.exampleMeaning || p.translation || p.id || ""
        };
        articleVocabObjects.push(obj);
        return obj;
      }
      return null;
    }).filter(Boolean);

    return `<article class="paragraph-card">
      <div class="jp-line">${escapeHtml(p.japanese || p.jp || "")}</div>
      <div class="furi-line">${escapeHtml(p.furigana || p.reading || "")}</div>
      <div class="id-line">${escapeHtml(p.translation || p.id || "")}</div>
      <div class="vocab-chips">${vocabArr.map(v=>`<button class="vocab-chip go-vocab" data-id="${v.id}">${v.word}<span>${v.reading||""}</span></button>`).join("") || '<span class="article-meta">AI belum mengembalikan vocab untuk paragraf ini.</span>'}</div>
    </article>`;
  }).join("");

  // merge AI-only words into DB if not already present
  articleVocabObjects.forEach(v=>{
    if(!DB.find(x=>x.id===v.id)) DB.push(v);
  });
  state.articleDeckIds = [...new Set(articleVocabObjects.map(v=>v.id))];

  $("#articleResult").innerHTML=`<div class="article-doc">
    <div class="article-header"><div><small>AI ARTICLE ANALYSIS</small><h2>${escapeHtml(article.title || "Hasil Analisis AI")}</h2><div class="article-meta">${escapeHtml(article.category || "")} · ${article.paragraphs.length} paragraf · ${state.articleDeckIds.length} target vocab</div></div></div>
    ${cards}
  </div>`;
  $$(".go-vocab").forEach(b=>b.addEventListener("click",()=>{setView("vocab");$("#vocabSearch").value=(DB.find(v=>v.id===b.dataset.id)||{}).word || "";renderVocab();}));
  renderVocab();
  renderHome();
}
function normalizeAIResponse(data){
  return {
    title: data.title || $("#articleTitleInput").value || "Artikel AI",
    category: data.category || $("#articleCategoryInput").value || "経済",
    paragraphs: (data.paragraphs || []).map(p => ({
      japanese: p.japanese || p.jp || "",
      furigana: p.furigana || p.reading || "",
      translation: p.translation || p.id || "",
      vocabulary: p.vocabulary || p.vocab || []
    }))
  };
}
async function analyzeWithAI(){
  const endpoint = getAIEndpoint();
  const title = $("#articleTitleInput").value.trim();
  const category = $("#articleCategoryInput").value;
  const text = $("#articleTextInput").value.trim();
  if(!text){ alert("Masukkan artikel dulu."); return; }
  if(!endpoint){
    alert("Isi dulu URL endpoint AI, lalu tekan Simpan Endpoint.");
    return;
  }
  const btn = $("#analyzeAiBtn");
  const oldLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Memproses AI...";
  try{
    const res = await fetch(endpoint,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ title, category, text })
    });
    if(!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    renderAIArticle(data);
    addActivity("Menganalisis artikel dengan AI");
  }catch(err){
    console.error(err);
    alert("Gagal menghubungi endpoint AI. Pastikan URL endpoint benar dan backend mengembalikan JSON yang sesuai.");
  }finally{
    btn.disabled = false;
    btn.textContent = oldLabel;
  }
}

function analyzeCustom(){
  const text=$("#articleTextInput").value.trim();
  if(!text){alert("Masukkan artikel dulu.");return;}
  const pars=text.split(/\n\s*\n/).filter(Boolean);
  state.currentArticleTitle=$("#articleTitleInput").value||"Artikel Kustom";
  state.currentArticleCategory=$("#articleCategoryInput").value||"経済";
  const exactDemo = pars.join("\n\n") === DEMO.paragraphs.map(p=>p.jp).join("\n\n");
  if(exactDemo){renderDemoArticle();addActivity("Menganalisis artikel demo ekonomi");return;}
  let customFoundIds=[];
  const html=pars.map(p=>{
    const found=DB.filter(v=>p.includes(v.word));
    customFoundIds.push(...found.map(v=>v.id));
    return `<article class="paragraph-card">
      <div class="jp-line">${escapeHtml(p)}</div>
      <div class="furi-line">${buildReadingLine(p,found)}</div>
      <div class="id-line">Terjemahan otomatis penuh belum aktif pada prototype lokal untuk artikel kustom. Versi AI/backend nanti akan mengisi terjemahan Indonesia natural di sini.</div>
      <div class="vocab-chips">${found.map(v=>`<button class="vocab-chip go-vocab" data-id="${v.id}">${v.word}<span>${v.reading}</span></button>`).join("") || '<span class="article-meta">Belum ada kata yang cocok dengan bank demo.</span>'}</div>
    </article>`;
  }).join("");
  $("#articleResult").innerHTML=`<div class="article-doc"><div class="article-header"><div><small>ARTICLE ANALYSIS</small><h2>${escapeHtml($("#articleTitleInput").value||"Artikel Kustom")}</h2><div class="article-meta">${$("#articleCategoryInput").value} · ${pars.length} paragraf</div></div></div>${html}</div>`;
  $$(".go-vocab").forEach(b=>b.addEventListener("click",()=>{setView("vocab");$("#vocabSearch").value=DB.find(v=>v.id===b.dataset.id).word;renderVocab();}));
  state.articleDeckIds=[...new Set(customFoundIds)];
  addActivity("Menganalisis artikel kustom");
}

function buildReadingLine(text, found){
  if(!found.length) return "Furigana otomatis lengkap untuk teks kustom akan diisi oleh modul AI/backend.";
  return "Kata terdeteksi: "+found.map(v=>`${v.word} → ${v.reading}`).join("　｜　");
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));}

function renderVocab(){
  const q=$("#vocabSearch").value.trim().toLowerCase();
  const topic=$("#topicFilter").value;
  const level=$("#levelFilter").value;
  const list=DB.filter(v=>(topic==="ALL"||v.topic===topic)&&(level==="ALL"||v.level===level)&&(!state.bookmarkOnly||isBookmarked(v.id))&&(!q||[v.word,v.reading,v.meaning,v.nuance,v.topic].join(" ").toLowerCase().includes(q)));
  $("#vocabGrid").innerHTML=list.map(v=>`<article class="vocab-card">
    <div class="vocab-head">
      <div><div class="vocab-word">${v.word}</div><div class="vocab-reading">${v.reading}</div></div>
      <div>
        <div class="tag-row"><span>${v.level}</span><span>${v.topic}</span></div>
        <button class="bookmark-btn ${isBookmarked(v.id)?"active":""}" data-bookmark="${v.id}" title="Bookmark kata">${isBookmarked(v.id)?"★":"☆"}</button>
      </div>
    </div>
    <div class="vocab-meaning">${v.meaning}</div>
    <div class="vocab-note">${v.nuance}</div>
    <div class="vocab-detail"><div class="kicker">CONTOH</div><div>${v.example}</div><div class="vocab-reading">${v.exampleReading}</div><div class="vocab-note">${v.exampleMeaning}</div></div>
    <div class="vocab-detail"><div class="kicker">KATA MIRIP</div><div class="similar">${v.similar.map(s=>`<span>${s}</span>`).join("")}</div></div>
    <div class="vocab-detail"><div class="kicker">COLLOCATION</div><div class="similar">${v.collocations.map(s=>`<span>${s}</span>`).join("")}</div></div>
  </article>`).join("") || `<div class="panel">Tidak ada kata yang cocok.</div>`;
}


function openArticleDeck(){
  if(!state.articleDeckIds.length){
    alert("Belum ada vocabulary dari artikel aktif. Muat artikel demo atau analisis artikel terlebih dahulu.");
    return;
  }
  state.flashDeck=state.articleDeckIds.map(id=>DB.find(v=>v.id===id)).filter(Boolean);
  state.flashIndex=0;
  state.weakOnly=false;
  setView("flashcards");
  renderFlash();
  addActivity(`Membuka flashcard artikel (${state.flashDeck.length} kata)`);
}
function openWeakDeck(){
  const p=loadProgress();
  const weak=DB.filter(v=>["again","hard"].includes(p.ratings?.[v.id]));
  state.flashDeck=weak.length?weak:DB.filter(v=>!p.ratings?.[v.id]);
  if(!state.flashDeck.length) state.flashDeck=DB.slice();
  state.flashIndex=0;
  state.weakOnly=true;
  setView("flashcards");
  renderFlash();
  addActivity(`Membuka review kata lemah (${state.flashDeck.length} kata)`);
}

function buildFlashDeck(){
  state.weakOnly=false;
  const topic=$("#flashTopic").value;
  state.flashDeck=DB.filter(v=>topic==="ALL"||v.topic===topic).sort((a,b)=>mastery(a)-mastery(b));
  if(!state.flashDeck.length) state.flashDeck=DB.slice();
  state.flashIndex=0;
  renderFlash();
}

function nextFlash(){
  if(!state.flashDeck.length) return;
  state.flashIndex = (state.flashIndex + 1) % state.flashDeck.length;
  renderFlash();
}
function prevFlash(){
  if(!state.flashDeck.length) return;
  state.flashIndex = (state.flashIndex - 1 + state.flashDeck.length) % state.flashDeck.length;
  renderFlash();
}

function renderFlash(){
  const v=state.flashDeck[state.flashIndex];
  if(!v)return;
  $("#flashCard").classList.remove("flipped");
  $("#flashCounter").textContent=`${state.flashIndex+1} / ${state.flashDeck.length}`;
  $("#flashTopicBadge").textContent=`${v.topic} · ${v.level}` + (state.weakOnly ? " · Weak Review" : (state.articleDeckIds.includes(v.id) ? " · Article Deck" : ""));
  const mode=$("#flashMode").value;
  let label="",prompt="",sub="",answer=v.word,reading=v.reading,meaning=v.meaning;
  if(mode==="kanji-meaning"){label="KANJI → ARTI";prompt=v.word;sub="";answer=v.word;}
  if(mode==="meaning-kanji"){label="ARTI → KANJI";prompt=v.meaning;sub="";answer=v.word;}
  if(mode==="kanji-reading"){label="KANJI → FURIGANA";prompt=v.word;sub="Coba baca sebelum membalik";answer=v.reading;reading="";meaning=v.meaning;}
  if(mode==="reading-kanji"){label="FURIGANA → KANJI";prompt=v.reading;sub="Tebak kanjinya";answer=v.word;reading=v.reading;meaning=v.meaning;}
  $("#flashPromptLabel").textContent=label;
  $("#flashPrompt").textContent=prompt;
  $("#flashPromptSub").textContent=sub;
  $("#flashAnswer").textContent=answer;
  $("#flashReading").textContent=reading;
  $("#flashMeaning").textContent=meaning;
  $("#flashExample").innerHTML=`${v.example}<br><span style="color:var(--accent)">${v.exampleReading}</span><br>${v.exampleMeaning}`;
}
function rateCard(rating){
  const v=state.flashDeck[state.flashIndex];
  const p=loadProgress(); p.ratings[v.id]=rating; saveProgress(p);
  addActivity(`Flashcard ${v.word} (${v.reading}) → ${rating}`);
  state.flashIndex=(state.flashIndex+1)%state.flashDeck.length;
  renderFlash();
}

function shuffle(arr){return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);}
function startQuiz(){
  const topic=$("#quizTopic").value;
  let pool=DB.filter(v=>topic==="ALL"||v.topic===topic);
  const count=Math.min(+$("#quizCount").value,pool.length);
  state.quiz=shuffle(pool).slice(0,count).map((v,i)=>makeQuestion(v,i));
  state.quizIndex=0;state.quizScore=0;state.quizAnswered=false;
  $("#quizSetup").classList.add("hidden");$("#quizBox").classList.remove("hidden");
  renderQuestion();
}
function makeQuestion(v,i){
  const types=["meaning","kanji","context"];
  const type=types[i%types.length];
  let prompt="",reading="",correct="";
  if(type==="meaning"){prompt=v.word;reading=v.reading;correct=v.meaning;}
  if(type==="kanji"){prompt=v.meaning;reading="";correct=v.word;}
  if(type==="context"){prompt=v.example.replace(v.word,"＿＿＿");reading=v.exampleReading.replace(v.reading,"＿＿＿");correct=v.word;}
  let wrongPool=DB.filter(x=>x.id!==v.id).map(x=>type==="meaning"?x.meaning:x.word);
  const options=shuffle([correct,...shuffle(wrongPool).slice(0,3)]);
  return {v,type,prompt,reading,correct,options};
}
function renderQuestion(){
  const q=state.quiz[state.quizIndex]; if(!q){finishQuiz();return;}
  state.quizAnswered=false;
  $("#nextQuizBtn").classList.add("hidden");
  $("#quizFeedback").innerHTML="";
  $("#quizProgress").textContent=`Soal ${state.quizIndex+1} / ${state.quiz.length}`;
  $("#quizScore").textContent=`Benar ${state.quizScore}`;
  const typeLabel={meaning:"KANJI → ARTI",kanji:"ARTI → KANJI",context:"KONTEKS"}[q.type];
  $("#quizQuestion").innerHTML=`<div class="q-type">${typeLabel} · ${q.v.topic}</div><div class="q-main">${q.prompt}</div>${q.reading?`<div class="q-reading">${q.reading}</div>`:""}${q.type==="context"?`<div class="q-context">${q.v.exampleMeaning}</div>`:""}`;
  $("#quizOptions").innerHTML=q.options.map((o,i)=>`<button class="quiz-option" data-opt="${encodeURIComponent(o)}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
  $$(".quiz-option").forEach(b=>b.addEventListener("click",()=>answerQuiz(decodeURIComponent(b.dataset.opt),b)));
}
function answerQuiz(ans,btn){
  if(state.quizAnswered)return;
  state.quizAnswered=true;
  const q=state.quiz[state.quizIndex];
  const correct=ans===q.correct;
  if(correct){state.quizScore++;btn.classList.add("correct");}else{btn.classList.add("wrong");$$(".quiz-option").forEach(b=>{if(decodeURIComponent(b.dataset.opt)===q.correct)b.classList.add("correct");});}
  const p=loadProgress();p.quizTotal++;if(correct)p.quizCorrect++;saveProgress(p);
  $("#quizFeedback").innerHTML=`<b>${correct?"Benar ✓":"Belum tepat"}</b><br>${q.v.word}<br><span style="color:var(--accent)">${q.v.reading}</span><br>${q.v.meaning}<br><span style="color:var(--muted)">${q.v.nuance}</span>`;
  $("#quizScore").textContent=`Benar ${state.quizScore}`;
  $("#nextQuizBtn").classList.remove("hidden");
  addActivity(`Quiz ${q.v.word} (${q.v.reading}) → ${correct?"benar":"salah"}`);
}
function finishQuiz(){
  $("#quizQuestion").innerHTML=`<div class="q-type">SELESAI</div><div class="q-main">${state.quizScore} / ${state.quiz.length}</div><div class="q-context">Kamu bisa mengulang bidang yang sama atau pindah ke flashcard untuk mereview kata yang masih lemah.</div>`;
  $("#quizOptions").innerHTML="";
  $("#quizFeedback").innerHTML="";
  $("#nextQuizBtn").classList.add("hidden");
  setTimeout(()=>{$("#quizSetup").classList.remove("hidden");},500);
}
function renderProgress(){
  const p=loadProgress(), reviewed=Object.keys(p.ratings).length, mastered=DB.filter(v=>mastery(v)>=2).length, acc=p.quizTotal?Math.round(p.quizCorrect/p.quizTotal*100):0, bookmarked=(p.bookmarks||[]).length;
  $("#progressStats").innerHTML=[
    ["Vocabulary bank",DB.length+"","Total demo"],
    ["Reviewed",reviewed+"","Pernah diberi rating"],
    ["Mastered",mastered+"","Good / Easy"],
    ["Quiz accuracy",acc+"%",`${p.quizCorrect}/${p.quizTotal}`],
    ["Bookmark",bookmarked+"","Kata sulit tersimpan"]
  ].map(x=>`<div class="stat"><span>${x[0]}</span><b>${x[1]}</b><span>${x[2]}</span></div>`).join("");
  $("#masteryBars").innerHTML=topics().map(t=>{
    const arr=DB.filter(v=>v.topic===t);
    const pct=Math.round(arr.reduce((s,v)=>s+masteryPct(v),0)/arr.length);
    return `<div class="bar-row"><div class="bar-label"><span>${t} · ${topicLabel(t)}</span><span>${pct}%</span></div><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div></div>`;
  }).join("");
  $("#activityList").innerHTML=(p.activity.length?p.activity:[{text:"Belum ada aktivitas.",time:"Mulai dari flashcard atau quiz."}]).map(a=>`<div class="compact-item"><div>${a.text}</div><div class="compact-right">${a.time}</div></div>`).join("");
}

$$(".nav-btn,.go-view").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));
$("#loadDemoBtn").addEventListener("click",loadDemo);
$("#saveAiConfigBtn").addEventListener("click",saveAIConfig);
$("#analyzeAiBtn").addEventListener("click",analyzeWithAI);
$("#articleDeckBtn").addEventListener("click",openArticleDeck);
$("#weakReviewBtn").addEventListener("click",openWeakDeck);
$("#analyzeBtn").addEventListener("click",analyzeCustom);
$("#vocabSearch").addEventListener("input",renderVocab);
$("#topicFilter").addEventListener("change",renderVocab);
$("#levelFilter").addEventListener("change",renderVocab);
$("#bookmarkFilterBtn").addEventListener("click",()=>{state.bookmarkOnly=!state.bookmarkOnly;$("#bookmarkFilterBtn").classList.toggle("active",state.bookmarkOnly);renderVocab();});
$("#flashTopic").addEventListener("change",buildFlashDeck);
$("#flashMode").addEventListener("change",renderFlash);
$("#shuffleFlashBtn").addEventListener("click",()=>{state.flashDeck=shuffle(state.flashDeck);state.flashIndex=0;renderFlash();});
$("#flashCard").addEventListener("click",()=>$("#flashCard").classList.toggle("flipped"));
$("#flipFlashBtn").addEventListener("click",()=>$("#flashCard").classList.toggle("flipped"));
$("#prevFlashBtn").addEventListener("click",prevFlash);
$("#nextFlashBtn").addEventListener("click",nextFlash);
$$(".rate").forEach(b=>b.addEventListener("click",()=>rateCard(b.dataset.rating)));
$("#startQuizBtn").addEventListener("click",startQuiz);
$("#nextQuizBtn").addEventListener("click",()=>{state.quizIndex++;renderQuestion();});
$("#resetBtn").addEventListener("click",()=>{if(confirm("Hapus semua progress demo di perangkat ini?")){localStorage.removeItem("goiLabProgress");renderHome();renderProgress();buildFlashDeck();syncAIEndpointUI();}});
let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").classList.remove("hidden");});
$("#installBtn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#installBtn").classList.add("hidden");});
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js?v=2.1").catch(()=>{}));}

initSelects();
loadDemo();
renderHome();
renderVocab();
buildFlashDeck();
