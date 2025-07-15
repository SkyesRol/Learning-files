//'use strict'


var  name = 'Trump';
// rest 运算符
function greeting(...args){
    console.log(args,arguments[0],arguments[1]);
    // 展开运算符
    //console.log([...arguments] ,Array.from(arguments));
    
    
    return `hello, I am ${this.name}`;
}

const lj = {
    name:'ReyJean',
}

// 在浏览器和node中执行结果不同，在浏览器中null和undefined绑定到了window
console.log(greeting.call(lj,18,'Hangzhou'));
console.log(greeting.apply(lj,[18,'Hangzhou']));
// bind 返回了一个this绑定了lj，并传递了两个参数的函数
const bind = greeting.bind(lj,18,'Hangzhou');

console.log(bind);
setTimeout(()=>{bind()},1000)
 console.log(greeting.call(null));
// Node.js 的全局对象是 global， var 声明的变量不会自动挂载到 global
 console.log(greeting.call(undefined));
// console.log(greeting.call());
