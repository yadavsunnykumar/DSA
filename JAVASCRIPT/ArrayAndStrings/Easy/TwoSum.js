// TWO SUM
function TwoSum(nums,target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let compliment = target - nums[i];
        if(map.has(compliment)){
            return [map.get(compliment),i];
        }
        map.set(nums[i], i)
    }
}

// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
let result = TwoSum(nums, target);
console.log(result); // Output: [0, 1]