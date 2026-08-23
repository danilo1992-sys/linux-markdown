// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://meek-beignet-1b2647.netlify.app',
  integrations: [pagefind()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['nextel-processed-promoting-regulations.trycloudflare.com']
    }
  }
});
