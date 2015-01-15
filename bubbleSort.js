var bubbleSort = function(array) {
    var sorted = false;
    do {
        sorted = true;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                sorted = false;
                array[i] = array[i] ^ array[i + 1];
                array[i + 1] = array[i] ^ array[i + 1];
                array[i] = array[i] ^ array[i + 1];
            } else {
                continue;
            }
        }
    } while ( sorted === false );
    return array;
}

a = [4, 3, 2, 1];
console.log(bubbleSort(a));
