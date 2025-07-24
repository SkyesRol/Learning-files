import {
  useState,
  Fragment // 文档碎片组件，用于包裹多个元素，不会渲染实际的DOM元素
} from 'react'

import './App.css'

// function Demo() {
//   return (
//     <Fragment>
//       <h1>hello world</h1>
//       <p>你好</p>
//     </Fragment>
//   )
// }
const items = [
  {
    id: 1,
    title: '标题1',
    content: '内容1'
  },
  {
    id: 2,
    title: '标题2',
    content: '内容2'
  },
]
function Demo({ items }) {

  return items.map(item => (
    <Fragment key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </Fragment>
  ))

}

function App() {


  return (
    <>
      <Demo items={items} />
    </>
  )
}

export default App
