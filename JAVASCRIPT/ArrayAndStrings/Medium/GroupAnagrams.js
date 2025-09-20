// Group Anagrams
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let word of strs){
        const key = word.split('').sort().join('');
        if(!map.has(key)){
            map.set(key,[]);
        }
        map.get(key).push(word);
    }
    return Array.from(map.values());
};

// Example 1:
let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs)); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
// Example 2:
strs = [""];
console.log(groupAnagrams(strs)); // Output: [[""]]
// Example 3:
strs = ["a"];
console.log(groupAnagrams(strs)); // Output: [["a"]]