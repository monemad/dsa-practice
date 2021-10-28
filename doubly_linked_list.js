class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);

        if(!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this
    }

    pop() {
        if(!this.length) return undefined;

        let node = this.tail;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }

    shift() {
        if(!this.length) return undefined;

        let node = this.head;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push("DSA")
doublyLinkedList.push("rocks")
doublyLinkedList.push("!")
console.log(doublyLinkedList);
doublyLinkedList.shift();
doublyLinkedList.shift();
doublyLinkedList.shift();
doublyLinkedList.shift();
console.log(doublyLinkedList);
