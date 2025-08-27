import { useState, useEffect } from 'react'
import { getRepos } from '@/api/config'


import './App.css'

function App() {

  const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const todosRes = await getTodos()
  //     console.log(todosRes.data.data);
  //     setTodos(todosRes.data.data);
  //   }
  //   fetchData();
  // }, [])
  // github repos
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const reposRes = await getRepos()
  //     console.log(reposRes.data);
  //     setRepos(reposRes.data); // 根据返回数据具体格式来看如何拿到data
  //   }
  //   fetchData();
  // }, [])
  // 线上地址有了

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const reposRes = await getRepos()
  //     console.log(reposRes.data);
  //     setRepos(reposRes.data); // 根据返回数据具体格式来看如何拿到data
  //   }
  //   fetchData();
  // }, [])
  useEffect(() => {
    const fetchData = async () => {
      const reposRes = await getRepos()
      console.log(reposRes.data);
      setRepos(reposRes.data); // 根据返回数据具体格式来看如何拿到data
    }
    fetchData();
  }, [])
  return (
    <>
      {/* {
        todos.map(todo => (
          <div key={todo.id}>{todo.title}</div>
        )
        )
      } */}
      {
        repos.map(repo => (
          <div key={repo.id}>{repo.name}</div>
        )
        )
      }
    </>
  )
}

export default App
