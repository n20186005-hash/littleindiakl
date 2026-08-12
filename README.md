# Little India Brickfields — Laman Panduan Pelawat

Laman satu halaman ini menggunakan **Astro 7、Tailwind CSS 4、TypeScript 5** dan konfigurasi **Cloudflare Workers Static Assets**. Kandungan dipersembahkan dalam Bahasa Melayu untuk konteks Kuala Lumpur dan merangkumi peta, pengangkutan, makanan, parkir, tarikan berhampiran, FAQ serta JSON-LD.

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

## Menetapkan domain

Satu-satunya tempat untuk menambah domain ialah pembolehubah `siteUrl` dalam `astro.config.mjs`. Biarkan kosong ketika domain belum ditetapkan; binaan kekal berjalan tanpa canonical, URL Open Graph atau sitemap yang menggunakan domain sementara.

## Lesen foto

Foto jalan Little India Brickfields oleh **Yun Huang Yong** digunakan di bawah **CC BY 2.0**. Foto Sri Krishna Temple oleh **Shesmax** digunakan di bawah **CC BY-SA 4.0**. Kedua-dua pautan sumber dan atribusi tersedia terus di halaman dan dalam `research.md`.

## Catatan penerbitan

Laman ini tidak menggunakan pangkalan data, log masuk atau CMS. GA4 menggunakan ID yang dibekalkan, dan Google Maps dibenamkan dalam Bahasa Melayu (`ms-MY`).
