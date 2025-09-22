# 移动端采用了什么适配方案？
- 不能是 px  绝对单位，只能是相对单位 （rem、vw/vh、%）
    - rem 兼容性更好一点
    - vw 企业中用的最多的方案 兼容性稍微弱一点


- 设计稿是px 750（iphone的标准尺寸）  我们需要把px 转换为 vw/vh
    插件：postcss-px-to-viewport




