const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let i = 0;
    console.log(`Старт: nums = [${nums}]`);
    console.log(`i = ${i}, nums[i] = ${nums[i]}`);

    for (let j = 1  ; j < nums.length; j++) {
        console.log(`\n➡️ j = ${j}, nums[j] = ${nums[j]}`);

        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];

            console.log(`🔄 Новый уникальный элемент найден`);
            console.log(`i увеличен: i = ${i}`);
            console.log(`nums[${i}] теперь = ${nums[j]}`);
        } else {
            console.log(`⏭️ Дубликат найден, пропускаем`);
        }

        console.log(`nums = [${nums}]`);
    }

    console.log(`\n✅ Уникальных элементов: ${i + 1}`);
    return i + 1;
};

// Пример запуска
const nums = [0, 0, 1, 1, 2, 3, 3];
const k = removeDuplicates(nums);
console.log(`\nИтоговая длина: ${k}`);
console.log(`Массив после удаления дубликатов: [${nums.slice(0, k)}]`);
