class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = this.right = null;
    }

    //const node = new Node(data, priority)

    appendChild(node) {
        if (this.left === null) {
            node.parent = this;
            this.left = node;
        } else if (this.right === null) {
            node.parent = this;
            this.right = node;
        }
    }

    removeChild(node) {
            if (this.left === node) {
                node.parent = null;
                this.left = null;
            } else if (this.right === node) {
                node.parent = null;
                this.right = null;
            } else {
                throw new Error('node is not a child');
            }
        }


    remove() {
        if (this.parent === null) {
            return
        }

        this.parent.removeChild(this)
    }

    swapWithParent() {
        if (this.parent === null) {
            return
        }
        var parent = this.parent;
        var grandParent = this.parent.parent;
        var leftChild = this.left;
        var rightChild = this.right;
        var leftChildParent = parent.left;
        var rightChildParent = parent.right;
    }
}

module.exports = Node;
