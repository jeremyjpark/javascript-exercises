var sumIterative = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumIterative([1, 2, 3, 4, 5]));
