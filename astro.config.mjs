// astro.config.mjs

import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url'; // NÉCESSAIRE pour une résolution fiable des alias Vite

export default defineConfig({
  // 1. Configuration du chemin de base pour le déploiement GitHub Pages
  // Ceci est crucial pour que tous les liens (CSS, JS, navigation) fonctionnent
  // sur l'URL du sous-dossier : yourusername.github.io/mon-portfolio-astro/
  base: '/mon-portfolio-astro',

  // 2. Configuration de Vite pour gérer l'alias '~' et le chemin de base
  vite: {
    resolve: {
      // Définition de l'alias '~' pour pointer vers le dossier 'src'
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
      // Configuration explicite des extensions pour aider Rollup/Vite à trouver les fichiers
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.astro'],
    },
  },
});