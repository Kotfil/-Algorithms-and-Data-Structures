// 📄 Условие:
// Дан односвязный список, нужно определить, есть ли в нём цикл
// (то есть, можно ли попасть, двигаясь по next, в уже посещённый узел).
// Идея:
// Используем два указателя (фаст и слоу):
// slow двигается по одному узлу за шаг
// fast двигается по два узла за шаг
// Если цикл есть — fast и slow в итоге встретятся внутри цикла.
//Если нет — fast дойдёт до конца (null).

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const hasCycle = (head) => {
    if (!head) return false;

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) return true;

        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};
// Пример 1: Цикл есть
// Создаём узлы
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
// Создаем цикл: следующий для node3 — это node2
node3.next = node2;

const head = node1;

console.log(hasCycle(head)); // Выведет: true

// Пример 2: Цикла нет

// const node3 = new ListNode(3);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);
//
// const head = node1;
//
// console.log(hasCycle(head)); // Выведет: false
