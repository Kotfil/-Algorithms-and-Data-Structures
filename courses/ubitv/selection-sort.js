function selectionSortDebug(arr) {
    let n = arr.length;
    console.log("СТАРТ МАССИВ:");
    console.log(arr);
    console.log("--------------------------------");
    // ВНЕШНИЙ ЦИКЛ
    // i — это клетка, куда мы хотим поставить самое маленькое число
    for (let i = 0; i < n - 1; i++) {
        // Сначала считаем, что самое маленькое число стоит прямо на i
        let minIndex = i;

        console.log(`\nВНЕШНИЙ ЦИКЛ: i = ${i}`);
        console.log(`Пока minIndex = i = ${minIndex}`);
        console.log(`То есть пока минимум = arr[${minIndex}] = ${arr[minIndex]}`);

        // ВНУТРЕННИЙ ЦИКЛ
        // j начинает с i + 1, то есть со следующей клетки
        // j будет бегать вправо и искать число меньше, чем arr[minIndex]
        for (let j = i + 1; j < n; j++) {

            console.log(`\n  ВНУТРЕННИЙ ЦИКЛ: j = ${j}`);
            console.log(`  Сравниваем arr[j] и arr[minIndex]`);
            console.log(`  arr[${j}] = ${arr[j]}`);
            console.log(`  arr[${minIndex}] = ${arr[minIndex]}`);

            if (arr[j] < arr[minIndex]) {
                console.log(`  ${arr[j]} < ${arr[minIndex]} ? ДА`);
                console.log(`  Значит minIndex переезжает с ${minIndex} на ${j}`);

                // minIndex НЕ идет сам по себе
                // он меняется только если j нашёл число меньше
                minIndex = j;
            } else {
                console.log(`  ${arr[j]} < ${arr[minIndex]} ? НЕТ`);
                console.log(`  minIndex остаётся ${minIndex}`);
            }
        }

        console.log(`\nКОНЕЦ ВНУТРЕННЕГО ЦИКЛА`);
        console.log(`i = ${i}`);
        console.log(`minIndex = ${minIndex}`);
        console.log(`Минимальное число справа найдено тут: arr[${minIndex}] = ${arr[minIndex]}`);

        // Теперь меняем местами:
        // arr[i] — место, куда надо поставить минимум
        // arr[minIndex] — где этот минимум нашли
        console.log(`Меняем местами arr[${i}] и arr[${minIndex}]`);
        console.log(`То есть ${arr[i]} и ${arr[minIndex]}`);

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;

        console.log("Массив после обмена:");
        console.log(arr);
        console.log("--------------------------------");
    }

    console.log("\nФИНАЛЬНЫЙ ОТСОРТИРОВАННЫЙ МАССИВ:");
    console.log(arr);

    return arr;
}


// Вот массив, который можно менять


let numbers = [7, 3, 9, 2, 10, 5, 0, 8, 1, 6, 4];

// Вызов функции
selectionSortDebug(numbers);