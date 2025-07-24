import Trie from "./trie.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new Trie();
  const buttons = document.getElementsByClassName("btn");
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
      const opName = button.id;
      const value = document.getElementById("value-input").value;
      const status = document.getElementById("status");

      switch (opName) {
        case "add": {
          if (model.add(value)) {
            status.innerHTML = `added '${value}' to dictionary`;
            document.getElementById("number").innerText =
              parseInt(document.getElementById("number").innerText) + 1;
          } else {
            status.innerHTML = `'${value}' exists in dictionary`;
          }
          break;
        }
        case "remove": {
          if (model.remove(value)) {
            status.innerHTML = `removed '${value}' from dictionary`;
            document.getElementById("number").innerText =
              parseInt(document.getElementById("number").innerText) - 1;
          } else {
            status.innerHTML = `'${value}' not in dictionary`;
          }
          break;
        }
        case "find": {
          if (model.find(value)) {
            status.innerHTML = `'${value}' exists in dictionary`;
          } else {
            status.innerHTML = `'${value}' is not in dictionary`;
          }
          break;
        }
      }

      document.getElementById("value-input").value = "";
      document.getElementById("suggestions").innerHTML = model
        .getValues()
        .join(", ");
    });
  });

  document
    .getElementById("autocomplete-input")
    .addEventListener("keyup", () => {
      const value = document.getElementById("autocomplete-input").value;
      document.getElementById("suggestions").innerHTML = model
        .getValues(value)
        .join(", ");
    });
});
