// SQRT OF N 
var mySqrt = function(x) {
    if (x < 2) return x;

    let left = 1, right = Math.floor(x / 2);
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            result = mid; // candidate
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};
let x = 4;
console.log(mySqrt(x)) // 2
x = 8;
console.log(mySqrt(x)) // 2
x = 0;
console.log(mySqrt(x)) // 0