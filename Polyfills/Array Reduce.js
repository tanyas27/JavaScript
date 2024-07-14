Array.prototype.myReduce = function(callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    let arr = this;
    // Initialize accumulator based on initialValue or first element of array
    let accumulator = initialValue !== undefined ? initialValue : arr[0]; 

    // Adjust start index based on whether initialValue is provided
    let startIndex = initialValue !== undefined ? 0 : 1; 

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback.call(null, accumulator, arr[i], i, arr);
    }

    return accumulator;
};
