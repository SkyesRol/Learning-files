# 电影

## 良好的编程风格和用户体验的细节魔王

    - 字节/腾讯/pdd 代码风格手册



## 表单为何 阻止默认提交

- form action  ?
  html  早期  收集用户的数据  默认会由后端去处理，会重新刷新页面，
  导致体验不好

  页面会白一下
  所以JS 出了解决方案：
  event.preventDefault()  js雄起了 阻止默认提交，之后利用fetch（http）去提交，没有必要刷新页面了


  优化了表单提交的用户体验（前端职责所在，优化体验）
  placeholder （html5的新特性）优化体验，把用户当小白
  header 等语义化标签 也属于 html5的新特性

- 为什么script放在尾部？
 script会阻塞html的下载，文件越大，看到页面就要等越久
 而我们的第一需求就是 要快速看到页面，所以script要放在尾部。（用户体验第一）

 form提交 -> 事件对象 -> html5 ->required/log('请输入内容')

 做搜索类功能时，记得判断用户输入的内容是否为空，为空时，提示用户输入内容。
 或者利用html5的**required**关键字，表单必填项，这样可以减少用户犯错

- 函数模块化思维 将每个功能都封装成函数，方便调用，方便维护，方便复用
- JSONView 插件必装 更好的查看API 接口数据










