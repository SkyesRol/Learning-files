import { useState } from 'react'

import './App.css'
// todo list列表需要渲染
// 函数组件 App组件 组合其他的组件完成应用
// html css js 组合在一起，组件
// function App() {
//   const todos = ['吃饭', '睡觉', '打豆豆']; // 数组=》数据

// // react 比 vue更纯粹
//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>序号</th>
//             <th>任务</th>
            
//           </tr>
//         </thead>
//         <tbody>
//         {    
//         // 动态
//         // react 一个括号写js
//         // js DOM 编程API
//         // 在html里面写 js代码
//         // jsx
//              todos.map((item,index)=>(
//               <tr>
//                 <td>{index+1}</td>
//                 <td>{item}</td>
//               </tr>
//              ))
//         }
//         </tbody>
//       </table>
//     </>
//   )
// }
function App(){
  // 用useState 将 数据 => 数据状态  响应式数据业务
let [todos, setTodos] = useState(['吃饭', '睡觉', '打豆豆']);
let [title,setTitle] = useState('我是冻梨第一大帅比')
setTimeout(()=>{
  setTodos(['返回地球','打豆豆','吃饭']) // 会修改todos的值
  setTitle('我是冻梨超级大帅比')
},3000)

return (
  <div className='container'>  
    <h1 className='title'>{title}</h1>
    <table>
      <thead><tr>
      <th>序号</th>
      <th>任务</th>
        </tr></thead>
      <tbody>
      {
        todos.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  </div>
  
)



}
export default App
