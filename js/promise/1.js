// 读取 1.html的内容，读取完后，打印 读完了

const fs = require('fs'); // 引入js 内置的文件模块





const p =new Promise((resolve,reject)=>{
    // resolve()要在异步操作完成后执行
    fs.readFile('./1.html','utf-8',(err,data)=>{
    console.log(data.toString());
    resolve()
})

})
p.then(()=>{
    console.log('111');
    
})






















