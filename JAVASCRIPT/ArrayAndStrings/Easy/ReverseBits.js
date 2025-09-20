// Reverse Bits of a 32-bit unsigned integer
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1; // unsigned right shift
    }
    return result >>> 0; // ensure unsigned
};

// Example usage:
const n = 43261596; // Example input
console.log(reverseBits(n)); // Output: 964176192