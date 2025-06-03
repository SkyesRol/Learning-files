# Github most popular 50 repos today

- 布局 
      -  居中
          .container{
            position:absolute;
            top:50%;
            left:50%;
            transform(变基属性):translate(-50%,-50%);
          }
          .container{
            display:flex;
            justify-content:center;
            align-items:center;
          }

   - 一行5个元素的布局

   - js交互

   1. 合适的标签 BEM类名
   2. flex 居中
         - flex 是移动端时代（之前是PC时代）新的局部方式
              弹性的布局格式化上下文
            - align-items 交叉轴
            - justify-content 主轴  
            - .container 居中
            - 父元素和子元素们之间的布局方案
                - 子元素们不会换行
    - body 本身没有固定高度，由子元素撑起来

    - 100vh 相对单位
        view height
        view width
        不同设备但是等比例单位

- 前端核心用户体验
- 艺术性，让用户充满期待