# tailwindcss 原子css

- 非常好用
- 几乎不写css
- AI 生成代码 css 大多都是tailwindcss
- 配置流程
    pnpm i tailwindcss
    pnpm i @tailwindcss/vite
    在css中 @import "tailwindcss"
- 有各种内置的css类名，只需要分门别类
- 1rem = 4个单位


- 文字的行数限制
    - -webkit-line-clamp-（数字）；不能独自生效
    -webkit 浏览器内核 Chrome + Safari
    -mozilla 火狐浏览器内核代号
    试验阶段的属性 新的
    display ：-webkit-box？ 较早的使用flex布局的方式，布局默认从左到右
    -webkit-box-orient: vertical; 设置为垂直布局
    overflow:hidden 实现单行文本末尾显示省略号效果