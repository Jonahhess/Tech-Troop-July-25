const { users } = require("../users");

const output = users.map((u) => {
  return { email: u.email, companyName: u.company.name };
});

console.log(output);
