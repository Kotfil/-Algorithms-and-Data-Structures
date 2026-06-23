class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        console.log("\nPUSH:", value);

        this.heap.push(value);
        console.log("После добавления:", this.heap);

        this.bubbleUp();

        console.log("После bubbleUp:", this.heap);
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        console.log("Старт index:", index, "value:", this.heap[index]);
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            console.log("Текущий index:", index, "value:", this.heap[index]);
            console.log("Родитель parentIndex:", parentIndex, "value:", this.heap[parentIndex]);

            if (this.heap[parentIndex] <= this.heap[index]) {
                console.log("Родитель меньше или равен. STOP.");
                break;
            }

            console.log("Родитель больше. Делаем swap.");

            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            console.log("После swap:", this.heap);

            index = parentIndex;
            console.log("Новый index:", index);
        }
    }
}

const heap = new MinHeap();

heap.push(7);
heap.push(2);
heap.push(9);
heap.push(1);
heap.push(5);