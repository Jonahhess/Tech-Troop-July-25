const employees = new Map();
employees.set("ax01", { name: "Ray", age: "28", salary: "1300" });
employees.set("qs84", { name: "Lucius", age: "31", salary: "840" });
employees.set("bg33", { name: "Taylor", age: "18", salary: "2700" });

const findEmployeeSalary = (employeeID) => {
  return employees.get(employeeID)?.salary;
};

console.log(findEmployeeSalary("qs84"));
