// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

let transactionId = 0;

async function checkInventory(itemNames) {
  setTimeout(null, 500);
  const items = [];
  for (const item of itemNames) {
    if (!item in inventory || !inventory[item].stock) {
      throw new Error(`${item} not in inventory`);
    }

    items.push({ name: item, price: inventory[item].price });
  }
  return items;
}

async function calculateTotal(items) {
  setTimeout(null, 200);
  return items.map((item) => item.price).reduce((acc, e) => acc + e, 0) * 1.08;
}

async function processPayment(amount) {
  setTimeout(null, 1500);
  if (Math.random() >= 0.1) {
    transactionId += 1;
    return { transactionId, amount, status: "success" };
  }
  return false;
}

async function updateInventory(itemNames) {
  setTimeout(null, 300);
  for (const item of itemNames) {
    if (!item in inventory || !inventory[item].stock) {
      throw new Error(`error updating this item: ${item}`);
    }
    inventory[item].stock -= 1;
  }
  return inventory;
}

async function checkout(itemNames) {
  const itemsInStock = await checkInventory(itemNames);
  const amount = await calculateTotal(itemsInStock);
  await processPayment(amount); // pay before updating inventory!
  const updatedInventory = await updateInventory(itemNames);
  return updatedInventory;
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
