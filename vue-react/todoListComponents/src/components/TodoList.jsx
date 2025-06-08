import { useState } from 'react' // 内置的hook函数
import '../Todo.css'
import TodoForm from './TodoForm'
import Todos from './Todos'
function TodoList() {
    const[hi,setHi] = useState('haha');
    // hi 数据状态  setHi 修改数据状态的方法
    // es6的解构赋值
    /*相当于 const hi = useState('haha').[0]
            const setHi = useState('haha').[1]
    */
    const [title,setTitle] = useState('Todo_list') 
    // 数据驱动的界面
    // 静态页面？
    // DOM 数组 -> map -> join('') -> InnerHTML 底层API 编程
    // 缺点为：低效、面向API
    // 我们应该面向业务，API会变，我们只要懂业务
    // 数据 -》 变化 -》 数据状态 -> 自动刷新页面 -》数据驱动（drive）页面
    // 数据 ↓
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'todo 1',
            completed: false,
        }
    ]) // 状态的初始值
    // setTimeout(()=>{

    //     setTodos([
    //         ...todos,
    //         {
    //             id: 2,
    //             title: 'todo 2',
    //             completed: false,
    //         }
        
    //     ])
    //     setTitle('Todo_list2')
    //     setHi('奥里给！')
    // },3000)  // 无限更新？以后解决
    
// useState是一个hook函数，
// 返回一个数组，
// 第一个元素是状态，

const handleAdd = (text) =>{
    setTodos([
        ...todos,
        {
            id:todos.length+1,
            title:text,
            completed:false,
        }

    ])
}

/*第二个元素是一个函数，执行并传入新的todos的值
页面会自动更新*/
// 数组内的数据是状态的初始值
// 挂载点 tbody
// {todos.map}
// setTodos() 改变状态值，页面会自动更新  底层不需要做，现在就面向业务：DOM即动态更新
//这个业务我们就叫做响应式页面开发
    return (
        <div className="container">
            <h1>{title}</h1>
            <h2>{hi}</h2>
            <TodoForm onAdd={handleAdd}/>
            <Todos todos={todos}/>
            {/* {   //数据绑定 data binding
                // 数据驱动
                //不要写底层API，只需要在当下的位置上，写业务
                // 数据为王 界面是被驱动的-
                // 发生改变后 自动地改变界面
                todos.map(todo=>(
                    <li>{todo.title}</li>
                ))
            } */}
        </div>
    )
}


export default TodoList



