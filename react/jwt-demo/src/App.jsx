import { useState, useEffect, lazy, Suspense } from 'react'
import './App.css'
import { getUser } from './api/user'
import { Routes, Route } from 'react-router-dom'




const Home = lazy(() => import('./views/Home'));
const Login = lazy(() => import('./views/Login'));
const Pay = lazy(() => import('./views/Pay'));
const NavBar = lazy(() => import('./components/NavBar'));
const RequireAuth = lazy(() => import('./components/RequireAuth'))
function App() {

  useEffect(() => { }, [])

  return (
    <>
      <NavBar />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" lazy={Home} element={<Home />} />
          <Route path="/login" lazy={Login} element={<Login />} />
          <Route path="/pay" lazy={Pay} element={
            <RequireAuth>
              <Pay />
            </RequireAuth>
          } />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
