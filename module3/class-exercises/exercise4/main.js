document.addEventListener("DOMContentLoaded", () => {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setup.innerHTML = data.setup;
      punchline.innerHTML = data.punchline;
    });

  const newJokeButton = document.getElementById("new-joke-button");
  newJokeButton.addEventListener("click", () => {
    setup.innerHTML = "...Loading";
    punchline.innerHTML = "";
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setup.innerHTML = data.setup;
        punchline.innerHTML = data.punchline;
      });
  });
});
