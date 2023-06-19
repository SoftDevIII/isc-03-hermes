/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: ['src/main.tsx', 'src/vite-env.d.ts'],
      reporter: ['text', 'json', 'html'],
      all: true,
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90
    }
  }
});
