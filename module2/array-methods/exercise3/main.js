const { users } = require("../users");

const ids = users.filter((u) => u.address.zipcode[0] === "5").map((u) => u.id);

console.log(ids);
