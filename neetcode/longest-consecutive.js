class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Если массив пустой, то и последовательностей нет
        if (nums.length === 0) return 0;
        
        // Перекидываем все числа в Set (Множество)
        // Это уберет дубликаты и даст нам поиск любого числа за время O(1)
        const set = new Set(nums);
        let maxLen = 0;
        
        // Проходимся по уникальным числам
        for (const num of set) {
            // мы хотим начать счет только если это НАЧАЛО последовательности.
            // Число является началом, если числа (num - 1) НЕТ в нашем множестве.
            // Если (num - 1) есть, значит текущее число — это просто середина какой-то цепочки, пропускаем.
            if (!set.has(num - 1)) {
                let currentNum = num;
                let currentLen = 1;
                
                // Пока в множестве есть следующее по порядку число (currentNum + 1)
                while (set.has(currentNum + 1)) {
                    currentNum++; // Шагаем дальше по цепочке
                    currentLen++; // Увеличиваем длину текущей цепочки
                }
                
                // Сравниваем длину найденной цепочки с нашим рекордом
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                }
            }
        }
        
        return maxLen;
    }
}

// Пример использования:
// const solution = new Solution();
// console.log(solution.longestConsecutive([2,20,4,10,3,4,5])); // Выведет: 4 (цепочка 2,3,4,5)
// console.log(solution.longestConsecutive([0,3,2,5,4,6,1,1])); // Выведет: 7 (цепочка 0,1,2,3,4,5,6)
