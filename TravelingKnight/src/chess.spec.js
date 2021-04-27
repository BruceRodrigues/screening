import * as chess from "./chess";

describe("Chess", () => {
  it("should create board with size n", () => {
    let board = chess.createBoard(8);

    expect(board.length).toBe(8);
    expect(board[0].length).toBe(8);
  });

  it("should create an empty board", () => {
    let board = chess.createBoard(0);

    expect(board.length).toBe(0);
  });

  it("should populate boards cell", () => {
    let board = chess.createBoard(12);

    expect(board.length).toBe(12);
    expect(board[0][0]).toBe("0|0");
    expect(board[5][7]).toBe("5|7");
    expect(board[11][11]).toBe("11|11");
  });

  it("should be able to move inside the board", () => {
    let board = chess.createBoard(2);

    expect(chess.canMoveTo(0, 0, board)).toBe(true);
    expect(chess.canMoveTo(1, 0, board)).toBe(true);
    expect(chess.canMoveTo(1, 1, board)).toBe(true);
    expect(chess.canMoveTo(0, 1, board)).toBe(true);
  });

  it("shouldnt be able to move outside the board", () => {
    let board = chess.createBoard(2);

    expect(chess.canMoveTo(0, -1, board)).toBe(false);
    expect(chess.canMoveTo(-1, 0, board)).toBe(false);
    expect(chess.canMoveTo(-1, -1, board)).toBe(false);
    expect(chess.canMoveTo(3, 1, board)).toBe(false);
    expect(chess.canMoveTo(1, 3, board)).toBe(false);
    expect(chess.canMoveTo(3, 3, board)).toBe(false);
  });

  it("should return all knights valid movements", () => {
    let board = chess.createBoard(5);

    const movements = chess.getKnightMovements({ x: 1, y: 2 }, board);
    chess.print({ x: 1, y: 2 }, movements, board);

    expect(movements.length).toBe(6);
    expect(movements.find(({ x, y }) => x === 0 && y === 0)).toBeTruthy();
    expect(movements.find(({ x, y }) => x === 2 && y === 0)).toBeTruthy();
    expect(movements.find(({ x, y }) => x === 3 && y === 1)).toBeTruthy();
    expect(movements.find(({ x, y }) => x === 3 && y === 3)).toBeTruthy();
    expect(movements.find(({ x, y }) => x === 2 && y === 4)).toBeTruthy();
    expect(movements.find(({ x, y }) => x === 0 && y === 4)).toBeTruthy();
  });

  it("shouldnt return movements outside the board", () => {
    let board = chess.createBoard(5);

    const movements = chess.getKnightMovements({ x: 1, y: 2 }, board);

    expect(movements.find(({ x, y }) => x === -1 && y === 1)).toBeFalsy();
    expect(movements.find(({ x, y }) => x === -1 && y === 3)).toBeFalsy();
  });

  it("shouldnt return an empty array if knight isnt on board", () => {
    let board = chess.createBoard(5);

    const movements = chess.getKnightMovements(5, 3, board);

    expect(movements.length).toBe(0);
  });
});
