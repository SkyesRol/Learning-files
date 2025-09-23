# XSS 跨站脚本攻击
XSS 跨站脚本攻击，是指攻击者在网页中插入恶意脚本，当用户访问该网页时，恶意脚本会被执行，从而达到攻击的目的。
XSS (Cross Site Scripting) 攻击全称跨站脚本攻击，是为不和层叠样式表 (Cascading Style Sheets, CSS) 的缩写混淆，故将跨站脚本攻击缩写为 XSS。
- 存储型

- 攻击者把恶意脚本存储到数据库中，当用户访问页面时，脚本会被浏览器执行
- 拿到cookie 发送到攻击者的网站
Cookie httpOnly 防止Xss

不能相信用户的输入，首先转义用户的输入，然后再渲染到页面中
</script> ->  &lt;/script&gt; 

html转义

- 解决办法：

如何让用户输入的内容进行转义： &lt;/script&gt;

- DOM 型 输入即执行

// preview.innerHTML = nameInput.value   这种会被攻击，会变成DOM元素   <img src = '' onerror=alert('XSS')>
            preview.textContent = nameInput.value

            innerHTML 会解析为HTML
            innerText / textContent 不会解析为HTML

- 反射型  在URL上动手脚
 http://example.com/search?keyword=<script>alert('XSS')</script> const keyword = new URLSearchParams(location.search).get('keyword'); document.getElementById('result').innerHTML = 搜到 "${keyword}" 的结果;


- 解决方案

过滤或者限制特殊字符 <> &lt; &gt; 在服务器端对动态内容进行HTML编码

利用 encodeURIComponent 对用户输入进行编码

encodeURIComponent('/abc?keyword=<script>alert()</script>')  -> '%2Fabc%3Fkeyword%3D%3Cscript%3Ealert()%3C%2Fscript%3E'

解码： decodeURIComponent('%2Fabc%3Fkeyword%3D%3Cscript%3Ealert()%3C%2Fscript%3E')  -> '/abc?keyword=\x3Cscript>alert()\x3C/script>'


- vue/react ?
- 前端转义DOMPurify  过滤危险的HTML标签和属性


- Cookie HttpOnly 安全 