// 为什么会有提升？ 编译和执行两个阶段
// 编译阶段： 变量提升 函数提升 （变量和函数的声明会被提升到当前作用域的最前面） 函数提升相关再查一查
// 在代码执行之前的一霎那，要进行语法检测，进行编译阶段，
// 执行阶段： 代码从上到下执行
// 变量提升是面试官喜欢的，是JS开发者设计的，这个东西不太好，导致代码的执行结果和代码阅读顺序不一致，有歧义。
// 这是糟粕，但没有改变，我们避开这种情况， 于是ES6引入了let 和 const
showName();   //驼峰式命名
console.log(myName);  //
var myName = "Skye";


 function showName(){   //函数声明
    var myName = "Fade";
    console.log(myName);
    
}

// 代码 -> V8引擎 -> 编译 -> 执行 -> 结果 

//V8引擎  谷歌浏览器的JS解释器  （V8引擎是C++写的）


function fnc(){
    var num = 1;
    function func(){
        return num + 1;
    }
    return func;
}

console.log( fnc()());