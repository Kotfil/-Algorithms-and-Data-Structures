// Check If N and Its Double Exist (hash)

// Дан массив чисел arr.
//     Нужно проверить, есть ли такие два числа N и M в массиве,
//     что M = 2 * N. Вернуть true или false.
// Для каждого числа num:
//     Проверяем, видели ли мы num * 2 (значит, текущее число в 2 раза меньше)
// Или num / 2 (значит, текущее число в 2 раза больше).
function checkIfExist(arr) {
    const seen = new Set();

    for (let num of arr) {
        if (seen.has(num * 2) || seen.has(num / 2)) {
            return true;
        }
        seen.add(num);
    }

    return false;
}


console.log(checkIfExist([10, 2, 5, 3])); // true (10 = 2 * 5)
console.log(checkIfExist([7, 1, 14, 11])); // true (14 = 2 * 7)
console.log(checkIfExist([3, 1, 7, 11]));  // false
