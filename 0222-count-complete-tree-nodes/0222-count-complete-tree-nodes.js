/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};


// Function to get the left height of
// the binary tree
function left_height(node) {
    let ht = 0;
    while (node) {
        ht++;
        node = node.left;
    }

    // Return the left height obtained
    return ht;
}

// Function to get the right height
// of the binary tree
function right_height(node) {
    let ht = 0;
    while (node) {
        ht++;
        node = node.right;
    }

    // Return the right height obtained
    return ht;
}

var countNodes = function(root) {
      
    // Base Case
    if (root == null)
        return 0;

    // Find the left height and the
    // right heights
    let lh = left_height(root);
    let rh = right_height(root);

    // If left and right heights are
    // equal return 2^height(1<<height) -1
    if (lh == rh)
        return (1 << lh) - 1;

    // Otherwise, recursive call
    return 1 + countNodes(root.left)
        + countNodes(root.right);
    
};