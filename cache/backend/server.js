const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// 提供静态文件服务
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/cache1', (req, res) => {
    // 设置强缓存响应头
    // res.set('Cache-Control', 'max-age=10'); // 10秒的强缓存
    const imgPath = path.join(__dirname, '..', 'pic', 'stark.jpg');
    const stats = fs.statSync(imgPath);

    res.set('etag', 'stark.jpg'); // 10秒后过期
    res.set('Last-Modified', stats.mtime.toUTCString());
    res.set('Access-Control-Allow-Origin', '*');

    // 使用path.join确保跨平台路径兼容性

    res.sendFile(imgPath);


})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
