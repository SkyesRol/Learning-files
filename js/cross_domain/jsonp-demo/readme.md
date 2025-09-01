# 封装的JSONP

- 智能解决GET 请求的跨域问题
    http://localhost:3000/say?callback=biaobaiCallback&wd=i%20like%20you

- 缺点 ： 只能够get
        需要后端配合，后端的输出方式需要加padding
- 不太安全
    全局挂载了一个show callback 函数 容易被黑客利用