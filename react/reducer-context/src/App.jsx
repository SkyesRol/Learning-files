import { useState } from 'react'
import { TodoContext } from './TodoContext'
import { useTodoContext } from './hooks/useTodoContext'
import './App.css'

function App() {
  //const todosHook = useTodos([]);

  return (
    // App 状态管理
    <TodoContext.Provider value=''>

    </TodoContext.Provider>
  )
}

export default App
