// Remove Element
var removeElement = function(nums, val) {
    let arr = []
    for(let i =0;i<nums.length;i++){
        if(nums[i] !== val){
            arr.push(nums[i])
        }
    }
    for(let i=0;i<arr.length;i++){
        nums[i] = arr[i]
    }
    return arr.length
    
};
// Example usage:
const nums = [3,2,2,3];
const val = 3;
console.log(removeElement(nums, val)); // Output: 2, nums = [2,2,...]