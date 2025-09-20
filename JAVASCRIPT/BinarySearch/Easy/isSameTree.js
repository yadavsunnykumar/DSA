// LeetCode Problem: 100. Same Tree
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  if (!p && !q) return true; // both nodes null
  if (!p || !q) return false; // one is null
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}; // Example Usage:
// Constructing two binary trees:
//       1                 1
//      / \               / \
//     2   3           2   3
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
console.log(isSameTree(tree1, tree2)); // Output: true
// Explanation: Both trees are identical.

