import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap()],
  markdown: {
    remarkPlugins: [
      [
        remarkToc, {
          heading: "Índice"
        }
      ],
      remarkReadingTime
  ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
    }
  },
  scopedStyleStrategy: "where",
  output: "server",
  adapter: cloudflare()
});