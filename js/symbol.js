/* Symbol 为 es6新增的一种数据类型

Symbol 以提供唯一且不可变的标识符，解决属性冲突和增强对象的隐私性。

唯一值：

*/


const sym = Symbol();
const sym1 = Symbol();
const sym2 = Symbol('desc');  // 传了个 label 标签
const age = Symbol('age');
const id  = 1;
//console.log(sym === sym1);   // false
//console.log(typeof sym); // symbol
// 使用Symbol 构造函数实例化，一个标记为id 的唯一值ID
const ID  = Symbol('id');
// es6 之前 key 为 string
// symbol 作为key
const user = {
    name: 'Alice',
    age: 18,
    // key是独一无二的
    // 如果我们要去修改别人代码中的对象，
    // 对象动态的，不希望出错就：
    [age]:20,
    [ID]: 123456, // [] 中括号里可以括const常量/symbol
    //"id":1
}
console.log(user[ID],user[age],user.age);
// 面向对象私有属性概念？
// Symbol定义的不能被访问？   但也有方法可以访问。
for (let key in user){
    console.log(key,user[key],'------------');
    
}


// 枚举类型
// 枚举类型是一种数据类型，允许定义一组命名常量，便于表示离散的值，提高代码可读性和可维护性。
const STATUS = {
    READY : Symbol('ready'),
    RUNNING: Symbol('running'),
    DONE: Symbol('done')
}
let state = STATUS.READY;

if(state === STATUS.READY){
    console.log('ready');
}








