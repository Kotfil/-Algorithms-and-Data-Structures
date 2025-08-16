//Дано целое число x. Нужно вернуть true,
//если число является палиндромом (читается одинаково слева направо и справа налево), иначе — false.

export const isPalindrome = (x) => {
    try {
        if (x < 0) return false;
        const str = String(x);
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    } catch (error) {
        console.error('Ошибка в isPalindrome:', error);
        return false;
    }
};

export const isPalindromeMath = (x) => {
    try {
        if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
        let reverted = 0;
        let num = x;

        while (num > reverted) {
            reverted = reverted * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return num === reverted || num === Math.floor(reverted / 10);
    } catch (error) {
        console.error('Ошибка в isPalindromeMath:', error);
        return false;
    }
};


console.log(isPalindrome(121));       // true
console.log(isPalindrome(-121));      // false
console.log(isPalindrome(10));        // false
console.log(isPalindromeMath(1221));  // true
console.log(isPalindromeMath(12321)); // true


export const isPalindromeDivmod = (x) => {
    try {
        if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

        let reverted = 0;
        let num = x;

        while (num > reverted) {
            const [q, r] = [Math.floor(num / 10), num % 10]; // аналог divmod
            reverted = reverted * 10 + r;
            num = q;
        }
        return num === reverted || num === Math.floor(reverted / 10);
    } catch (error) {
        console.error('Ошибка в isPalindromeDivmod:', error);
        return false;
    }
};

console.log(isPalindromeDivmod(121));    // true
console.log(isPalindromeDivmod(1221));   // true
console.log(isPalindromeDivmod(12321));  // true
console.log(isPalindromeDivmod(10));     // false
console.log(isPalindromeDivmod(-121));   // false
