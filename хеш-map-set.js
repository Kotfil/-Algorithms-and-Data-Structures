// Пример 1: Частота элементов с использованием Map

function countElements(arr) {
    const map = new Map();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    return map;
}

const result = countElements([1, 2, 2, 3, 1, 2]);
console.log(result); // Map(3)  {1 => 2, 2 => 3, 3 => 1}

// Пример 2: Уникальные значения с использованием Set

function getUnique(arr) {
    return [...new Set(arr)];
}

console.log(getUnique([1, 2, 2, 3, 3, 3])); // [1, 2, 3]

// Пример 3: Проверка пересечения двух массивов через Set

function hasIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    for (const item of arr2) {
        if (set1.has(item)) return true;
    }
    return false;
}

console.log(hasIntersection([1, 2, 3], [4, 5, 2])); // true

// Пример 4: Первый повторяющийся элемент

function firstDuplicate(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); // 3
