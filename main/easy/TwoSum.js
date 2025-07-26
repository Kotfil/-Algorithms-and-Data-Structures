// 🧩 Задача: Two Sum
// Условие:
// Дан массив чисел nums и целевое число target.
// Найди индексы двух чисел из массива, сумма которых равна target.
// Гарантируется, что решение существует, и каждый элемент можно использовать только один раз.
export const twoSum = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return []; // если не найдено (но по условию всегда найдется)
};

// Input:
const nums = [2, 7, 11, 15]
const target = 9
//---------------------------------------------
// Output: [0, 1]  // Потому что 2 + 7 = 9
// console.log(twoSum(nums, target))

export const twoSumMain = (arr, target) => {
    const map = new Map()
    for (let i = 0; i < arr.length; i++) {
        const num = target - arr[i]
        console.log(num,'num')
        if(map.has(num)) {
            console.log('arr[i],i)',arr[i],i)
            console.log('[map.get(num), i]',[map.get(num), i])
                return [map.get(num), i];
        }
        console.log(map.has(num),'-num')
        map.set(arr[i],i)
        console.log(map)
    }
    // console.log(map)
    return []
}

console.log(twoSumMain(nums,target))