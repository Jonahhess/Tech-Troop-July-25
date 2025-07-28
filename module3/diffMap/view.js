import DiffMap from "./model.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new DiffMap();

  function renderElement(it) {
    const [name, text] = it.next().value;
    const li = document.createElement("li");
    li.innerHTML = `${name} posted: ${text}`;
    li.addEventListener("click", () => {
      model.delete(name);
      render(model);
    });
    return li;
  }

  function render(model) {
    const posts = document.getElementById("posts");
    if (model instanceof DiffMap) {
      const [version, lastChange] = model.getDiff();
      const postsVersion = posts.getAttribute(version);

      if (version - parseInt(postsVersion) > 1) {
        throw new Error("out of sync. cannot recover!");
      }

      const { operation, location } = lastChange;
      switch (operation) {
        case "clear": {
          posts.innerHTML = "";
        }
        case "add": {
          posts.appendChild(renderElement(model.getEntry(location)));
          break;
        }
        case "update": {
          posts.children[location].innerHTML = renderElement(
            model.getEntry(location)
          ).innerHTML;
          break;
        }
        case "delete": {
          posts.removeChild(posts.children[location]);
          break;
        }
        case "init": {
        }
        default: {
        }
      }
      posts.setAttribute("version", version);
      return;
    }

    posts.innerHTML = "";
    Object.entries(model).forEach((element) => {
      const li = renderElement(element);
      posts.appendChild(li);
    });
  }

  render(model);

  document.getElementById("submit").addEventListener("click", () => {
    const nameInput = document.getElementById("name-input");
    const name = nameInput.value;

    const textInput = document.getElementById("text-input");
    const text = textInput.value;

    nameInput.value = "";
    textInput.value = "";

    if (name && text) {
      render(model.set(name, text));
    }
  });
});
