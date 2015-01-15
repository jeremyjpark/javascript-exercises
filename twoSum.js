Array.prototype.twoSum = function() {
  pos = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = (i + 1); j < this.length; j++) {
        if (this[i] + this[j] === 0) {
          pos.push([i, j]);
        }
    }
  }

  return pos;
}
