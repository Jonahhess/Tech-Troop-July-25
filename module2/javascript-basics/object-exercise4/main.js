const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // choose one
  fridge: {
    price: 500,
    works: false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const { owner, hasOven, fridge } = kitchen;
const { price, works, items } = fridge;
const radish = items[1];
const daysExpired = date - radish.expiryDate;

const openingStatement = `${owner}'s ${radish.name} expired ${daysExpired} ${
  daysExpired > 1 ? " days" : " day"
} ago. `;

const fridgeStatement = fridge.works
  ? "Weird, considering her fridge works. "
  : "Probably because her fridge doesn't work. ";

const ovenStatement = hasOven
  ? "Luckily, she has an oven to cook the radish in. "
  : "Too bad she doesn't have an oven to cook the radish in. ";

const closingStatement = fridge.works
  ? ""
  : `And she'll have to pay ${fridge.price / 2} to fix the fridge.`;

let string =
  openingStatement + fridgeStatement + ovenStatement + closingStatement;

console.log(string);
