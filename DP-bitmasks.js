// Задача: Назначение работников на задачи (Assignment Problem)
// У тебя есть n работников и n задач. Каждый работник может выполнить любую задачу за определённую цену.
//     Нужно назначить каждому работнику ровно одну уникальную задачу, чтобы сумма стоимостей была минимальной.

function minAssignmentCost(cost) {
    const n = cost.length;
    const size = 1 << n; // всего состояний маски (2^n)
    const dp = Array(size).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < size; mask++) {
        const worker = countBits(mask); // сколько уже назначено
        if (worker >= n) continue;

        for (let task = 0; task < n; task++) {
            if ((mask & (1 << task)) === 0) {
                const newMask = mask | (1 << task);
                dp[newMask] = Math.min(dp[newMask], dp[mask] + cost[worker][task]);
            }
        }
    }

    return dp[size - 1];
}

function countBits(x) {
    let count = 0;
    while (x) {
        count += x & 1;
        x >>= 1;
    }
    return count;
}


const cost = [
    [9, 2, 7],
    [6, 4, 3],
    [5, 8, 1]
];

console.log(minAssignmentCost(cost)); // 👉 10 (работник 0 → 1, 1 → 2, 2 → 0)
