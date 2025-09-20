// Decode String
var decodeString = function(s) {
    const countStack =[];
    const stringStack = [];
    let currentString = '';
    let k = 0;

    for (let char of s){
        if(!isNaN(char)){
            k = k * 10 + parseInt(char);
        }else if(char === "["){
            countStack.push(k);
            stringStack.push(currentString);
            k =0;
            currentString ='';
        }else if(char === "]"){
            const repeatCount = countStack.pop();
            const prevString = stringStack.pop();
            currentString = prevString + currentString.repeat(repeatCount);
        }else{
            currentString+=char;
        }
    }
    return currentString;

};
// Example usage:
const s = "3[a]2[bc]";
console.log(decodeString(s)); // Output: "aaabcbc"
// Explanation: "a" repeated 3 times followed by "bc" repeated 2 times
// Time Complexity: O(n)
// Space Complexity: O(n)