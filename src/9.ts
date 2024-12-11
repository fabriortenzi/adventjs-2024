type Board = string[];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

export function moveTrain(board: Board, mov: Movement): Result {
  const locomotiveRow = board.findIndex((b) => b.includes('@'));
  if (locomotiveRow === -1) {
    throw 'Locomotive not found on the board';
  }

  const locomotiveColumn = board[locomotiveRow].indexOf('@');

  let targetSpace: string;
  if (mov === 'U') {
    targetSpace = board[locomotiveRow - 1]?.[locomotiveColumn];
  } else if (mov === 'D') {
    targetSpace = board[locomotiveRow + 1]?.[locomotiveColumn];
  } else if (mov === 'L') {
    targetSpace = board[locomotiveRow][locomotiveColumn - 1];
  } else if (mov === 'R') {
    targetSpace = board[locomotiveRow][locomotiveColumn + 1];
  } else {
    throw `Invalid movement: ${mov}`;
  }

  if (targetSpace === '*') {
    return 'eat';
  } else if (targetSpace === 'o' || targetSpace === '' || targetSpace === undefined) {
    return 'crash';
  } else {
    return 'none';
  }
}
