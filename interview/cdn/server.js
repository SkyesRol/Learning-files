const WebSocket = require('ws');
const http = require('http');
const { log } = require('console');

// 用户先要通过http协议连上服务器
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('WebSocket running\n');
});
// 基于http服务，监听ws 协议的请求
const wss = new WebSocket.Server({
    server,
    path: '/ws',
})

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log('Received message:', message.toString('utf-8'));
        ws.send(`Server received message: ${message}`)
    })
    ws.send('Welcome to the WebSocket server!');
})

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});