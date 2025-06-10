# tts 智能语音


## 智能前端  AI用户体验

- webllm 利用fetch获取url，转换内容到前端页面
    AIGC 的 api remote call

- tts 语音

音乐类产品在web如何传递？ 加一个audio标签(html5新标签)
网易音乐
- 用户体验
    音乐不要自动播放，自动播放有可能让用户社死hhhhh
    让用户决定要不要播放

## 如果 不能做 DOM 编程，react里面怎么播放音乐？
为什么有react？
- 因为原生js DOM api低效   react中 document.querySelector  不用
- 不做dom编程audio如何播放？

## 路径
- 相对路径 ./ 同级 ../ 上级 / 下一级
- 绝对路径  
        物理路径：C:/ ? C:\?
        网站根路径： / index.html
        /sounds/snare.wav = 
        http://localhost:5173/sounds/snare.wav
    - 为什么可以这么访问？
       - npm run dev 后启动了http，本地服务器在5173端口
    端口背后对应的是不同服务
        - index.html 作为首页
        - public 静态资源的
        - 其约定所有的资源可以直接访问
- 网络路径  网址


## react 事件机制

 - 不会去用addEventListener   其为DOM Event事件
        - 为啥不用？因为react抛弃了DOM
 - 那么为什么能用onClick呢？
    - 因为其为一个react事件，和html 原生支持的事件有点像

## 小红书的event 事件机制  JavaScript 高级程序设计 1000多页
- 多种事件机制
    - DOM0 事件
      onclick html 属性 缺点是：耦合了  不推荐
    - DOM2 事件
      addEventListener html js事件分离
    - react
      采用了DOM 0 的方式，有利于组件html的表达
      @click   react 优于vue，vue在API上有创新，react没发明什么文字，一看就能看懂
      虽然API层面上看起来是这样的，但是底层还是不一样的


## useRef
- 可以帮助我们在react中拿到DOM对象
（React中不做DOM 编程！！！！）
  - useRef(null) 初始化空对象
  - current 属性 null
  - jsx ref = {ref} DOM绑定
  - ref.current 指向引用的DOM对象










