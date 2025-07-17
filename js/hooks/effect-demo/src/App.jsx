import { useState,useEffect } from 'react'
import Timer from './components/Timer'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const [number,setNumber] = useState(0)
  const [repos,setRepos] = useState([])
  const [isTimerOn,setIsTimerOn] = useState(true)
//   console.log('组件函数开始执行');
  
//   // useEffect 正作用？渲染组件
//   // 渲染完组件后搞点副作用
//   // useEffect 生命周期函数 挂载后/更新后执行（mounted）
//   useEffect(()=>{

//     console.log('组件渲染完了');
    


//   })
// // 生命周期的更新
// // 第二个参数是依赖项数组
//   useEffect(()=>{
//     console.log('Component count has updated');
    
//   },[count]);
//   useEffect(()=>{
//     console.log('Component number has updated');
    
//   },[number]);

//   useEffect(()=>{
//     console.log('Component number/count has updated');
    
//   },[number,count]);

   useEffect(()=>{
    // api 数据 动态的
    console.log('console after only render');
    const fetchRepos = async()=>{
      const response = await fetch('https://api.github.com/users/Skyesrol/repos');
      const data = await response.json();
      console.log(data);
      
      setRepos(data);
    }
    fetchRepos();
   },[])


//   // 组件的模板编译
//   // 挂载到#root节点上
//   console.log('组件的模板编译');
  
  return (
    <>
      {count}
      <button onClick={()=>{
        setCount(count+1)
      }}>Click me</button>
    <br/>

      {number}
      <button onClick={()=>{
        setNumber(number+1)
      }}>Click me</button>

      <ul id="repos">
        {
          repos.map(repo => <li key={repo.id}>{repo.full_name}</li>)
        }
      </ul>
      {isTimerOn &&<Timer />}
      <button onClick={()=>{
        setIsTimerOn(!isTimerOn)
      }}>toggle Timer</button>
    </>
  )
}

export default App
