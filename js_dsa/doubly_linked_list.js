class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//insertion O(1)
//removal O(1)
//searching O(N)
//access O(N)

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

    unshift(val) {
        const node = new Node(val);

        if(!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.head;
        if (idx === this.length - 1) return this.tail;
        const startFromHead = idx < this.length / 2 ? true : false;

        let current;
        if (startFromHead) {
            current = this.head;
            for (let i = 1; i <= idx; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 2; i >= idx; i--) {
                current = current.prev;
            }
        }
        return current;
    }

    set(idx, val) {
        const node = this.get(idx);
        if (node) node.val = val;
        return node ? true : false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) this.unshift(val);
        else if (idx === this.length) this.push(val);
        else {
            const node = new Node(val);
            const prevNode = this.get(idx-1);
            node.next = prevNode.next;
            node.prev = prevNode;
            prevNode.next = node;
            node.next.prev = node;
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length -1) return this.pop();

        const node = this.get(idx);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push("DSA")
doublyLinkedList.push("rocks")
doublyLinkedList.push("!")
doublyLinkedList.push("1")
doublyLinkedList.push("2")
doublyLinkedList.push("3")


console.log(doublyLinkedList.remove(4));
console.log(doublyLinkedList);
