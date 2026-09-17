# 語彙Lab N1/N2

PWA prototype untuk belajar kosakata Jepang tingkat lanjut dari artikel.

## Fitur utama
- Artikel Jepang per paragraf
- Furigana pada baris terpisah
- Terjemahan Indonesia
- Vocabulary N1 / N2 / Advanced
- Sinonim, nuansa, collocation, contoh kalimat
- Flashcard 4 arah
- Rating Again / Hard / Good / Easy
- Quiz per bidang
- Deck khusus artikel
- Bookmark kata sulit
- Review kata lemah
- Progress tersimpan di browser
- Bisa di-install sebagai PWA

## Deploy ke GitHub Pages
1. Buat repository GitHub baru.
2. Upload seluruh isi folder ini ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Klik **Save**.
7. Tunggu sampai URL GitHub Pages muncul.

## Catatan
Prototype ini masih frontend lokal. Terjemahan/furigana otomatis untuk artikel kustom penuh akan membutuhkan modul AI/backend di versi berikutnya.


## Tambahan di versi ini
- Tampilan dibuat lebih terang dengan nuansa sakura.
- Flashcard sekarang punya tombol **Prev / Flip / Next**.
- Ditambahkan **AI Connector** di halaman artikel.
- Dua ikon PWA diletakkan langsung di root repository supaya mudah upload dari HP/laptop.


## V2.1 Cache Fix
Membersihkan cache service worker lama dan menambahkan cache-busting agar tampilan Sakura terbaru langsung terambil setelah deploy.


# V5 Unified

Fitur baru:
- Article Library berbasis IndexedDB.
- Artikel bisa disimpan dan dibuka berulang kali secara offline.
- AI result otomatis disimpan ke Library.
- Search dan filter Library per kategori.
- Export/Import backup JSON.
- Source/URL artikel disimpan.
- AI Connector tetap tersedia untuk backend Vercel.
- Flashcard Article Deck tetap melekat pada artikel.

Catatan:
- IndexedDB tersimpan per browser/perangkat. Untuk sinkronisasi HP ↔ laptop diperlukan cloud database (mis. Supabase) pada tahap koneksi cloud.
- Jangan hapus data situs/browser jika belum membuat backup.
