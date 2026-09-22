# GoiScope V8.1 — Reader + Practice PWA

V8.1 mempertahankan fitur V8 dan mengembalikan Practice Lab.

## Fitur utama
- Interactive Reader: tap kata Jepang apa pun.
- Vocabulary Bank: kata yang disimpan dari Reader otomatis menjadi bahan latihan.
- Practice Lab: Flashcard 4 arah, Quiz, Matching, Typing, Weak List, Progress.
- Theme Studio: Sakura, Sumi Night, Matcha, Seigaiha, Tokyo Neon, Shinbun.
- Focus Sound: synth/ambience offline + audio lokal.
- PWA: manifest + service worker + icon 192/512.

## Upgrade dari V8
V8.1 tetap menggunakan key localStorage V8 untuk Theme, Vocabulary Bank, Article, dan Reader Font, sehingga data V8 yang sudah tersimpan tidak sengaja diputus. Data Practice memakai storage baru `goiscope_v8_1_practice`.

## Deploy ke GitHub Pages
Upload seluruh isi ZIP ke ROOT repository (bukan ke subfolder), lalu commit. Setelah GitHub Pages selesai deploy, lakukan hard refresh. Karena cache service worker dinaikkan ke `goiscope-v8-1-practice-pwa-1`, cache V8 lama akan dibersihkan saat service worker baru aktif.

## Backend AI
Pada tahap V8.1 ini endpoint AI sengaja BELUM diubah, sesuai roadmap. Frontend masih memakai endpoint yang sama seperti V8 (`/api/analyze-text`, `/api/import-url`, `/api/lookup-word`). Setelah UI/PWA Practice stabil, backend akan dibenahi menjadi satu URL permanen.
