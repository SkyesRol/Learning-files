console.log('Start');


// 微任务
// process 进程对象 属于node
process.nextTick(() => {
    console.log('Process Next Tick');

})
// 微任务
Promise.resolve().then(() => {
    console.log('Promise resolved');

})

// 宏任务
setTimeout(() => {
    console.log('Timeout');
    Promise.resolve().then(() => {
        console.log('inner Promise');

    })
}, 0)







console.log('End');





















