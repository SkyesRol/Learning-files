// 不是JS 单线程
// Worker 线程 复杂或耗性能的计算
// 这个能力来源于浏览器
// js还是单线程，只不过在复杂计算的时候用worker 线程
// 不可以使用document，this不指向浏览器全局环境
// 线程间的通信，消息机制



// console.log(this);

// console.log(document.getElementById('box'));



self.onmessage = function (e) {
    console.log(e);
    self.postMessage('hello from worker')

}
















