/*
chat 聊天

*/
const DEEPSEEK_CHAT_API_URL = 'https://api.deepseek.com/chat/completions'
const KIMI_CHAT_API_URL = 'https://api.moonshot.cn/v1/chat/completions'
export const chat = async (messages,
    api_url = DEEPSEEK_CHAT_API_URL,
    api_key = import.meta.env.VITE_DEEPSEEK_API_KEY,
    model = 'deepseek-chat') => {
    try {
        const res = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${api_key}`,
                // 不能用 process.env.VITE_DEEPSEEK_API_KEY，原因是运行环境不同
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model,
                messages,
                stream: false,
            })
        })
        const data = await res.json()
        return {
            code: 0,
            msg: 'success',
            content: data.choices[0].message.content
        }
    } catch (error) {
        return {
            code: 0,
            msg: error.message
        }
    }
}

export const KimiChat = async (messages) => {
    const res = await chat(
        messages,
        KIMI_CHAT_API_URL,
        import.meta.env.VITE_KIMI_API_KEY,
        'moonshot-v1-auto'
    )
    return res;
}