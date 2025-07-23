document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");
  list.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerHTML = "A new item!";
    list.appendChild(li);
  });
});
