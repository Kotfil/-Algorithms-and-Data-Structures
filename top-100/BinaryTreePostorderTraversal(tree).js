//       1
//      / \
//     2   3
//    / \
//   4   5
// Postorder → [4,5,2,3,1]

// 2️⃣ Объяснение решения
// Базовый случай: если узел пустой → возвращаем []
// Рекурсия:
// Сначала обходим левое поддерево → получаем массив
// Потом обходим правое поддерево → получаем массив
// Текущий узел: добавляем его значение после обхода левого и правого
// Сбор результата: соединяем массивы через [...left, ...right, root.val]
// 3️⃣ Важные моменты
// Сложность: O(n), где n = количество узлов
// Пространство: O(h) для рекурсии (h = высота дерева)
// Для больших деревьев можно сделать итеративный вариант с стеком, но рекурсивный вариант проще для понимания.

// Определение узла дерева


function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Построим пример дерева
// 1 и 3 соседние параметры
// 2 и 4 и 5 left dril
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4) ,new TreeNode(5))
    ,new TreeNode(3)
);

// Рекурсивный пост-обход
function postorderTraversal(root) {
    if (!root) return [];  // базовый случай: пустой узел → пустой массив

    // 1. Обход левого поддерева
    const left = postorderTraversal(root.left);
    // 2. Обход правого поддерева
    const right = postorderTraversal(root.right);
    // 3. Добавляем текущий узел
    return [...left, ...right, root.val];
}

console.log(postorderTraversal(root)); // [4,5,2,3,1]
