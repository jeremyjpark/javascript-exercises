// var substrings = function(string) {
//     substrings = []
//     for (var i = 0; i < string.length; i++) {
//         for (var j = i; j < string.length; j++) {
//             substr = string.substring(i, j + 1);
//             if (substrings.indexOf(substr) === -1) {
//                 substrings.push(substr);
//             }
//         }
//     }
//
//     return substrings;
// }

String.prototype.substrings = function() {
    substrings = []
    for (var i = 0; i < this.length; i++) {
        for (var j = i; j < this.length; j++) {
            substr = this.substring(i, j + 1);
            if (substrings.indexOf(substr) === -1) {
                substrings.push(substr);
            }
        }
    }

    return substrings;
}

console.log("hello".substrings())
