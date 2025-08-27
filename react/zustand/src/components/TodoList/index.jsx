import { useTodosStore } from "../../store/todos";
import { useState } from 'react';

const TodoList = () => {
    const todos = useTodosStore((state) => state.todos);
    const toggleTodo = useTodosStore((state) => state.toggleTodo);
    const removeTodo = useTodosStore((state) => state.removeTodo);
    const addTodo = useTodosStore((state) => state.addTodo);
    const [input, setInput] = useState('');
    const [id, setId] = useState('');
    return (
        <>
            TodoList:{todos.map((todo) => (
                <div key={todo.id}>
                    {todo.id}
                    {todo.text}
                </div>
            ))}
            <input type="text" placeholder="请输入待办事项" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => addTodo(input)}>添加</button>
            <input type="text" placeholder="删除的id" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => removeTodo(Number(id))}>删除</button>
            <input type="text" placeholder="完成的id" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => toggleTodo(Number(id))}>完成</button>
        </>
    )
}
export default TodoList;