import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // useEffect(() => {
  //   (async () => {
  //     // 前后端联调
  //     const res = await fetch('http://localhost:8080/api/hello')
  //     const data = await res.json()
  //     console.log(data);
  //   })()
  // }, [])

  return (
    <>
      <img src="https://ts1.tc.mm.bing.net/th/id/R-C.9d8756f208f6ac431fe2f0d5e19e6312?rik=To%2fS4bQ1GV4n6w&riu=http%3a%2f%2fy3.ifengimg.com%2fcb6988cde66087eb%2f2014%2f0825%2frdn_53fa8757c44fb.jpg&ehk=Avzwi%2frk7EwCt2IcJWTlCts7eE0D12u%2f6dqSNoWSfHk%3d&risl=&pid=ImgRaw&r=0" alt="" />
    </>
  )
}

export default App
