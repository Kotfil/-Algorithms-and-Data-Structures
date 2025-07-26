// Определяем узел списка
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Вспомогательная функция: массив → список
const arrayToList = (arr) => {
    let dummy = new ListNode(-1);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};

// Вспомогательная функция: список → массив
const listToArray = (list) => {
    const result = [];
    while (list) {
        result.push(list.val);
        list = list.next;
    }
    return result;
};

// Основная функция с логами
const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode(-1);
    let current = dummy;

    // console.log("🔽 Начинаем слияние двух списков...");
    while (list1 && list2) {
        // console.log(`Сравниваем list1.val = ${list1.val} и list2.val = ${list2.val}`);
        if (list1.val < list2.val) {
            // console.log(`✅ Берём из list1: ${list1.val}`);
            current.next = list1;
            list1 = list1.next;
        } else {
            // console.log(`✅ Берём из list2: ${list2.val}`);
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
        // console.log(`📌 Новый current.val = ${current.val}`);
        // console.log("-----------------------------");
    }

    const remaining = list1 || list2;
    if (remaining) {
        console.log("🔚 Один из списков пуст. Прицепляем остаток:");
        let temp = remaining;
        while (temp) {
            console.log(`→ ${temp.val}`);
            temp = temp.next;
        }
    }

    current.next = remaining;

    console.log("✅ Слияние завершено.");
    return dummy.next;
};

// 🔁 Пример вызова:
const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);
const merged = mergeTwoLists(list1, list2);
console.log("Результат:", listToArray(merged)); // [1, 1, 2, 3, 4, 4]
