// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio final (se puede sobrescribir con la variable SITE_URL) (lo usan el sitemap, el RSS y las URLs canónicas)
  site: process.env.SITE_URL || 'https://rlopezbarbarin.dev',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
    },
  },
});
