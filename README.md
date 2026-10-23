# NovaPanel UI Prototype

Dashboard front-end yang terinspirasi dari struktur visual referensi. Bukan salinan merek pihak lain.

## Menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di browser, atau jalankan melalui static hosting / Live Server.
3. Pilih **Buat akun** untuk membuat akun di `add.html`.
4. Setelah pendaftaran, dashboard akan menampilkan nama, username, email, dan avatar berdasarkan akun yang sedang login.

## Isi
- `index.html`: login
- `add.html`: pendaftaran akun
- `dashboard.html`: dashboard, inbox, numbers, sender, pengaturan profil
- `style.css`: tampilan responsif
- `app.js`: fungsi demo

## Catatan keamanan
Ini adalah prototipe front-end. Data akun tersimpan di `localStorage` browser dan password tidak aman untuk produksi. Jangan gunakan password asli. Untuk layanan sungguhan, gunakan backend dengan hashing password, session aman, HTTPS, validasi server, pembatasan percobaan login, dan database. Fitur SMS memerlukan API/backend penyedia yang sah; data pada dashboard saat ini hanya placeholder.
