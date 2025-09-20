// Problem: Longest Common Prefix
var longestCommonPrefix = function(strs) {
    strs.sort()
    let str1 = strs[0];
    let str2 = strs[strs.length - 1];
    let idx = 0;
    
    while(idx < str1.length && idx < str2.length){
        if(str1.charAt(idx) === str2.charAt(idx)){
            idx++;
        }else{
            break;
        }
    }
    return str1.substring(0,idx)
};

// Example usage:
const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs)); // Output: "fl"