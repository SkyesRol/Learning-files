const num1 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
console.log(num1);
const num2 = 4n / 2n;
const num3 = 5n/2n; // 注意！！！BigInt除法会向下取整，忽略小数部分
console.log(num2+"   "+num3);
const num4 = 2n**4n  // JS中的幂运算
console.log(num4);
const num5 = 5n % 2n;
console.log(num5);