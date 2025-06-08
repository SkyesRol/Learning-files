#  js(原生)-> vue + react



## 语义化标签
    -  table 做图表，表格 给老板看 
    -  table 
        -  thead
            tr
                th
        -  tbody
            tr
                td


## DOM 编程
        操作DOM节点，将我们的界面动态更新，DOM就是Document Object Model

## 样式
        - 引入框架后不用写细节和重复代码，focus于业务
        - 引入第三方库 bootstrap PC css框架，业务类
         .container 在 bootstrap中有固定样式，容器，固定宽度

## 如何将JS 代码交给框架去做，focus **业务**
react  vue

- jquery 退出了历史舞台

- vue
    聚焦于业务
    friends 数据
    tbody 挂载点上
    远离API   循环输出 tr
- react

## 现代前端开发框架

- 离开原生js的刀耕火种
- 聚焦于业务
- App的概念
  切图仔 html+css+简单的js（Dom + Event）
  App应用开发工程师
  Vue.createApp(App).mount('#app')
  #app 是 这里面支持Vue app 接管
  不用低级的DOM API
  - 循环输出数据
        - vue App 中提供了 data(){
            // 内部声明的数据可以在 #app中使用
        } 数据声明

        -  tr  v-for 循环输出的业务


## react  来自于facebook
适合大型的应用


- 创建react应用

npm init vite 初始化一个项目

select project
select variant

cd friends
npm install
npm run dev
--------------------------------------------------------------------------
# REACT 业务    2025.6.4

Web 应用   （百度）        移动应用（Android IOS）

## 项目的创建

- npm 是什么？ node package manager
  node 包管理器 安装react  package App开发能力

  - npm init vite 初始化一个项目
  
按 vite模板初始化一个项目
vite：  vue/react 的项目模板和工程化

- 选择一些配置

- react 框架
- js    语言

选完之后，我们得到了一个项目模板，基于其开发

- cd 项目名
- npm install  安装依赖
node_modules  依赖包
- npm run dev  启动项目
 以http协议启动  5173 端口启动应用  react 技术栈 Web App

为什么创建这么复杂？
因为我们做的是一个**项目**


远离 JS API 编程，面向业务


## Todos 任务列表
- 数据 ['脱单'、'学习'、'健身']
    数据在页面上渲染 react 提供点啥支持这个业务


## react 初体验

- react 组件是完成开发任务的最小单元
- 组件组合html、css、js
- 组件是一个函数
- 返回html
- 函数体里面 return 之前可以声明数据和各种业务逻辑
- {}  js 表达式  不用写DOM API

## 响应式数据

- 数据是会发生改变的，数据状态 state
- [todos, setTodos] = useState(初始值) 使用一个数据状态，返回一个数组
    数组第一项   数据项
    数组第二项   修改数据项的方法

















