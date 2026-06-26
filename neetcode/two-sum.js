class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) return [map.get(diff), i];
            map.set(nums[i], i);
        }
    }
}

// Пример использования:
// const solution = new Solution();
// console.log(solution.twoSum([3, 4, 5, 6], 7)); // [0, 1]
