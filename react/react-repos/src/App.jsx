import {
  useState,
  useEffect,
  Suspense,
  lazy

} from 'react'
import { getRepoDetail, getRepos } from './api/repos'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Loading from './components/Loading'
function App() {
  // useEffect(() => {
  //   (async () => {
  //     const res = await getRepoDetail('SkyesRol', 'BetterNCM');
  //     console.log(res);
  //   })()

  // }, [])
  const RepoList = lazy(() => import('./pages/RepoList'))
  const RepoDetail = lazy(() => import('./pages/RepoDetail'))
  const Home = lazy(() => import('./pages/Home'))
  const NotFound = lazy(() => import('./pages/NotFound'))
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id/repos' element={<RepoList />} />
          <Route path='/users/:id/repos/:repoId' element={<RepoDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
