import {
  VALID_MOV,
  KNIGHT_POSSIBLE_MOVEMENTS,
  INVALID_MOV,
  KNIGHT_SYMBOL,
} from "./constants";

export const createBoard = (size) => {
  const board = [];
  for (let row = 0; row < size; row++) {
    board[row] = [];
    for (let column = 0; column < size; column++) {
      board[row][column] = `${row}|${column}`;
    }
  }
  return board;
};

export const canMoveTo = (x, y, board) => {
  if (!board[x]) return false;

  if (!board[x][y]) return false;

  return true;
};

export const getKnightMovements = (knight, board) => {
  const { x, y } = knight;
  if (!canMoveTo(x, y, board)) return [];

  const result = [];
  KNIGHT_POSSIBLE_MOVEMENTS.forEach((mov) => {
    const movX = x + mov.x;
    const movY = y + mov.y;
    if (canMoveTo(movX, movY, board)) {
      result.push({ x: movX, y: movY });
    }
  });
  return result;
};

export const print = (knight, movements, board) => {
  let result = "";
  board.forEach((column, columnIndex) => {
    result += "\n";
    board[columnIndex].forEach((row, rowIndex) => {
      if (rowIndex === knight.x && columnIndex === knight.y) {
        result += `${KNIGHT_SYMBOL} `;
      } else {
        const validMov = movements.find(
          (el) => el.x === rowIndex && el.y === columnIndex
        );
        result += `${validMov ? VALID_MOV : INVALID_MOV} `;
      }
    });
  });
  console.log(result);
};
