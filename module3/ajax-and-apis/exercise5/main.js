document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("search-container").style.display = "none";
  async function devCache(url, query) {
    const cached = localStorage.getItem(query);
    if (cached) {
      return JSON.parse(cached);
    }

    const key = localStorage.getItem("apiKey");
    const fullpath = `${url}?api_key=${key}&q=${query}&limit=1&offset=&rating=g&lang=en&bundle=messaging_non_clips`;
    const response = await fetch(fullpath);
    if (!response.ok) return 0;

    const json = await response.json();
    localStorage.setItem(query, JSON.stringify(json));
    return json;
  }

  async function saveAPIKey(key) {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=&rating=g`
    );
    if (!res.ok) return false;

    localStorage.setItem("apiKey", key);
    document.getElementById("api-key-container").style.display = "none";
    document.getElementById("search-container").style.display = "inline";

    return true;
  }

  const submitApiKey = document.getElementById("submit-api-key");
  submitApiKey.addEventListener("click", () => {
    const apiKey = document.getElementById("api-key").value;
    saveAPIKey(apiKey).then();
  });

  const searchButton = document.getElementById("search");
  searchButton.addEventListener("click", () => {
    const target = document.getElementById("target");
    const query = document.getElementById("search-input");

    devCache(`https://api.giphy.com/v1/gifs/search`, query.value)
      .then((response) => (target.src = response.data[0].embed_url))
      .catch((error) => (target.innerHTML = error));
  });

  const clearCacheButton = document.getElementById("clear-cache-button");
  clearCacheButton.addEventListener("click", () => {
    localStorage.clear();
    document.getElementById("api-key-container").style.display = "inline";
    document.getElementById("search-container").style.display = "none";
  });
});
