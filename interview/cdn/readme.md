团队上线了一张用户图像图片，放在CDN上做加速，后来后端同学更新了头像文件，但前端刷新页面后，用户依旧看到的是旧头像。

- 强缓存和协商缓存
    Cache-Control:MaxAge http 1.1  Max age是一个 倒计时
    Expires  时间戳 客户端时间不准确 http 1.0


    304
    协商缓存依赖的是 
    lastModified If-Modified-Since
    ETag If-None-Match


- CDN Content Delivery Network 内容分发网络
    通过将静态资源存储到全球各个地方的边缘节点，使用户就近访问，减少网络延迟和服务器的负载，从而加快图片加载

- 怎么解决？
    1. 给资源加上hash 比如 avatar.png?v=123 版本号
    2. avatar.[hash].png 文件名加哈希，检测改变就继续请求

## 跨域
- jsonp script 标签的src属性可以跨域  但是它只能GET 请求
- cors 服务器端设置响应头 Access-Control-Allow-Origin 可以进行跨域
- 同源策略
  Same-Origin Policy
  同源策略限制网页只能访问同源(协议，端口，域名)的资源，防止恶意网站在你登录状态下，偷偷读取或操作其他网站的数据。避免敏感信息被泄露。
  是浏览器隔离风险的核心安全机制。
- CORS 服务器配置Access-Control-Allow-Origin 白名单机制 恶意网站没办法让别人的服务器给它开放权限，所以跨域数据不同

你 -> 恶意网站 evil.com 它想偷取bank.com的信息:
GET bank.com/api/balance bank.com Access-Control-Origin 没有 evil.com 就不执行

简单请求 GET POST HEAD
预检请求 OPTIONS

- 代理
    开发期间的代理 Vite 正向代理
    上线产环境的代理 nginx 反向代理

正向代理：
客户端 -> Vite -> 服务器端

其为位于客户端和目标服务器之间的中间服务器，它代表客户端向目标服务器发起请求，用于隐藏客户端身份或绕过同源策略。

反向代理：
代码前端打包了，在服务器上（这时候就没有Vite了） 
请求-> Nginx 拦截 -> 后端服务器 -> 结果返回给前端

后端代码也在服务器上


Nginx代理：

server {
    listen       80;
    server_name  localhost;

    location /api/ {
        # 代理到实际的后端服务器
        proxy_pass http://your-backend-server/;

        # 允许跨域请求
        add_header Access-Control-Allow-Origin * always;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization" always;

        # 处理预检请求
        if ($request_method = 'OPTIONS') {
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS";
            add_header Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept, Authorization";
            add_header Content-Length 0;
            add_header Content-Type text/plain;
            return 204;
        }
    }
}

- 为什么 Vite 是正向代理？Nginx为反向代理？

是因为在开发时候，Vite代表客户端，它会将所有请求都发送到Vite服务器，Vite服务器再将请求转发到后端服务器。

而Nginx 作为一个代理服务器，代表服务器接收外部请求，再转发给内部的各个后端服务，对外部隐藏真实服务器