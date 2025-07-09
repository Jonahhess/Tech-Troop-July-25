const { users } = require("../users");

function describeUser(u) {
  console.log(
    `${u.name} lives in ${u.address.city}, and owns the company ${u.company.name}`
  );
}

users.forEach((u) => describeUser(u));
