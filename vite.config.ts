import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Essencial pro Shadcn
    },
  },
  build: {
    outDir: 'dist',  // Força pro Vercel
    emptyOutDir: true,
    sourcemap: false,  // Desabilita se tiver erro de source maps
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Evita chunks infinitos
      },
    },
  },
  // Desabilita watch se tiver
  watch: false,
});
