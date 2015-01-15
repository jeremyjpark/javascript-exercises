var sumRecursive = function(array) {
    if (array.length == 0) {
        return 0;
    } else if (array.length == 1) {
        return array[0];
    } else {
        return array[0] + sumRecursive(array.slice(1, array.length));
    }
}

console.log(sumRecursive([1, 2, 3, 4, 5]));
