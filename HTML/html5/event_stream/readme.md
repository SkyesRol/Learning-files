# 流式输出

SSE: Server-Send Events

- 为什么考这道题？
  25年大厂必考题
  - LLM  chatbot（23年爆款 -> 24年推理-> 25年 AI Agent）AI产品
  - 流式输出属于用户体验，前端职责
  

- 为什么需要流式输出？
  - 边生成边输出
  后端、LLM API 方式提供给我们
  - 更快的看到响应   在时代的节奏里用户没有太多耐心，效率是第一位
  - 现在的LLM 为 AIGC 生成式大模型 一个token一个token transform（算法来自Google）出来的
    大模型是根据 token开销付费的


- 前端的职责：良好的用户体验————尽快返回结果

障眼法    生成要花时间
最懂用户心理的

- 步骤
  - 前端能实现流式输出？
    setInterval？ 虽然不太协调，但能用
    - 异步 事件机制 message 
  - 后端怎么实现？
    socket 长链接
    http请求是基于请求响应式的简单协议   关闭链接？
    http 2.0 server push 服务器端推送

# 全栈能力
- npm init -y  node后端
- npm i express 老牌的node 框架


