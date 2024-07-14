let inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];

Array.prototype.flatten = function (){
    let arr = this;
    let res = [];
    arr.forEach(item => {
        if(Array.isArray(item)){
           res.push(...item.flatten());
        } else {
            res.push(item);
        }
    });
    return res;
}

console.log(inputArray.flatten()); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
