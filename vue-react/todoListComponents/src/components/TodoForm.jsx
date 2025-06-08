import Todos from "./Todos";
import { useState } from "react";


function TodoForm(props) {
    
    const onAdd = props.onAdd;
    const [text, setText] = useState('打豆豆') // 状态的初始值
    const handleChange = (e) => { // 事件处理函数  事件对象e  event object
        setText(e.target.value)
    
    }
        const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault(); // event api
        // 如何修改todos?  由于是父组件的，改不了，所以只能打报告
        //console.log(text);
        onAdd(text)
        
    }
    
    return (
        <form className="form" onSubmit={handleSubmit} action="localhost:5173">
            <input type="text" className="input" placeholder="Add a todo..." value={text} onChange={handleChange}/>
            <button type='submit' className="button">Add</button>
             
        </form>
        
    )
}
// input 一定要写placeholder，不然会扣分，要把用户当傻子一样！！！！！！！！
export default TodoForm;