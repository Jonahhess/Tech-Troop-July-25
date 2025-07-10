// pretty print
function printMatrix(matrix) {
  for (const row of matrix) {
    let printThis = "";
    for (const item of row) {
      printThis += `${item}\t`;
    }
    console.log(printThis);
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix);
