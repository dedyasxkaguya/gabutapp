
# 🦋 Gabut KNY App

Aplikasi web sederhana untuk mencari dan melihat detail karakter dari anime/manga **Kimetsu no Yaiba (Demon Slayer)**. Proyek ini dibangun dengan fokus pada UI/UX yang responsif menggunakan **Tailwind CSS**.

## ✨ Fitur Utama

- **Pencarian Karakter:** Cari karakter KNY berdasarkan nama.
- **Tampilan Detail Karakter:** Lihat informasi mendalam seperti ras, jenis kelamin, usia, gaya bertarung, afiliasi, dan kutipan (quote).
- **Fitur Favorit:** Simpan karakter favorit Anda di penyimpanan lokal (*local storage*).
- **Navigasi Responsif:** Navigasi yang mudah dengan ikon.

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Frontend** | HTML5, JavaScript (ES6+) | Struktur dasar dan logika aplikasi. |
| **Styling** | [**Tailwind CSS**](https://tailwindcss.com/) v4 | Kerangka kerja CSS utility-first untuk styling cepat dan responsif. |
| **Ikon** | [**Bootstrap Icons**](https://icons.getbootstrap.com/) | Digunakan untuk ikon navigasi dan aksi. |
| **Pop-up/Notifikasi**| [**SweetAlert2**](https://sweetalert2.github.io/) | Untuk notifikasi yang menarik (misalnya, pesan error). |
| **Data API** | `https://demon-slayer-api.onrender.com/v1/` | Endpoint untuk mengambil data detail karakter KNY. |

## 🚀 Instalasi dan Penggunaan

Proyek ini adalah aplikasi *client-side* murni, jadi Anda tidak memerlukan *backend* atau proses *build* yang rumit.

### Prerequisites

Anda hanya perlu *web browser* modern (Chrome, Firefox, Edge, dll.).

### Menjalankan Lokal

1. **Clone repositori ini** (jika sudah ada di Git):
   ```bash
   git clone https://github.com/dedyasxkaguya/gabutapp
   cd GABUTAPP
````

2.  **Buka file** `index.html` dan `fav.html` di browser Anda.
      * `index.html`: Halaman utama untuk pencarian karakter.
      * `fav.html`: Halaman untuk melihat karakter favorit Anda.

### Struktur File Penting

```
.
├── index.html          # Halaman utama aplikasi (Pencarian)
├── fav.html            # Halaman karakter favorit
├── style/
│   ├── style.css       # File CSS kustom/tambahan
│   └── fav.css         # File CSS khusus untuk halaman favorit
├── script/
│   ├── script.js       # Logika JS untuk halaman utama (Pencarian)
│   └── fav.js          # Logika JS untuk halaman favorit
└── data/
    └── character.json  # Data karakter lokal untuk tampilan awal
```

## 📝 Catatan Pengembang

### Halaman Utama (`index.html` & `script.js`)

  - Menggunakan `getData()` untuk memuat daftar karakter awal dari `./data/character.json`.
  - Fungsi `getDataChar(name)` melakukan *fetch* data detail karakter dari **Demon Slayer API** menggunakan `https://demon-slayer-api.onrender.com/v1/`.
  - Fitur favorit (`addFav`) menyimpan nama karakter di *localStorage* dengan kunci `favChar`.

### Halaman Favorit (`fav.html` & `fav.js`)

  - Mengambil daftar karakter favorit dari *localStorage*.
  - Melakukan *fetch* detail untuk **setiap** karakter favorit menggunakan **Demon Slayer API**.
  - Terdapat fungsi untuk menampilkan/menyembunyikan detail karakter tambahan saat tombol **detail** (`<i class="bi bi-search"></i>`) diklik.

## 🧑‍💻 Kontribusi

Jika Anda menemukan *bug* atau memiliki saran perbaikan, jangan ragu untuk membuka **Issue** atau mengajukan **Pull Request**.

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**.

-----

**Dibuat dengan ❤️ oleh dedyas**
[(GitHub: dedyasxkaguya)](https://github.com/dedyasxkaguya)

```
```
