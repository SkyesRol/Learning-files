function greet(...args) {
    console.log(`My name is ${this.name},and I built ${args[0]} walls,and I'm Number ${args[1]}`);
}

const person = { name: 'Trump' };

Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.myCall called on non-function')
    };
    if (context === null || context === undefined) {
        context = global;
    }
    const fnKey = Symbol('greet');
    context[fnKey] = this;
    const res = context[fnKey](...args);
    delete context[fnKey];
    return res;
}

greet.myCall(person, 9, 1);