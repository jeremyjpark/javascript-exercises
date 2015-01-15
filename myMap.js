var customFunc = require('./myEach.js')

var myMap = function(array, callback) {
    a = [];

    var innerFunc = function(el){
        a.push(callback(el))
    }
    customFunc.myEach(array, innerFunc)

    /* alternative
    customFunc.myEach(array, function(el){
        a.push(callback(el))
    });
    */
    return a;
}

console.log(myMap([1, 2, 3], function(num) {
    return num * 2;
}));

/*
def myMap(array, &proc)
    result = []
    array.each { |el| result << yield(el) }

    result
end
*/
