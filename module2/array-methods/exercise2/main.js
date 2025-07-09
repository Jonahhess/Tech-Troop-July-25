const { users } = require("../users");

function partition(users, condition) {
  const pass = [];
  const fail = [];

  users.forEach((u) => (condition(u) ? pass.push(u) : fail.push(u)));

  return { pass, fail };
}

function condition(u) {
  const ret = u.address.zipcode[0] === "5";
  return ret;
}

const { pass } = partition(users, condition);
console.log(pass);
// console.log(fail);
