const minDepth = (root) => {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

const root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null,
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: null,
    },
};

console.log(minDepth(root)); // 2
