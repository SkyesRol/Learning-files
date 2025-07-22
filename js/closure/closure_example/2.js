function debounce(fn, delay) {
    // 定时器会返回id的
    // fn自由变量
    // fn对象
    // let id = null;

    return function (args) {
        var that = this;
        if (fn.id) {
            clearTimeout(fn.id);
        }
        fn.id = setTimeout(function () {
            // this 丢失问题
            fn.call(that, args)
        }, delay)
    }
}


let obj = {
    count: 0,
    inc: debounce(function (val) {
        // this
        console.log(this);

        console.log(this.count += val);
    }, 500)
}
obj.inc(2)