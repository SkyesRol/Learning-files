# localstorage


- 全局安装stylus

- **npm install -g stylus**
- **stylus -version**

- stylus 是什么

 - 是一个css预处理器
 - 更快更专业
 - .styl 后缀的文件
 - 编译成css


- stylus 是css的 超集
  但是浏览器还是只认识css
  所以我们需要编译一下

- 将stylus编译为css：
  **stylus filename.styl -o filename.css**

写着写着就得编译？很麻烦怎么办？
尝试命令： **stylus -w filename.styl -o filename.css**


- box-shadow
    - 盒子立体的感觉
- css 有些属性直接继承
    - 如果没有继承，那么就每个都要写一遍，会很麻烦
    - 以前的页面有默认的字体大小，为16px，默认颜色为黑色
    - body color 子元素文本颜色继承body
    有些也不会继承 
    
- background-size: cover; 等比例缩放，裁剪 重点在盒子，要填满盒子
                   contain  重点在背景，利用这个属性，则一定完整显示图片


Stylus 让 css像js一样
    - 模块特性
    tab 缩进 自动补全css前缀
    模块和作用域的概念
    **变量的概念：$background_color = rgba(255,255,255,0.95)**

- user-scalable = no
`user-scalable=no` 是 HTML `<meta>` 标签中的属性，用于**禁止用户缩放网页**，通常在移动端使用，强制固定页面比例，防止用户通过手势放大或缩小内容。适用于需要保持固定布局的网页，但可能影响无障碍访问。