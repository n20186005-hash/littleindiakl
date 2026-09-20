import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// 在此唯一位置填写正式域名。留空时仍可正常构建（不输出 canonical、OG 绝对地址与 sitemap）。
const siteUrl = "https://littleindiakl.com";

export default defineConfig({
  site: siteUrl || undefined,
  integrations: siteUrl ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
