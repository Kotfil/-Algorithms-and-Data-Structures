// Задача Missing Ranges (LeetCode 163) — нужно найти отсутствующие диапазоны чисел между
// заданным нижним и верхним пределом, которые не входят в отсортированный массив.

// Дан отсортированный массив nums без повторов, и границы lower и upper. Нужно вернуть список строк, каждая из которых — отсутствующий диапазон чисел между lower и upper, который не покрыт массивом.
//
//     Если пропущено одно число — вернуть его как строку "5".
//
//     Если пропущен диапазон — вернуть "2->4".


function findMissingRanges(nums, lower, upper) {
    const result = [];
    let prev = lower - 1;

    for (let i = 0; i <= nums.length; i++) {
        const curr = i < nums.length ? nums[i] : upper + 1;

        if (curr - prev > 1) {
            result.push(formatRange(prev + 1, curr - 1));
        }
        prev = curr;
    }

    return result;
}

function formatRange(start, end) {
    return start === end ? `${start}` : `${start}->${end}`;
}

// Пример вызова
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

const missing = findMissingRanges(nums, lower, upper);
console.log(missing); // ['2', '4->49', '51->74', '76->99']
