document.addEventListener("DOMContentLoaded", () => {
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };

  const boxContainer = document.getElementById("box-container");
  boxContainer.style.display = "flex";
  for (let i = 0; i < 25; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.id = `box${i}`;
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = generateRandomColor();
    box.onmouseenter = function () {
      box.style.backgroundColor = generateRandomColor();
    };
    box.onmouseleave = function () {
      box.style.backgroundColor = generateRandomColor();
    };
    boxContainer.appendChild(box);
  }
});
