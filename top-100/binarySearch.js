const binSearch = (arr, val) => {
    let left = 0
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === val) return arr[mid]
        if (arr[mid] <= val) {
            left = mid + 1
        } else if (arr[mid] >= val) {
            right = mid + 1
        }
    }
    return -1
}


const millionNumbers = Array.from({length: 1_000_000}, (_, i) => i + 1);


console.log(binSearch(millionNumbers, 525))
