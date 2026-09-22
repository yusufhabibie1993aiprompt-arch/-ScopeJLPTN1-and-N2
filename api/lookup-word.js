import { askJson } from './_openai.js';
export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'POST only'});
  try{
    const {word,sentence,articleTitle}=req.body||{};if(!word)return res.status(400).json({error:'word required'});
    const system=`Kamu adalah kamus kontekstual bahasa Jepang untuk pelajar Indonesia JLPT N1/N2. Analisis HANYA kata yang diminta sesuai kalimat konteks. Keluarkan JSON valid tanpa markdown dengan schema: {"reading":"hiragana", "meaning":"arti Indonesia natural sesuai konteks", "jlpt":"N1|N2|N3|ADV|?", "register":"register pemakaian", "nuance":"penjelasan singkat nuansa", "synonyms":["kata Jepang"], "collocations":["frasa Jepang"]}. Jangan menambahkan teks di luar JSON.`;
    const input=`Judul artikel: ${articleTitle||'-'}\nKata: ${word}\nKalimat: ${sentence||'-'}`;
    res.status(200).json(await askJson(system,input));
  }catch(e){res.status(500).json({error:e.message})}
}
