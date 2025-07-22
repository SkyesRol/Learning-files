function CreateCounter(num) {
    // 对外的接口
    // 对内的私有
    this.num = num; // public
    // 私有变量 private
    let count = 0;
    return {
        num: num,
        increment: () => {
            count++;
        },
        decrement: () => {
            count--;
        },
        getCount: () => {
            console.log('count got visited');

            return count;
        }

    }
}

// let obj = new CreateCounter(1);
// console.log(obj.num);
const counter = CreateCounter(666);
console.log(counter.count); // 无法直接访问
console.log(counter.num);   // 可以访问

// 闭包延长了变量的生命周期
// 这个自由变量，我们不直接操作它
counter.increment();  // +1
console.log(counter.getCount());  // 得到count
