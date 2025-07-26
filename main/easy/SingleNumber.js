//побитовое исключение пары в ^
export const singleNumber = (nums) => {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};
console.log(singleNumber([4,1,2,1,2]))
// Input: nums = [2,2,1]
// Output: 1
//
// Input: nums = [4,1,2,1,2]
// Output: 4