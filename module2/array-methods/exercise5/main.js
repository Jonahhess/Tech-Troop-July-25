const { users } = require("../users");

const isSC = users.every((u) => u.address.city === "South Christy");

console.log(isSC);
