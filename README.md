# Little India Brickfields — Laman Panduan Pelawat

Laman satu halaman ini menggunakan **Astro 7、Tailwind CSS 4、TypeScript 5** dan konfigurasi **Cloudflare Workers Static Assets**. Kandungan dipersembahkan dalam Bahasa Melayu untuk konteks Kuala Lumpur dan merangkumi pengalaman meneroka, makanan, waktu buka, maklumat pelawat, pengangkutan, parkir, tarikan berhampiran, FAQ serta JSON-LD.

## Persekitaran terkunci

| Item | Versi / tetapan |
| --- | --- |
| Node.js | `22.13.0` melalui `.node-version` dan `engines` |
| pnpm | `9.15.5` melalui `packageManager` |
| Astro | `7.2.1` |
| Tailwind CSS | `4.3.3` |
| Cloudflare CLI | `wrangler 4.121.0` |

Gunakan arahan berikut di direktori projek:

```bash
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Untuk menerbitkan ke Cloudflare Workers selepas membina, jalankan:

```bash
pnpm deploy
```

## Domain & penyeragaman URL

Domain rasmi ialah **`https://littleindiakl.com`**，ditetapkan pada pembolehubah `siteUrl` dalam `astro.config.mjs` — satu-satunya tempat yang perlu diubah. Apabila `site` diisi, binaan akan menghasilkan:

- `<link rel="canonical">` dan OG URL mutlak untuk semua halaman；
- `sitemap-index.xml` melalui `@astrojs/sitemap`；
- `public/robots.txt` yang menghala ke `https://littleindiakl.com/sitemap-index.xml`。

### HTTP → HTTPS dan www（wajib di Cloudflare）

Search Console menunjukkan HTTP、HTTPS 与 www 版本同时被索引。Ikuti langkah berikut supaya hanya satu versi wujud:

1. **Cloudflare Dashboard → SSL/TLS → Edge Certificates**： hidupkan **Always Use HTTPS** 与 **Automatic HTTPS Rewrites**（HTTP 301 ke HTTPS）。
2. **Cloudflare Dashboard → Rules → Redirect Rules**（atau Bulk Redirects）： 301 daripada `https://www.littleindiakl.com/*` ke `https://littleindiakl.com/*`。
3. HSTS dihantar melalui `public/_headers`（`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`）。 Hanya hidupkan `preload` selepas anda pasti semua subdomain menyokong HTTPS。
4. Kemas kini profil Google Business (Google Maps) supaya pautan laman web menggunakan `https://littleindiakl.com`。
5. Hantar semula `https://littleindiakl.com/sitemap-index.xml` di Search Console dan minta pengindeksan semula halaman utama。

## Menetapkan domain

Satu-satunya tempat untuk menambah domain ialah pembolehubah `siteUrl` dalam `astro.config.mjs`. Biarkan kosong ketika domain belum ditetapkan; binaan kekal berjalan tanpa canonical, URL Open Graph atau sitemap yang menggunakan domain sementara.

## Struktur kandungan & SEO

- **H1**: `Little India Brickfields: warna, rentak dan aroma Kuala Lumpur.`
- **H2** mengikut urutan: Teroka → Makan → Jiran & warisan → Waktu buka & maklumat pelawat → Arah & akses → Peta → Soalan lazim.
- **JSON-LD**: `TouristAttraction` + `LocalBusiness`（alamat, telefon, geo, `hasMap`, `openingHoursSpecification`, `aggregateRating`） serta `FAQPage`。
- Rating Google（4.3 / 14,282 ulasan, setakat September 2026） dipaparkan dengan nota sumber dan boleh berubah。

## Lesen foto

Foto jalan Little India Brickfields oleh **Yun Huang Yong** digunakan di bawah **CC BY 2.0**. Foto Sri Krishna Temple oleh **Shesmax** digunakan di bawah **CC BY-SA 4.0**. Kedua-dua pautan sumber dan atribusi tersedia terus di halaman dan dalam `research.md`.

## Catatan penerbitan

Laman ini tidak menggunakan pangkalan data, log masuk atau CMS. GA4 menggunakan ID yang dibekalkan, dan Google Maps dibenamkan dalam Bahasa Melayu (`ms-MY`).
