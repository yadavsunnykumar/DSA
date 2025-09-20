// INORDER TRAVERSAL OF A BINARY TREE
//  * Definition for a binary tree node.
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 


var inorderTraversal = function(root) {
    const result = []
    const stack = []
    let current = root

    while(current || stack.length){
        while(current){
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        result.push(current.val)
        current = current.right
    }
    return result;
};
// Example Usage:
// Constructing a binary tree:
//       1
//        \
//         2
//        /
//       3              
const root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)
console.log(inorderTraversal(root)) // Output: [1, 3, 2]
// Explanation: The inorder traversal of the given binary tree is [1, 3, 2].