// REMOVE DUPLICATES
function removeDuplicate(arr){
    let set = new Set()
    for(let num of arr){
        set.add(num)
    }
    return Array.from(set)
}


// Example usage:
const arr = [1,2, 2, 3, 4, 4, 5];
const result = removeDuplicate(arr);
console.log(result); // Output: [1, 2, 3, 4, 5]

