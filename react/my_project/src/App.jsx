import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: '2.6667rem', height: '3.46667rem', backgroundColor: 'aquamarine' }}></div>
      <div className="box"></div>
    </>
  )
}

export default App
