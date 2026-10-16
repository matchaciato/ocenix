export interface DocContentData {
  title: string
  description: string
  badge?: 'New' | 'Updated' | 'Beta'
  content: string
}

export const docsContentMap: Record<string, DocContentData> = {
  introduction: {
    title: 'Introduction',
    description: 'Filosofi desain, arsitektur dasar, dan ekosistem komponen Ocenix UI.',
    content: `
## Filosofi Desain

**Ocenix UI** dirancang untuk menjembatani kesenjangan antara kemudahan penggunaan, aksesibilitas tingkat industri, dan estetika modern yang memukau. Kami mengambil esensi terbaik dari 4 ekosistem terkemuka:

1. **Radix UI**: Fondasi komponen tanpa gaya yang patuh 100% pada standar WAI-ARIA dan navigasi keyboard.
2. **Tailwind CSS v4**: Utilitas styling berbasis variabel CSS murni yang fleksibel tanpa overhead build tool rumit.
3. **Magic UI**: Lapisan animasi modern (Bento Grid, Border Beam, Marquee) dengan akselerasi GPU hardware.
4. **Bootstrap**: Ketegasan arsitektur layout dan konsistensi skala tipografi.

## Mengapa Menggunakan Ocenix UI?

* **Zero-FOUC Dark Mode**: Tidak ada lagi efek kedipan warna putih saat aplikasi dimuat pertama kali.
* **Single Source of Truth**: Struktur navigasi, sitemap, breadcrumb, dan paginasi digerakkan secara DRY oleh konfigurasi terpusat.
* **Type-Safe**: Seluruh kontrak props ditulis menggunakan TypeScript ketat.
* **Modular & Copy-Paste Friendly**: Ambil hanya komponen yang Anda butuhkan tanpa dependensi berlebih.
`,
  },
  installation: {
    title: 'Installation & Setup',
    description: 'Panduan langkah demi langkah mengintegrasikan Ocenix UI ke dalam project web Anda.',
    content: `
## Persyaratan Sistem

Pastikan environment pengembangan Anda memenuhi versi berikut:
* **Node.js**: Versi 18.0.0 atau lebih baru.
* **Package Manager**: pnpm, npm, yarn, atau bun.
* **React**: Versi 18 atau React 19.

## Langkah Instalasi

### 1. Inisialisasi Dependensi Inti

Jalankan perintah berikut pada terminal proyek Anda:

\`\`\`bash
pnpm add tailwindcss @tailwindcss/vite clsx tailwind-merge lucide-react
\`\`\`

### 2. Konfigurasi Tailwind CSS v4

Tambahkan plugin pada file \`vite.config.ts\`:

\`\`\`ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
\`\`\`

### 3. Tambahkan Desain Token Semantik

Import stylesheet token ke dalam \`src/index.css\`:

\`\`\`css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #09090b;
  --primary: #09090b;
  --primary-foreground: #fafafa;
  --radius: 0.5rem;
}

.dark {
  --background: #09090b;
  --foreground: #fafafa;
  --primary: #fafafa;
  --primary-foreground: #18181b;
}
\`\`\`
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
