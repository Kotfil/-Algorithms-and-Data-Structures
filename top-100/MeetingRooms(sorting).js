// Дан массив интервалов intervals, где intervals[i] = [start, end].
//     Нужно проверить, может ли человек посетить все встречи, то есть чтобы они не пересекались.
// [[0,30],[5,10],[15,20]] → false (так как [0,30] пересекается с [5,10])
// [[7,10],[2,4]] → true (нет пересечений)
// Идея решения (через сортировку)
// Отсортировать интервалы по времени начала.
//     Пройти по массиву и проверять: если начало следующей встречи < конец предыдущей, значит есть пересечение → вернуть false.
//     Если цикл прошёл без конфликтов → true.

function canAttendMeetings(intervals) {
    // сортировка по старту
    intervals.sort((a, b) => a[0] - b[0]);

    // проверка на пересечение
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false; // пересечение найдено
        }
    }

    return true; // пересечений нет
}

console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // false
console.log(canAttendMeetings([[7,10],[2,4]]));          // true
console.log(canAttendMeetings([[1,2],[2,3],[3,4]]));     // true
console.log(canAttendMeetings([[1,5],[2,6]]));           // false
