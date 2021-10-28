class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val) 
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        let node;
        if (this.head === this.tail) {
            node = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while(current.next !== this.tail) {
                current = current.next
            }
            node = this.tail;
            this.tail = current;
            this.tail.next = null;
        }
        this.length--;
        return node;
    }

    shift() {
        if (!this.length) return undefined;
        const node = this.head;
        if (this.head === this.tail)
            this.tail = null;
        this.head = this.head.next;
        this.length--;
        node.next = null;
        return node;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current.next
        }
        return current;
    }

    set(idx, val) {
        const node = this.get(idx);
        if (node) node.value = val;
        return node ? true : false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        else if (idx === this.length) this.push(val);
        else if (idx === 0) this.unshift(val);
        else {
            const node = this.get(idx-1);
            const newNode = new Node(val);
            newNode.next = node.next;
            node.next = newNode;
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();

        const prevNode = this.get(idx-1);
        const node = prevNode.next;
        prevNode.next = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    reverse() {
        if (this.length <= 1) return this;
        let current = this.head;
        let temp = this.tail;
        this.tail = this.head;
        this.head = temp;

        let newNext = null;
        while (current) {
            let upcomingNode = current.next;
            current.next = newNext;
            newNext = current;
            current = upcomingNode;
        }
        return this;
    }
}

let list = new SinglyLinkedList()

console.log(list)

list.push('moiz')
console.log(list)

list.push('ivy')
console.log(list)

list.push('bean')
console.log(list)

list.unshift('winky')
console.log(list)

// console.log(list.remove(1));
list.reverse();
console.log(list);
