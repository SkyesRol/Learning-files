const arr = new Array(5);
// console.log(arr[0]); // 无法表达empty
console.log(arr.hasOwnProperty(0));

let obj = {
    name: '葫芦娃'
}

let obj2 = {
    action: '喷火'
}

console.log(obj.hasOwnProperty('name'));
console.log('action是否存在于obj：' + obj.hasOwnProperty('action'));

console.log(obj2.hasOwnProperty('action'));











