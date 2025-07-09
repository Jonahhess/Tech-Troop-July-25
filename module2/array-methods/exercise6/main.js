const { users } = require("../users");

const companyWhosEmployeesSuiteIsApt950 = users.find(
  (u) => u.address.suite === "Apt. 950"
)?.company.name;

console.log(companyWhosEmployeesSuiteIsApt950);
