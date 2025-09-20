// Sliding Window Maximum
var maxSlidingWindow = function(nums, k) {
    let deque = [];
    const result = [];
    for(let i=0;i<nums.length;i++){
        while(deque.length && deque[0] < i-k+1){
            deque.shift();
        }

        while(deque.length && nums[deque[deque.length - 1]]<nums[i]){
            deque.pop();
        }
        deque.push(i);

        if(i>=k-1){
            result.push(nums[deque[0]]);
        }
    }
    return result;
};
// Example usage:
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Output: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // Output: [1]
console.log(maxSlidingWindow([1,-1], 1)); // Output: [1,-1]