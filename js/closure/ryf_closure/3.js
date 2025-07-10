function f1(){
    var n = 999;
    nAdd = function(){  //全局访问，又形成闭包
        n+=1;
    }
    function f2(){
        console.log(n);
        
    }
    return f2; // return f2 形成闭包
}

var result = f1();
result();
nAdd();
result();