// 📌 Задача:
//     Определить, является ли целое число палиндромом.
//     Палиндром читается одинаково слева направо и справа налево (например, 121 или 1221).
// Нельзя использовать преобразование числа в строку.

const isPalindrome = (x) => {
    // Отрицательные числа не могут быть палиндромами (например, -121 ≠ 121-)
    // Также исключаем числа, заканчивающиеся на 0 (например, 10 ≠ 01), кроме самого 0
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;

    // Переворачиваем половину числа
    // Цикл работает, пока оригинал больше перевёрнутой части
    while (x > reversed) {
        console.log(x,'x')
        console.log(reversed,'reversed')
        // Берём последнюю цифру числа и добавляем её в конец перевёрнутого числа
        reversed = reversed * 10 + (x % 10);

        // Убираем последнюю цифру из оригинала
        x = Math.floor(x / 10);
    }

    // Сравниваем оригинал с перевёрнутым:
    // 1. Если длина чётная: x === reversed
    // 2. Если длина нечётная: x === Math.floor(reversed / 10), т.к. середина не важна
    return x === reversed || x === Math.floor(reversed / 10);
};
// isPalindrome(121)
isPalindrome(12321)
// console.log(isPalindrome(121))  // true
// console.log(isPalindrome(12321))  // true
// console.log(isPalindrome(123))  // false
// console.log(isPalindrome(-121))    // false
// console.log(isPalindrome(10))  // false
// console.log(isPalindrome(0))  // true

// x = 123;
// reversed = 0;
//
// // шаг 1:
// reversed = 0 * 10 + 3 = 3     // x % 10 = 3
// x = 12
//
// // шаг 2:
// reversed = 3 * 10 + 2 = 32    // x % 10 = 2
// x = 1
//
// // шаг 3:
// reversed = 32 * 10 + 1 = 321
