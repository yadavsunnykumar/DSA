// Find the first occurrence of a substring in a string
var strStr = function(haystack, needle) {
    if(needle  === "") {
        return 0
    }   

    let n = haystack.length
    let m = needle.length

    if(m>n) {
        return -1
    }

    for(let i =0; i<=n-m;i++){
        let match = true

        for(let j=0;j<m;j++){
            if(haystack[i+j] !== needle[j]){
                match = false
                break
            }
        }
        if(match){
            return i
        }
    }
    return -1
};

// Example usage:
const haystack = "hello";
const needle = "ll";
console.log(strStr(haystack, needle)); // Output: 2
