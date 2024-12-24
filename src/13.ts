export function isRobotBack(moves: string): true | [number, number] {
  const orders: Record<string, { move: [number, number]; inverse: string }> = {
    L: { move: [-1, 0], inverse: 'R' },
    R: { move: [1, 0], inverse: 'L' },
    U: { move: [0, 1], inverse: 'D' },
    D: { move: [0, -1], inverse: 'U' },
  };

  const moveList = moves.match(/(\*|!|\?)?[LRUD]/g) || [];

  const finalPosition: [number, number] = moveList.reduce(
    ([x, y], move, index, allMoves) => {
      const action = move[0];
      const direction = move[move.length - 1];
      const order = orders[direction];

      if (!order) return [x, y];

      let [dx, dy] = order.move;

      if (action === '*') {
        dx *= 2;
        dy *= 2;
      } else if (action === '!') {
        [dx, dy] = [-dx, -dy];
        allMoves[index] = order.inverse;
      } else if (action === '?') {
        const previousMoves = allMoves.slice(0, index);
        if (previousMoves.some((move) => move.endsWith(direction))) {
          return [x, y];
        }
      }

      return [x + dx, y + dy];
    },
    [0, 0]
  );

  return finalPosition[0] === 0 && finalPosition[1] === 0 ? true : finalPosition;
}
