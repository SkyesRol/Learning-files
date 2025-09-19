import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 正向代理，拦截请求中所有以/api开始的请求
    proxy: {
      // 代理所有以/api开头的请求
      // vite是后端，不跨域
      // 它将所有文件打包运行

      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,


      }
    }
  }
})
