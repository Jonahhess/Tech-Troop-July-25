class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }

  insertLeft(value) {
    if (!this.leftChild) {
      this.leftChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.leftChild = this.leftChild;
      this.leftChild = newNode;
    }
  }

  insertRight(value) {
    if (!this.rightChild) {
      this.rightChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.rightChild = this.rightChild;
      this.rightChild = newNode;
    }
  }
}

const head = new Node("H");
head.insertLeft("E");
head.leftChild.insertRight("G");
head.insertRight("S");
head.rightChild.insertLeft("L");
head.rightChild.leftChild.insertLeft("L");
head.rightChild.insertRight("Y");

console.log(head);
