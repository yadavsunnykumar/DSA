// Largest Rectangle in Histogram
var largestRectangleArea = function(heights) {
    let stack =[];
    let maxArea = 0;
    heights.push(0);

    for(let i =0;i<heights.length;i++){
        while(stack.length && heights[i] < heights[stack[stack.length-1]]){
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i-stack[stack.length-1]-1;
            maxArea = Math.max(maxArea,height*width);
        }
        stack.push(i);
    }
    return maxArea;
};
// Example usage:
console.log(largestRectangleArea([2,1,5,6,2,3])); // Output: 10
console.log(largestRectangleArea([2,4])); // Output: 4
console.log(largestRectangleArea([1,1])); // Output: 2