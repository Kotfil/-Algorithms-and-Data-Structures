// Задача: дан односвязный список, нужно удалить
// все узлы с заданным значением val и вернуть новый "чистый" список.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

export const removeElements = (head, val) => {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }

    return dummy.next;
};


function buildList(arr) {
    let dummy = { next: null };
    let curr = dummy;
    for (let num of arr) {
        curr.next = { val: num, next: null };
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

const head = buildList([1, 2, 6, 3, 4, 5, 6]);
const newHead = removeElements(head, 6);

console.log(listToArray(newHead)); // [1, 2, 3, 4, 5]
