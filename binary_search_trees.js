class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

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
}

const bst = new BinarySearchTree();
console.log(bst);
bst.insert(5);
bst.insert(12);
bst.insert(2);
bst.insert(0);
bst.insert(15);
bst.insert(15);
console.log(bst);
console.log(bst.root.left.left)
