addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("item-input");
  const search = document.getElementById("search-button");
  search.onclick = () => {
    document.location.href = `/priceCheck/${searchInput.value}`;
  };
});
