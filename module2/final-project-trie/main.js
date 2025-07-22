const Trie = require("./trie.js");

const root = new Trie();
root.add("apple");
root.add("app");
root.add("anaconda");
root.add("banana");
root.add("bandana");
root.add("ban");
root.find("app");
root.find("anaconda");
root.find("bandana");
root.find("ban");
root.find("can");
root.find("bana");
console.log(
  root.getValues("appl"),
  root.getValues("ba"),
  root.getValues("bana"),
  root.getValues("car")
);
// root.remove("coconut");
// root.remove("ana");
// root.remove("app");
