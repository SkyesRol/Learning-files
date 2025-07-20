import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // react 不能直接操作DOM，因为性能差   高速 v8-> 渲染引擎
  // react 借鉴了DOM0 行内的写法
  // 相似， react event并不是原生事件，而是合成事件
  // onClick 不是 onclick 不是字符串，而是事件函数绑定
  const HandleClick = (e) => {
    // 事件模块是项目，是框架的核心部分，react 性能，封装，优化
    console.log(e); // 合成事件 Synthetic Event
    console.log(e.nativeEvent); // 原生事件
    // 事件代理 Delegation #root + 唯一值 合成事件
    console.log('立刻访问' + e.type);
    setTimeout(() => {
      console.log('延迟访问', e.type);

    }, 2000)  // 老版本报错了，因为2s后事件对象回收利用了，e.target不再指向button了


  }
  return (
    <>
      <button onClick={HandleClick}>Click</button>
    </>
  )
}

export default App
