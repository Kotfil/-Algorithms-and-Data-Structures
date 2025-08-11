class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA;
}



// Создаем общую часть списка (пересечение)
const intersect = new ListNode(8);
intersect.next = new ListNode(10);

// Первый список: 3 -> 7 -> 8 -> 10
const headA = new ListNode(3);
headA.next = new ListNode(7);
headA.next.next = intersect;

// Второй список: 99 -> 1 -> 8 -> 10
const headB = new ListNode(99);
headB.next = new ListNode(1);
headB.next.next = intersect;

// Вызов функции
const result = getIntersectionNode(headA, headB);

console.log(result ? result.val : null);  // Выведет: 8
