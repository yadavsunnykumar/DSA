// INTEGER TO ROMAN 
var intToRoman = function(num) {
    const val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];
    const sym = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            result += sym[i];
        }
    }

    return result;
};
let num = 3;
console.log(intToRoman(num)) // "III"
num = 4;
console.log(intToRoman(num)) // "IV"