class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findNode(value) {
    if (!this.value) return false;
    if (this.value === value) return true;
    return this.leftChild?.findNode(value) || this.rightChild?.findNode(value);
  }
}

const bsTree = new BSNode("H");
bsTree.insertNode("E");
bsTree.insertNode("G");
bsTree.insertNode("S");
bsTree.insertNode("L");
bsTree.insertNode("I");
bsTree.insertNode("Y");

//Use the following to test
bsTree.findNode("H"); // should print true
bsTree.findNode("G"); // should print true
bsTree.findNode("Z"); // should print false
bsTree.findNode("F"); // should print false
bsTree.findNode("y"); // should print false - we didn't make the tree case sensitive!
