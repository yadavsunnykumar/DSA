// Remove Duplicates from Sorted Array
var removeDuplicates = function(arr) {
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};

// Example usage:
const arr = [1, 1, 2];
console.log(removeDuplicates(arr)); // Output: 2, arr = [1,2,...]