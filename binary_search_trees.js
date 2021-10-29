// import { Queue } from './stacks_and_queues'
const { Queue, Stack } = require('./stacks_and_queues')

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/*
Time Complexity
Insertion:
    Best/Avg: O(log n)
    Worst: O(n) if the tree is crazy unbalanced and basically a linked list
Searching
    Best/Avg: O(log n)
    Worst: O(n) if the tree is crazy unbalanced and basically a linked list
*/

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);

        if (!this.root) {
            this.root = node;
            return;
        }

        let current = this.root;
        while(true)
        if (val < current.val) {
            if (current.left)
                current = current.left;
            else {
                current.left = node;
                return this;
            }
        } else if (val > current.val) {
            if (current.right)
                current = current.right;
            else {
                current.right = node;
                return this;
            }
        } else {
            console.log('Value already exists.')
            return false;
        }
    }

    // recursive
    find(val, currentNode = this.root) {
        if (!currentNode) return undefined;

        if(val === currentNode.val)
            return currentNode
        if(val > currentNode.val)
            return this.find(val, currentNode.right);
        if(val < currentNode.val)
            return this.find(val, currentNode.left);
    }

    // iterative
    contains(val) {
        if (!this.root) return false;

        let currentNode = this.root;
        while(currentNode) {
            if (val === currentNode.val)
                return true;
            else if (val > currentNode.val)
                currentNode = currentNode.right;
            else if (val < currentNode.val)
                currentNode = currentNode.left;
        }
        return false;
    }

    iterativeBFS(val) {
        if (!this.root) return undefined;

        const queue = new Queue();
        queue.enqueue(this.root);
        // console.log(queue.size);
        while (queue.size) {
            // the value of the dequeued element is the whole node
            let currentNode = queue.dequeue().val;
            console.log(currentNode.val)
            if (val === currentNode.val)
                return currentNode;
            
            if (currentNode.left)
                queue.enqueue(currentNode.left)
            if (currentNode.right)
                queue.enqueue(currentNode.right)

        }
        return undefined;
    }

    recursiveBFS(val, queue) {
        if (!queue) {
            console.log('please run once')
            queue = new Queue()
            queue.enqueue(this.root)
        }
        if (!queue.size) return undefined;
        const currentNode = queue.dequeue().val;
        // console.log(currentNode);
        if (!currentNode) return undefined;

        if (val === currentNode.val)
            return currentNode;
        if (currentNode.left)
            queue.enqueue(currentNode.left)
        if (currentNode.right)
            queue.enqueue(currentNode.right)
        return this.recursiveBFS(val, queue)
    }
}

const bst = new BinarySearchTree();
// console.log(bst);
bst.insert(5);
bst.insert(12);
bst.insert(2);
bst.insert(0);
bst.insert(15);
// bst.insert(15);
// console.log(bst);
// console.log(bst.root.left.left)
// console.log(bst.find(56))
// console.log(bst.contains(15))
console.log(bst.recursiveBFS(5))
