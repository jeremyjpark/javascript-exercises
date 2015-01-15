var myTranspose = function(matrix) {
    var size = matrix.length;
    a = new Array(size);
    for (var i = 0; i < size; i++) {
        a[i] = new Array(size);
        console.log(a);
        for (var j = 0; j < size; j++) {
            a[i][j] = matrix[j][i]; // if we did a[j][i],
                                // it would error out because the
                                //array doesn't exist at that point
        }
    }

    return a;
}

console.log(myTranspose([ [0, 1, 2], [3, 4, 5], [6, 7, 8]]))
