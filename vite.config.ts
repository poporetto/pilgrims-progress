import { defineConfig } from 'vite';

export default defineConfig({
  // relative base + docs/ output so the game can be served from GitHub Pages
  base: './',
  build: {
    outDir: 'docs',
  },
});
