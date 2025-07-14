# 手写call

- 手动指定函数内部的this
- 参数 一个个传 apply[]
- 第一个参数是null / undefined 的时候，this指向谁？
- 严格模式报错


- 解耦？

- 应用场景区别
    - call apply 立即执行，这俩的区别就是参数的传递方式
    - bind 返回一个绑定了this的函数，可以延迟执行



## 如何手写call
- call是属于所有函数的,Function 原型链上的方法
  greeting.call

  - typeof 如何判断一个类型？- 二进制存储前三位

- 原型 Function
- 函数参数的理解
  context,rest 运算符
- context 为空， null，undefined -> window
- 在 context 上挂载方法，轻松实现函数内部的this 指向 context
js 动态性 污染了context
symbol 唯一值，避免和context中原属性发生冲突
delete context上的方法

- return 返回值
  