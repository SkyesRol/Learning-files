#




## 对ts的泛型有什么理解 ？



## interface 和 type 有什么区别 ？
    在ts 中，interface 和 type 都能用来描述对象的结构
    本质上很多场景可以切换，但有一些关键区别。





- interface 面向对象、可扩展 (extends),专门描述对象/类的结构，可以被继承和声明合并，适合在大型项目中可扩展API

- type 灵活、组合能力强，可以定义任何类型、交叉类型
不支持重复声明合并，经常用于类型别名
type NumberArray = number[];









