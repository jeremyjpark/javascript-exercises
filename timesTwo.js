var timesTwo = function(array) {
  a = [];
  array.forEach(function(el) {
    a.push(el * 2);
  });

  return a;
}

console.log(timesTwo([1, 2, 3, 4]))
