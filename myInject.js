var customFunc = require('./myEach.js')

var myInject = function(array, callback) {
    var copiedArray = array
    var result = copiedArray.shift()

    customFunc.myEach(copiedArray, function(el) {
        result = callback(result, el);
    });

    //inject(0) { | result, el | result + el}
    return result
}

console.log(myInject([1, 2, 3, 4, 5], function(start, el) {
    return start + el
}))
