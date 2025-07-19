import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// 跨域问题
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tts': {
        target: 'https://openspeech.bytedance.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/tts/, ''),
      }
    },
  },
})
