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

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/users/:id/repos' element={<RepoList />} />
          <Route path='*' element={<Navigate to='/users/SkyesRol/repos' />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
