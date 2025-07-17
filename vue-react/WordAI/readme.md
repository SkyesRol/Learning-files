# 智能前端之单词学习
- 产品和商业模式
    - 学单词
    - 拍照记单词
      - 图片交给多模态模型 word
      - deepseek aigc 例句
      - tts 语音生成
- focus 聚焦
    拍照背单词，用单词
- 解决一些特定的效率性、创新型App

- npm init vite  vite是工程化脚手架，是构建工具

- npm i 慢了点
react 项目依赖 
- cnpm

- npm config get registry
    - https://registry.npmjs.org/

- 修改源： npm config set registry https://registry.npmmirror.com

- pnpm 可以代替npm 
    不同的项目中重复安装react
    react等包放到一个地方，如果之前安装过，链接过，只需要安装一次
    npm install -g pnpm
    执行：pnpm install

## react 语法
- 单向数据流
  数据状态流动
  - 父组件负责提供数据，和api接口请求
  - 拆成多个子组件
  - 数据会从父组件流向子组件
  - 子组件负责消费数据   专注于显示数据
  - props传参
  <PictureCard
   uploadImage = {uploadImage} />
   函数参数一样，可以解构








## 项目中一定要安排的技能点
 - pnpm
   - react 思想
    - 数据驱动
    - 响应式 数据状态变化，自动更新
       - 不用操作DOM，只需要关注业务
    - 业务
        - 图片上传
        - 图片预览
        
 - 组件化设计，组件思维
    - APP
        - 提供数据
        - 图片上传大模型
    - PictureCard
      单向数据流
        - 子组件只负责消费数据
        - 父组件负责提供数据，数据的请求
        - 先要给父组件
 - 性能优化
    - linear-gradient 代替图片做背景
- 用户体验
  - 上传图片的功能，预览功能
  - 无障碍访问
    label for + input#id
- es6 新特性
    - 可选链操作符
- html5 功能
    - file  文件对象 
- 智能
    - 多模态模型
        ？月之暗面，发送图片（base64）
        prompt？
        - prompt 设计原则
          - 给它一个明确的身份 LLM交流 当人
          - 清晰且具体的任务
          - 限制，指定结果
            返回的结构 JSON
            有利于接下来的业务执行
            拿着大模型的回答，接着干活
            JSON 最好的接口格式
          - 分步做


        - Content:"{
  "image_description": "A person wearing a black hat and a black top, giving a thumbs-up sign.",
  "representative_word": "hat",
  "example_sentence": "She wore a hat to protect herself from the sun.",
  "explanation": "Look at the person in the picture. They are wearing a hat. A hat is something you wear on your head. It can keep you warm or protect you from the sun. Do you wear a hat when it's sunny outside?",
  "explanation_replies": [
    "Yes, I wear a hat to keep the sun out of my eyes.",
    "I prefer sunglasses, but I sometimes wear a hat too."
  ]
}
"
## 前端为什么要搞AI？
- 时代的需求，AI是个趋势
- vibe coding提升了开发效率
- LLM的发展，产品需要更多更好的智能体验
   用户体验是前端的职责，智能前端工程师新角色