// Sum of All Subset XOR Totals
var subsetXORSum = function(nums) {
    function dfs(index, currXor) {
    if (index === nums.length) {
      return currXor;
    }
    // Include nums[index]
    let include = dfs(index + 1, currXor ^ nums[index]);
    // Exclude nums[index]
    let exclude = dfs(index + 1, currXor);
    return include + exclude;
  }
  return dfs(0, 0);
};

// Example usage:
const nums = [1,3];
console.log(subsetXORSum(nums)); // Output: 6