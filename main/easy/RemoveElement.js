function removeElement(nums, val) {
    let i = 0; // указатель для записи

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]; // сохраняем не val
            i++;               // двигаем указатель
        }
    }

    return i; // новая длина
}
