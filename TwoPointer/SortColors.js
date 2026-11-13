// The Problem:
// Given an array with n objects colored red, white, or blue (represented by 0, 1, and 2 respectively), sort them in-place so that objects of the same color are adjacent, in the order red, white, and blue.

// The Strategy (Dutch National Flag):
// Instead of standard left/right pointers, we use three pointers: low (tracks boundary of 0s), mid (current element scanner), and high (tracks boundary of 2s).

const SortColor = (nums) => {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
};

console.log(SortColor([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
