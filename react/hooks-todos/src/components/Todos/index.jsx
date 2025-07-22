import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import {      // 响应式状态hooks
    useState  // react 函数式编程 好用的以use 开头的函数
    , useEffect
} from "react"
import { useTodos } from "@/hooks/useTodos"
const Todos = () => {
    // 数据流管理
    // 父组件持有管理数据 props 传递数据 子组件通过props 自定义函数
    // 通知父组件
    const { todos, addTodo, onToggle, onDelete } = useTodos();




    useEffect(() => {
        //console.log('...........');
        localStorage.setItem('todos', JSON.stringify(todos))
        // 返回了其toString()，结果为[object Object],[object Object]
        // 所以要stringify()
    }, [todos])

    return (


        <div>

            <div className="app">
                {/* 自定义事件 */}
                <TodoForm onAddTodo={addTodo} />
                <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
            </div>

        </div>


    )

}


export default Todos;