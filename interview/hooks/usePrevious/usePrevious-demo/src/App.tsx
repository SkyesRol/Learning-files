import { useState } from 'react'
import usePrevious from './hooks/usePrevious'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>usePrevious</h1>
      <p>当前 count: {count}</p>
      <p>上一次的 count: {prevCount ?? 'NONE'}</p> {/* 空合并运算符 */}
      <button onClick={() => setCount((count) => count + 1)}>
        Click
      </button>
    </div>
  )
}

export default App
