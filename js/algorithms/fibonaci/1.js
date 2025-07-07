

// 递归
// 问题相似
// 自顶向下的思考 站在问题的终点
// 退出条件
// 重复计算
// 树状结构
/*
        f(10)
    f(9)     f(8)
f(8) f(7)  f(7) f(6)
    ...........
    f(0)  f(1)
*/

function fib(n) {
    if(n<=1) return n;

    else return fib(n-1) + fib(n-2);
};


























