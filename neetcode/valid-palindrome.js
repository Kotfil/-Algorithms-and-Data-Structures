class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Устанавливаем два указателя: один в начало, другой в конец строки
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // Двигаем левый указатель вправо, пока не встретим букву или цифру
            while (left < right && !this.isAlphaNumeric(s.charCodeAt(left))) {
                left++;
            }

            // Двигаем правый указатель влево, пока не встретим букву или цифру
            while (left < right && !this.isAlphaNumeric(s.charCodeAt(right))) {
                right--;
            }

            // Сравниваем символы (обязательно переведя в нижний регистр)
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false; // Если не совпали — это не палиндром
            }

            // Если совпали, сдвигаем оба указателя дальше к центру
            left++;
            right--;
        }

        return true; // Если указатели встретились и проблем не было — это палиндром
    }

    /**
     проверка символа по его ASCII-коду (это работает в разы быстрее регулярных выражений!)
     * @param {number} code
     * @return {boolean}
     */
    isAlphaNumeric(code) {
        return (code >= 48 && code <= 57) || // цифры 0-9
            (code >= 65 && code <= 90) || // буквы A-Z (заглавные)
            (code >= 97 && code <= 122);  // буквы a-z (строчные)
    }
}

// Пример использования:
// const solution = new Solution();
// console.log(solution.isPalindrome("Was it a car or a cat I saw?")); // Выведет: true
// console.log(solution.isPalindrome("tab a cat")); // Выведет: false
