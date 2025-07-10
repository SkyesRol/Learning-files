# 智能前端之图片识别


- StrictMode 是react 默认启动的严格模式
    - 其 执行一次 ， 测试一次，所以造成了两次输出console.log(VITE_API_KEY)


- 良好的编程风格
   移除不需要的代码


- import.meta.env.VITE_API_KEY 环境变量对象
    代码运行的时候可以和环境变量交互
    不能把私密信息写到代码里，所以利用env
- async await
    then
    异步
    流程控制
    await 比 then 更同步化 更简单
- class 是 js 的关键字
    - react JSX 运行，以原生JS来运行
    所以用className代替了class
- 无障碍访问
    label htmlFor 绑定元素  利于盲人使用产品，点击可以确认属于哪一块功能

- 本地预览 preview
    - 良好且必须的用户体验，前端有责任实时告诉用户发生什么
    - 图片上传及处理挺慢的，所以需要preview
    - onChange
        e.target.files[0] 拿到图片对象
        - FileReader 实例
        - readAsDataURL 方法
          - data？ base64 数据
          - base64 直接作为img src
- 静态的html -> 动态模板{{data}} -> 状态 State  useState




