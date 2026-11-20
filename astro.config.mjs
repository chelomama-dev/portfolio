// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio final: en CI llega por la variable SITE_URL del repo (lo usan el sitemap, el RSS y las URLs canónicas)
  site: process.env.SITE_URL || 'https://example.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});
