const { Matrix } = require("../exercise2/main.js");

class TicTacToe extends Matrix {
  loadBoard() {
    this._matrix = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
  }
}
let board = new TicTacToe();
board.loadBoard();
board.print();
//prints
// .       .       .
// .       .       .
// .       .       .
