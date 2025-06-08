// 列表的渲染

import TodoForm from "./TodoForm";

function Todos(props) {
  // 利用参数拿到父组件传来的数据状态
  const todos = props.todos;
  console.log(props + '/////');
  
  return( 
    <ul>
    {   //数据绑定 data binding
      // 数据驱动
      //不要写底层API，只需要在当下的位置上，写业务
      // 数据为王 界面是被驱动的-
      // 发生改变后 自动地改变界面
      todos.map(todo=>(
          <li key={todo.id}>{todo.title}</li>
      ))
  }

  </ul>
  )
}



export default Todos;











