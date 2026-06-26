// Быстрая сортировка (Сортировка Хоара) - с указателями без создания новых массивов
function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  let i = left - 1;
  let j = right + 1;

  while (true) {
    do { i++; } while (arr[i] < pivot);
    do { j--; } while (arr[j] > pivot);

    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quickSortHoare(arr, left = 0, right = arr.length - 1) {
  // Не забываем про условие выхода из рекурсии
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);
  quickSortHoare(arr, left, pivotIndex);
  quickSortHoare(arr, pivotIndex + 1, right);
}

// Пример использования:
// const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 94, 86, 59, 26, -256, 149, 32, 49, 201, 39, 2];
// quickSortHoare(arr);
// console.log("Хоара in-place:", arr);
