// ✅ Задача: Максимальная сумма в независимом множестве дерева (Tree DP)
// Дано дерево, в узлах которого находятся числа.
//     Нужно выбрать подмножество вершин, никакие две из которых не соединены ребром,
//     чтобы сумма значений была максимальной.

    //  1
    // / \
    // 2   3

// Значения: val[1] = 1, val[2] = 2, val[3] = 3
// Решение: взять 2 и 3 (не брать 1). Сумма: 5.
//
// 🧠 Идея:
//     Для каждого узла считаем два значения:
//
//     dp[node][0] — максимальная сумма, если не брать этот узел
//
// dp[node][1] — максимальная сумма, если взять этот узел

function treeDP(root) {
    function dfs(node) {
        if (!node) return [0, 0]; // [не берем, берем]

        let sum0 = 0; // если не берем node
        let sum1 = node.val; // если берем node

        for (let child of node.children) {
            const [child0, child1] = dfs(child);
            sum0 += Math.max(child0, child1); // можем взять или не взять
            sum1 += child0; // если берем текущий — детей не трогаем
        }

        return [sum0, sum1];
    }

    const [notTake, take] = dfs(root);
    return Math.max(notTake, take);
}


class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

// Пример
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.children.push(node2, node3);

console.log(treeDP(root)); // 👉 5


// 🔍 Объяснение:
//     Обход дерева в глубину (DFS).
//
//     Для каждой вершины запоминаем максимум:
//
//     если её не брать, можно брать или не брать детей.
//
//     если её взять, нельзя брать детей.

