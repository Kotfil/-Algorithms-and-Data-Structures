// Пример 1: Two Pointers – Проверка палиндрома

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// Пример 2: Sliding Window – Максимальная сумма подмассива длины k

function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    // i = 0 → windowSum = 1
    // i = 1 → windowSum = 1 + 2 = 3
    // i = 2 → windowSum = 3 + 3 = 6
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    // maxSum = 6
    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
        // добавляем новый элемент справа (arr[i])
        // вычитаем самый старый слева (arr[i - k])
        // и сравниваем с текущим максимумом
    }

    return maxSum;
}

console.log(maxSumSubarray([1, 2, 3, 4, 5], 3)); // 12
// Итерация 1: [1, 2, 3]  → сумма = 6
// Итерация 2:    [2, 3, 4]  → сумма = 9
// Итерация 3:       [3, 4, 5]  → сумма = 12 ✅ (максимум)
