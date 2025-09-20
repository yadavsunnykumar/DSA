
// Binary Tree Postorder Traversal
//Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var postorderTraversal = function(root) {
    let result = []
    function dfs(node){
        if(!node) return
        dfs(node.left)
        dfs(node.right)
        result.push(node.val)

    }
    dfs(root)
    return result
};

// Example usage:
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(postorderTraversal(root)); // Output: [3, 2, 1]
// const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// console.log(postorderTraversal(root2)); // Output: [2, 3, 1]