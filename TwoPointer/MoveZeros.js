const MoveZero = (nums) => {
  let insertPosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPosition] = nums[i];
      insertPosition++;
    }
  }

  for (let j = insertPosition; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

let arr = [0, 1, 0, 3, 12];
console.log(MoveZero(arr)); // Output: [1, 3, 12, 0, 0]
