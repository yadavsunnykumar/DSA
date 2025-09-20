// Balanced Binary Tree
 // Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }

var isBalanced = function(root) {
    function checkHeight(node) {
        if (!node) return 0;

        const left = checkHeight(node.left);
        if (left === -1) return -1;

        const right = checkHeight(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    }

    return checkHeight(root) !== -1;
};
// Example usage:
const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(isBalanced(root)); // Output: true
// const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4)), null), new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))));
// console.log(isBalanced(root2)); // Output: false