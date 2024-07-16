Array.prototype.myForEach = function(callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i, this); // Pass current element, index, and the array itself
  }
};
