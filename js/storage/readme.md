# Storage
- 前端存储
    - localStorage
    - cookie
    存储啥玩意
       - 登录状态
       - 购物车
    - session
    - indexDB
- 后端存储
    MySQL
    NoSQL
    MongoDB
- 缓存

- npm i -g nodemon

给node自动更新
随代码更新，自动更新

运行：
 - nodemon filename.js
 

## 首页
- 用户的登录状态
    cookie
    - 服务器识别用户
    - B/S 架构软件 http 协议
    - http 的 0.9 版本，90年代，没有身份这样的东西
    - http 是**无状态协议**
      请求一次或一千次，拿到的内容都一致
    - http 1.0 正式版 
      在这个版本正式有了请求头 header
      设计出来了 Content-Type
      Authorization
      Cookie uid=13775843
      用户带上Cookie，服务器端解析就知道你的身份了 
      更新后，http 协议仍然是无状态的， 请求头可以夹带一些私货
    - 界面有哪些状态？
        - 未登录  已登录（会显示用户身份）规定时间内不需要登录，但会过期，也会主动登出



- 前后端联调
    - 前端负责表单
      阻止默认行为
      收集表单值
      fetch请求 await 等待服务器端响应请求
      POST /login api 地址  前后端接口
      后端
      路由 /login
      用户名和密码的校验
      通过设置cookie 响应头 Set-Cookie
      服务器端的返回 http 一起回到请求端
      前端存储里 Cookie 有了内容
      ## Cookie
Cookie 是浏览器存储的小文本数据，用于记录用户会话、偏好等信息，便于网站识别用户
- 每次http时，都会自动带上cookie 信息
- cookie 小饼干（内容小） 只负责记录关键的身份信息，存储在浏览器中
- http协议仍然是无状态的，每次请求独立，他是通过在请求头中携带cookie信息，实现身份认证。