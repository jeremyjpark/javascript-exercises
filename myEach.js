// var myEach = function(array, callback) {
//     for (var i = 0; i < array.length; i++) {
//         callback(array[i]);
//     }
// }
// module.exports.myEach = myEach;
Array.prototype.myEach = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

var func = function(el) {
    console.log(el);
};
[1, 2, 3].myEach(func);
