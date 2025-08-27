import HelloComponent from './components/HelloComponent.tsx'
import './App.css'
// react + typescript
// 大型项目中 JavaScript 可能会有一些问题，主要因为弱类型
// jsx 后缀改为 tsx


function App() {
  // 编译阶段
  // 多了些类型声明
  // 多写一些代码 类型声明 代码质量保驾护航
  let count: number = 10;
  // count = "20" // 类型错误
  //count = true; // 类型错误
  const title: string = 'Hello Ts';
  const isDone: boolean = true;
  const list: string[] = ['a', 'b', 'c'];
  // 元组
  const tuple: [string, number] = ['a', 10];
  // 枚举类型
  // enum Status {
  //   Pending,
  //   Fulfilled,
  //   Rejected
  // };
  // const pStatus: Status = Status.Pending;
  // 约束对象?
  // 接口类定义
  interface User {
    name: string;
    age: number;
    isSingle?: boolean; // 可选属性，能填也能不填
  }
  const user: User = {
    name: '张三',
    age: 18,
    isSingle: false,
  }


  return (
    <>
      {count}
      {title}
      {user.name}
      {user.age}
      {user.isSingle}
      {/* TS很严格， */}
      <HelloComponent name={user.name} />
    </>
  )
}

export default App
