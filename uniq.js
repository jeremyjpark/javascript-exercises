var uniq = function(array) {
  a = [];
  for (var i = 0; i < array.length; i++) {
    if (a.indexOf(array[i]) === -1) {
      a[a.length] = array[i];
      // a.push(array[i]);
    }
  }
  return a
}
