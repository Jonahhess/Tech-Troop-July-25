document.addEventListener("DOMContentLoaded", () => {
  async function getBook(type, value) {
    if (!["title", "isbn"].includes(type)) {
      return;
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=`;
    const response = await fetch(`${url}${type}:${value}`);
    const body = await response.json();
    const items = body.items;
    if (!items) {
      return 0;
    }

    return items.map((item) => {
      const volumeInfo = item.volumeInfo;
      const title = volumeInfo?.title;
      const authors = volumeInfo?.authors;
      const isbn = volumeInfo.industryIdentifiers;

      return { title, authors, isbn };
    });
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
      .then((data) => (target.innerHTML = JSON.stringify(data)))
      .catch((error) => (target.innerHTML = error));
    input.value = "";
  });
});
