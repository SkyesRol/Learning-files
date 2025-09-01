# 面试热题 跨域

- 大前端
    - React/Vue 都是基于 mvvm 的设计模式
    - node.js 后端
    - 移动端(ios/android)
    - 桌面端 exe    vscode 用 ts写的
    - 嵌入式，AI
     



- 前后端联调
    - 前后端分离 跨域
    - 前端 5173
        from origin
    - 后端 8080 
        server
    - 前后端分离 跨域

    - 同源
        protocol://domain:port
        domain 不一样 不是同一个来源
        协议 域名 端口 都要一致
        http://localhost:5173 -> http://www.baidu.com/api/user
        协议不同也不同源  为什么规定这么严格？
        http://localhost:5173 -> http://localhost:5173/api/user
        cross origin
        http://localhost:5173 -> http://localhost:8080/api/user
        端口不同也不同源

        origin = http(s) + domain + 端口

    - CORS policy 同源策略  Cross-Origin Resource Sharing （浏览器端的机制）
            跨域了， CORS 将会 block 我的请求？


    - 为什么要学习跨域
        - 前后端分离是日常开发的形式，端口或域名不一样
        - CORS Policy 同源策略？
            浏览器端的机制
        - 跨域请求被block掉了
            请求到达服务器端了吗？    
            到达了，请求已经到达了服务器端
            响应被浏览器 block掉了，**请求到达了，但是响应掉了**
        - 安全问题？
            - 前端（千万用户）的安全，攻击
            - 跨源的，可能不一定被信任
        - 怎么解决跨域？
            - 即拿到cross origin的资源，同时又不违反CORS机制
            fetch/xhr 被 CORS 管着了
            Cookie/localStorage 被 CORS 管着了
            - img script link 可以跨域
            - 不用被管着的fetch/xhr/axios，用script

- 使用 script 的 跨域解决方案  -----JSONP
    - script src 发送一个请求
        - 必须是get请求
        - 返回值必须得是一段JavaScript
        - 但是前端想要的是json，而且还想继续执行json
        - 前端埋一个函数
            - 后端返回一个JS的执行
            - 在执行时将数据传给函数
        - 需要后端的配合
        
    - 返回json
    JSON 前端需要后端提供的JSON数据
    Padding

- JSONP 利用了 script 可以跨域访问
    - 在前端使用script src=跨域的资源地址
    - 需要后端配合，后端返回的JSON，外面包含一个函数调用
    - 前端定义好函数，等待执行
    - 问题：略显复杂，能不能封装一下？

- 手写JSONP
    - 获取动态数据，script 标签原来设计用于加载静态JS
    - 后端配合解析 script url get 请求中的callback 参数值
    请求A，请求B.....
    - 前端封装
