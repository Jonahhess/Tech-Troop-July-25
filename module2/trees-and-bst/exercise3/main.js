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
    return this.commonParentHelper(val1, val2, this) || this;
  }

  findSonToDelete(value) {
    if (this.leftChild?.value === value) {
      return ["leftChild", this.leftChild];
    } else if (this.rightChild?.value === value) {
      return ["rightChild", this.rightChild];
    } else {
      return ["", this];
    }
  }

  countChildren() {
    return !!this.leftChild + !!this.rightChild;
  }

  getOnlyChild() {
    if (this.leftChild) {
      return ["leftChild", this.leftChild];
    }
    return ["rightChild", this.rightChild];
  }

  getMaxLeftOfNode() {
    let parentOfMax = this.leftChild;
    let max = parentOfMax.rightChild;
    while (max.rightChild) {
      parentOfMax = max;
      max = max.rightChild;
    }
    return [parentOfMax, max];
  }

  nodeRemovalAlgorithm(parent, value) {
    let [side, nodeToDelete] = this.findSonToDelete(value);
    let numKids = nodeToDelete.countChildren();

    switch (numKids) {
      case 0: {
        parent[side] = undefined;
        break;
      }
      case 1: {
        parent[side] = nodeToDelete;
        break;
      }
      case 2: {
        const [parentOfMax, maxChild] = nodeToDelete.getMaxLeftOfNode();
        if (side === "") {
          // we are dealing with a root removal
          this.value = maxChild.value;
        } else {
          parentOfMax[side].value = maxChild.value;
          parentOfMax.rightChild = undefined;
        }
        break;
      }
      default: {
        throw new Error("more than two kids? Impossible!");
      }
    }
  }

  removeNode(parent, value) {
    const parentOfNodeToDelete = this.findCommonParent(value, value);
    this.nodeRemovalAlgorithm(parentOfNodeToDelete, value);
    return parent;
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
