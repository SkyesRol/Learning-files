// 没有class的JS，如何追求OOP
// 函数首字母大写 表示构造函数  构造函数的首字母必须大写（约定俗成） 1. 类的概念
// 2.构造函数
function Person(name,age){
    // this 指向当前的实例化对象
    this.name = name;
    this.age = age;
  
}
// 类的方法
Person.prototype = {
    sayHello:function(){
        console.log('Hello,my name is '+this.name);
    }
}
// new一下，将类实例化，产生实例化对象
let man = new Person('Skye',20);
let woman = new Person('Fade',20);
man.sayHello();
console.log(woman);
// 指向了一个原型对象
console.log(man.__proto__);
console.log(man.__proto__.__proto__);

let a = {a:1};
console.log(a.__proto__);
console.log(a.toString());











