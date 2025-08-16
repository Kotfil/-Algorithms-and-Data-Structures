//Задача
//Дан массив чисел nums. Нужно вернуть true, если есть дубликаты, иначе — false.
//Пример:
// Input: nums = [1,2,3,1]
// Output: true
//
// Input: nums = [1,2,3,4]
// Output: false

export const containsDuplicate = (nums) => {
    try {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) return true;
            seen.add(num);
        }
        return false;
    } catch (error) {
        console.error('Ошибка в containsDuplicate:', error);
        return false;
    }
};


console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
console.log(containsDuplicate([])); // false


// «конвенциональный»
const arr = [1,2,3,1];
console.log(arr.includes(1))
