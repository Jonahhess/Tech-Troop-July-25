document.addEventListener("DOMContentLoaded", () => {
  async function getBook(type, value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=`;
    if (!["title", "isbn"].includes(type)) {
      return;
    }
    return await fetch(`${url}${type}:${value}`);
  }

  const searchButton = document.getElementById("search");
  searchButton.addEventListener("click", () => {
    const target = document.getElementById("target");
    const choice = Array.from(document.getElementsByName("choice")).filter(
      (choice) => choice.checked
    )[0];
    const type = choice.id;
    const input = document.getElementById("input");
    const value = input.value;
    getBook(type, value)
      .then((response) => response.json())
      .then((data) => (target.innerHTML = JSON.stringify(data)))
      .catch((error) => (target.innerHTML = error));
    input.value = "";
  });
});
