// 如何用闭包优化 fibonaci
// 记忆功能

function memorizedFib(){
        let cache=[];
        // 闭包 1.函数嵌套函数
       return  function fib(n){
            if(n<=1) {
            
                return n;}
                if(cache[n]) return cache[n];
            cache[n] = fib(n-1)+fib(n-2);
            
            return cache[n];
        }
        
        


}

const fib = memorizedFib();

console.log(fib(2));






