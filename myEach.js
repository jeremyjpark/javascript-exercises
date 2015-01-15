var myEach = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

module.exports.myEach = myEach;
