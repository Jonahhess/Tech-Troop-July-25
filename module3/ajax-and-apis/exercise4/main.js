document.addEventListener("DOMContentLoaded", () => {
  async function devCache(url, key) {
    const cached = localStorage.getItem(key);
    if (cached) {
      return JSON.parse(cached);
    }

    const response = await fetch(url);
    if (!response.ok) return 0;

    const json = await response.json();
    localStorage.setItem(key, JSON.stringify(json));
    return json;
  }

  const searchButton = document.getElementById("search");
  searchButton.addEventListener("click", () => {
    const target = document.getElementById("target");
    const apiKey = document.getElementById("api-key").value;

    devCache(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=g`,
      "gif"
    )
      .then((response) => (target.src = response.data.embed_url))
      .catch((error) => (target.innerHTML = error));
  });
});
