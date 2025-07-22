class TNode {
  constructor(value, flag = false, children = {}) {
    this.value = value;
    this.flag = flag;
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
      const flag = this.flag;
      this.flag = true;
      return !flag;
    }
    const prefix = this.longestCommonPrefix(word);
    const valueSuffix = this.value.slice(prefix.length);
    const wordSuffix = word.slice(prefix.length);
    this.value = prefix;
    this.flag = false;

    if (valueSuffix) {
      const children = { ...this.children };
      this.children = {};
      this.children[valueSuffix[0]] = new TNode(valueSuffix, true, children);
    }

    if (!wordSuffix) {
      this.flag = true;
      return true;
    }

    if (wordSuffix[0] in this.children) {
      this.children[wordSuffix[0]].addWord(wordSuffix);
    } else {
      this.children[wordSuffix[0]] = new TNode(wordSuffix, true);
      return true;
    }
  }

  findWord(word) {
    if (word === "" || word === this.value) {
      return this.flag;
    }
    const prefix = this.longestCommonPrefix(word);
    const suffix = word.slice(prefix.length);
    if (!(suffix[0] in this.children)) {
      return false;
    }

    return this.children[suffix[0]].findWord(suffix);
  }

  gatherChildren(prefix = "") {
    const children = [];
    if (this.flag) {
      children.push(prefix + this.value);
    }

    for (const value of Object.values(this.children)) {
      children.push(value.gatherChildren(prefix + this.value));
    }

    return children.flat();
  }
}

module.exports = TNode;
