// 1D DP (одномерная динамика)
// Climbing Stairs
// Подъем по лестнице

function climbStairs(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

//_____________________________________


// function climbStairs(n) {
//     const dp = Array(n + 1).fill(0);
//     dp[0] = dp[1] = 1;
//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// }

// climbStairs(5) вернёт 8


// House Robber
// Грабитель домов
