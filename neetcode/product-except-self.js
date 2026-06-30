class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);

        // 1. Проход слева направо (считаем произведения всех элементов слева)
        res[0] = 1;
        for (let i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        // 2. Проход справа налево (считаем произведения всех элементов справа)
        // и сразу умножаем на префиксы, уже лежащие в res[i]
        let postfix = 1;
        for (let i = n - 1; i >= 0; i--) {
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
const solution = new Solution();
console.log(solution.productExceptSelf([1, 2, 4, 6])); // [48, 24, 12, 8]
console.log(solution.productExceptSelf([-1, 0, 1, 2, 3])); // [0, -6, 0, 0, 0]
