# GoiScope V8.2 Final Candidate PWA

Frontend PWA untuk GitHub Pages.

## Fitur V8.2
- Interactive Reader + AI analysis
- Import artikel via URL melalui backend permanen Vercel
- Tap-any-word AI lookup
- Vocabulary Bank
- Practice: Flashcard, Quiz, Matching, Typing, Weak List, Progress
- Daily Review / SRS queue + streak
- Article Library + History + Favorite + status selesai
- Theme Studio + Focus Music
- Settings Center
- Backup / Restore JSON
- Offline mode untuk artikel tersimpan, vocab, practice, theme dan fitur lokal
- AI loading progress + Cancel
- PWA update notification

## Backend permanen
Frontend ini memanggil backend berikut dan tidak menyimpan OpenAI API key:
https://goiscope-ai-backend-jlptn-1and-n2.vercel.app

Backend dikelola di repo/backend Vercel terpisah. Jangan masukkan OPENAI_API_KEY ke frontend.

## Upload ke GitHub Pages
Upload isi folder ini langsung ke root repo frontend `-ScopeJLPTN1-and-N2`.
File utama harus sejajar: `index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `service-worker.js`.

Karena versi lama memakai service worker cache-first, saat pertama kali naik ke V8.2 lakukan satu kali hard refresh (Ctrl+Shift+R) atau unregister service worker lama. Setelah V8.2 aktif, update berikutnya akan menampilkan banner "Versi baru tersedia".
