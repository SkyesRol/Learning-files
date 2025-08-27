import { useState, useEffect, useLayoutEffect, useRef } from 'react'

import './App.css'

// function App() {
//   const boxRef = useRef(); // 其为响应式对象，而非响应式状态
//   console.log(boxRef.current, boxRef);


//   useEffect(() => {
//     console.log('useEffect height', boxRef.current.offsetHeight);

//   }, [])
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect height', boxRef.current.offsetHeight);

//   }, [])
//   return (
//     <>
//       <div ref={boxRef} style={{ height: 100 }}></div>
//     </>
//   )
// }

function App1() {
  const [content, setContent] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
  const ref = useRef();
  // useEffect(() => {
  //   setContent('天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳。天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳。天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳。')
  //   ref.current.style.height = '200px';
  // }, [])

  // 触发两次重排，第一次重排是挂载，第二次是useEffect
  useLayoutEffect(() => {
    // 阻塞渲染 有种同步的感觉，但它是异步
    setContent('天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳。天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳。天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳。')
    ref.current.style.height = '200px';
  }, [])
  return (
    <div ref={ref} style={{ height: '50px', background: 'lightblue' }}>{content}</div>
  )
}











function Modal() {
  // 弹窗
  const ref = useRef();
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    ref.current.style.marginTop = `${(window.innerHeight - height) / 2}px`
  }, [])
  return <div ref={ref} style={{ position: 'absolute', background: 'skyblue', width: '200px', height: '200px' }}>我是弹窗</div>
}

function App() {


  return (
    <>
      <Modal />
      <App1 />
    </>
  )
}
export default App
