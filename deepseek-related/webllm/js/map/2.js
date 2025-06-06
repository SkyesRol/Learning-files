['1','2','3'].map((num,index,arr)=>{
    console.log(num,index,arr);
    return num;
    
})

// 第二个参数是进制
console.log(parseInt('1',0,['1','2','3']));
console.log(parseInt('2',1,['1','2','3']));
console.log(parseInt('3',2,['1','2','3']));
// parseInt 接受两个参数，也可以传第三个参数，但它不会使用