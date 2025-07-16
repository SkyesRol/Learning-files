// es6 模块化  module
// mjs modulesJavaScript 后缀是es6模块化
// 模块化是语言的能力
// node 默认不支持 es6 模块化，如果后缀为js则不能用import
// 但是最近node更新，js也支持了模块化
// node 准备跟require commonjs say byebye
// es6 module 更先进
import http from 'http';

const server = http.createServer((req,res)=>{
    res.end('hello http server');
})

server.listen(1234);