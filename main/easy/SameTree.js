function isSameTree(p, q) {
    console.log('Сравниваем узлы:', p?.val, q?.val);

    if (!p && !q) return true; // оба пустые — одинаковы
    if (!p || !q) return false; // один пустой — разные
    if (p.val !== q.val) return false; // значения не совпадают — разные

    // рекурсивно сравниваем левое и правое поддерево
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log('Деревья одинаковы?', isSameTree(tree1, tree2)); // true

const tree3 = new TreeNode(1, new TreeNode(2), null);
const tree4 = new TreeNode(1, null, new TreeNode(2));
console.log('Деревья одинаковы?', isSameTree(tree3, tree4)); // false


