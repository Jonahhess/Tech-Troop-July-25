const printWelcome = () =>
  console.log("=== AutoComplete Trie Console ===\nType 'help' for commands");

const printHelp = () =>
  console.log(`Commands:
  add <word>      - Add word to dictionary
  find <word>     - Check if word exists
  complete <prefix> - Get completions
  help           - Show this message
  exit           - Quit program`);

const printSuccess = (msg) => console.log(`✓ ${msg}`);

const printFailure = (msg) => console.log(`✗ ${msg}`);

const printAdded = (word) => console.log(`added '${word}' to dictionary`);

const printFound = (word) => printSuccess(`'${word}' exists in dictionary`);

const printNotFound = (word) =>
  printFailure(`'${word}' not found in dictionary`);

const printComplete = (prefix, words) =>
  console.log(`Suggestions for '${prefix}': ${words.join(", ")}`);

const printCannotComplete = (prefix) =>
  printFailure(`No suggestions found for prefix '${prefix}'`);

const printWordAlreadyExists = (word) =>
  printFailure(`'${word}' already exists in dictionary`);

const printExit = () => console.log("Goodbye!");

const printRemoved = (word) => printSuccess(`Successfully removed '${word}'`);

module.exports = {
  printWelcome,
  printHelp,
  printSuccess,
  printFailure,
  printAdded,
  printFound,
  printNotFound,
  printComplete,
  printCannotComplete,
  printWordAlreadyExists,
  printExit,
  printRemoved,
};
