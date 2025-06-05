# DeepSeek
- 大模型在哪里？
- 远程
   http api 请求
- LLM 服务
  api 一样
  fetch 赋予了 JS 新生命
# webLLM

智能前端的战场
- 如何把DeepSeek 引入前端

 ## 运行项目
直接在浏览器打开`index.html`文件即可。

## 服务器端返回
- 输入url 或者点击一个链接（死板）
- 向服务器端发送请求
- node/java 请求，去数据库取数据，  生成html 字符串
- 返回html 字符串


## fetch 请求
- 滚动到底部后，加载更多数据  web2.0 丰富应用体验
看到新的内容
- fetch url
    - 不需要刷新页面，主动去服务器端取一次，DOM更新页面
- 点赞的时候？
   js fetch api 发送点赞请求

- LLM AI 时代
   fetch 取来大模型的能力  智能前端时代

## http 请求
    - 请求行  包含：请求方法（GET、POST）、URL（请求的地址）、请求的协议
    POST https://api.deepseek.com/chat/completions
    - 请求头  
      设置各种头部信息
      {
        Content-Type: application/json, //传送的内容的类型
        Authorization:`Bearer api-key`, // 请求凭证
      }
    - 请求体
      GET 没有请求体
      POST 可以有请求体











