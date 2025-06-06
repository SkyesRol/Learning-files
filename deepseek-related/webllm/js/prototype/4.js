function Person(name,age){
    // this 指向当前的实例化对象
    this.name = name;
    this.age = age;
  
}

Person.prototype.sayHello = {
    function(){
        console.log('Hello,my name is '+this.name);
    }
}

var man = new Person('Skye',20);

console.log(man.__proto__);
var a ={
    name:'a',
    country:'China',
}
man.__proto__=a;
console.log(man.__proto__);

console.log(Person.prototype);
console.log(Person.prototype.constructor == Person);

