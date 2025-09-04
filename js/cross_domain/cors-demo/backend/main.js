const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    // if (req.url === '/api/test' && req.method === 'GET') {
    //     res.writeHead(200, {
    //         'Content-type': 'application/json',
    //         'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
    //     })

    //     res.end(JSON.stringify({
    //         name: '跨域成功'
    //     }))

    // }
    if (req.method === 'OPTIONS') {
        res.writeHead(200);// 同意 
        res.end();
        return;

    }
    if (req.url === '/api/test' && req.method === 'PATCH') {
        res.writeHead(200, {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5500'
        })



        res.end(JSON.stringify({
            name: '跨域成功'
        }))

    }
})








server.listen(8080, () => {
    console.log('server is running at http://localhost:8080')
})