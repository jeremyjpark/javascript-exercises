var fib = function(n) {
    if (n === 1) {
        return [1];
    } else if (n === 2) {
        return [1, 1];
    } else {
        return fib(n- 1).concat(fib(n - 1)[n - 2] + fib(n - 1)[n - 3])
    }
}

console.log(fib(10));
