const { users } = require("../users");

const cNames = users.map((u) => u.name).filter((n) => n[0] === "C");

console.log(cNames);
