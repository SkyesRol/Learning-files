# Array 的高级考点？

- 怎么认识数组？
    - 可遍历的对象
- new Array(5)
    类似于C++，固定大小分配
    - V8引擎可以灵活的拓展，不限类型，数组背后还有Hash的特性
    - empty*5 key 没有释放 for key in 不可以迭代
    - new Array().fill(undefined) 统一,相同值的初始化
    - Array.of(1,2,3,'Skye') 不同值的初始化，其为静态方法，不需要new
- [] 数组字面量
    ['Fade',1,4,[1,2,3],...arr]
- 静态方法
    - Array.of(1，2，3)  // 已经有了数据可以这么干
    - Array.from()    // 用于类数组转换或者填充计算











