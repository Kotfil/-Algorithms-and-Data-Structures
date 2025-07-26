// 🧩 Задача: Plus One
// 📌 Условие:
// Дан массив digits, представляющий целое
// неотрицательное число (каждая цифра — элемент массива).
// Нужно увеличить
// число на 1 и вернуть результат в виде массива цифр.

export const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
};

// plusOne([1,2,3]);      // ➝ [1,2,4]
// plusOne([4,3,2,1]);    // ➝ [4,3,2,2]
// plusOne([9]);          // ➝ [1,0]
// plusOne([9,9,9]);      // ➝ [1,0,0,0]
