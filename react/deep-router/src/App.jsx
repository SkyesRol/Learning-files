import { useState, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
// import Home from './pages/Home'
// import About from './pages/About';
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
// 函数 路由-> Route 
// 新的组件
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Pay = lazy(() => import('./pages/Pay'))
const Login = lazy(() => import('./pages/Login'))
function App() {


  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 需要校验权限的路由 */}
            <Route path="/pay" element={
              <ProtectRoute>
                <Pay />
                <div>123</div>
                <div>456</div>
              </ProtectRoute>
            } />
            <Route path='*' element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
