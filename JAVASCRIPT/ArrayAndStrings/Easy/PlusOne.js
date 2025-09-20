// PLUS ONE PROBLEM
var plusOne = function(digits) {
    // let n = digits[digits.length -1]
    // let num = n + 1;
    // if(num >=10){
    //     if(digits.length === 1){
    //         return [1,0]
    //     }else{
    //         digits[digits.length-2] +=1
    //     }
    // }else{
    //     digits[digits.length -1] = num
    // }

    // return digits


   
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // carry over
    }

    // If all digits were 9
    digits.unshift(1);
    return digits;



};
let digits = [1, 2, 3];
console.log(plusOne(digits)) // [1,2,4]
digits = [4, 3, 2, 1];
console.log(plusOne(digits)) // [4,3,2,2]