// astro.config.mjs

import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... autres configurations
  vite: {
    resolve: {
      alias: {
        '~': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});