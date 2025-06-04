// 数组对象
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // object

// 对象


const date = new Date(); // 日期对象
console.log(date);
console.log(typeof date); // object

// 如何区分 Object的这些类型？

console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(date)); // [object Date]

function getType(value){
   // string api 的选择
   // split + substring
   // 会在MDN文档上看一些资料
    return Object.prototype.toString.call(value).slice(8, -1); // slice 截取字符串 ap
}
console.log(getType(arr)); // [object Array]









