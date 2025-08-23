// Дан массив nums и число k. Нужно найти максимальное среднее значение подмассива длины k.

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Объяснение: подмассив [12,-5,-6,50] имеет среднее (12-5-6+50)/4 = 12.75.
// Идея:
//     Использовать окно длины k и суммировать его элементы.
//     Скользим по массиву, вычитая первый элемент окна и добавляя следующий.
//     Считаем среднее для каждого окна и обновляем максимум.
function findMaxAverage(nums, k) {
    let maxSum = 0;
    let windowSum = 0;

    // Инициализация суммы первого окна
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    maxSum = windowSum;

    // Скользящее окно
    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        if (windowSum > maxSum) maxSum = windowSum;
    }

    return maxSum / k;
}

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
const result = findMaxAverage(nums, k);
console.log(result); // 12.75

