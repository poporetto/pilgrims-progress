import { readFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import { sitePages } from './src/site/pages';

// The guide and episode pages plus sitemap.xml: written into the build, and
// served as-is by the dev server (restart it after editing their content).
function storyPages(): Plugin {
  const files = sitePages(readFileSync(new URL('./src/site/pages.css', import.meta.url), 'utf8'));
  return {
    name: 'story-pages',
    generateBundle() {
      for (const [fileName, source] of Object.entries(files)) this.emitFile({ type: 'asset', fileName, source });
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url ?? '').split('?')[0].replace(/^\//, '');
        const file = files[path.endsWith('/') ? `${path}index.html` : path];
        if (!file) return next();
        res.setHeader('Content-Type', path.endsWith('.xml') ? 'application/xml' : 'text/html; charset=utf-8');
        res.end(file);
      });
    },
  };
}

export default defineConfig({
  // relative base + docs/ output so the game can be served from GitHub Pages
  base: './',
  plugins: [storyPages()],
  build: {
    outDir: 'docs',
  },
});
