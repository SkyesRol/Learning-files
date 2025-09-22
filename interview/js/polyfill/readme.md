- finally 了解多少？

Promise.prototype.finally 是 es2018 引入的 API 用于在 Promise成功或者失败后都执行一次回调，其不会改变原有的状态和值。
它的返回值会覆盖原状态。
- loading 状态处理 相比then catch 更加简洁 语义化

```js
showLoading();
fetchData()
    .then(render)
    .catch(showError)
    .finally(hideLoading)

```


- 什么是polyfill ?
    Polyfill 就是 “兼容补丁” ； 当 老浏览器不支持新特性 (Promise,fetch,Array.includes),
    用一段代码去模拟这些功能，让旧环境也能跑起来，提高兼容性和用户体验


- Polyfill
    babel 怎么实现polyfill
    @babel/core @babel/cli @babel/preset-env
    babel 本身只转译语法 (箭头函数 -> 普通函数)，但不补全API
    @babel/preset-env 配合 useBuiltIns： 'usage' 根据使用的API 从 core.js 中
    按需引入对应的polyfill





