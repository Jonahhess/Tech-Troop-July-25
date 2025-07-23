// console.log(document)

const moveRight = function () {
  const left = document.getElementById("ball").style.left;
  const parsedLeft = parseInt(left.slice(0, -2)) || 0;
  if (parsedLeft < 400) {
    const px = parsedLeft + 15 + "px";
    document.getElementById("ball").style.left = px;
  }
};

const moveLeft = function () {
  const left = document.getElementById("ball").style.left;
  const parsedLeft = parseInt(left.slice(0, -2)) || 0;
  if (parsedLeft >= 15) {
    const px = parsedLeft - 15 + "px";
    document.getElementById("ball").style.left = px;
  }
};

const moveDown = function () {
  const top = document.getElementById("ball").style.top;
  const parsedTop = parseInt(top.slice(0, -2)) || 0;
  if (parsedTop < 400) {
    const px = parsedTop + 15 + "px";
    document.getElementById("ball").style.top = px;
  }
};

const moveUp = function () {
  const top = document.getElementById("ball").style.top;
  const parsedTop = parseInt(top.slice(0, -2)) || 0;
  if (parsedTop >= 15) {
    const px = parsedTop - 15 + "px";
    document.getElementById("ball").style.top = px;
  }
};

const box = document.getElementById("box");

const enterColor = function () {
  box.style.backgroundColor = "#c0392b";
  box.innerHTML = "AHH GO AWAY";
};

const leaveColor = function () {
  box.style.backgroundColor = "#1abc9c";
  box.innerHTML = "Hover over me!";
};

const clicked = function () {
  box.style.backgroundColor = "#8e44ad";
  box.innerHTML = "Much Better!";
};

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

up.addEventListener("click", () => moveUp());
down.addEventListener("click", () => moveDown());
left.addEventListener("click", () => moveLeft());
right.addEventListener("click", () => moveRight());
