// ADD BINARY - Given two binary strings, return their sum (also a binary string).
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry) {
        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;
        const sum = bitA + bitB + carry;

        result.push(sum % 2);        // Add the current bit
        carry = Math.floor(sum / 2); // Compute new carry

        i--;
        j--;
    }

    return result.reverse().join('');
};
let a = "11";
let b = "1";
console.log(addBinary(a, b)) // "100"