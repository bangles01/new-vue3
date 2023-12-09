import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
      '@components': resolve(__dirname, 'src/components/'),
      '@utils': resolve(__dirname, 'src/utils/'),
      '@api': resolve(__dirname, 'src/utils/api/'),
    }
  },
  server: {
    host: true,
    port: 8080
  }
}));
