// Single Number
var singleNumber = function(nums) {
    // let obj = {};
    // for(let num of nums){
    //     obj[num] = (obj[num] || 0) + 1;

    // }
    // for(let key in obj){
    //     if(obj[key] === 1){
    //         return Number(key)
    //     }
    // }
    let xor = 0;
    for(let i=0;i<nums.length;i++){
        xor^=nums[i]
    }
    return xor
};

// Example usage:
const nums = [4,1,2,1,2];
console.log(singleNumber(nums)); // Output: 4