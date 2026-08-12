import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// 在此唯一位置填写正式域名（例如 https://littleindia-kl.my）。留空时仍可正常构建。
const siteUrl = "";
const site = siteUrl ? new URL(siteUrl) : undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
