// o(logN)
function searchInsertFirst(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return left; // позиция для вставки
}


function searchInsert(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i;
    }
    return nums.length;
}


// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4
