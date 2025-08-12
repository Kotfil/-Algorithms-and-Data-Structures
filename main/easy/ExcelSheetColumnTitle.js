const convertToTitle = (columnNumber) => {
    let result = '';
    while (columnNumber > 0) {
        columnNumber--;
        const char = String.fromCharCode(65 + (columnNumber % 26));
        result = char + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};

// Примеры вызова:
console.log(convertToTitle(1));   // A
console.log(convertToTitle(28));  // AB
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(702)); // ZZ
console.log(convertToTitle(703)); // AAA

// 📌 Суть задачи
// В Excel колонки именуются не числами, а буквами:
// 1  -> A
// 2  -> B
// ...
// 26 -> Z
// 27 -> AA
// 28 -> AB

// Нужно:
//     По заданному числу columnNumber вернуть строку с названием колонки.
//
//     Логика решения
// Это похоже на систему счисления в 26-ричной системе, но с нюансом:
//
//     В обычной системе счисления есть 0, а в Excel — нет ("A" — это 1, а не 0).
//
// Поэтому при переходе делаем n - 1 перед mod 26, чтобы сместить диапазон.
//
//     Алгоритм:
//
// Пока число > 0:
//
// Вычитаем 1, чтобы корректно обработать диапазон.
//
//     Находим остаток от деления на 26.
//
// Преобразуем остаток в букву: chr(65 + остаток) (где 65 — код 'A').
//
// Добавляем букву в результат.
//
//     Делим число на 26 (целая часть).
//
// Разворачиваем результат (т.к. буквы добавляются с конца).