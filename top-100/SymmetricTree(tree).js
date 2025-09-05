// Класс узла дерева
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
// ===== Пример 1 (Симметричное дерево) =====
//     1
//    / \
//   2   2
//  / \ / \
//  3  4 4  3
const root1 = new TreeNode(1);
root1.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
root1.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));
// ===== Пример 2 (Несимметричное дерево) =====
//     1
//    / \
//   2   2
//    \    \
//    3     3
const root2 = new TreeNode(1);
root2.left = new TreeNode(2, null, new TreeNode(3));
root2.right = new TreeNode(2, null, new TreeNode(3));

var isSymmetric = function(root) {
    if (!root) return true; // пустое дерево симметрично
    // вспомогательная функция
    function isMirror(t1, t2) {
        if (!t1 && !t2) return true; // оба пустые => симметрично
        if (!t1 || !t2) return false; // только один пустой => несимметрично
        // проверяем значения и зеркальность поддеревьев
        return (t1.val === t2.val) &&
            isMirror(t1.left, t2.right) &&
            isMirror(t1.right, t2.left);
    }
    return isMirror(root.left, root.right);
};

console.log(isSymmetric(root1)); // true
console.log(isSymmetric(root2)); // false