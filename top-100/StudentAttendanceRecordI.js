// Условие (коротко)
// Дан строковый рекорд посещаемости студента, где:
// 'A' → Absent (отсутствовал)
// 'L' → Late (опоздал)
// 'P' → Present (присутствовал)
// Студент считается дисциплинированным, если:
// Не более одного 'A' за весь период
// Не более двух подряд 'L'
// Вернуть true, если студент дисциплинированный, иначе false.

function checkRecord(s) {
    // Проверяем, что количество 'A' ≤ 1
    const absentCount = [...s].filter(c => c === 'A').length;
    if (absentCount > 1) {
        return false;
    }
    // Проверяем, есть ли 3 подряд 'L'
    if (s.includes('LLL')) {
        return false;
    }
    return true;
}
// Примеры
 console.log(checkRecord("PPALLP")); // true
 console.log(checkRecord("PPALLL")); // false
 console.log(checkRecord("PAALL"));  // false

