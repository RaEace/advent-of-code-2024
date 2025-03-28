function isOutOfGrid(grid: string[][], { x, y }: { x: number; y: number }) {
  return x === 0 || y === 0 || x === grid.length - 1 || y === grid.length - 1;
}

function isMAS(letter1: string, letter2: string) {
  return (
    (letter1 === "M" && letter2 === "S") || (letter2 === "M" && letter1 === "S")
  );
}

export function isCrossMAS(
  grid: string[][],
  { x, y }: { x: number; y: number }
) {
  if (isOutOfGrid(grid, { x, y })) {
    return 0;
  }

  const topLeftLetter = grid[x - 1][y - 1];
  const topRightLetter = grid[x + 1][y - 1];
  const bottomLeftLetter = grid[x - 1][y + 1];
  const bottomRightLetter = grid[x + 1][y + 1];

  const firstMAS = isMAS(topLeftLetter, bottomRightLetter);
  const secondMAS = isMAS(topRightLetter, bottomLeftLetter);

  return firstMAS && secondMAS;
}
