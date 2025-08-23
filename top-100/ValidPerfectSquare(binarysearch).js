// Проверить, является ли число num идеальным квадратом (т.е. есть ли такое число x, что x * x = num).
// Input: num = 16
// Output: true
//
// Input: num = 14
// Output: false
//
// Подход (Binary Search)
// Идея:
//     Идеальный квадрат лежит между 1 и num.
//     Используем бинарный поиск, чтобы найти число x, такое что x * x == num.
//     Если x * x < num, ищем справа.
//     Если x * x > num, ищем слева.

function isPerfectSquare(num) {
    if (num < 2) return true;

    let left = 2;
    let right = Math.floor(num / 2);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const guessedSquare = mid * mid;

        if (guessedSquare === num) {
            return true;
        } else if (guessedSquare < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

// Вызов функции
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(14)); // false
console.log(isPerfectSquare(1));  // true
console.log(isPerfectSquare(25)); // true

// Разбор
// Проверяем простые случаи num < 2.
// Инициализируем left = 2 и right = num / 2.
// На каждой итерации бинарного поиска:
// Если mid * mid == num, возвращаем true.
// Если меньше — сдвигаем left.
// Если больше — сдвигаем right.
// Если поиск завершился — числа нет, возвращаем false.