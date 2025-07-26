// Вот пример задачи на динамическое программирование (DP) с восстановлением пути на JavaScript:
//
//     ✅ Задача: Размен монет
// Условие: Дано n — сумма и массив coins — доступные номиналы монет. Найти минимальное количество монет для суммы n, и восстановить сами монеты.

function coinChangeWithPath(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    const prev = Array(amount + 1).fill(-1); // для восстановления пути
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            if (dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                prev[i] = i - coin; // запоминаем, откуда пришли
            }
        }
    }

    if (dp[amount] === Infinity) return { count: -1, path: [] };

    // восстановим путь
    const path = [];
    let curr = amount;
    while (curr > 0) {
        const from = prev[curr];
        path.push(curr - from); // это использованная монета
        curr = from;
    }

    return { count: dp[amount], path };
}

const coins = [1, 3, 5];
const amount = 11;
const result = coinChangeWithPath(coins, amount);
console.log(result);
// { count: 3, path: [5, 5, 1] }
