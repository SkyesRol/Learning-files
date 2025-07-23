import { useState } from 'react'
import {
  BrowserRouter as Router,// 前端路由
  Routes,// 路由设置
  Route // 单条路由
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import UserProfile from './pages/UserProfile'
import Products from './pages/Products'
import NewProduct from './pages/Products/NewProduct.jsx'
import ProductDetails from './pages/Products/ProductDetails.jsx'
function App() {


  return (
    <>
      {/* 前端路由接管一切，配置 */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:id' element={<UserProfile />} />
          {/* 前端路由，动态路由，id为动态 */}
          <Route path='/products' element={<Products />}>
            {/* 子路由,二级路由 */}
            <Route path=':productId' element={<ProductDetails />} />
            <Route path='new' element={<NewProduct />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
