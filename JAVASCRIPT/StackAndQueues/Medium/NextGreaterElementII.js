// Next Greater Element II
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for(let i=0;i<2*n;i++){
        const num = nums[i%n];
        while(stack.length && nums[stack[stack.length -1]] < num){
            let idx = stack.pop();
            result[idx] = num;
        }
        if(i<n) stack.push(i);
    }
    return result;
};
// Example usage:
const nums = [1, 2, 1];
console.log(nextGreaterElements(nums)); // Output: [2, -1, 2]
// Time Complexity: O(n)
// Space Complexity: O(n)