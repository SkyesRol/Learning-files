# JWT 登录鉴权

- isLogin user 全局状态 利用zustand
- mock 登陆模拟
    - apifox api请求模拟
    - 不用写页面，就可以发送请求
    - curl 命令
        - 命令行发送请求
        - 调试接口



- 会话授权
    - 服务器知道我们是谁
    - http 是无状态的
        - 请求头 cookie
        - server 种下一个cookie 唯一的sid值 sid=>user
        - 每次请求中 从cookie 读取sid
        - 服务器多就知道是我们了


    - 登录和用户鉴权方案 JWT Json Web Token
        - 通过登录的账号密码，查找数据库
        - {id:'114514',username:'Skye',password:'123456'}  user JSON格式的数据
        - 通过算法，生成一个哈希串，成为一个令牌 token
        - token 服务器端令牌
        - 每次登录带上token
        - decode 解码
            - 通过 hash串解码，解码出 {id:'114514',username:'Skye',password:'123456'} 
    - jsonwebtoken                         npm install jsonwebtoken
        - sign 颁发一个token user,secret
        - decode 验证token user
        - import pkg from 'jsonwebtoken';
          const { sign, verify } = pkg;
           package.json中type为module
        当 其是 commonJS时可以直接引入 sign和decode方法，不需要解构

    - HTTP 请求头 Authorization 带上 token
    - Cookie 每次都会自动带上
    - token 需要手动设置的
        
        Bearer : HTTP请求中 Authorization 字段的一种认证类型
            其含义为 持有者 意为 只要持有这个token的人，就是经过授权的
        - 格式：Authorization: Bearer <token>

- 加盐
    secret
    传递token 前面会加上Bearer ${token}
    通过 http headers Authorization


- 前端的用户权限状态 流程
    - zustand
        登录、user useUserStore
    - 登陆页面
        受控/非受控组件
    - 路由守卫
    - api/