# Event Loop
事件循环机制 js 执行机制

- JS 单线程
    同一时刻只做一件事   
    同步任务优先，要尽快执行完，因为要尽快去渲染页面（重绘重排），响应用户的交互
    耗时性任务？
       - 定时器 setTimeout/setInterval
       - fetch/ajax
       - eventListener
- script 脚本
    一个宏任务
    

- 微任务有哪些？
    紧急的，同步任务执行完成后的一个补充
    - promise.then()
    - MutationObserver
        其可以做到使得dom 改变在页面渲染前
    - queueMicrotask
    - process.nextTick














