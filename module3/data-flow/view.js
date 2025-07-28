import update from "./update.js";

const render = (model) => {
  debugger;
  const posts = document.getElementById("posts");
  posts.innerHTML = "";
  for (const [name, text] of posts) {
    const li = document.createElement("li");
    li.innerHTML = `${name} posted: ${text}`;
    li.onclick = () => render(update.remove(name));
    posts.appendChild(li);
  }
};

export default render;

document.addEventListener("DOMContentLoaded", () => {
  render(update.init());
  document.getElementById("submit").addEventListener("click", () => {
    const nameInput = document.getElementById("name-input");
    const name = nameInput.value;

    const textInput = document.getElementById("text-input");
    const text = textInput.value;

    nameInput.value = "";
    textInput.value = "";

    if (name && text) {
      render(update.add(name, text));
    }
  });
});
