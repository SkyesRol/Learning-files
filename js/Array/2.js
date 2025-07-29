// fill 一样的
const arr = Array.of(1, 2, 3) // 不同值的初始化
console.log(arr);
// 复杂的计算或转变
console.log(Array.from(new Array(26),
    (val, index) =>
        String.fromCodePoint(65 + index)
))

















