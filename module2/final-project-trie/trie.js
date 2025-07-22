// this trie implementation is going to be compressed, which is harder to deal with but offers better performance.
const TNode = require("./tnode.js");

class Trie {
  constructor() {
    this.root = new TNode("", {});
  }
  add(value) {
    return this.root.addWord(value);
  }
  find(value) {
    return this.root.findWord(value);
  }
  getValues(prefix) {
    return this.root.predictWords(prefix);
  }

  // this is optional, but would be a great exercise if I have time
  remove(value) {
    return this.root.removeWord(value);
  }
}

module.exports = Trie;
