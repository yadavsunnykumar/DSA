// ROMAN TO INTEGER
var romanToInt = function(s) {
    let map = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let currVal = map.get(s[i]);
        let nextVal = map.get(s[i + 1]);
        if (nextVal > currVal) {
            total += nextVal - currVal;
            i++; // Skip the next character since it's already processed
        } else {
            total += currVal;
        }
    }
    return total;
};

let s = "III"

console.log(romanToInt(s)) // 3
s = "IV"
console.log(romanToInt(s)) // 4
s = "IX"
console.log(romanToInt(s)) // 9