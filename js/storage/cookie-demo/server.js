// node 后端
// node 内置的核心模块
// js在命令行运行
// js有两种模块化方案
// require node 早期的模块化commonJS
// import es6 更先进的模块化方案
// old 老版本写法 
// node 受欢迎  中小项目开发
// 端口 对应的是某个服务
// 3306 mysql 80 web 服务 进程（资源） 线程（执行）
// 1234 8080 占用端口
// domin (localhost) -> ip地址 (127.0.0.1)->对应某台设备->port 设备上的某个服务（进程）
// 一台设备上可以有很多端口使用，有多个http服务
// 不要使用一些特殊端口
const http = require('http');
const fs = require('fs');  // file system
const path = require('path'); // 路径模块

const server = http.createServer((req,res)=>{
    //res.end('hello http server');
    //http 基于请求响应的协议
    // 路由： Method + url 定位了在服务器端的资源
    // 为了资源 
    if(req.method == 'GET' && (req.url == '/'|| req.url == '/index.html')){
        console.log(__dirname,
            path.join(__dirname,'public','index.html')
        );
        
        fs.readFile(path.join(__dirname,'public','index.html'),
        // 回调函数 异步 callback
        (err,content)=>{
            // 后端稳定为主 前端体验为主
            if(err){
                res.writeHead(500); // 5XX 代表服务器错误
                res.end('Server error');
                return;
            }
            // 不只是html，css，js，jpg.....
            // 请求头
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(content)
        })
    }
    // 后端路由，暴露资源
    // https://localhost:8080/style.css?a=1&b=2
    // 协议 http:// localhost 域名 + 8080 端口  /style.css Path  a=1&b=2 queryString
    if(req.method == "GET" && req.url == '/style.css'){
        fs.readFile(
            path.join(__dirname,'public','style.css'),
            (err,content)=>{
                if(err){
                    res.writeHead(500);
                    res.end('Server error');
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/css'})
                res.end(content);

            }
        )
    }

    if(req.method == "GET" && req.url == '/script.js'){
        fs.readFile(
            path.join(__dirname,'public','script.js'),
            (err,content)=>{
                if(err){
                    res.writeHead(500);
                    res.end('Server error');
                    return;
                }
                res.writeHead(200,{'Content-Type':'text/javascript'})
                res.end(content);

            }
        )
    }

    if(req.method == 'POST' && req.url == '/login'){
        // 用户名和密码的校验
        // 写入响应头
        res.writeHead(200,{
            'Set-Cookie':"username=admin;",
            'Content-Type':'application/json'
        })
        res.end(
            JSON.stringify({
                success:true,
                msg:'登陆成功'
            })

        );
    }
})

server.listen(8080);














