import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures relative asset paths work on GitHub Pages, Vercel, Netlify, or custom domain
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
});
