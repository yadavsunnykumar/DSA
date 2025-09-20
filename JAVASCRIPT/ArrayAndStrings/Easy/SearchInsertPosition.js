//  Search Insert Position
var searchInsert = function(nums, target) {
    let low =0
    let high = nums.length -1

    while(low<=high){
        let mid = Math.floor((low + high) /2)

        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            low = mid +1
        }else if(nums[mid] > target){
            high = mid -1
        }
    }
    return low
};

// Example usage:
const nums = [1,3,5,6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2
// const target2 = 2;
// console.log(searchInsert(nums, target2)); // Output: 1
