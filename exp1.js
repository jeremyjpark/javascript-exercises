var exp1 = function(base, power) {
    if (power === 0) {
        return 1;
    } else {
        return base * exp1(base, power - 1)
    }
}

console.log(exp1(2, 8));
