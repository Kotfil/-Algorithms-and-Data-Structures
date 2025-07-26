// Задача Leetcode 110. Balanced Binary Tree:
//Нужно определить, является ли бинарное
// дерево сбалансированным,
// то есть для каждого узла разница между высотой
// левого и правого поддерева не более 1.

// 🧪 Пример 1 — сбалансированное дерево
const treeBalance = {
    val: 1,
    left: {
        val: 2,
        left: {val: 3, left: null, right: null},
        right: null,
    },
    right: {
        val: 2,
        left: null,
        right: null,
    },
};

// 🧪 Пример 2 — несбалансированное дерево:
const treeNotBalance = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: { val: 4, left: null, right: null },
            right: null,
        },
        right: null,
    },
    right: null,
};

const isBalanced = (root) => {
    const dfs = (node) => {
        if(!node) return 0;

        const left = dfs(node.left);
        if (left === -1) return -1;

        const right = dfs(node.right);
        if (right === -1) return -1;


        if (Math.abs(left - right) > 1) return -1;

        return Math.max(left, right) + 1;
    };

    return dfs(root) !== -1;
};
console.log(isBalanced(treeNotBalance)); // false

console.log(isBalanced(treeBalance)); // true
