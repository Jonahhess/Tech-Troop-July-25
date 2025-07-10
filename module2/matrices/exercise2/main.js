class Matrix {
  _matrix = [];
  _numRows;
  _numCols;

  constructor(rowNum, colNum) {
    for (let i = 0; i < rowNum; i++) {
      const row = [];
      for (let j = 0; j < colNum; j++) {
        row.push(colNum * i + j + 1);
      }
      this._matrix.push(row);
    }
    this._numRows = rowNum;
    this._numCols = colNum;
  }

  print() {
    for (const row of this._matrix) {
      let printThis = "";
      for (const item of row) {
        printThis += `${item}\t`;
      }
      console.log(printThis);
    }
  }

  alter(rowNum, colNum, value) {
    if (this._matrix[rowNum] && this._matrix[rowNum][colNum] !== undefined) {
      this._matrix[rowNum][colNum] = value;
    }
  }

  printRow(rowNum) {
    this._matrix[rowNum] && console.log(this._matrix[rowNum].join("\n"));
  }

  printColumn(colNum) {
    for (const row of this._matrix) {
      const item = row[colNum];
      item !== undefined && console.log(item);
    }
  }

  get(rowNum, colNum) {
    return (this._matrix[rowNum] && this._matrix[rowNum][colNum]) || undefined;
  }

  findCoordinate(value) {
    for (let y = 0; y < this._numRows; y++) {
      for (let x = 0; x < this._numCols; x++) {
        if (this._matrix[y][x] === value) {
          return { x, y };
        }
      }
    }
  }
}

module.exports = {
  Matrix,
};
