class TicTacToe {
  constructor() {
    this.currentPlayer = "x";
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
    }
  }

  isFinished() {
    return this.isDraw() || this.getWinner() !== null ? true : false;
  }

  getWinner() {
    if (
      (this.matrix[0][0] === "x" &&
        this.matrix[1][0] === "x" &&
        this.matrix[2][0] === "x") ||
      (this.matrix[0][1] === "x" &&
        this.matrix[1][1] === "x" &&
        this.matrix[2][1] === "x") ||
      (this.matrix[0][2] === "x" &&
        this.matrix[1][2] === "x" &&
        this.matrix[2][2] === "x") ||
      (this.matrix[0][0] === "x" &&
        this.matrix[0][1] === "x" &&
        this.matrix[0][2] === "x") ||
      (this.matrix[1][0] === "x" &&
        this.matrix[1][1] === "x" &&
        this.matrix[1][2] === "x") ||
      (this.matrix[2][0] === "x" &&
        this.matrix[2][1] === "x" &&
        this.matrix[2][2] === "x") ||
      (this.matrix[0][0] === "x" &&
        this.matrix[1][1] === "x" &&
        this.matrix[2][2] === "x") ||
      (this.matrix[2][0] === "x" &&
        this.matrix[1][1] === "x" &&
        this.matrix[0][2] === "x")
    ) {
      return "x";
    } else if (
      (this.matrix[0][0] === "o" &&
        this.matrix[1][0] === "o" &&
        this.matrix[2][0] === "o") ||
      (this.matrix[0][1] === "o" &&
        this.matrix[1][1] === "o" &&
        this.matrix[2][1] === "o") ||
      (this.matrix[0][2] === "o" &&
        this.matrix[1][2] === "o" &&
        this.matrix[2][2] === "o") ||
      (this.matrix[0][0] === "x" &&
        this.matrix[0][1] === "x" &&
        this.matrix[0][2] === "x") ||
      (this.matrix[1][0] === "x" &&
        this.matrix[1][1] === "x" &&
        this.matrix[1][2] === "x") ||
      (this.matrix[2][0] === "x" &&
        this.matrix[2][1] === "x" &&
        this.matrix[2][2] === "x") ||
      (this.matrix[0][0] === "o" &&
        this.matrix[1][1] === "o" &&
        this.matrix[2][2] === "o") ||
      (this.matrix[2][0] === "o" &&
        this.matrix[1][1] === "o" &&
        this.matrix[0][2] === "o")
    ) {
      return "o";
    } else {
      return null;
    }
  }

  noMoreTurns() {
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix.length; j++) {
        if (this.matrix[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
