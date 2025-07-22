import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // vite 工程化套件，在后端node 运行的
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
