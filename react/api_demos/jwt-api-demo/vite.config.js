import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 服务器端 mock 模仿模拟
// vite 前端 模拟服务器 准备好了插件
// 前后端分离    mock的重要性：不能等后端接口写好了，前端要先写起来，模拟后端发送数据
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
export default defineConfig({
  plugins: [react(),
  viteMockServe({
    mockPath: 'mock',
    localEnabled: true,
  })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
