class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Создаем массив ответов, сразу заполненный единицами
        const res = new Array(nums.length).fill(1);
        
        // 1. Проход слева направо (считаем произведения всех чисел ДО текущего)
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }
        
        // 2. Проход справа налево (считаем произведения всех чисел ПОСЛЕ текущего)
        // и сразу умножаем на то, что уже лежит в res[i]
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= postfix;
            postfix *= nums[i];
        }
        
        return res;
    }
}

// Пример использования:
// const solution = new Solution();
// console.log(solution.productExceptSelf([1, 2, 4, 6])); // [48, 24, 12, 8]
// console.log(solution.productExceptSelf([-1, 0, 1, 2, 3])); // [0, -6, 0, 0, 0]
