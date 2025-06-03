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

