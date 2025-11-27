// astro.config.mjs

import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url'; // NOUVEL IMPORT

export default defineConfig({
  // ... autres configurations Astro
  vite: {
    resolve: {
      alias: {
        // C'est l'alias qui mappe '~' au dossier '/src'
        '~': fileURLToPath(new URL('./src', import.meta.url)), 
      },
      // Ajoutez ceci pour forcer la résolution des extensions, au cas où
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.astro'],
    },
  },
});