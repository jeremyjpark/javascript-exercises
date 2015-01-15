var bSearch = function(array, target) {
    var midpoint = ~~(array.length / 2);
    var left = array.slice(0, midpoint);
    var right = array.slice(midpoint, array.length);
    if (array[midpoint] === target) {
        return midpoint;
    } else if (array[midpoint] > target) {
        return bSearch(left, target);
    } else {
        return bSearch(right, target) + midpoint;
    }
}

console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
console.log(bSearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
