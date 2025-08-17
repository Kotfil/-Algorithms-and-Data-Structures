/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length ; j++) {
            if (nums[j] + nums[i] === target) {
                return [i , j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))

// O(n) (hash):
var twoSumHash = function(nums, target) {
    const map = new Map(); // хранит число → индекс
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};

// Тестируем
console.log(twoSumHash([2,7,11,15], 9)); // [0,1]
console.log(twoSumHash([3,2,4], 6));     // [1,2]
console.log(twoSumHash([3,3], 6));       // [0,1]
