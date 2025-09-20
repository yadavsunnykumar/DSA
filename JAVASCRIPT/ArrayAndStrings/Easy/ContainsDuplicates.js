//Contains Duplicates
function containsDuplicate(nums) {
        let  seen = new Set();
        for(let num of nums){
            if(seen.has(num)){
                return true;
                
            }
            seen.add(num);
        }
        return false;
    }
// Example usage:
const nums = [1,2,3,1];
console.log(containsDuplicate(nums)); // Output: true