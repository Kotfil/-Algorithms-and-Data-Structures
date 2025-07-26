function deleteDuplicates(head) {
    let current = head;
    while (current && current.next) {
        console.log('Текущий узел:', current.val);
        if (current.val === current.next.val) {
            console.log('Найден дубликат:', current.next.val);
            // пропускаем дубликат
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
