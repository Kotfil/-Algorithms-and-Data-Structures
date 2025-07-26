// Префиксные суммы (Prefix Sum)
// 1)
function prefixSums(arr) {
    const prefix = [0];

    for (let i = 0; i < arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }

    return prefix;
}

const arr = [2, 4, 1, 3];
const prefix = prefixSums(arr);

console.log(prefix); // [0, 2, 6, 7, 10]

// Сумма от индекса 1 до 3 (включительно): arr[1] + arr[2] + arr[3] = 4 + 1 + 3 = 8
console.log(prefix[4] - prefix[1]); // 8

// Префиксные разности (Prefix Difference) — часто используются для дифференциального массива (разность между текущим и предыдущим значением)
// 2)
function prefixDiff(arr) {
    const diff = [];

    for (let i = 1; i < arr.length; i++) {
        diff.push(arr[i] - arr[i - 1]);
    }

    return diff;
}

const arr2 = [2, 5, 9, 10];
const diffs = prefixDiff(arr2);

console.log(diffs); // [3, 4, 1]

// Применение дифференциального массива (пример: прибавить +1 к подотрезку [l, r])
// 3)
function applyRangeUpdates(n, updates) {
    const diff = new Array(n + 1).fill(0);

    for (const [l, r] of updates) {
        diff[l] += 1;
        if (r + 1 < n) diff[r + 1] -= 1;
    }

    // восстановим оригинальный массив
    const result = [];
    let current = 0;
    for (let i = 0; i < n; i++) {
        current += diff[i];
        result.push(current);
    }

    return result;
}

console.log(applyRangeUpdates(5, [[1, 3], [2, 4]])); // [0, 1, 2, 2, 1]
