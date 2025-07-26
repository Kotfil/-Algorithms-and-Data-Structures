const arraySort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const arrayRandom = [7, 2, 20, 10, 14, 4, 12, 8, 15, 1, 17, 9, 5, 6, 18, 19, 11, 3, 16, 13];

const binaryMain = (a) => {
    let left = 0;
    let right = arraySort.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (arraySort[middle] === a) return middle;
        if (arraySort[middle] > a) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}
console.log(binaryMain(15))

const zjadnyAlgor = (coins, amount) => {
    coins.sort((a, b) => b - a);
    const result = []
    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            result.push(coin);
        }
    }
    return result
}
console.log(zjadnyAlgor([1, 5, 10, 25], 63))

//binarySearch
//Жадные алгоритмы
//mergeSortRecursion

const mergeSortRecursion = (arr) => {
    if (arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2)
    let left = mergeSortRecursion(arr.slice(0, middle))
    let right = mergeSortRecursion(arr.slice(middle))
    return merge(left, right)
}

function mergeSortSecond(left, right) {
    const result = []
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[i++]);
        }
    }
    return result
}

console.log(mergeSortRecursion(arrayRandom))

