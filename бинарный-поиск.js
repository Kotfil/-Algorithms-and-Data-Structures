//classic binarySearch ______________1______________
function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}
const nums = [1, 3, 5, 7, 9, 11, 13];
const target1 = 9;
const result1 = binarySearchIterative(nums, target1);
console.log(result1); // Выведет: 4

// Рекурсивный бинарный поиск ______________2______________
function binarySearchRecursive(arr, target, left = 0,
                               right = arr.length - 1) {

    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target)
        return binarySearchRecursive(arr, target, mid + 1, right);
    else
        return binarySearchRecursive(arr, target, left, mid - 1);
}

// Вызов функции
const array2 = [1, 3, 5, 7, 9, 11];
const target2 = 7;
const result2 = binarySearchRecursive(array2, target2);

console.log(result2); // 3 — элемент 7 находится на индексе 3

// Бинарный поиск с пользовательским comparator'ом
// Полезно для поиска в сложных структурах (например, массив объектов):
function binarySearchWithComparator(arr, target, compareFn) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const comparison = compareFn(arr[mid], target);

        if (comparison === 0) return mid;
        else if (comparison < 0) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

// Пример использования:
const users = [{id: 1}, {id: 3}, {id: 5}];
const index = binarySearchWithComparator(users, 3, (a, b) => a.id - b);

console.log(index); // 1 — объект с id: 3 находится на индексе 1


