class Matrix {
  #matrix = [];

  constructor(rowNum, colNum) {
    for (let i = 0; i < rowNum; i++) {
      const row = [];
      for (let j = 0; j < colNum; j++) {
        row.push(colNum * i + j + 1);
      }
      this.#matrix.push(row);
    }
  }

  print() {
    for (const row of this.#matrix) {
      let printThis = "";
      for (const item of row) {
        printThis += `${item}\t`;
      }
      console.log(printThis);
    }
  }

  alter(rowNum, colNum, value) {
    if (this.#matrix[rowNum] && this.#matrix[rowNum][colNum] !== undefined) {
      this.#matrix[rowNum][colNum] = value;
    }
  }

  printRow(rowNum) {
    this.#matrix[rowNum] && console.log(this.#matrix[rowNum].join("\n"));
  }

  printColumn(colNum) {
    for (const row of this.#matrix) {
      const item = row[colNum];
      item !== undefined && console.log(item);
    }
  }

  get(rowNum, colNum) {
    return (this.#matrix[rowNum] && this.#matrix[rowNum][colNum]) || undefined;
  }
}

let m = new Matrix(3, 4);
m.print();
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

m.alter(0, 0, m.get(1, 1));
m.printColumn(0); //prints 6, 5, 9 (separate lines)
m.printRow(0); //prints 6, 2, 3, 4 (separate lines)
