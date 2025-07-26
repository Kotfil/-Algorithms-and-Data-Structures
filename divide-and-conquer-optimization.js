// Что такое Divide and Conquer Optimization?
//     Применяется к двумерной динамике:
//     dp[i][j] = min_{k < j} (dp[i - 1][k] + cost(k, j))

// Где:
//     i — этап (например, количество групп)
//     j — позиция (например, количество элементов)
//     k — "разделитель" (или точка разбиения)

// Когда можно применять?
//     Если выполнено:
//
// opt(i, j) ≤ opt(i, j+1)
//
//     То есть, оптимальный k (разделитель)
//     сдвигается вправо или остаётся, а не "скачет".
//     Это и есть монотонность оптимума,
//     и это позволяет использовать разделяй и властвуй.

// Время:
//     Без оптимизации: O(k * n^2)
// С оптимизацией: O(k * n * log n)
//
// 💡 Пример задачи:
//     Разбить массив длины n на k групп, чтобы минимизировать:

// dp[i][j] = min(dp[i - 1][m] + cost(m, j)), где m < j

function compute(dpCurr, dpPrev, l, r, optL, optR, cost) {
    if (l > r) return;

    const mid = Math.floor((l + r) / 2);
    let bestK = -1;
    dpCurr[mid] = Infinity;

    for (let k = optL; k <= Math.min(mid, optR); k++) {
        const val = dpPrev[k] + cost(k, mid);
        if (val < dpCurr[mid]) {
            dpCurr[mid] = val;
            bestK = k;
        }
    }

    compute(dpCurr, dpPrev, l, mid - 1, optL, bestK, cost);
    compute(dpCurr, dpPrev, mid + 1, r, bestK, optR, cost);
}

function divideAndConquerDP(n, k, cost) {
    let dpPrev = Array(n + 1).fill(0);
    let dpCurr = Array(n + 1).fill(0);

    for (let i = 1; i <= k; i++) {
        compute(dpCurr, dpPrev, 1, n, 0, n, cost);
        [dpPrev, dpCurr] = [dpCurr, dpPrev];
    }

    return dpPrev[n];
}

// Предрасчёт cost(m, j) как сумма квадратов между m и j:
const prefixSum = [0]; // sum of elements
const prefixSq = [0];  // sum of squares

for (let i = 0; i < arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
    prefixSq[i + 1] = prefixSq[i] + arr[i] * arr[i];
}

function cost(l, r) {
    const sum = prefixSum[r] - prefixSum[l];
    const sqSum = prefixSq[r] - prefixSq[l];
    return sqSum - (sum * sum) / (r - l);
}

// 🧠 Где применяется:
//     Оптимальное разбиение массива на отрезки (Knuth/Divide & Conquer DP)
// Разбиение строк, временных рядов
// Задачи вроде:
// Разделить массив на K сегментов, минимизируя сумму расстояний
// Разбить цепочку матриц с минимальной стоимостью

