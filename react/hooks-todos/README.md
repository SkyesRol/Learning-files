# hooks todos




- 安排个css亮点
    - 1. stylus
        - css的超集
    - react中 `pnpm add -D stylus` 安装依赖，可以不用手动编译直接使用stylus文件
    - 拥有vite 脚手架
        stylus 预编译 安装stylus vite直接编译
        vite 来自 vue 社区
    - 2. react 组件设计
        - 开发任务单元
        - 设计组件
            界面功能 状态 响应式 
            - 新建todo
            - 修改 列表
            - 删除
        - 按功能划分 粒度
            - form
            - list 列表
                - Item 组件 维护和**性能**

- 字体
    - 设置多个，设备的支持（设备是否含有字体）
    - 苹果设备 -apple-system 前端负责用户体验，字体也是体验的一部分
- rem 
    - 相对单位
    - 移动端的重要单位  在移动端 px不要用 绝对的
        因为 移动端是宽高不定的 rem（html font-size） vw vh（viewport） em（相对自身的font-size 等比例） 相对单位
        使用相对单位，可以在所有设备上适配

- props     组件的通信
    - 传递状态
    - 传递自定义事件
    - 直接解构（参数不多的时候）
    - 参数多的时候单独解构 const{1,2,3,4} = props
- 数据绑定 data binding
    - 变量 修改值
    - 数据状态
        - Data Binding 如果没有数据绑定 jsx就是静态的
        {} 数据绑定
        - 数据和界面状态的统一
            - 界面由数据驱动的
            - 数据和界面状态的一致性
        - 响应式的
            - 随着数据变化，界面也被数据驱动开始变化
- vue 和 react区别
    - vue 好入门，api好用
    - react 倾向于原生JS   入门难
        - hooks？
    - <input v-model='text' />
        <input value = {text} onChange={() => setText(text);}>
        react 坚持 单向绑定？？？
        vue是双向绑定？？？


- 本地存储
    - localStorage html5
        key:value 存储
        setItem(key,value)
        getItem(key)
        removeItem(key)
    - BOM Browser Object Model
    - DOM Document Object Model
    - localStorage 和 cookie 有什么异同？
        - http 无状态，head 带上cookie才能识别身份
        - cookie太大，会影响http的传输性能 4KB
        - cookie 前端，后端都可以设置
            过期时间
            domain 隔离，仅在某一个网站上存储
        - localStorage 只在浏览器端
                也拥有domain
                5MB
            - 为什么只有5MB？ 再大其实也可以
        - IndexDB 数据库 能存GB级别


## 自定义hooks
- 
    - 自己定义的
    - use开头的
    - 某一项功能
        并非简单函数的封装
        自定义hooks可能会包含：
            响应式状态
            effect
            todos

- 自定义hooks
    - 现代react app 的架构一部分
    - hooks目录
        自定义hooks
        框架common部分
        业务定制 ahooks
    - use开头
        state，effect 逻辑封装复用
    - return
        todos
        toggle
        addTodos
        deleteTodos
        函数式编程思想的体现
    - 组件更好的聚焦于模板渲染
    - 全面hooks函数式编程


- 两个遗憾
    - ../../ 路径 18弯，不好找
            vite 配置 alias 短路径
    - toggle、delete  跨越多个组件报告，很麻烦，——————**用useContext**











