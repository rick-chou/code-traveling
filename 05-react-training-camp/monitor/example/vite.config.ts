import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), qiankun('react-demo', { useDevMode: true })],
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@chou/monitor': path.resolve(__dirname, '../index.tsx'),
    },
  },
});
