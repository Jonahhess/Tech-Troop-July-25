// this trie implementation is going to be compressed, which is harder to deal with but offers better performance.
const TNode = require("./tnode.js");

class Trie {
  // internal class tNode
  constructor() {
    this.root = new TNode("", false, {});
  }
}

module.exports = Trie;
