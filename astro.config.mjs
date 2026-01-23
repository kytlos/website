import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kytlor.github.io',
  integrations: [tailwind()],
  output: 'static',
  base: '/website/',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
