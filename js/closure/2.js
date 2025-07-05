// 函数对象
function add(a,b,c){
    let res = 0;
    // arguments 是一个类数组对象，是函数运行时的参数总管
    // 下标访问第几个参数 
    // console.log(arguments);
    // console.log(arguments.length);
    // console.log(this);
    // console.log(arguments,Object.prototype.toString.call(arguments));
    
    
    //console.log(arguments.map(item=>item+1)); 
    
    
    // 报错：arguments.map is not a function
    // 类数组 有length属性，但是没有数组太多的方法
    // 如何将类数组转为真正的数组？
    const args = Array.from(arguments);
    console.log(args.map(item=>item+1));







    for(let i =0;i<arguments.length;i++){
        console.log(arguments[i]);
        res += arguments[i];
        console.log(res);
        
    }
    return a+b+c;
}

console.log(add.length); // 获取函数参数的个数
console.log(add(1,2,3));
 









