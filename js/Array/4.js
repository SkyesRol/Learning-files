// 如何遍历数组
// for (let i = 0 ;i<=100;i++)   //计数循环，性能好，可读性不好，不接近自然语言
// while()
//forEach()  // forEach不能够退出，无法像break一样关掉循环
//- map filter find some every...
//- for of
//    - for in

const names = Array.of('张三', '李4', '王五', '赵六');
names.forEach(name => {
    if (name == '李4')
        console.log('李4');
    console.log('Processing:' + name);


})