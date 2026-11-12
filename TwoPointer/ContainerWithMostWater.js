const maxArea = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(arr[left], arr[right]);
    const currentWater = width * currentHeight;

    maxWater = Math.max(maxWater, currentWater);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
