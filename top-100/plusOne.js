function plusOne(digits) {
    let carry = 1; // прибавляем единицу
    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry;
        digits[i] = sum % 10;                 // remainder (divmod)
        carry = Math.floor(sum / 10);         // quotient (divmod)
        if (carry === 0) break;               // ранний выход, если переноса нет
    }
    if (carry === 1) digits.unshift(1);
    return digits;
}

console.log(plusOne([1,2,3])); // [1,2,4]   (123 + 1 = 124)
console.log(plusOne([9,9,9])); // [1,0,0,0] (999 + 1 = 1000)
console.log(plusOne([4,3,2,1])); // [4,3,2,2]

// Start with carry = 1 because we want to add one.
// (Начинаем с carry = 1, потому что прибавляем единицу.)
// Loop from the last digit backwards.
// (Идём по массиву с конца.)
// sum = digits[i] + carry → добавляем перенос.
// digits[i] = sum % 10 → сохраняем последнюю цифру.
// carry = Math.floor(sum / 10) → переносим 1, если было 10.
// В конце, если carry не ноль, добавляем его в начало массива.