import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const resolve = require('resolve')
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@hooks': '@/hooks',
      '@router': '@/router',
      '@store': '@/store',
      '@containers': '@/containers',
      '@components': '@/components',
      '@type': '@/type',
    },
  },
})
