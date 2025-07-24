# reducer and context

- useReducer
    - 相应式状态管理
    - reducer 纯函数 负责状态的生产，为状态的改变定规矩
    - 传入参数：
        - state
        - action
    - 返回值：
        - 新的 state
         const [state, dispatch] = useReducer(reducer, initialState);
    - initValue 初始值
    - dispatch 派发 下达一个命令，向reducer函数提交一个更改状态的申请{type:'',payload:''}


- useContext
    createContext
    Context.Provider
    useContext
- useContext(通信) + useReducer（响应式状态）
    跨层级全局->应用(theme/login/todos/..) 状态管理

- hook + useContext
    全局应用级别响应式状态

    
- 自定义hook
    组件（渲染为主）+ hook（状态）


- hook + useContext + useReducer
    全局应用级别响应式状态管理