"use strict"

let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        alert("Called with " + x);
        return x * this.someMethod();
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}

alert( worker.slow(1));

worker.slow = cachingDecorator(worker.slow);
// 此处传入的只是worker的一个属性引用，这个属性的类型和函数的要求相同是一个函数
// 由于实参函数需要对worker的另一个函数类型属性someMethod进行访问，目前worker.slow只是一个单独的函数
// 无法访问someMethod 因此赋值成功，但是执行时找不到someMethod()由此报错
alert( worker.slow(2) );