const { Matrix } = require("../exercise2/main.js");

class TicTacToe extends Matrix {
  _lastPlayer;
  loadBoard() {
    this._matrix = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
    this._numRows = 3;
    this._numCols = 3;
  }

  checkVictory(x = null, y = null, value, reverseCase = false) {
    for (let i = 0; i < 3; i++) {
      const w = i * !x + x; // if null x = i, else x == x
      const z = i * !reverseCase + (3 - i) * !!reverseCase;
      const res = this.get(w, y !== null ? y : z);
      if (res !== value) {
        return false;
      }
    }
    return true;
  }

  play(rowNum, colNum, player) {
    const value = player === 1 ? "x" : "o";
    if (this.get(rowNum, colNum) !== ".") {
      console.log("illegal move! You lose your turn!");
      return;
    }

    if (player === this._lastPlayer) {
      console.log("You can't go twice! Wait your turn!");
      return;
    }
    this.alter(rowNum, colNum, value);
    let victory =
      this.checkVictory(null, colNum, value) ||
      this.checkVictory(rowNum, null, value);

    if ((rowNum + colNum) % 2 === 0) {
      victory =
        victory ||
        this.checkVictory(null, null, value) ||
        this.checkVictory(null, null, value, true);
    }

    if (victory) {
      console.log(`Congratulations Player ${Number(player)}`);
    }
    this._lastPlayer = player;
  }
}

let board = new TicTacToe();
board.loadBoard();

board.play(2, 2, 1);
board.play(0, 0, 2);
board.play(0, 2, 1);
board.play(1, 0, 2);
board.play(1, 2, 1); //prints Congratulations Player 1
board.play(2, 0, 2);
board.play(1, 1, 1);

board.print();
//prints
// o       .       x
// o       .       x
// .       .       x
