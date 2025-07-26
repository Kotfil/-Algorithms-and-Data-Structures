//🧩 Упрощённая Easy-версия задачи:
//Задача:
//Дан массив nums и число k.
//Найди максимальную длину подпоследовательности (не обязательно подряд),
//где разность между соседними элементами всегда равна k.

// nums = [1, 5, 7, 8, 5, 3, 4, 2, 1]
// k = -2


// 🧠 Пояснение:
//     dp[num] — длина самой длинной цепочки, заканчивающейся на num.
//     Если есть num - k, то мы можем продолжить оттуда цепочку.
//     Обновляем длину: dp[num] = dp[num - k] + 1
// 🧪 Пример пошагово:
//     nums = [7, 5, 3, 1], k = -2
//
// Шаги:
// num = 7: нет 9 → dp[7] = 1
// num = 5: есть 7 → dp[5] = dp[7] + 1 = 2
// num = 3: есть 5 → dp[3] = dp[5] + 1 = 3
// num = 1: есть 3 → dp[1] = dp[3] + 1 = 4



//-------------------------------------------------------
// ✅ Простое решение (O(n)):
//-------------------------------------------------------

export const longestValidSubsequence = (nums, k) => {
    const dp = new Map();
    let maxLen = 0;

    for (const num of nums) {
        const prev = num - k;
        // console.log(prev,'prev')
        const length = (dp.get(prev) || 0) + 1;
        dp.set(num, length);

        maxLen = Math.max(maxLen, length);
        // console.log(maxLen,'maxLen-$')
    }

    return maxLen;
};

// console.log(longestValidSubsequence([1, 5, 7, 8, 5, 3, 4, 2, 1], -2)); // 4

// console.log(7 - (-2) ,'www')

const longestValidSubsequenceMain = (arr,target) => {
    const map = new Map();
    let maxLength = 0;
    for (const j of arr) {
        const prev = j - target
        const length = (map.get(prev) || 0) + 1;
        map.set(j, length);
        maxLength = Math.max(maxLength, length);
    }
    return maxLength;
}
console.log(longestValidSubsequenceMain([1, 5, 7, 8, 5, 3, 4, 2, 1], -2)); // 4