let messagesFromDad = [
  "HI HONEY",
  "HOW WAS SCHOOL??",
  "DID YOU EAT TODAY?",
  "I CAN'T FIND THE REMOTE CONTROL",
];

console.log(messagesFromDad.map((m) => m.toLowerCase()));

let users = [
  {
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
  },
  {
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
  },
];

users.map((u) => {
  return { name: u.name, city: u.address.city };
});
