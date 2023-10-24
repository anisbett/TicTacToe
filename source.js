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
        const availableCells = board.filter((row) => row[column].getValue() === '').map(row => row[column]);

        if (!availableCells.length) return;
    }
    return {getBoard, makePlay, printBoard}
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

function GameController(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const getActivePlayer = () => activePlayer;

  const printNewRound = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const playRound = (column) => {
    // Drop a token for the current player
    console.log(
      `Dropping ${getActivePlayer().name}'s token into column ${column}...`
    );
    board.dropToken(column, getActivePlayer().token);

    /*  This is where we would check for a winner and handle that logic,
        such as a win message. */

    // Switch player turn
    switchPlayerTurn();
    printNewRound();
  };

  // Initial play game message
  printNewRound();

  // For the console version, we will only use playRound, but we will need
  // getActivePlayer for the UI version, so I'm revealing it now
  return {
    playRound,
    getActivePlayer
  };
}