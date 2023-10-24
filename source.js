const Gameboard = (function () {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

     return {
        getBoard: function () {
            return board;
        },
        // ... other methods or properties you want to expose
    };

    const makePlay = (column, player) => {
        const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
    }
})();

function Cell() {
  let value = 0;

  // Accept a player's token to change the value of the cell
  const addMove = (player) => {
    value = player;
  };

  // How we will retrieve the current value of this cell through closure
  const getValue = () => value;

  return {
    addMove,
    getValue
  };
}

