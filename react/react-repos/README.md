# react repos 项目开发
- api.github.io/users/SkyesRol/repos
- react 开发全家桶 项目级别，大型的，性能优化



## 路由设计
- 项目级别路由
    - react-router-demo
    - repos/:username
    - /repos/:id
    懒加载
    hash/history
    （路由守卫）
    useParams  :username
## 数据管理
- App 数据管理
    - repos
    - useContext + useReducer + hooks
    - createContext + reducer + useRepos
## react
    组件的粒度
## api
- 
    fetch
    - axios http请求库
        - Axios是一个基于Promise的HTTP客户端，用于Node.js中进行Ajax请求，支持拦截请求和响应、取消请求、转换数据等特性
    - 独立的模块，所有的请求会从组件中分离到api目录下

## 项目目录结构（项目架构）
- 
    - api 
        - 应用中所有的接口

    - main.jsx
        入口文件
        启动路由，SPA
        添加全局应用状态管理

- RepoList 功能模块
    - params 解析
        - useParams 动态参数对象
        - 不要放到useEffect里 不然会报错
        - 校验id
            不要相信用户的任何提交
        - navigate('/')   -> 放入useEffect中

- 组件开发模式
    - UI 组件（JSX）
    - 自定义hooks useRepos 方便
    - 状态管理 应用全局 context 来管理
        - repos loading error => context value
        - useReducer  reducer函数  响应式状态 => 响应式状态管理
    






