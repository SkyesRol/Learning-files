import {
  useState,
  useReducer
} from 'react'

import './App.css'

// function App() {


//   return (
//     <>
//       <LoginContext.Provider>
//         <ThemeContext.Provider>
//           <Todos.Provider>
//             <Layout>
//               <Header />
//               <Main />
//               <Footer />

//             </Layout>
//           </Todos.Provider>
//         </ThemeContext.Provider>
//       </LoginContext.Provider>
//     </>
//   )
// }
// 管理好多状态
const initialState = {
  count: 0,
  isLogin: false,
  theme: 'light',
}
// 管理 分部门
// reducer纯函数 返回可靠的状态
// 其为状态生产器
// case 就是状态修改的规矩
const reducer = (state, action) => {
  // {type:'increment'}
  switch (action.type) {
    case 'increment':
      // 新的状态
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'incrementByNum':
      return {
        ...state,
        count: state.count + Number(action.payload),
      }
    case 'changeTheme':
      return {
        ...state,
        theme: action.theme,
      }
    case 'changeLogin':
      return {
        ...state,
        isLogin: action.isLogin,
      }
    default:
      return state
  }
}





function App() {
  // 初始值 initialValue
  // 当前的状态值 旧状态 新状态
  // 界面由当前状态来驱动
  // 修改状态的方法
  // 响应式
  // useReducer 管理，useState有的它都有
  const [count, setCount] = useState(0);
  // 大型项目
  // dispatch 就是传入的action，state能够直接reducer被拿到
  // dispatch——派发 
  // 函数，具有固定的参数{type:''} action_type
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count:{state.count}</p>
      <p>Theme:{state.theme}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'changeTheme', theme: state.theme === 'light' ? 'dark' : 'light' })}>Change Theme</button>
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <button onClick={() => dispatch({ type: 'incrementByNum', payload: count })}>加</button>
    </>
  )
}




export default App
