# useLayoutEffect

- useState
- useEffect 
    - 带来副作用，主要作用是渲染
        - 副作用：渲染完成后
        - 更新
        - 移除
- useContext
- useRef 标记图片/拿到dom元素....
- useLayoutEffect
    - 副作用
    - 在DOM更新之后
    - 阻塞页面渲染
    - 在页面渲染之前


- useLayoutEffect 能解决什么问题？
    - 防“闪烁”   用户体验bug
    - 类似‘同步’拿到响应式之后元素的样式