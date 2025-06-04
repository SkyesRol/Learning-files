// ReferenceError: Cannot access 'a' before initialization
// var 所在是普通作用域
// let 是词法作用域，词法作用域这个区域我们叫 TDZ  Temporal Dead Zone  暂时性死区
// TDZ 在变量声明前就调用报错
console.log(a);
let a = 1;



//  为什么推出新关键字，可能是因为 var 有点问题
var d = 1;  // es5

let b = 2;  // es6   2015年

const c = 3;  // es6




