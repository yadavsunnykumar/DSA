// Squares of a Sorted Array
var sortedSquares = function(nums) {
    let n = nums.length
    let result = new Array(n)
    let left = 0
    let right = n-1
    let position = n-1

    while(left <= right){
        let leftSquare = nums[left] * nums[left]
        let rightSquare = nums[right] * nums[right]
        if(leftSquare > rightSquare){
            result[position] = leftSquare
            left++
        }else{
            result[position] = rightSquare
            right--
        }
        position--
    }
    return result
};

// Example usage:
const nums = [-4,-1,0,3,10];
console.log(sortedSquares(nums)); // Output: [0,1,9,16,100]
