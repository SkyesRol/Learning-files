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
        为什么有冒泡？ 执行事件委托，提高性能和效率
        事件在冒泡阶段执行

    停止冒泡 Event.stopPropagation();
    


## 事件委托（Event Delegation）优势
- 性能优化
    - 极致 将事件委托给最外层的元素
    react 大型项目开发
    给我们事件节点event.target 添加一个唯一属性
- 动态节点的事件
    滚动到底部，一次新增一堆的新元素
    事件委托可以有效解决
- 给同一元素同一事件注册多次
    - dom节点
    - event type 事件类型
    - 监听器（回调函数）  
        JS是单线程，函数既然不会立即执行，则其会注册在哪里？ ———— Event
        Loop
        给回调函数一个event 对象，拿到this，指向event.target
    - useCapture
        true时，捕获阶段，从外到里触发
        false时，冒泡阶段，从内到外触发
    - event.preventDefault 阻止默认行为？ 什么叫默认行为？
        form submit
        a 超链接跳转
    - event.stop.Propagation  阻止冒泡，控制在此元素之内，不会再向外冒泡

- 用户交互的便利体验问题
    - toggle按钮
    - 点击页面任意其他地方可以关闭 方便 
    **若我点了另一处的按钮，如何能让其关闭并新地方开始显示？**

- Synthetic Event 合成事件
    - 委托 #root
        性能优化框架帮我们做
    - 事件池 Event pooling
        事件对象的回收利用
        大型密集交互的应用时，非常重要
        - 在最近的版本中又可以安全使用了