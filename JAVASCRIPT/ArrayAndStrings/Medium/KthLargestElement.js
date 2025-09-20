// Kth Largest Element in an Array
var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b -a)
    for(let i = nums.length;i>=0;i--){
        if(i+1 === k){
            return nums[i]
        }
    }
    return -1
    // const minHeap = [];

    // for (let num of nums) {
    //     minHeap.push(num);
    //     minHeap.sort((a, b) => a - b);
    //     if (minHeap.length > k) {
    //         minHeap.shift();
    //     }
    // }

    // return minHeap[0];
    // function quickSelect(left, right) {
    //     let pivot = nums[right];
    //     let p = left;

    //     for (let i = left; i < right; i++) {
    //         if (nums[i] >= pivot) {
    //             [nums[i], nums[p]] = [nums[p], nums[i]];
    //             p++;
    //         }
    //     }
    //     [nums[p], nums[right]] = [nums[right], nums[p]];

    //     if (p === k - 1) return nums[p];
    //     if (p < k - 1) return quickSelect(p + 1, right);
    //     return quickSelect(left, p - 1);
    // }

    // return quickSelect(0, nums.length - 1);

};
// Time Complexity: O(N log N) due to sorting the array.
// Space Complexity: O(1) if the sorting is done in place.
// Example usage:
let nums = [3,2,1,5,6,4];
let k = 2;
console.log(findKthLargest(nums, k)); // Output: 5
