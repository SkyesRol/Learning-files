//import API_KEY from './.env.local'

// document.addEventListener('DOMContentLoaded', function() {
//   // 页面加载完成后执行的代码
//   console.log('WebLLM project is running');
// });
// // js 主动的去拉取http接口
// // web1.0时代 http css js 服务器端java返回的 js 只做简单的交互
// // web2.0 前端js 可以主动的请求后端服务器  动态页面
// // web3.0   智能合约  区块链
// fetch('https://api.github.com/users/Skyesrol/repos')
//   .then(response => response.json())
//   .then(data => {
//     document.querySelector('#reply').innerHTML += data.map(repo=>`
//     <ul>
//     <li>
//     ${repo.name}
//     </li>
//     </ul>
//     `).join('')
//   })
//   .catch(error => {
//     console.error('Error fetching API:', error);
//   });

//  通过JS 引入 DeepSeek


// 当LLM API 服务
// chat 方式 AIGC 生成/完成 返回的内容
// 由openai 制定的
// 请求行
// 变量命名

// llm api 服务
// api.deepseek.com  二级域名 LLM服务以api的方式提供
// https 加密的http 更安全
// /chat 以聊天的方式来进行交互 比如api设计时就有messages的字段
// /completions 完成回答
const endpoint = "https://api.deepseek.com/chat/completions";
// 请求头
const headers = {
  // 内容类型
  "Content-Type": "application/json",
  // 授权  Bearer 令牌（授权码前缀）
  Authorization: `Bearer sk-0325f5f498f9445f98c80bc44a8616a7`,
  "deepseek-organization": "deepseek-ai",
}
// 请求体
const payload = {

  model: 'deepseek-chat',
  messages: [
    // chat 三种方式
    // system 系统角色  只会出现一次 设置系统的角色 就是System Prompt
    // user 用户角色  content会从输入框中拿到这些词
    // assistant 助手角色 
    {
      role: 'system',
      content: '你是一个非常有帮助的助手'
    },

    {
      role: 'user',
      content: 'Hello,u little cute LLM'
    },

  ]


}
// 发起请求
fetch(endpoint, {
  method: 'POST',
  headers,
  body: JSON.stringify(payload)
  // JSON.stringify 是一个函数 用来将一个对象转换为JSON字符串
  // 为什么要将对象转换为JSON字符串? 因为HTTP协议只能传输字符串，二进制流，对象不能直接传输，
  // 请求 + LLM 响应 需要花时间
})
  .then(response => response.json()) //为什么response要json化？
  // 因为http是基于请求响应的简单协议
  // 返回的也是文本或二进制流
  // 解析返回的json数据也要花时间 
  .then(data => {
    console.log(data)
    document.querySelector('#reply').innerHTML += data.choices[0].message.content
    // 为什么有.choices[0]? 因为choices是一个数组，我们只需要第一个元素
  })










