// Complex Business Logic.
// Create variables for customer type (regular, premium, vip),
// purchase amount, and day of week.
// Calculate discount using nested conditionals and ternary operators:

// VIP customers: 20% discount always
// Premium customers: 15% on weekends, 10% on weekdays
// Regular customers: 10% if purchase > $100,
// 5% if purchase > $50, 0% otherwise
// Weekends are represented by day 6 (Saturday) or 0 (Sunday)

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
// Your conditional code here
let discount = 100;

if (customerType === "vip") {
  discount = 0.8;
} else if (customerType === "premium" && dayOfWeek % 6 === 0) {
  discount = 0.85;
} else if (customerType === "premium") {
  discount = 0.9;
} else if (purchaseAmount > 100) {
  discount = 0.9;
} else if (purchaseAmount > 50) {
  discount = 0.95;
}

const finalPrice = purchaseAmount * discount;

console.log(
  `Original Price: ${purchaseAmount}\nDiscount: ${discount}\nPrice after discount: ${finalPrice}`
);
