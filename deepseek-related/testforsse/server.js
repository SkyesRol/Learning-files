const express = require('express');
const axios = require('axios');
const { log } = require('console')
const app = express();
const port = 3000;

// 设置 SSE 路由
app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 代理请求到 LLM API
    const endpoint = "https://api.deepseek.com/chat/completions";
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer sk-0325f5f498f9445f98c80bc44a8616a7`,
        "deepseek-organization": "deepseek-ai",
    };
    const payload = {
        model: 'deepseek-chat',
        messages: [
            { role: 'system', content: '你是一个非常有帮助的助手' },
            { role: 'user', content: '你好，deepseek' },
        ],
        stream: true // 启用流式响应
    };

    let buffer = '';

    // 处理客户端断开连接的情况
    // req.on('close', () => {
    //     console.log('Client disconnected');
    //     res.end();
    // });

    axios.post(endpoint, payload, { headers, responseType: 'stream' })
        .then(response => {
            response.data.on('data', chunk => {
                buffer += chunk.toString();

                // 尝试解析缓冲区中的数据
                while (true) {
                    try {
                        const startIndex = buffer.indexOf('{');
                        const endIndex = buffer.indexOf('}\n\n') + 3;
                        if (startIndex === -1 || endIndex === -1) {
                            break; // 没有完整的 JSON 对象
                        }
                        const jsonStr = buffer.slice(startIndex, endIndex);
                        const parsedChunk = JSON.parse(jsonStr);

                        // 检查是否为结束标记
                        if (parsedChunk.choices && parsedChunk.choices.length > 0) {
                            const choice = parsedChunk.choices[0];

                            // 检测结束标记
                            if (choice.finish_reason === "stop") {
                                res.write(`event: end\ndata: {}\n\n`);
                                res.end();
                                return;
                            }

                            // 处理正常消息
                            const message = choice.delta.content;
                            //log(message);

                            if (message) {
                                res.write(`data: ${JSON.stringify({ content: message })}\n\n`);
                            }
                        }
                        buffer = buffer.slice(endIndex); // 移除已处理的数据
                    } catch (e) {
                        break; // 不是完整的 JSON 对象
                    }
                }
            });

            response.data.on('end', () => {
                res.write(`event: end\ndata: {}\n\n`);
                res.end();
            });
        })
        .catch(error => {
            console.error('Error fetching LLM response:', error);
            res.write(`event: error\ndata: ${JSON.stringify({ error: error.message })}\n\n`);
            res.end();
        });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
