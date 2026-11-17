// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// 站点域名占位：正式域名确定后只改这一处（以及 .env 里的 SITE_URL）
const SITE = process.env.SITE_URL ?? "https://kali-lab.example.com";

export default defineConfig({
  site: SITE,
  trailingSlash: "ignore",
  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/products/i3": "/products/i3wm/",
    "/products/kde-v4": "/products/kde/",
    "/community": "/about/",
  },
});
