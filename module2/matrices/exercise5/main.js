const { Matrix } = require("../exercise2/main.js");

class EmployeeMatrix extends Matrix {
  loadData(salaryData) {
    this._matrix = salaryData.map((obj) => [...Object.values(obj)]);
  }

  getEmployees(department) {
    return this._matrix
      .filter((e) => e[2] === department)
      .map((e) => e[1])
      .reduce((arr, e) => {
        arr.push(e);
        return arr;
      }, []);
  }

  getTotalSalary(department) {
    return this._matrix
      .filter((e) => e[2] === department)
      .map((e) => e[3])
      .reduce((sum, salary) => sum + salary, 0);
  }
}

let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
console.log(m.getTotalSalary("Finance")); //prints 4300
console.log(m.getTotalSalary("Design")); //prints 5300
