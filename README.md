# Tujuhcahaya

Platform publikasi editorial dan profil korporat digital **Tujuhcahaya**, dibangun dengan Astro, EmDash CMS, dan sistem desain Material Design 3 Expressive (MD3X).

---

## Arsitektur Teknis

- **Framework**: [Astro 5](https://astro.build/) (`@astrojs/node` standalone SSR)
- **Content Engine**: [EmDash CMS 1.0](https://github.com/emdash-cms/emdash)
- **UI & Interaktivitas**: React 19 Islands + Astro Native Components (`C7*`)
- **Styling**: Tailwind CSS v4 + 7C Custom Tokens (MD3X 5-tier Surface Containers, 1px Hairline Grid)
- **Tipografi**: Google Sans Text / Google Sans Flex
- **Database**: SQLite (local storage & WAL mode)

---

## Kebutuhan Sistem

- **Node.js**: `v20.x` atau `v22.x` (disarankan LTS)
- **Package Manager**: `npm` (atau `pnpm` / `yarn`)

---

## Menjalankan Proyek Secara Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/h20ray/tujuhcahaya.git
   cd tujuhcahaya
   ```

2. **Salin konfigurasi environment:**
   ```bash
   cp .env.example .env
   ```

3. **Install dependensi:**
   ```bash
   npm install
   ```

4. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Aplikasi akan aktif di `http://localhost:4321`.  
   Panel administrasi EmDash dapat diakses di `http://localhost:4321/_emdash/admin`.

---

## Perintah Tersedia

| Command | Fungsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server development lokal |
| `npm run build` | Menjalankan proses kompilasi produksi Astro |
| `npm run preview` | Menjalankan preview build produksi secara lokal |
| `npm run start` | Menjalankan server Node.js hasil build produksi |
| `npm run typecheck` | Menjalankan validasi tipe TypeScript (`astro check`) |

---

## Struktur Folder

```text
src/
├── components/          # Komponen UI C7 (Masthead, PostCard, Badge, Logo, Stack)
├── i18n/                # Terjemahan UI bilingual (ID / EN)
├── layouts/             # Layout utama Base.astro
├── lib/                 # Adapter CMS (7c-cms.ts) dan helper SEO (7c-seo.ts)
├── pages/               # Routing halaman publik (/en/, [slug].astro, index.astro)
└── styles/              # CSS tokens, hairline grid, base, prose
public/                  # Aset statis, favicon, logo SVG
scripts/                 # Helper script automasi & audit
seed/                    # Skema koleksi dan inisialisasi awal EmDash
```

---

## Lisensi

Proprietary © Tujuhcahaya. Seluruh hak cipta dilindungi undang-undang.
