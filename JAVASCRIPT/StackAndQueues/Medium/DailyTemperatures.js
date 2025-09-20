// Daily Temperatures
var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for(let i=0;i<temperatures.length;i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            let prevIdx = stack.pop();
            result[prevIdx] = i - prevIdx;    
            }
            stack.push(i);
    }
    return result;
};
// Example usage:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
// Time Complexity: O(n)
// Space Complexity: O(n)