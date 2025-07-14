// 完成的功能   手写new
function objectFactory(){

    var obj = new Object();
    // arguments为类数组，其没有类数组方法，所以借用数组的shift方法
    var Constructor = [].shift.call(arguments); // 构造函数 指向被拿出来的第一个参数
    Constructor.apply(obj,arguments)
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj,arguments);
    // || null 的情况 仍然会返回object 构造函数 return 简单类型，忽略
    return typeof ret === 'object'?ret || obj : obj;


}
// es6 写法
function objectFactory2(Constructor,...args){
    var obj = new Object();
    obj.__proto__ = Constructor.prototype;


    var ret = Constructor.apply(obj,args);


    return typeof ret === 'object'?ret || obj : obj;
}


function Person(name,age){
    this.name = name;
    this.age = age;
    // return {
    //     name:name,
    //     age:age,
    //     label:'haha'   // 如果 return 简单数据类型，
    //     // 则Constructor不会理它，继续通过Constructor构造对象
    // }
}

Person.prototype.sayHi = function(){
    console.log(`你好，我是${this.name}`);
    
}

let p1 = new Person('张三',18);
// p1.sayHi();
console.log(p1);


let p = objectFactory(Person,'张三',18);

console.log(p);

p.sayHi(); // 报错，所以要设计原型

console.log(p instanceof Person);

// new Person(...) -> function[[construct]] -> &&this ->{} ->[[call]]
// -> {}.__proto__ -> Constructor.prototype -> return{}




