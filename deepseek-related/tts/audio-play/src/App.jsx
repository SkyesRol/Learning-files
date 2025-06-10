import { useState } from 'react'
import Plays from './components/play.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Plays/>
    </>
  )
}

export default App
