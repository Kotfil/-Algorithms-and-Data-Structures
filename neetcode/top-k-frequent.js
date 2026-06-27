class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // Создаем "ведра" (buckets), где индекс — это частота встречаемости числа
        // Длина на 1 больше массива, т.к. число может встречаться максимум nums.length раз
        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        // console.log(buckets)
        // Считаем частоту каждого числа
        for (const n of nums) {
            console.log(n,'n')
            map.set(n, (map.get(n) || 0) + 1);
        }

        // Раскладываем числа по ведрам (индекс ведра = частота)
        for (const [n, freq] of map) {
            buckets[freq].push(n);
        }


        console.log("Вёдра (индекс = частота):", buckets);
        console.log("Сплющенные вёдра (.flat()):", buckets.flat());
        console.log("Результат .slice(-k):", buckets.flat().slice(-k));

        return buckets.flat().slice(-k);
    }
}

const solution = new Solution();
console.log(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2));
// Пример использования:
// const solution = new Solution();
// console.log(solution.topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [2, 1] или [1, 2]
