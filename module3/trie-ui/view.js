import Trie from "./trie.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new Trie();

  document.getElementById("add-btn").addEventListener("click", () => {
    const value = document.getElementById("value-input").value;
    const status = document.getElementById("status");
    if (value) {
      model.add(value)
        ? (status.innerHTML = `added '${value}' to dictionary`)
        : `'${value}' exists in dictionary`;
    } else {
      status.innerHTML = "Status";
    }
  });

  document.getElementById("remove-btn").addEventListener("click", () => {
    const value = document.getElementById("value-input").value;
    const status = document.getElementById("status");
    if (value) {
      model.remove(value)
        ? (status.innerHTML = `removed '${value}' from dictionary`)
        : `'${value}' not in dictionary`;
    } else {
      status.innerHTML = "Status";
    }
  });

  document
    .getElementById("autocomplete-input")
    .addEventListener("keydown", () => {
      const value = document.getElementById("autocomplete-input").value;
      document.getElementById("suggestions").innerHTML = model.getValues(value);
    });
});
