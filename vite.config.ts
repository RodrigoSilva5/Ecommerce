import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['typescript'], // Exclude TypeScript from optimization
  },
  build: {
    rollupOptions: {
      // Suppress TypeScript errors
      onwarn(warning, warn) {
        if (warning.code === 'TS0') return; // Suppress all TypeScript errors
        warn(warning);
      },
    },
  },
});

