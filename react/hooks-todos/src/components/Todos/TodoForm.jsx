import {
    useState // 私有状态

} from "react";

// 参数少，直接做形参进来夜也行
const TodoForm = ({ onAddTodo }) => {
    // 数据
    // props 参数数据
    // state 私有的数据
    // 单向数据流
    const [text, setText] = useState('');
    // JSX 一定要有唯一的最外层元素  react依赖树来解析JSX，
    // 不然它不知道怎么解析
    // 但是原结构中又多了一个div，这个无用的div加载进了DOM树，怎么办？
    //那就用 <> </>  
    const handleSubmit = (e) => {
        e.preventDefault();
        let result = text.trim(); // try not to repeat your code
        if (!result) return;
        onAddTodo(result);
        setText(''); // 数据状态和界面状态要敏感
    }
    return (
        <>
            <h1 className="header">TodoList</h1>
            <form className="todo-input" onSubmit={handleSubmit}>
                <label htmlFor="input_todo">Input</label>
                <input type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    id='input_todo'
                    placeholder="Enter your todos"
                    required />
                {/* onChange 数据绑定,对于onChange，我在维护数据值和input状态的同步 */}

                <button type="submit">Add</button>

            </form>
        </>
    )
}

export default TodoForm;