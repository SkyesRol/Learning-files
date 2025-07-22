import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const handleClick = function () {
    // 异步 不是同步
    // react 性能优化，合并多次更新，统一处理
    // 有利于重绘重排
    // 数据绑定，界面更新
    // JS 引擎 V8，高速过路费 渲染引擎 Blink
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 3);  // 合并到一起，每一个setCount得到的count都为0，都从0开始加，结果由最后执行的异步任务覆盖结果
    // setTitle('Changed');


    // setState 函数式更新语法
    // 保证每个更新都基于上一个最新的数据更新
    // 界面的更新合并为一次更新
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);

  }
  return (
    <>
      <p>当前记录数字：{count}</p>
      <button onClick={handleClick}>+3</button>
    </>
  )
}

export default App
