// ⚡ 1. QuickSort (быстрая сортировка, рекурсивная)
// Разделяй и властвуй. Работает быстро в среднем: O(n log n).

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    //лучше центр с пивота или рандом
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Пример:
console.log(quickSort([3, 6, 2, 7, 1]));

// 🌊 2. MergeSort (сортировка слиянием)
// Делим пополам, сортируем, сливаем. Всегда стабильно: O(n log n)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Пример:
console.log(mergeSort([4, 1, 5, 3, 2]));
// 🧱 3. HeapSort (сортировка кучей / пирамидой)
// Использует max heap. Быстрая и не требует доп. памяти: O(n log n), но не стабильная.

    function heapSort(arr) {
    const n = arr.length;

    function heapify(i, size) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < size && arr[left] > arr[largest]) largest = left;
        if (right < size && arr[right] > arr[largest]) largest = right;

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(largest, size);
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(i, n);
    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(0, i);
    }

    return arr;
}

// Пример:
console.log(heapSort([8, 3, 1, 6, 5, 2]));

// 🧮 4. Counting Sort (только для неотрицательных целых чисел)
// Очень быстрый: O(n + k), но только если числа маленькие и положительные.
function countingSort(arr) {
    const max = Math.max(...arr);
    const count = Array(max + 1).fill(0);

    for (let num of arr) count[num]++;

    const result = [];
    for (let i = 0; i < count.length; i++) {
        while (count[i]--) result.push(i);
    }

    return result;
}

// Пример:
console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));

