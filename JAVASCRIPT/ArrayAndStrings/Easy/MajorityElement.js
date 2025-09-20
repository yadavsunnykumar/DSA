//Majority Element
var majorityElement = function(nums) {
    let candidate = null;
    let count =0;
    for(const num of nums){
        if(count === 0){
            candidate = num
        }
        if(num === candidate){
            count++;
        }else{
            count--;
        }
    }
    return candidate;
};
// Example usage:
const nums = [3,2,3];
console.log(majorityElement(nums)); // Output: 3