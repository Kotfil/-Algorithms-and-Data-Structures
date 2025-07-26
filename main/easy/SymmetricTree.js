function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


function isSymmetric(root) {
    if (!root) return true;

    function isMirror(t1, t2) {
        console.log('Сравниваем узлы:', t1?.val, t2?.val);
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;

        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }

    return isMirror(root.left, root.right);
}

const symmetricTree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, new TreeNode(3), null));
console.log('Дерево симметрично?', isSymmetric(symmetricTree)); // true

const nonSymmetricTree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log('Дерево симметрично?', isSymmetric(nonSymmetricTree)); // false
