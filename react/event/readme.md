# react 事件机制
- js的事件机制
    - 异步
    - 监听事件？
        - addEventListener() DOM2 事件
        - DOM 0
        <a onclick = 'doSomething()'></a>
        - DOM 1? DOM版本，没有去做事件升级

    - addEventListener(type,listener,useCapture？)
    useCapture = true 时为捕获阶段
    false 时为冒泡阶段，可以由此确定函数何时触发
    - 回调函数 callback 是异步处理的总称  listener也是一个callback
    - promise then
    - async await
    监听器
- 注册事件 addEventListener
- useCapture false 默认值
    页面是由浏览器渲染引擎按像素点画出来的 png
    - 先捕获 document-> 一层层去寻找 最后找到Event.target
        先触发父元素
        捕获阶段结束，拿到Event.target

    - 冒泡
        最后冒泡到html 回到根节点
        为什么有冒泡？
        事件在冒泡阶段执行

    停止冒泡 Event.stopPropagation();




