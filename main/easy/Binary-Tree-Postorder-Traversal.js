// Дано бинарное дерево, верните постфиксный (postorder) обход его узлов в виде массива.
    // Postorder traversal: лево → право → корень


//      1
//      \
//       2
//       /
//       3

// [3,2,1]


export const postorderTraversal = (root) => {
    const result = [];

    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);      // 1. Левое поддерево
        dfs(node.right);     // 2. Правое поддерево
        result.push(node.val); // 3. Корень
    };

    dfs(root);
    return result;
};
