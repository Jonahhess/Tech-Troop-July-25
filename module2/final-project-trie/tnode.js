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

  findStartNode(word) {
    if (word === "" || word === this.value) {
      return [this, 0];
    }
    const prefix = this.longestCommonPrefix(word);

    if (prefix === word) {
      return [this, prefix.length];
    }

    const suffix = word.slice(prefix.length);
    if (!(suffix[0] in this.children)) {
      return [false, 0];
    }

    return this.children[suffix[0]].findStartNode(suffix);
  }

  predictWords(prefix) {
    const [startNode, offset] = this.findStartNode(prefix);
    const children = startNode ? startNode.gatherChildren() : [];
    return children.map((element) => prefix + element.slice(offset));
  }

  removeWord(word) {
    if (word === "" || word === this.value) {
      const numKids = Object.keys(this.children).length;
      switch (numKids) {
        case 0: {
          return -1;
        }
        case 1: {
          const child = Object.values(this.children)[0];
          this.value += child.value;
          this.children = child.children;
          return true;
        }
        default: {
          const flag = this.flag;
          this.flag = false;
          return flag;
        }
      }
    }

    const prefix = this.longestCommonPrefix(word);
    const suffix = word.slice(prefix.length);
    if (!(suffix[0] in this.children)) {
      return false;
    }

    const remove = this.children[suffix[0]].removeWord(suffix);
    if (remove === -1) {
      delete this.children[suffix[0]];
      return true;
    }

    return remove;
  }
}

module.exports = TNode;
