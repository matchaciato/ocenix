export interface DocContentData {
  title: string
  description: string
  badge?: 'New' | 'Updated' | 'Beta'
  content: string
}

export const docsContentMap: Record<string, DocContentData> = {
  introduction: {
    title: 'Introduction',
    description: 'Filosofi desain, arsitektur dasar, dan ekosistem komponen native Ocenix UI.',
    content: `
## Filosofi Desain

**Ocenix UI** dirancang untuk menghadirkan komponen antarmuka web modern dengan pendekatan **Full Native**: HTML5 semantik, CSS3 murni, dan Vanilla JavaScript tanpa ketergantungan pada runtime framework tertentu.

Kami menggabungkan keunggulan terbaik dari standar web modern:

1. **Native-First Architecture**: Komponen dapat dijalankan di lingkungan HTML murni, PHP, Laravel, WordPress, Astro, mau pun integrasi framework modern.
2. **WAI-ARIA Accessibility**: Standar aksesibilitas keyboard dan pembaca layar tertanam langsung pada atribut native (role, aria-expanded, aria-checked, aria-modal).
3. **Hardware-Accelerated CSS Motion**: Transisi dan animasi dinamis (Bento Grid, Border Beam, Marquee, Meteors) ditenagai oleh CSS GPU transforms murni.
4. **Zero-FOUC Dark Mode**: Perpindahan tema instan bebas kedipan dengan token CSS semantik.

## Tiga Cara Menggunakan Ocenix UI

1. **Via CDN**: Tambahkan tag \`<link>\` dan \`<script>\` langsung ke file HTML Anda.
2. **Download File Asset**: Simpan \`ocenix.min.css\` dan \`ocenix.min.js\` ke folder aset statis project Anda.
3. **Copy-Paste Modular**: Di setiap halaman dokumentasi komponen, Anda dapat menyalin tab **HTML**, **CSS**, dan **JS** secara terpisah sesuai kebutuhan.
`,
  },
  installation: {
    title: 'Installation & Setup',
    description: 'Panduan integrasi native HTML, CSS, dan JavaScript Ocenix UI ke dalam project web Anda.',
    content: `
## Konsep Full Native

Ocenix UI tidak memerlukan instalasi library npm khusus (\`pnpm add\`). Anda cukup menyertakan stylesheet CSS dan file JavaScript pendukung langsung ke dalam project web Anda.

## Metode 1: Integrasi CDN (Cepat & Siap Pakai)

Sisipkan link stylesheet CSS dan tag script berikut ke dalam tag \`<head>\` pada file HTML Anda:

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplikasi Saya</title>

  <!-- Ocenix UI CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.css" />

  <!-- Ocenix UI JavaScript (Opsional untuk komponen interaktif) -->
  <script src="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.js" defer></script>
</head>
<body class="bg-background text-foreground">
  <button type="button" class="ox-btn ox-btn-primary">
    Hello Ocenix UI
  </button>
</body>
</html>
\`\`\`

## Metode 2: Download File Asset Lokal

Jika Anda bekerja secara offline atau ingin menyimpan aset di dalam server sendiri:
1. Unduh berkas \`ocenix.min.css\` dan simpan pada direktori \`/css/ocenix.min.css\`.
2. Unduh berkas \`ocenix.min.js\` dan simpan pada direktori \`/js/ocenix.min.js\`.
3. Tautkan kedua berkas tersebut di dokumen HTML:

\`\`\`html
<link rel="stylesheet" href="./css/ocenix.min.css" />
<script src="./js/ocenix.min.js" defer></script>
\`\`\`

## Metode 3: Salin Tab HTML, CSS & JS per Komponen

Setiap komponen di dokumentasi Ocenix UI dilengkapi dengan tab terpisah untuk:
* **HTML**: Struktur markup semantik dan atribut aksesibilitas ARIA.
* **CSS**: Aturan gaya dan animasi murni yang dapat disesuaikan via variabel token.
* **JS**: Skrip Vanilla JavaScript untuk mengontrol interaktivitas (seperti modal, akordion, tab, dan toggle).
`,
  },

  theming: {
    title: 'Theming & Tokens',
    description: 'Kustomisasi variabel warna semantik, radius sudut, dan skala tipografi.',
    content: `
## Struktur Desain Token

Ocenix UI memisahkan token warna ke dalam lapisan semantik abstrak sehingga tema terang dan gelap dapat berganti instan:

| Token Semantik | Deskripsi Penggunaan |
| :--- | :--- |
| \`--background\` | Latar belakang kanvas utama aplikasi. |
| \`--foreground\` | Warna teks primer pada kanvas. |
| \`--card\` | Latar belakang kontainer kartu dan panel. |
| \`--primary\` | Warna tombol dan indikator aksi utama. |
| \`--muted\` | Latar sekunder dan teks deskripsi halus. |
| \`--destructive\` | Status error, validasi gagal, dan aksi berbahaya. |

## Radius Token

Anda dapat mengatur sudut lengkung komponen secara terpusat melalui variabel \`--radius\`:
* \`sm\`: 0.25rem (4px)
* \`md\`: 0.375rem (6px)
* \`lg\`: 0.5rem (8px) – Standar default
`,
  },
  'dark-mode': {
    title: 'Dark Mode Integration',
    description: 'Arsitektur bebas kedipan (Zero-FOUC) dengan sinkronisasi sistem dan penyimpanan lokal.',
    content: `
## Masalah FOUC di Lingkungan Produksi

Sebagian besar implementasi dark mode di React mengalami masalah **Flash of Unstyled Color (FOUC)** karena React baru membaca preferensi tema di \`localStorage\` setelah hydration selesai di browser.

## Solusi Zero-FOUC Ocenix UI

Tambahkan script sinkronus langsung pada \`<head>\` di file \`index.html\` sebelum bundle JavaScript dimuat:

\`\`\`html
<script>
  (function() {
    try {
      var storageKey = 'ocenix-ui-theme';
      var stored = localStorage.getItem(storageKey);
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      var isDark = stored === 'dark' || (!stored && mql.matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
</script>
\`\`\`
`,
  },
  accessibility: {
    title: 'Accessibility Standards',
    description: 'Komitmen aksesibilitas WAI-ARIA dan navigasi keyboard penuh.',
    content: `
## Prinsip Aksesibilitas

Setiap komponen yang ada di dalam Ocenix UI mematuhi pedoman aksesibilitas berikut:

1. **Focus Ring Kontras Tinggi**: Setiap elemen interaktif memiliki outline ring yang terlihat jelas saat dinavigasi menggunakan keyboard.
2. **Atribut ARIA Otomatis**: Penggunaan \`role="switch"\`, \`aria-checked\`, dan \`aria-label\` secara inheren.
3. **Reduced Motion**: Bagi pengguna dengan preferensi sensitivitas gerakan (\`prefers-reduced-motion\`), seluruh durasi animasi dinonaktifkan otomatis.

## Navigasi Keyboard Terstandar

* \`Tab\` / \`Shift + Tab\`: Pindah fokus antar elemen.
* \`Enter\` / \`Space\`: Mengaktifkan tombol atau mengubah status toggle switch.
* \`Escape\`: Menutup drawer navigasi, dialog, atau menu popover.
`,
  },
  'tokens/colors': {
    title: 'Colors Palette',
    description: 'Katalog warna semantik netral, aksen primer, dan indikator status.',
    content: `
## Palet Warna Semantik

Palet warna netral zinc/slate memberikan kontras ideal untuk keterbacaan teks teknis:

| Warna | Varian Light | Varian Dark | Kegunaan |
| :--- | :--- | :--- | :--- |
| **Canvas** | #ffffff | #09090b | Background utama halaman |
| **Card** | #ffffff | #121215 | Permukaan panel & elevated cards |
| **Primary** | #09090b | #fafafa | Tombol aksi primer |
| **Border** | #e4e4e7 | #27272a | Garis pemisah dan stroke input |
| **Destructive** | #ef4444 | #ef4444 | Aksi hapus dan badge error |
`,
  },
}
