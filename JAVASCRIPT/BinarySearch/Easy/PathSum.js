// Path Sum
 //Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

var hasPathSum = function(root, targetSum) {
    if(!root) return false

    if(!root.left && !root.right){
        return root.val === targetSum;
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
// Example usage:
const root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
console.log(hasPathSum(root, 22)); // Output: true
// const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// console.log(hasPathSum(root2, 5)); // Output: false
// const root3 = new TreeNode();
// console.log(hasPathSum(root3, 0)); // Output: false
// Time Complexity: O(n) where n is the number of nodes in the tree