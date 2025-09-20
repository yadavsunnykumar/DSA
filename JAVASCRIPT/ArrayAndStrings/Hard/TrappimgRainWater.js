// Trapping Rain Water
var trap = function(height) {
    let left =0, right = height.length-1;
    let leftMax =0, rightMax = 0;
    let water = 0;

    while(left<right){
        if(height[left] < height[right]){
            if(height[left]>=leftMax){
                leftMax = height[left]
            }else{
                water+=leftMax - height[left];
            }
            left++;
        }else{
            if(height[right]>=rightMax){
                rightMax = height[right];
            }
            else{
                water+= rightMax -height[right]
            }
            right--;
        }
    }
    return water;
};
// Example usage:
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9
console.log(trap([1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([5,4,1,2])); // Output: 1