Array.prototype.myMap = function(callback, thisArg){
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    let arr = this, result = [];
    
    for(let i=0; i< arr.length; i++){
        let val = callback.call(thisArg, arr[i], i, arr);
        result.push(val);
    }
    
  return result;
}
