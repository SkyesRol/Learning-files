# 全栈
## 表演型项目
- 前端 react
- 后端 java/node/go
- mockjs 前端伪接口
    /api axios
    pnpm i vite-plugin-mock

## vite-plugin-mock

    - mock
    前端在后端给出真实接口前
    需要mock一下，前端自己来伪造一个接口
    - vite-plugin-mock 插件
    - mock 服务启动
    - /mock/test.js 根目录
        export default [    // 其为数组，返回多个接口
    {
        url: '/api/todos',
        method: 'get',
        response: () => {
            
            return {
                code: 0,
                msg: 'success',
                data: todos,
            }
        }
    }
]


- 前后端联调
    - 开会立项
    - 前后端 接口文档
    












