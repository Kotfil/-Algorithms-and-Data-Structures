// Разбор по шагам:
//     Инициализируем счётчик прочитанных символов total = 0.
//
// Создаём временный буфер buf4 размером 4 для вызова read4.
//
//     Пока нам нужно ещё символов (total < n):
//
// Вызываем read4(buf4), получаем сколько символов прочитано (count).
//
//     Если count === 0 — значит достигнут конец файла, выходим из цикла.
//
//     Определяем, сколько символов нам можно взять (toCopy = min(count, n - total)).
//
//     Копируем эти символы из buf4 в buf.
//
//     Увеличиваем total на число скопированных символов.
//
//     Возвращаем общее количество прочитанных символов.
//
//     Сложность:
// Время: O(n), где n — количество символов для чтения.
//
//     Память: O(1) дополнительная.
//


// read4 API уже реализована и доступна
// function read4(buf4) { ... }

const fileContent = "Hello, world! This is a test file."; // содержимое "файла"
let filePointer = 0;

// Эмуляция read4: читает максимум 4 символа из fileContent
function read4(buf4) {
    let i = 0;
    while (i < 4 && filePointer < fileContent.length) {
        buf4[i++] = fileContent[filePointer++];
    }
    return i; // сколько символов прочитано
}

// Реализация read
export const read = (buf, n) => {
    let total = 0;
    const buf4 = new Array(4);

    while (total < n) {
        const count = read4(buf4);
        if (count === 0) break;

        const toCopy = Math.min(count, n - total);
        for (let i = 0; i < toCopy; i++) {
            buf[total++] = buf4[i];
        }
    }

    return total;
};

// Пример запуска:
const buf = new Array(20);
const charsRead = read(buf, 15);
console.log('Прочитано символов:', charsRead);
console.log('Содержимое буфера:', buf.slice(0, charsRead).join(''));
