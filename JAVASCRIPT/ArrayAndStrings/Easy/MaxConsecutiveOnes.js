// Find the maximum number of consecutive 1's in an array of binary numbers.
var findMaxConsecutiveOnes = function(nums) {
    let counter =0;
    let maxCounter = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            counter++
            maxCounter= Math.max(maxCounter,counter);
        }else{
            counter =0;
        }
        
            
        
        
    }
    return maxCounter;
};

// Example usage:
const nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums)); // Output: 3