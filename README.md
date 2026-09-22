# GoiScope V8 — Interactive Reader Studio

Fokus V8:
1. Theme Studio: Sakura, Sumi Night, Matcha, Seigaiha, Tokyo Neon, Shinbun.
2. Focus Sound: synth/ambience offline + file audio lokal.
3. Tap-any-Japanese-word: kata yang tidak di-highlight AI tetap bisa ditap.
4. Context lookup: reading, arti Indonesia, JLPT/register, nuansa, sinonim, collocation.
5. Add to Vocabulary Bank dari bottom sheet satu tap.
6. Reader controls: furigana, terjemahan, AI highlight, ukuran font.
7. PWA mobile dengan bottom navigation.

## Deploy
Upload isi folder ini ke root repository/Vercel.

Environment variables untuk fitur AI:
- `OPENAI_API_KEY` = API key server-side (JANGAN taruh di app.js / GitHub publik)
- `OPENAI_MODEL` = opsional; default `gpt-5.6-luna`

Tanpa backend/API key:
- Demo article tetap jalan.
- Theme Studio tetap jalan.
- Focus Sound tetap jalan.
- Tap-any-word tetap mendeteksi kata; beberapa kata demo punya kamus lokal.
- Kata di luar kamus lokal akan meminta endpoint AI.

## Catatan Android
Tap kata biasa menggunakan `Intl.Segmenter('ja')` bila tersedia dan fallback ke karakter Jepang di sekitar titik tap. Bottom sheet dirancang untuk layar HP.
