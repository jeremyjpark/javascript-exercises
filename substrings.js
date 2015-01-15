var substrings = function(string) {
    substrings = []
    for (var i = 0; i < string.length; i++) {
        for (var j = i; j < string.length; j++) {
            substr = string.substring(i, j + 1);
            if (substrings.indexOf(substr) === -1) {
                substrings.push(substr);
            }
        }
    }

    return substrings;
}

console.log(substrings("hello"))
