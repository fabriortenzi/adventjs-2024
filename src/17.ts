export function detectBombs(grid: boolean[][]): number[][] {
  // prettier-ignore
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ]

  return grid.map((row, rowIndex) =>
    row.map((_, cellIndex) => {
      let bombsNearby = 0;

      directions.forEach(([dx, dy]) => {
        const newRow = rowIndex + dx;
        const newCol = cellIndex + dy;

        if (
          newRow >= 0 &&
          newRow < grid.length &&
          newCol >= 0 &&
          newCol < row.length &&
          grid[newRow][newCol]
        ) {
          bombsNearby++;
        }
      });

      return bombsNearby;
    })
  );
}
