const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const alter = (rowNum, colNum, value) => {
  if (matrix[rowNum] && matrix[rowNum][colNum]) {
    matrix[rowNum][colNum] = value;
  }
};

alter(1, 2, 42);
console.log(matrix);
