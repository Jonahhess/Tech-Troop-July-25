class TNode {
  constructor(value, children) {
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
    const letter = word[0];
    if (letter === "") {
      return true;
    }

    if (word === this.value) {
      return false;
    }

    if (this.value === "" && !(letter in this.children)) {
      this.children[letter] = new Node(word); // adding entire word as value
      return true;
    }

    const prefix = this.longestCommonPrefix(word);
    if (prefix === this.value) {
      const restOfWord = word.slice(prefix.length);
      this.children[restOfWord[0]] = restOfWord;
      return true;
    }

    //return this.children[letter].addWord(word.slice[1]);
  }
}

module.exports = TNode;
