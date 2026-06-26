// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} target
//      * @return {number[]}
//      */
//     twoSum(nums, target) {
//         for (var i = 0; i < nums.length; i++) {
//             for ( let j = i + 1; j <= nums.length; j++) {
//                 if(nums[i] + nums[j] === target) {
//                     return [nums[i], nums[j]];
//                 } else {
//                     return 1
//                 }
//             }
//         }
//
//     }
// }
//  const _ = new Solution()
// _.twoSum(nums = [3,4,5,6], target = 7)
// _.twoSum(nums = [4,5,6], target = 10)
// _.twoSum(nums = [5,5], target = 10)
//
//
// console.log(_.twoSum(nums = [3,4,5,6], target = 7))
// console.log(_.twoSum(nums = [4,5,6], target = 10))
// console.log(_.twoSum(nums = [5,5], target = 10))


class SolutionPro {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        //4
        // [0,1]


        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];

            if (seen.has(need)) {
                return [seen.get(need), i];
            }

            seen.set(nums[i], i);
        }
    }
}

const __ = new SolutionPro()
console.log(__.twoSum(nums = [3,4,5,6], target = 10))

// __.twoSum(nums = [3,4,5,6], target = 7)
// __.twoSum(nums = [4,5,6], target = 10)
// __.twoSum(nums = [5,5], target = 10)

