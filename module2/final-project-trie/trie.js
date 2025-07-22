// this trie implementation is going to be compressed, which is harder to deal with but offers better performance.
const TNode = require("./tnode.js");

class Trie {
  constructor() {
    this.root = new TNode("", false, {});
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
}

module.exports = Trie;
