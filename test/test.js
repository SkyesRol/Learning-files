function myNew(constructor, ...args) {
    const obj = Object.create(constructor.prototype);

    const res = constructor.apply(obj, ...args);

    return res === 'object' ? res || obj : obj;
}



function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn(...args)
            timer = null
        }, delay);
    }
}

function throttle(fn, delay) {
    let state = true;

    return function (...args) {
        let context = this;
        if (state === true) {
            fn.apply(context, ...args);
            state = false;
            setTimeout(() => {
                state = true;
            }, delay)
        }
    }
}


const instance = axios.create(
    {
        baseURL: 'xxxxx'
    }
);
instance.interceptors.response.use(
    response => {
        return response.data
    },
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            switch (status) {
                case '403':

                case '404':
            }
        }
    }
)


const axios = axios.create({
    baseURL: "xxx"
});

axios.interceptors.response.use(
    (error) => {
        const { status, data } = error.response

        switch (status) {
            case '403':

            case '404':
        }
    }
)

Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function')
        throw new TypeError('Its not a function')
    if (context === null || undefined) {
        context = window
    }
    const id = Symbol('id');


}