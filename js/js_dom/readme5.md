## 字符串模板

- 可以帮助我们优雅的展示字符串，不用拼接

- 多行，保持格式，特别适合于DOM

- map

        es6在数组上添加的方法
    foreach和map：
        相同： 像foreach一样 去迭代每一项执行一个函数（callback）
        不同： 但是foreach没有返回值，map有返回值，返回一个新数组，新数组的每一项都是回调函数执行的结果
        旧数组是：friends JSON数组
        新数组是：<li>.......</li> 字符串数组
        常用于业务中转变数组结构格式
        .join('') 
        .innerHTML = htmlStr


ul.innerHTML = friends.map(function(friend){
            ` <li>${friend.name} -
                <i>${friend.hometown}</i>
                </li> `
}
        ).join('');
优化：（优化为箭头函数）

ul.innerHTML = friends.map((friend)=>{
          return  ` <li>${friend.name} -
                <i>${friend.hometown}</i>
                </li> `
            }
        ).join('');

再优化：（只有一句return）
ul.innerHTML = friends.map((friend)=>
            ` <li>${friend.name} -
                <i>${friend.hometown}</i>
                </li> `
            
        ).join('');












