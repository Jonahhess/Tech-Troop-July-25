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
    const suffixesToAdd = [
      word.slice(prefix.length),
      this.value.slice(prefix.length),
    ];
    this.value = prefix;
    suffixesToAdd
      .filter((s) => s.length)
      .forEach((s) => {
        const firstLetter = s[0];
        if (!(firstLetter in this.children)) {
          this.children[firstLetter] = new TNode(s);
        } else {
          this.children[firstLetter].addWord(s);
        }
        return true;
      });
  }
}

module.exports = TNode;
