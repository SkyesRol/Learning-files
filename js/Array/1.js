// {}是对象，有key:value  o(1) HashMap  Map
// 第一种重要数据结构 对象字面量
// 第二种重要数据结构 链表、队列、栈
// 长度限定、类型
// 可以动态扩容
const arr = [1, 2, 3, 4, 5]
// fill 属性 填充
const arr2 = new Array(5).fill(undefined)
console.log(arr2);
arr2[8] = 22  // 这么赋值后，数组长度边长，5-8之间为empty 没有key
console.log(arr2);
for (let key in arr2) {   // for in 遍历key，有key的才会被遍历
    console.log(key, arr2[key]);
}

for (let item of arr2) {   // for of 遍历value
    console.log(item);
}

















