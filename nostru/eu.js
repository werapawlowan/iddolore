const checkWin = (board, player) => {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }

  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  // If no win conditions are met, return false
  return false;
}

// Example usage:
const board = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'X', 'X']
];

const player = 'X';
const result = checkWin(board, player);
console.log(result); // Output: true
