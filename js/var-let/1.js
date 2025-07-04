"use strict"   // 严格模式，不允许使用未声明的变量

var b = 10;

(function b(){    // 函数提升最顶级，提升声明，提升值
    b = 20;     // 不生效
    console.log(b);  
    
})()
 











