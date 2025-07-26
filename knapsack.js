// 0/1 Knapsack (каждый предмет берётся либо полностью, либо нет)
// Вот классическая задача Knapsack (рюкзак) и её решение на JavaScript — динамическое программирование:
//
//     🧠 Формулировка задачи:
//     Есть рюкзак вместимостью W. У тебя есть n предметов, у каждого есть:
//
//     value[i] — ценность
//
// weight[i] — вес
//
// Нужно выбрать набор предметов, чтобы:
//
// их суммарный вес ≤ W
//
// суммарная ценность была максимальной

function knapsack(weights, values, W) {
    const n = weights.length;
    const dp = Array.from({length: n + 1}, () => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],                              // не берём i-й предмет
                    dp[i - 1][w - weights[i - 1]] + values[i - 1] // берём i-й предмет
                );
            } else {
                dp[i][w] = dp[i - 1][w]; // не помещается
            }
        }
    }

    return dp[n][W]; // максимальная ценность
}

// Пример:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const W = 5;

console.log(knapsack(weights, values, W)); // 👉 7 (взять предметы 0 и 1)

// Unbounded Knapsack — алгоритм (JS):
// Отлично, вот реализация Unbounded Knapsack — когда каждый предмет можно брать не один раз, а много раз (например, бесконечный запас монет или кирпичей).
//
// 🧠 Формулировка задачи:
//     У тебя есть:
//
//     массив weights[] — веса предметов
//
// массив values[] — ценности предметов
//
// W — вместимость рюкзака
//
// Каждый предмет можно использовать неограниченное число раз.

function unboundedKnapsack(weights, values, W) {
    const n = weights.length;
    const dp = Array(W + 1).fill(0); // dp[w] — макс. ценность при вместимости w

    for (let w = 0; w <= W; w++) {
        for (let i = 0; i < n; i++) {
            if (weights[i] <= w) {
                dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
            }
        }
    }

    return dp[W];
}

// Пример:
const weights = [2, 3, 4];
const values = [4, 5, 7];
const W = 7;

console.log(unboundedKnapsack(weights, values, W)); // 👉 12



