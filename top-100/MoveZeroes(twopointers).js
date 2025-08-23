// Дан массив nums. Нужно переместить все нули в конец массива, сохранив порядок ненулевых элементов.
//     Условие:
// Изменять массив in-place.
//     Минимизировать количество операций.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Используем два указателя: lastNonZeroFoundAt — индекс, куда нужно поставить следующий ненулевой элемент.
//     Проходим массив, каждый раз, когда встречаем неноль, перемещаем его на lastNonZeroFoundAt и увеличиваем указатель.
//     После прохода все ненули будут в начале, оставшиеся индексы заполняем нулями (если нужно).


function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;

    // Переносим все ненули в начало массива
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }
    console.log(nums,'nums')
    // Заполняем оставшиеся позиции нулями
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums; // возвращаем для удобства проверки
}


const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1, 3, 12, 0, 0]
