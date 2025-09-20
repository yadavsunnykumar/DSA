// Container With Most Water
var maxArea = function(height) {
    let maxArea =0;
    let left =0;
    let right = height.length -1;

    while(left<right){
        const h = Math.min(height[left],height[right]);
        const w = right - left;
        maxArea = Math.max(maxArea,h*w);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};

// Example 1:
let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); // Output: 49
// Example 2:
height = [1,1];
console.log(maxArea(height)); // Output: 1