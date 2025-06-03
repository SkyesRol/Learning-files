

// 函数的编写者
// 函数的调用
// 健壮性
// typeof 是个运算符 可以判断几乎所有的简单数据类型，返回值是类型的字符串，除了null
/*
* @func 两数之和
* @param {number} a
* @param {number} b
* @returns {number}




*/


function add(a, b) {
    // 参数的校验
    if (typeof a !== 'number' || typeof b !== 'number'|| isNaN(a) || isNaN(b)) {
        throw new TypeError('参数类型错误');
    }
    return a + b;
}

console.log(add(NaN,2));


// NaN Not a Number 


/*
0/0            NaN表示一些无效的数学表达
Math.sqrt(-1)
typeof NaN    => 'number'
NaN会影响所有的数学运算，任何运算与NaN运算的结果都是NaN
NaN不等于任何值，包括它自己，
所以 NaN==NaN 为false
NaN === NaN 为false
只能用 isNaN() 来判断一个值是否是NaN
parseInt('123a')   123
parseInt('a123')   NaN
Number(undefined)   NaN
*/

/* js数据类型    
primitive 简单数据类型 栈内存
    拷贝式传值
 string number undefined null boolean symbol bigint
 
 -复杂数据类型 栈内存（连续）（地址的引用）+ 堆内存（对象的内容）
 引用式传值
 object 
 
 一共7种数据类型！！！！！



  Number 和 bigInt 同属于 Numeric

由 ECMA262所定义
ECMA: European Computer Manufacturers Association
其为JS的标准化组织，JS为ECMA262规范的实现，定义了JS的语法和功能，确保不同环境中的一致性。

问：一共几种数据类型？
7种：
6种为primitive：numeric string boolean symbol null undefined
1种为复杂数据类型：object
 */




