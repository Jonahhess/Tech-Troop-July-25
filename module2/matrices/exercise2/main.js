class Matrix {
  #matrix = [];
  #numRows;
  #numCols;

  constructor(rowNum, colNum) {
    for (let i = 0; i < rowNum; i++) {
      const row = [];
      for (let j = 0; j < colNum; j++) {
        row.push(colNum * i + j + 1);
      }
      this.#matrix.push(row);
    }
    this.#numRows = rowNum;
    this.#numCols = colNum;
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

  findCoordinate(value) {
    for (let y = 0; y < this.#numRows; y++) {
      for (let x = 0; x < this.#numCols; x++) {
        if (this.#matrix[y][x] === value) {
          return { x, y };
        }
      }
    }
  }
}

let m = new Matrix(3, 4);
console.log(m.findCoordinate(12)); //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)); //prints {x: 2, y: 1}
