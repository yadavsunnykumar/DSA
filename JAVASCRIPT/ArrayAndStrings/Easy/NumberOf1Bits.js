//Number of 1 Bits
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1;  // check if last bit is 1
        n >>>= 1;        // unsigned right shift
    }
    return count;
};

// Example usage:
const n = 11; // Example input (binary 1011)
console.log(hammingWeight(n)); // Output: 3
