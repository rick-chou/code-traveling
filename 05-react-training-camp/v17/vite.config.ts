import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [react(), qiankun('react', { useDevMode: true })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      include: ['prop-types'],
    },
    build: {
      commonjsOptions: { exclude: ['prop-types'], include: [] },
    },
    // 这里对应 nginx 中的 location
    base: env.VITE_APP_BASE_URL,
  });
};
