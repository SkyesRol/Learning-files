# promise

- CPU轮询
- 同步任务，异步任务
    遇到异步任务：
        先跳到后面执行
        代码的编写顺序和执行顺序不一样
    异步任务比较花时间


- 有个需求
   希望把 111 输出 放在 setTimeout的后边，也就是说，我想控制执行的顺序。


## Promise的底层理解

画个饼  
- 异步任务需要时间，不管的话，就是跳到后面执行
  导致代码的可读性不好，代码的编写顺序和执行顺序不一样

  
- const p = new Promise(fn)
类，专门解决异步问题
有一个prototype then方法

- 异步任务放到fn中
-fn的异步任务做完时，调用Promise的resolve方法
- p.then(()=>{
    执行内容;
})
- 我们可以把任务放到then中 ，就可以把执行的流程交给resolve来处理。
 
## 控制执行流程的es6 套路

- new Promise()   Promise类  控制异步流程
- ()=>{
    // executor 耗时性的异步任务
    异步任务：setTimeout readFile fetch......
}
- .then的原型方法
- resolve() then 函数执行


## async await
promise.then =>升级到 async await    **async await 成对出现**
**async 用于修饰函数，函数中有异步任务**
在es7中，async await 是对promise的进一步封装，让异步任务更像同步任务。

在async函数中，使用await，当await右方是异步任务时，会等着异步任务执行完毕后再执行后面的代码。   3.html










