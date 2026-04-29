import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        london: resolve(__dirname, 'pink-guy/characters/london/index.html'),
        londonGallery: resolve(__dirname, 'pink-guy/characters/london/gallery/index.html'),
      },
    },
  },
});
