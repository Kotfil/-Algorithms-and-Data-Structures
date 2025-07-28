// DFS
const preorderTraversalDFS = (root) => {
    const result = [];

    const dfs = (node) => {
        if (!node) return;
        result.push(node.val);   // Root
        dfs(node.left);          // Left
        dfs(node.right);         // Right
    };

    dfs(root);
    return result;
};




// Stack
const preorderTraversalStack = (root) => {
    if (!root) return [];

    const stack = [root];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) stack.push(node.right);  // Push right first
        if (node.left) stack.push(node.left);    // So left is processed first
    }

    return result;
};


const tree = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: null
    }
};

// output [1, 2, 3]