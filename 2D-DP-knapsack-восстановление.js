function knapsack(weights, values, W) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][W];
}


function getSelectedItems(dp, weights, values, W) {
    const selected = [];
    let i = weights.length;
    let w = W;

    while (i > 0 && w > 0) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selected.push(i - 1);
            w -= weights[i - 1];
        }
        i--;
    }

    return selected.reverse();
}
