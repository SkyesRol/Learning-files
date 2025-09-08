const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/api/test' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5500/js/cross_domain/cors-demo/frontend/index.html'
        })

        res.end(JSON.stringify({
            name: '跨域成功'
        }))

    }

})








server.listen(8080, () => {
    console.log('server is running at http://localhost:8080')
})