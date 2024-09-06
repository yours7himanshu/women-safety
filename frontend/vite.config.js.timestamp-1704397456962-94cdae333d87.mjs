import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Comment out or remove this proxy configuration
    // proxy: {
    //   '/api': {
    //     target: 'https://nominatim.openstreetmap.org',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
