/********** Polyfill for call **********/

Function.prototype.myCall = function(ctx, ...args) {
    const context = ctx || window; // If ctx is not provided, default to global object
    context.func = this; // Assign the function to the context
    const result = context.func(...args); // Call the function with provided arguments
    delete context.func; // Clean up by deleting the property added to the context
    return result; // Return the result of the function call
}

/********** Polyfill for apply **********/

Function.prototype.myApply = function(ctx,args) {
    const context = ctx || window; // If ctx is not provided, default to global object (node - global or window for browser)
    context.func = this; // Assign the function to the context
    const result = context.func(...args); // Call the function with provided arguments
    delete context.func; // Clean up by deleting the property added to the context
    return result; // Return the result of the function call
}

/********** Polyfill for bind **********/
Function.prototype.myBind = function(ctx, ...args1) {
    const fn = this; // The original function
    return function(...args2) {
        return fn.apply(ctx, [...args1, ...args2]);
    };
};
