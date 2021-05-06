import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const resolve = require('resolve')
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@router': '@/router',
      '@store': '@/store',
      '@containers': '@/containers',
      '@components': '@/components',
      '@utils': '@/utils',
      '@assets': '@/assets',
      '@types': '@/types',
    },
  },
})