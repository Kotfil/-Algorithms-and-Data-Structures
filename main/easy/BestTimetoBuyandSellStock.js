// Решение — O(n) по времени, O(1) по памяти:
// 🧠 Идея:
//Проходим один раз слева направо:
//сохраняем минимальную цену (buy)
// на каждом шаге считаем потенциальную прибыль
// (sell - buy)
// обновляем максимум
// Input: prices = [7,1,5,3,6,4]

// Output: 5
// Explanation:
// Купи в день 1 (цена = 1),
// продай в день 4 (цена = 6),
// прибыль = 6-1 = 5.


export const maxProfit = (prices) => {
    let min = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        profit = Math.max(profit, prices[i] - min);
    }

    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))
// maxProfit([7,6,4,3,1])   // → 0 (нельзя получить прибыль)