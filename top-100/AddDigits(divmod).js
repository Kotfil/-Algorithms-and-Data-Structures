// Дано число num. Нужно складывать все его цифры до тех пор, пока не останется однозначное число.
// Input: num = 38
// Output: 2
// Explanation: 3 + 8 = 11 -> 1 + 1 = 2

function addDigits(num) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;  // берем последнюю цифру
            num = Math.floor(num / 10);  // убираем последнюю цифру
        }
        num = sum;  // обновляем число
    }
    return num;
}

// Вызов функции
console.log(addDigits(38)); // 2
console.log(addDigits(0));  // 0
console.log(addDigits(1234)); // 1 (1+2+3+4=10 -> 1+0=1)


























