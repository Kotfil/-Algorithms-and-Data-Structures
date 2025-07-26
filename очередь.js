// (FIFO — First In First Out)
// Задача: Симуляция очереди в магазине

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue("Клиент 1");
queue.enqueue("Клиент 2");
console.log(queue.dequeue()); // Клиент 1
console.log(queue.dequeue()); // Клиент 2
