//Simplify Path
var simplifyPath = function(path) {
    const parts = path.split('/');
    const stack = [];

    for(let part of parts){
        if(part === '' || part === '.'){
            continue;
        }else if(part === '..'){
            if(stack.length > 0) stack.pop();
        }else{
            stack.push(part);
        }
    }
    return '/' + stack.join('/');
};
// Example usage:
const path = "/a/./b/../../c/";
console.log(simplifyPath(path)); // Output: "/c"
// Explanation: Navigate to "a", stay in "a", navigate to "b", go back to "a", go back to root, navigate to "c"
// Time Complexity: O(n)
// Space Complexity: O(n)