function maxDepth(root) {
    if (!root) {
        console.log('Пустой узел — глубина 0');
        return 0;
    }

    console.log('Считаем глубину для узла:', root.val);
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    const depth = 1 + Math.max(left, right);
    console.log(`Глубина для узла ${root.val}: 1 + max(${left}, ${right}) = ${depth}`);
    return depth;
}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log('Максимальная глубина:', maxDepth(tree1)); // 2

const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log('Максимальная глубина:', maxDepth(tree2)); // 3

