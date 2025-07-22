class TNode {
  constructor(value, children = {}) {
    this.value = value;
    this.children = children;
  }
  longestCommonPrefix(word) {
    // code stolen from internet and then adapted
    let commonPrefix = "";
    const minLength = Math.min(word.length, this.value.length);

    for (let i = 0; i < minLength; i++) {
      if (word[i] === this.value[i]) {
        commonPrefix += word[i];
      } else {
        break;
      }
    }
    return commonPrefix;
  }

  addWord(word) {
    if (word === "" || word === this.value) {
      return false;
    }
    const prefix = this.longestCommonPrefix(word);
    const valueSuffix = this.value.slice(prefix.length);
    const wordSuffix = word.slice(prefix.length);
    this.value = prefix;

    if (valueSuffix) {
      const children = { ...this.children };
      this.children = {};
      this.children[valueSuffix[0]] = new TNode(valueSuffix, children);
    }

    if (wordSuffix) {
      if (wordSuffix[0] in this.children) {
        this.children[wordSuffix[0]].addWord(wordSuffix);
      } else {
        this.children[wordSuffix[0]] = new TNode(wordSuffix);
      }
    }
  }

  findWord(word) {
    if (word === "" || word === this.value) {
      return true;
    }
    const prefix = this.longestCommonPrefix(word);
    const suffix = word.slice(prefix.length);
    if (!(suffix[0] in this.children)) {
      return false;
    }

    return this.children[suffix[0]].findWord(suffix);
  }
}

module.exports = TNode;
