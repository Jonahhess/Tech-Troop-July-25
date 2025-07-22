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
    const wordSuffix = word.slice(prefix.length);
    const valueSuffix = this.value.slice(prefix.length);
    const childrenOfValue = { ...this.children };
    this.value = prefix;
    this.children = {};

    if (wordSuffix) {
      this.children[wordSuffix[0]] = new TNode(wordSuffix);
    }

    if (valueSuffix) {
      this.children[valueSuffix[0]] = new TNode(valueSuffix, childrenOfValue);
    }
  }
}

module.exports = TNode;
