// Binary Tree Preorder Traversal
//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

var preorderTraversal = function(root) {
    const result = [];

    function dfs(node) {
        if (!node) return;

        result.push(node.val);   // Visit Root
        dfs(node.left);          // Traverse Left
        dfs(node.right);         // Traverse Right
    }

    dfs(root);
    return result;
};
// Example usage:
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(root)); // Output: [1, 2, 3]