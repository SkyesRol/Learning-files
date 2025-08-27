import './App.css'
import {
  Suspense,
  lazy
} from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Trip = lazy(() => import('@/pages/Trip'))
const Account = lazy(() => import('@/pages/Account'))
const Collection = lazy(() => import('@/pages/Collection'))
const Login = lazy(() => import('@/pages/Login'))
function App() {


  return (
    <>
      <Suspense fallback={<div>Loading......</div>}>
        {/* 带有tabbar的Layout */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={
              <Navigate to='/home' />
            } />
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
        {/* 空的Layout */}
        <Routes >
          <Route element={<BlankLayout />}>
            <Route path='/search' element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
