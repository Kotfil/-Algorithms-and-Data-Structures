// Задача: Минимальное количество разрезов для разбиения строки на палиндромы
// Нужно разрезать строку на минимальное количество подстрок, каждая из которых — палиндром.

// Объяснение:
//     isPal[i][j] = true если s[i..j] — палиндром.
//
//     dp[i] — минимальное количество разрезов для s[0..i].
//
//     Проверяем все подстроки s[start..end], и если это палиндром — обновляем dp[end].

    function minCut(s) {
    const n = s.length;
    const isPal = Array.from({ length: n }, () => Array(n).fill(false));
    const dp = Array(n).fill(0);

    // Предрасчёт палиндромов
    for (let end = 0; end < n; end++) {
        let minCuts = end;
        for (let start = 0; start <= end; start++) {
            if (s[start] === s[end] && (end - start <= 1 || isPal[start + 1][end - 1])) {
                isPal[start][end] = true;
                minCuts = start === 0 ? 0 : Math.min(minCuts, dp[start - 1] + 1);
            }
        }
        dp[end] = minCuts;
    }

    return dp[n - 1];
}

console.log(minCut("aab")); // 👉 1
console.log(minCut("a"));   // 👉 0
console.log(minCut("abccba")); // 👉 0 (вся строка — палиндром)
