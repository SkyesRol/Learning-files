# 路由

history
hash



- 传统页面开发
    <a></a>标签
    - 非常重要的用户体验缺失
        - 需要去到后端拿到新的html，**整页**重新渲染
            - 导致了切换时白屏
        - a 链接切换页面 白屏了
        - 相比于react-router-dom的局部热更新，其对服务器重新请求，重排重绘，性能消耗大
        前端路由去负责


- 新的react-router-dom SPA Single Page Application 单页应用
    能做到只有一个页面 但能带来多页面效果

## SPA
- Single Page Application
- 只有一个页面
    - react 组件
        页面级别组件
    - Routes/Route 声明，文档流中占位
    - Routes外面，Outlet外面 不用更新
    - url 
    - Route内部显示哪个页面组件
        哪个就热更新

    - 用一个页面完成了多个页面的显示
    - SPA 用户体验特别棒

## 核心
- url切换
    不能用a，用Link
    不去重新发送请求
    作为事件触发，js动态加载
- 事件 hashChange / pushState
- 根据当前的url，取出对应的组件，替换掉之前的页面级别组件
- 体验是
    URL改变了，竟然不用刷新整个页面
- 这样用户就不会再看白屏
    页面展示非常快
    About
    Home 全是前端组件

## url 改变，但不重新渲染的解决方案
- hash的改变
    原来是用来做页面锚点的，长页面的电梯
    不会刷新页面     （不属于html5，其很早就有）
- 事件
    hashChange

## 基于SPA
- url 可以改变，但不会向后端发送请求  前端路由
    - hash + hashChange 事件 + Dom
    - history + pushState/popState
- 前端路由 react-router-dom 配置 页面级别组件
    热更新 Route
    Outlet
- 单页应用
    只有一个页面 但可以有多个url 路由状态
    页面级别组件
    window.location window.history
    栈
    State

- history
    很早就有，在浏览器历史记录里游走
    - html5 赋予history 新的功能
    - hash + hahChange 有优点，但是有很大的缺点 
        兼容性好
        缺点 file:///G:/Lessons/HTML/html5/router/3.html#contact
        hash 不好理解
    - 如何像后端路由，不刷新页面？
    html5 升级了history api
    











