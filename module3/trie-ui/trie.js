import TNode from "./tnode.js";

export default class Trie {
  constructor() {
    this.root = new TNode("");
  }
  add(value = "") {
    return this.root.addWord(value);
  }
  find(value = "") {
    return this.root.findWord(value);
  }
  getValues(prefix = "") {
    return this.root.predictWords(prefix);
  }

  remove(value = "") {
    return this.root.removeWord(value);
  }
}
