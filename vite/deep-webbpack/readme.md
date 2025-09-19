# hash 冲突怎么解决？

- 强缓存、协商缓存
    Cache-Control:max-age=
    节日活动，修改，编译，上线
    index.js 
    不用请求，怎么更新？

- bundle.[hash].js
    静态文件如何更新？
    使用hash 表达不同的版本，强制用户读取新文件。
    hash的设置，可以既强缓存又随时更新

- js css code split
- react react-dom react-router libs 单独打包

- math.js

如果只使用了 add 方法，那么 subtract、multiply、divide 方法就不会被打包到 bundle.js 中，这就是 tree shaking。 性能优化到极致

其在 package.json 中 利用 scripts 中的 "build": "webpack --mode production" 来实现 tree shaking。

webpack --mode development时不会 tree shaking