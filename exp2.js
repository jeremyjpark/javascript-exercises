var exp2 = function(base, power) {
    if (power === 0) {
        return 1;
    } else if (power === 1) {
        return base;
    } else if (base % 2 === 0) {
        return exp2(base, power / 2) * exp2(base, power / 2)
    } else {
        return base * exp2(base, (power - 1) / 2) * exp2(base, (power - 1) / 2);
    }
}

console.log(exp2(2, 8));
