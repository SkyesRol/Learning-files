# React 组件化

- 何为Vite？
npm 包管理
    - vite **工程**化套件 塔吊、搅拌机......

    - 大型项目
    - 模板代码
    - 跑起来

- 何为组件？
    组合了html、css、js的一个开发单元
    App.jsx 根组件
    - 标签粒度太细，只是工作的一个环节，不利于表达业务单元的抽象
    - TodoList 组件 
    - 工作单位
    - 功能单位 

- 组件如何划分 TodoList 为例
- 函数就是组件
    - return html 完成了模板{ 数据 }
    - return 之前 可以写js的逻辑、数据......
    - 把相关的html、css、js 组合在一起，成了一个组件
    - 复用
    - 以html标签的形式，

## 开发目录
   - todoListComponent 项目根目录
   - src  开发目录
     - App.jsx 根组件
     - 组件放到components目录下
     - css 放在src/
          相对路径引入文件 ../
## 模块化
   - 大型多人协作的项目
   - 模块化文件分离
      - 函数
      - 类
      - 文件分离  1个文件1个模块（可以是一个函数、一个类、一个组件）
      - import xxx from './xxx'
      - export default xxx
## 组件化思想
- 现代前端开发框架的核心思想
- 低级的DOM树编程 -> 组件树编程
- 开发的最小单元
     如果要做一面墙，html只是沙子，组件就是一个个的砖块
- 组件组合一堆html css js 组合实现一个功能
- 组件优点：
    - 方便复用
- 组件组合在一起，完成页面开发
    页面由组件构成，现代前端就是用组件搭乐高积木
- 会写组件，会拆分组件，写数据状态业务 写前端项目

## React 界面开发
- 现代界面业务的构成
    - html模板（为什么不叫html？因为html是静态的）
        - 数据驱动的 { 模板区域  数据绑定业务 }
        - 数据状态的改变 useState
        - 显示和更新 由数据状态决定，不需要做什么
        - react 聚焦于业务，而不是DOM API
        - 聚焦于什么业务？ 聚焦于数据
        - 数据在哪里用？哪里都行，加个{}即可
        - 合格的前端 会组件化，会响应式数据状态
        







