// Monotonic Queue Optimization

// Это трюк для ускорения DP с формой:

// dp[i] = min(dp[j] + cost(j, i)), где j ∈ [i - k, i - 1]
// Если cost(j, i) удовлетворяет монотонности, то можно использовать deque
// (двустороннюю очередь),
// чтобы за O(n) находить минимум вместо O(k) на каждый шаг.

// Пример задачи: Скользящее минимум DP
// Дана последовательность a[0..n-1] и число k.
//     Нужно найти dp[i] = min(dp[j] + a[i]), где j ∈ [i-k, i-1], и dp[0] = a[0].

function slidingWindowDP(a, k) {
    const n = a.length;
    const dp = Array(n).fill(Infinity);
    const deque = []; // храним индексы
    dp[0] = a[0];
    deque.push(0);

    for (let i = 1; i < n; i++) {
        // Удаляем устаревшие элементы из окна
        while (deque.length && deque[0] < i - k) {
            deque.shift();
        }

        // dp[i] = dp[deque[0]] + a[i]
        dp[i] = dp[deque[0]] + a[i];

        // Поддерживаем deque монотонным по dp[j]
        while (deque.length && dp[i] <= dp[deque[deque.length - 1]]) {
            deque.pop();
        }

        deque.push(i);
    }

    return dp;
}

const a = [1, 3, 2, 6, 4, 1];
const k = 2;
console.log(slidingWindowDP(a, k));
// 👉 dp-массив, где на каждом шаге берём минимум за O(1)
