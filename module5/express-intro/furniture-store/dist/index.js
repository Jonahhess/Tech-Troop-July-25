addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("item-input");
  const priceCheck = document.getElementById("price-check-button");
  const buyButton = document.getElementById("buy-button");

  priceCheck.onclick = async () => {
    const response = await fetch(`/priceCheck/${itemInput.value}`);
    const data = await response.json();
    const result = document.getElementById("result");
    result.innerHTML = `price: ${data.price}`;
  };

  buyButton.onclick = async () => {
    const response = await fetch(`/buy/${itemInput.value}`);
    const result = document.getElementById("result");

    if (response.status === 400) {
      result.innerHTML = `Error: could not buy ${itemInput.value}`;
      return;
    }
    const data = await response.json();
    result.innerHTML = `Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.`;
  };
});
