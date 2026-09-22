import { askJson } from './_openai.js';
function stripHtml(html){return html.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim()}
export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'POST only'});
  try{
    const {url}=req.body||{};if(!/^https?:\/\//i.test(url||''))return res.status(400).json({error:'URL tidak valid'});
    const r=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0 GoiScopeV8/1.0'}});if(!r.ok)throw new Error(`Situs mengembalikan ${r.status}`);
    const html=await r.text();const text=stripHtml(html).slice(0,30000);
    const system=`Ekstrak isi artikel Jepang utama dari teks halaman web berikut, abaikan menu, iklan, footer dan navigasi. Lalu siapkan untuk pelajar JLPT N1/N2 Indonesia. Keluarkan JSON valid TANPA markdown: {"title":"judul artikel","category":"kategori ringkas","paragraphs":[{"jp":"paragraf Jepang asli","furigana":"bacaan kana","id":"terjemahan Indonesia natural","highlights":["kosakata N1/N2/ADV penting"]}]}. Pertahankan urutan paragraf. Jangan mengarang bagian artikel yang tidak ada.`;
    res.status(200).json(await askJson(system,`URL: ${url}\n\nTeks halaman:\n${text}`));
  }catch(e){res.status(500).json({error:e.message})}
}
