function printMatrix(matrix) {
  for (const row of matrix) {
    for (const item of row) {
      console.log(item);
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix);
