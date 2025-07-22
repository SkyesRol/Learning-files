import { useState, useEffect } from "react"

export const useTodos = () => {

    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos"))


    )

    // 新增Todo
    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                isComplete: false,
            }
        ])


    }
    const onToggle = (id) => {
        // todos 数组找到id isComplete !isComplete
        // 响应式？ 返回一个全新的todos
        // for循环找到id，修改complete，逻辑上可以，但会失败，JSX期待返回一个全新的数组/对象
        setTodos(todos.map(todo => todo.id === id ?
            { ...todo, isComplete: !todo.isComplete }
            : todo
        ))
    }
    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return {
        todos,
        setTodos,
        onDelete,
        onToggle,
        addTodo,
    }

}

