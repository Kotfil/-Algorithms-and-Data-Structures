// (двусторонняя очередь)
// Палиндром с использованием deque

function isPalindrome(str) {
    const deque = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
    while (deque.length > 1) {
        if (deque.shift() !== deque.pop()) return false;
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// (двусторонняя очередь)  Палиндрома
function isPalindrome2(str) {
    const deque = [];
    const lower = str.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
        const ch = lower[i];
        const code = ch.charCodeAt(0);
        const isAlpha = (code >= 97 && code <= 122); // a-z
        const isDigit = (code >= 48 && code <= 57);  // 0-9
        if (isAlpha || isDigit) {
            deque.push(ch);
        }
    }
    // само сравнение после всех условий
    // и отбора алфавита с цифрами
    while (deque.length > 1) {
        if (deque.shift() !== deque.pop()) return false;
    }
    return true;
}
console.log(isPalindrome2("racecar")); // true
console.log(isPalindrome2("hello"));   // false
