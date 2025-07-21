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

  // naive: for each node, find val1 and val2. if not found - print parent and return.
  commonParentHelper(val1, val2, parent) {
    if (
      parent.value === val1 ||
      parent.value === val2 ||
      !parent.findNode(val1) ||
      !parent.findNode(val2)
    )
      return false;
    return (
      parent.leftChild?.commonParentHelper(val1, val2, parent.leftChild) ||
      parent.rightChild?.commonParentHelper(val1, val2, parent.rightChild) ||
      parent
    );
  }

  findCommonParent(val1, val2) {
    const commonParent = this.commonParentHelper(val1, val2, this);
    console.log(commonParent.value);
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
