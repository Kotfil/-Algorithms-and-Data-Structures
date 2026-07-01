class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                // Задача требует вернуть индексы в формате 1-indexed (т.е. счет с 1, а не с 0)
                return [left + 1, right + 1];
            }

            if (sum > target) {
                // Если сумма получилась слишком большой, нам нужно её уменьшить.
                // Из-за того что массив отсортирован по возрастанию, мы сдвигаем правый указатель влево.
                right--;
            } else {
                // Если сумма слишком маленькая, нам нужно её увеличить.
                // Сдвигаем левый указатель вправо.
                left++;
            }
        }

        return [];
    }
}

// Пример использования:
// const solution = new Solution();
// console.log(solution.twoSum([1, 2, 3, 4], 3)); // Выведет: [1, 2]
