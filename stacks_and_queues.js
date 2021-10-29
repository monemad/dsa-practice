//Stack
//LIFO

//Time Complexity
//insertion O(1)
//removal O(1)

//not really relevant for stacks
//searching O(N)
//access O(N)
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }
    pop() {
        if (!this.size) return null;
        const node = this.first;
        if (this.first === this.last)
            this.last = null;
        this.first = this.first.next;
        this.size--;
        node.next = null;
        return node;
    }

    push(val) {
        const node = new Node(val);
        if (!this.size) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
        return this.size;
    }

}

// const stack = new Stack();
// stack.push('hmmmmmmmm')
// stack.push('one more thing')
// stack.pop()
// console.log(stack)

//Time Complexity
//insertion O(1)
//removal O(1)

//not really relevant for queues
//searching O(N)

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue (val) {
        const node = new Node(val)
        if (!this.size) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this;
    }

    dequeue() {
        if (!this.size) return undefined;
        const node = this.first;
        if (this.first === this.last)
            this.last = null;
        this.first = this.first.next;
        this.size--;
        node.next = null;
        return node;
    }
}

// const queue = new Queue()
// queue.enqueue('bananas')
// queue.enqueue('mangos')
// console.log(queue.dequeue())
// console.log(queue)

module.exports = {
    Queue,
    Stack
}
