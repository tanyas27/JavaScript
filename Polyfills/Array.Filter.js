Array.prototype.myFilter = function(callback, context) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    let arr = this; // 'this' refers to the array on which myFilter is called
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(context, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    
    return result;
};
