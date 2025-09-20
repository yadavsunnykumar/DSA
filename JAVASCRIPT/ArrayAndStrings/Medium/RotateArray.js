// Rotate an array of n elements to the right by k steps. 
var rotate = function(nums, k) {
    let n = nums.length;
    k%=n;
    if(k===0) return 
    function reverse(arr,start,end){
        while(start<end){
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }
    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);

};
// Example 1:
let nums = [1,2,3,4,5,6,7], k = 3;
rotate(nums, k);