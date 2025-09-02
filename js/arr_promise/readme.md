需求：

两个异步请求

api.github.com/users/SkyesRol/repos
api.github.com/users/shunwuyu/repos


- 有一堆的异步任务要执行
   
- 每一项是一个Promise
-  Promise.all()本身返回一个新数组，将多个Promise包装成一个新的Promise实例，等待每一项都执行成功后，才会执行成功，且每个Promise的结果都会按照原来的Promise下标存放，有一个执行失败就会失败
- Promise.all 是静态方法， 不是实例方法
