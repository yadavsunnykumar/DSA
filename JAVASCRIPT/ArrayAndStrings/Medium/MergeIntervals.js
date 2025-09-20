// Merge Intervals
var merge = function(intervals) {
    if(intervals.length<=1) return intervals;
    intervals.sort((a,b) => a[0] - b[0]);
    const result = [];
    let current = intervals[0];

    for(let i = 1; i<intervals.length;i++){
        if(intervals[i][0] <= current[1]){
            current[1] = Math.max(current[1],intervals[i][1]);
        }else{
            result.push(current);
            current = intervals[i];
        }
    }
    result.push(current);
    return result;
    
};
// Example usage:
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Output: [[1,5]]
console.log(merge([[1,4],[2,3]])); // Output: [[1,4]]
console.log(merge([[1,4],[0,4]])); // Output: [[0,4]]