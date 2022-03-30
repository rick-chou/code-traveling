import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, './src'),
    //   '@pages': '@/pages',
    //   '@res': '@/res',
    //   '@components': '@/components',
    // },
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@api', replacement: path.resolve(__dirname, './src/api') },
      { find: '@res', replacement: path.resolve(__dirname, './src/res') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      // 解决 '~antd/es/style/themes/index.less' wasn't found.
      { find: /^~/, replacement: '' },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  base: './',
});
