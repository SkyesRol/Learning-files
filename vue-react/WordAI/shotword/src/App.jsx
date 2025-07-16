import { useState } from 'react'
import PictureCard from './components/PictureCard'
import './App.css'

function App() {
  // JSX react 优势  方便写HTML模板

  return (
    <div className='container'>
      {/* 自定义组件，子组件 */}
      {/* 为什么有组件？ html+css+js全部封装成一个功能模块，组件化，可以复用 */}
      {/* Dom树-》组件树 */}
      <PictureCard/>
    </div>
  )
}

export default App
