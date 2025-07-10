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
console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
