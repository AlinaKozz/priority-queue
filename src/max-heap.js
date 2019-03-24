const Node = require('./node');

class MaxHeap {
    constructor() {
        this.root = null;
        this.parentNodes = [];
    }

    push(data, priority) {
        var node = new Node(data, priority);
        this.insertNode(node);
        this.shiftNodeUp(node);
    }

    pop() {
        if (this.root) {
            this.detachRoot();
        }
    }

    detachRoot() {
        return this.root = null;
    }

    restoreRootFromLastInsertedNode(detached) {

    }

    size() {

    }



    isEmpty() {
        return this.root === null;
    }

    clear() {
        this.root = null;
        this.parentNodes = [];

    }

    insertNode(node) {
        if (this.root === null) {
            this.root = node;
        } else {
            this.parentNodes[0].appendChild(node);
        }
        this.parentNodes.push(node);
        if (this.parentNodes[0].left && this.parentNodes[0].right) {
            this.parentNodes.shift();
        }

    }

    shiftNodeUp(node) {

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;
