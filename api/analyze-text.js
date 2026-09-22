import { askJson } from './_openai.js';
export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'POST only'});
  try{
    const {title,text}=req.body||{};if(!text)return res.status(400).json({error:'text required'});
    const system=`Kamu memproses artikel Jepang untuk GoiScope, aplikasi JLPT N1/N2 berbahasa Indonesia. Bagi artikel per paragraf. Terjemahkan Indonesia secara natural. Buat satu string furigana penuh per paragraf (bacaan kana yang mudah dipetakan dengan teks asli). Pilih HANYA kosakata sulit N1/N2/advanced untuk highlights, tetapi jangan terlalu banyak karena pengguna dapat tap kata lain sendiri. Keluarkan JSON valid TANPA markdown: {"title":"...","category":"...","paragraphs":[{"jp":"teks asli","furigana":"...","id":"terjemahan Indonesia","highlights":["kata"]}]}`;
    res.status(200).json(await askJson(system,`Judul: ${title||'Artikel Jepang'}\n\n${text}`));
  }catch(e){res.status(500).json({error:e.message})}
}
