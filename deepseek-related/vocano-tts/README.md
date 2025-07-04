# 智能前端之语音合成
- AI时代新的交互体验，语音交互
  虚拟数字人 AIGC文字 -> 语音


- 敏感信息如何保护？
    .gitignore 声明哪些文件不用提交到远程  仓库也不进入
    node_modules/ 太大了 而且没有必要提交（用户下载之后npm install即
    可）   git提交大小有限制


- 环境变量
    .env.local 本地环境变量 以 . 开头，在这里放着本地项目需要的key
    我们将其添加到gitignore中，就不会提交到远程仓库了


- 单项数据流 
    绑定了prompt 
    input value {prompt}
    保持数据状态和页面的统一
    UI = f(state) state 驱动界面
    onChange 修改状态


- base64 格式










