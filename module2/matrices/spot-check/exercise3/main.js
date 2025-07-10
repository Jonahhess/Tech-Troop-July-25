const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const get = (rowNum, colNum) => (matrix) => console.log(matrix[rowNum][colNum]);
get(1, 2)(matrix);
