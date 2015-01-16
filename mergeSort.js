var mergeSort = function(array) {
    if (array.length <= 1) {
        return array;
    }
    var midpoint = ~~(array.length / 2)

    var left = array.slice(0, midpoint);
    var right = array.slice(midpoint, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

var merge = function(left, right) {
    sorted = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    sorted = sorted.concat(left).concat(right);
    return sorted;
}


console.log(mergeSort([1, 2, 3, 4, 5, 10, 20].sort()));
