// Задача
// Дан односвязный список, нужно вернуть средний узел.
// Если элементов чётное число → вернуть второй средний.
// Пример:
// Вход: 1 → 2 → 3 → 4 → 5 → Выход: узел со значением 3.
// Вход: 1 → 2 → 3 → 4 → 5 → 6 → Выход: узел со значением 4.
// ------------------------------------------------------------

// Идея (два указателя — fast & slow)
// Заводим два указателя:
// slow двигается на 1 шаг,
// fast двигается на 2 шага.
// Когда fast достигнет конца, slow будет стоять ровно в середине.

// Определение узла списка
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // идёт по 1
        fast = fast.next.next;  // идёт по 2
    }

    return slow; // середина
}
// создаём список: 1 → 2 → 3 → 4 → 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let mid = middleNode(head);
console.log(mid.val); // 3

// пример с чётным числом: 1 → 2 → 3 → 4 → 5 → 6
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);
head2.next.next.next.next.next = new ListNode(6);

let mid2 = middleNode(head2);
console.log(mid2.val); // 4

