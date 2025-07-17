# react hooks 编程
- useState
    - 非常好用的函数式编程
      函数是一等对象（JS）
      函数还是类（JS 原型式面向对象）
      函数也是组件  return JSX
    - 以use 开头，函数式编程
- useEffect
    - 副作用
- pnpm install 为什么更快？ pnpm更快得益于其采用硬链接和符号链接复用依赖，减少磁盘操作；并行安装机制也提升了安装速度



- 生命周期函数  lifecycle 函数

    - mounted 挂载后  渲染完成
     如何令useEffect 只在渲染完成后执行 ，更新后不执行？   将第二个参数设置为空数组 []
    - updated 更新后  [] 依赖项
    - 卸载后的副作用？ unmounted
        - 定时器等会造成内存泄露，要回收，取消
        - 请求数据 卸载时可能导致响应式数据和DOM不在了，所以要取消请求



- 组件应该在什么时候去请求接口呢？
    - 组件的第一时间渲染是最重要的
    - useEffect 去请求接口
      不会和渲染争抢
    - 依赖项为空 [] 就能做到这点
      组件状态发生改变不需要再次请求
 

- 为什么useEffect 函数不可以直接用async？   执行async好像会返回一个Promise？
    - 再声明一个async函数再执行 
    - 执行
    - clean-up







