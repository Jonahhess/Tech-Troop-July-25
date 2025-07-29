document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("target");
  const searchButton = document.getElementById("search-isbn");
  searchButton.addEventListener("click", () => {
    const isbn = document.getElementById("input-isbn");
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn.value}`)
      .then((response) => response.json())
      .then((data) => (target.innerHTML = JSON.stringify(data)))
      .catch((error) => (target.innerHTML = error));
    isbn.value = "";
  });
});
