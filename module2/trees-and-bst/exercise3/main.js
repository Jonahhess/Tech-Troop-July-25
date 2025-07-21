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

const valuesToInsert = ["H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

const bsTree = new BSNode("J");
valuesToInsert.forEach((value) => {
  bsTree.insertNode(value);
});

bsTree.findCommonParent("B", "I"); //should return "H"
bsTree.findCommonParent("B", "G"); //should return "E"
bsTree.findCommonParent("B", "L"); //should return "J"
bsTree.findCommonParent("L", "Y"); //should return "R"
bsTree.findCommonParent("E", "H"); //should return "J"
