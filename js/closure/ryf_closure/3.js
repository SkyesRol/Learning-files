function f1() {
    var n = 999;
    nAdd = function () {  //全局访问，又形成闭包
        n += 1;
    }
    function f2() {
        console.log(n);

    }
    m = 100
    return f2; // return f2 形成闭包
}

var result = f1();

function make_adder(x) {
    function adder(y) {
        return x + y
    }
    return adder
}
add5 = make_adder(5)
console.log(add5(3));

result();
nAdd();
result();



