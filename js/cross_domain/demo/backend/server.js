// 用require的，是老的CommonJS方案
// 用import的，是新的Modules方案
const { log } = require('console');
const http = require('http');
// js 异步编程 异步无阻塞
// node 天生性能好 相同的用户访问数，使用的服务器数量少，更便宜
const server = http.createServer((req, res) => {
    if (req.url === '/api/hello' && req.method === 'GET') {
        console.log('//////');

        res.writeHead(200, {
            // 响应头是js
            'Content-Type': 'text/javascript'
        })
        // json 数据
        const data = {
            code: 0,
            msg: 'Hey there'
        }
        // json with padding
        res.end("callback(" + JSON.stringify(data) + ")")

        // res.end(JSON.stringify({
        //     code: 0,
        //     msg: 'success',
        //     data: {
        //         name: '张三',
        //         message: 'Hello from NodeJS backend'
        //     }
        // }))

        // res.end('console.log("hello world")')
    }
    else {
        res.writeHead(404);
        res.end('Not found')
    }
})

server.listen(8080, () => {
    console.log('server is running on port 8080');

})