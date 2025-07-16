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
        

