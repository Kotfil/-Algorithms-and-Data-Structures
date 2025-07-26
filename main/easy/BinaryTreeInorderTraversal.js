function inorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (!node) return;
        console.log('Идём в левое поддерево от', node.val);
        traverse(node.left);
        console.log('Добавляем в результат:', node.val);
        result.push(node.val);
        console.log('Идём в правое поддерево от', node.val);
        traverse(node.right);
    }

    traverse(root);
    return result;
}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


const root = new TreeNode(1,
    null,
    new TreeNode(2, new TreeNode(3)));
console.log('Inorder traversal:', inorderTraversal(root));
