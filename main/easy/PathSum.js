const hasPathSum = (root, targetSum) => {
    if (!root) return false;

    // Если узел — лист
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }

    const newSum = targetSum - root.val;

    return hasPathSum(root.left, newSum) || hasPathSum(root.right, newSum);
};


const tree = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7, left: null, right: null },
            right: { val: 2, left: null, right: null },
        },
        right: null,
    },
    right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
            val: 4,
            left: null,
            right: { val: 1, left: null, right: null },
        },
    },
};

console.log(hasPathSum(tree, 22)); // true
