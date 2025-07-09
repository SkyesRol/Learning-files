# uploader 大厂必考

- 源码学习是核心
   - 在源码中可以学习到高质量的代码和技巧
   - 以及设计的思维方式
- 技能点
   - 语义化标签
   - BEM 命名规范
   - 弹性布局
   - stylus 变量 模块化
   - 伪元素

- weui-uploader 源码

    - weui-uploader 外面严谨的套上了 .weui-cells 遵守了框架的设计语义
    - .weui-cells 移动端收集用户数据或者操作表单表格
      - .weui-cell 每个表单元素
        - .weui-cell__hd
        - .weui-cell__bd
        - .weui-cell__ft
    - -webkit-overflow-scrolling:touch;
       滚动更加敏感，感知touch
       -webkit     此属性仍然处于试验阶段
            chrome 浏览器内核的代号
            移动端没有微软    移动端是苹果、安卓，都是webkit
    - 一个个变量组成了weui的主题风格
- stylus中的 &  
&::before
        content ""

        &的意思是，应用上一层，和它是同级，是伪类，某个状态

- float布局
    为早于flex的布局方案
    float:left / right 左浮动 右浮动 两列式
    - 会离开文档流
    - 一直float：left 多列
    - 一行不够，自动换行