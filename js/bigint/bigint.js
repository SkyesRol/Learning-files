


let a = 123456789123456789012345678902
console.log(a+1);


const bigNum = 123456789123456789012345678902n
// bigint是简单数据类型，不是对象，不是构造函数
const bigNum2 = BigInt(123456789123456789012345678902)
console.log(bigNum);
console.log(bigNum2+1n);

// BigInt类型只能和bigint类型进行运算
// bigint和number类型不能进行运算

// 管你是不是大数，数字后面加个n，就是大数


const bigNum3 = new BigInt(123456789123456789012345678902)
console.log(bigNum3); // TypeError: BigInt is not a constructor







