// 启动 http server

// 引入express
// import express from 'express'
// node 最初的commonjs 的模块化方案
const { log } = require('console');
const express = require('express');
// console.log(express);
const app = express(); // 后端应用
app.get('/',(req,res)=>{
    // 请求对象  响应对象
    // 返回 index.html
    // res.send('hello'); // str
    // response 传输协议  有请求 request 代表用户通过浏览器(proxy)代理
    // 输入url（当前为localhost:1314） + get + path /
    //  http 足够简单 高并发 用户赶快送走 断开联系
    // __dirname  项目的根目录
    console.log(__dirname);
    
    res.sendFile(__dirname + '/index.html');
})
// 添加一个支持server push 的路由
app.get('/sse',(req,res)=>{
    // 支持server push 不断地服务器端推送 少量的
    // 设置响应头
    res.set({
        // stream 文本流，触发事件
        'Content-Type':'text/event-stream',
        'Cache-Control':'no-cache', // 禁止前端使用缓存
        'Connection':'keep-alive', // 保持连接

    })
    res.flushHeaders();
    setInterval(()=>{
        const message = `Current time is ${new Date().toLocaleTimeString()}`
        // server push
        res.write(`data: ${message}\n\n`);
        // 每条消息必须以 data: 开头，并以 两个换行符 \n\n 结束。
        // 如果服务器返回的数据格式不正确，浏览器不会触发 onmessage。
    },1000)
})
// node 内置模块
const http = require('http').Server(app); // server 基本能力 B/S 架构
// 监听？ 侍服状态 伺候用户
http.listen(1314,()=>{
    console.log('server is running on 1314');
    
})










