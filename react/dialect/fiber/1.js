// 全局对象，指向下一个要处理的单元（即fiber结点）
// fiber 对象 链表结构
let nextUnitOfWork = null;

// 这个函数会在浏览器空闲的时候调用
function workLoop(deadline) {
    let shouldYield = false; // 不中断
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        // 如果任务时间小于1ms，停止执行，避免阻塞渲染
        shouldYield = deadline.timeRemaining() < 1;
    }
}

// 这个函数用来模拟实现，实际react利用schedule调度机制，很复杂
requestIdleCallback(workLoop);















