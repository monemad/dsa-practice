//Stack
//LIFO

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
        if (!this.size) return undefined;
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
        return this;
    }

}

const stack = new Stack();
stack.push('hmmmmmmmm')
stack.push('one more thing')
stack.pop()
console.log(stack)


