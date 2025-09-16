import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')!  // ! 非空断言操作符 
  // 它的作用是告诉 TypeScript 编译器：“请相信我，这里的值肯定不是 null 或 undefined。你不需要再检查了，直接把它当作非空类型来处理。”
).render(<App />)
