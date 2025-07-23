import { useState } from 'react'
import {
  BrowserRouter as Router,// 前端路由可以2选1
  Routes,
  Route,
  Link,  // SPA Link 代替 a标签
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
function App() {


  return (
    <>
      {/* <Route path='/' element={<Home />} />  注意一下这个报错 */}
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Page2</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
