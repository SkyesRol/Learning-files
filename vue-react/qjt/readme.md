# VUE全家桶


React -> VUE  MVVM Model-View-ViewModel

响应式（ref/reactive    useState） 组件通信
路由 ReactRouter VueRouter
状态管理 zustand pinia

- pnpm i @types/node -D  
## VUE 一些语法

- SFC 单文件组件
- 模板语法
- 指令
- 事件
- 计算属性
- 响应式


## Store 状态管理
- Pinia
- store/
    homeStore
- defineStore 定义状态管理
    - 第一个参数 状态管理名称
    - 第二个参数 配置项
- 调用 useHomeStore() 在页面运行它
- toRefs 把状态管理转换为响应式对象

## slot 插槽
  提升组件的定制性 #action 具名插槽
  插槽内容可以是任意的模板代码，包括 HTML、组件、插槽等。
  


## typescript

- vue-router RouterRecordRaw  帮助我们确保配置选项正确
  - 路由 path 和 component 是必选的
  - name 属性 是可选的
  

## tailwindcss
- 原子css
- w-[calc(100vw-2rem)] 计算宽度
- 响应式

## vite
- alias
- 自动加载组件库的插件
  不用在任何地方使用的时候先引入了
    - unplugin-vue-components/vite
    - @vant/auto-import-resolver


## 项目架构



## VUE 与 React 区别
- react 单向绑定 绑定值 + 事件
- vue双向 v-model 指令