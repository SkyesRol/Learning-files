## talk in js


- how to introduce myself?

- "对象"

- “变量”
name = “hxt”   incomparable

简单数据类型：number, string, boolean, null, undefined, symbol

复杂数据类型：Object, Array,Function.....

-面向对象思想
现实世界和关系的软件抽象化
基本规则
      - 对象
      - 属性  帮助我们了解这个对象

<!DOCTYPE html>  这是个文档（doc），html类型的文档
  html5的标准头 

JS创建数据对象后可以对数据再赋值，这是动态语言的特性。

// 常量对象 Variable
// 声明后，在内存开辟一块空间，存放了一个对象，变量名对应了地址，其为地址的标记
// js是弱类型语言
// 对象字面量（字面意义上） JSON
// JS很灵活 {}拿到对象 []拿到数组
// JS运行方式：后端运行：node fname.js   在命令行中运行
// 前端运行： 引入js文件，1.浏览器文件方式运行js  html Document
// - http协议的方式运行js（远程访问）（Open with Live Server 利用index.html）
// JS是一门脚本语言

# 面向对象设计模式  代理模式 Proxy

-小彭送花给小美，通过面向的对象的属性（描述）和方法（动作）就可以实现
-软件系统的世界，复杂的，类现实世界的，
-添加一个小红对象，和小美一样有receiveFlower方法，方法名一样，接口，小美和小红可以互换
-面向接口（设计接口）的编程 面向对象思想的高级表现，即设计模式 Design Pattern


attack: function() { 
const randomWeapon = this.weapon_kind[Math.floor(Math.random() * this.weapon_kind.length)]; 
return 
`${this.name} used ${randomWeapon} to attack！ (Attack Damage:${Math.floor(Math.random() * 100)})`; 
}, 
speak: function() { 
return "I am Iron Man!"
};
