const { Matrix } = require("../exercise2/main.js");

class TicTacToe extends Matrix {
  loadBoard() {
    this._matrix = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
  }

  play(rowNum, colNum, player) {
    const value = player === 1 ? "x" : "o";
    this.alter(rowNum, colNum, value);
  }
}
let board = new TicTacToe();
board.loadBoard();

board.play(2, 2, 1);
board.play(0, 0, 2);
board.print();
//prints
// o       .       .
// .       .       .
// .       .       x
