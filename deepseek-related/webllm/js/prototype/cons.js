function Person(name,age){
    // this 指向当前的实例化对象
    this.name = name;
    this.age = age;
  
}

let man = new Person('Skye',20);

console.log(man.prototype);
