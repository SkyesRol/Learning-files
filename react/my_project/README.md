# react 旅游app
Readme.md 很重要 方便面试官

- 移动App
- 模仿 App
    - 喜欢的、国外的
    - 模仿一下，但是有点改变
- 绝大多数的考点
    - 都适用于任何App

## 技术栈
- React 全家桶
    - React 组件开发
    - 组件的封装
    - 第三方组件库
    - 受控和非受控组件
    - hooks编程 自定义hooks
    - React Router DOM
        - SPA
        - 路由守卫
        - 懒加载
    - Zustand
- mock 完成接口的模拟
- axios 请求拦截和代理
- JWT 鉴权登录
- module css
- vite 配置
- 性能优化
        防抖节流
        useCallback useMemo ......
- css 预处理器
    - flex
    - transition transform
- LLM
    - chat
    - 生图
    - 语言
    - coze 工作流 调用
    - 流式输出
- 移动端适配
    - rem
- 单例模式
- git 提交等编程风格
## 项目的架构
- components
- pages
- hooks
- store
- api 
- mock

## 开发前的准备
- 安装的包
    react-router-dom
    zustand
    axios
    react-vant(UI组件库) lib-flexible (解决移动端适配)
    - 开发时的依赖
        vite-plugin-mock
        jwt

- vite 配置
    - alias
    - mock
    - .env.local
    llm apiKey
    - user-scalable = no
    - css 预处理
        index.css reset
        box-sizing font-family:-apple-system
        App.css 全局通用样式
        module.css 模块化样式
    - 移动端适配 rem  vw vh
        不能用px，px是绝对单位，我们要用相对单位rem html
        不同设备上体验要一致
        不同尺寸手机 等比例缩放
        设计师设计稿 750px iphone 4 375pt * 2 =750
        小米 ？其他手机？
        css就一行代码，要实现让不同手机的布局等比例缩放，font-size要等比例
        layout
        flexible.js 阿里 再任何设备上
        **1rem = 屏幕宽度/10**
- lib-flexible
    阿里开源
    设置html fontSize = window
    innerWidth / 10
    css px 宽度 = 手机设备宽度 = 375
    1px = 2个发光源
    设计稿 750px ，这个设计稿应用到手机时只有375


- 设计稿查看一个盒子的大小？
    假定一个设计稿是750px，一个盒子是200px，则750px为10rem， 75px为1rem
    用 200 / 75 就是 2.6667rem
    - 1像素不差的还原设计稿
    - 设计稿中像素单位
    - 设计稿中px / 75 = rem

## 项目亮点
- 移动端适配
    - lib-flexible 1rem = 屏幕宽度的 1/10
    - 设计稿 尺寸是iphone 标准尺寸 750px
    - 前端的职责是还原设计稿
    - 频繁的换算单位
    - 如何自动转换单位？
        - pnpm i -D postcss-pxtorem
        postcss + postcss-pxtorem
        PostCSS是一个使用JS插件对于CSS进行处理的工具（CSS与编译器），
        可以通过插件实现自动转换单位，比如px转rem
        vite会自动读取postcss.config.js 将css文件编译 
        例如 px => rem

## git 提交规范
- 项目初始化
## 功能模块
- UI组件库
    - react-vant 第三方组件库 70%的组件已经有了，不用写
    - 选择一个适合业务的UI组件库 或者公司内部的组件库 

- 配置路由以及懒加载
    - 懒加载
    - 路由守卫
    - Layout组件
        - 嵌套路由<Outlet /> 分组路由配置
        - 网页有几个模板 Layout
        - Route 不加path 对应的路由自动选择
            - tabbar 模板
            - blank 模板
        - tabbar
            - react-vant + @react-vant/icons
            - value + onChange 响应式
            - 点击链接分享，修改active的设置
- es6特性使用
    - arr.findIndex
    - str.startsWith
    - promise