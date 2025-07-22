const Trie = require("./trie.js");
const view = require("./view.js");
const prompt = require("prompt-sync")();

const root = new Trie();
view.printWelcome();
let endProgram = false;
while (!endProgram) {
  let input = prompt("> ");
  let [op, word] = input.split(" ");
  word = word || "";

  switch (op) {
    case "add": {
      root.add(word)
        ? view.printAdded(word)
        : view.printWordAlreadyExists(word);
      break;
    }
    case "find": {
      root.find(word) ? view.printFound(word) : view.printNotFound(word);
      break;
    }
    case "complete": {
      const suggestions = root.getValues(word);
      suggestions
        ? view.printComplete(word, suggestions)
        : view.printCannotComplete(word);
      break;
    }
    case "remove": {
      root.remove(word) ? view.printRemoved(word) : view.printNotFound(word);
      break;
    }
    case "exit": {
      view.printExit();
      endProgram = true;
      break;
    }
    default: {
      view.printHelp();
      break;
    }
  }
}
