console.log('同步Start');

// Promise  Promise.resolve都是同步的
const promise1 = Promise.resolve('First Promise');
const promise2 = Promise.resolve('Second Promise');
const promise3 = new Promise(resolve => {
    console.log('promise3');

    resolve('Third Promise')
})




setTimeout(() => {
    console.log('下一把再见');
    let promise4 = Promise.resolve('dFourth Promise');
    promise4.then(value => {
        console.log(value);
    })
}, 0)
setTimeout(() => {
    console.log('下下一把');

}, 0)

promise1.then(value => console.log(value));
promise2.then(value => console.log(value));
promise3.then(value => console.log(value));

console.log('同步End');

