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
console.log(bst.contains(15))
