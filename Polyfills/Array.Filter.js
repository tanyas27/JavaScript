Array.prototype.myFilter = function(callback, context) {
    let arr = this; // 'this' refers to the array on which myFilter is called
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(context, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    
    return result;
};
