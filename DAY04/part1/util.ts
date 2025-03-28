export function checkTopLeftLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (x < 3 || y < 3) {
    return;
  }

  const isMCorrectlyPlaced = grid[y - 1][x - 1] === "M";
  const isACorrectlyPlaced = grid[y - 2][x - 2] === "A";
  const isSCorrectlyPlaced = grid[y - 3][x - 3] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}

export function checkTopRightLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (x > grid[0].length - 4 || y < 3) {
    return;
  }

  const isMCorrectlyPlaced = grid[y - 1][x + 1] === "M";
  const isACorrectlyPlaced = grid[y - 2][x + 2] === "A";
  const isSCorrectlyPlaced = grid[y - 3][x + 3] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}

export function checkBottomLeftLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (x < 3 || y > grid.length - 4) {
    return;
  }

  const isMCorrectlyPlaced = grid[y + 1][x - 1] === "M";
  const isACorrectlyPlaced = grid[y + 2][x - 2] === "A";
  const isSCorrectlyPlaced = grid[y + 3][x - 3] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}

export function checkBottomRightLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (x > grid[0].length - 4 || y > grid.length - 4) {
    return;
  }

  const isMCorrectlyPlaced = grid[y + 1][x + 1] === "M";
  const isACorrectlyPlaced = grid[y + 2][x + 2] === "A";
  const isSCorrectlyPlaced = grid[y + 3][x + 3] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}

export function checkTopLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (y < 3) {
    return;
  }

  const isMCorrectlyPlaced = grid[y - 1][x] === "M";
  const isACorrectlyPlaced = grid[y - 2][x] === "A";
  const isSCorrectlyPlaced = grid[y - 3][x] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}

export function checkRightLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (x > grid[0].length - 4) {
    return;
  }

  const isMCorrectlyPlaced = grid[y][x + 1] === "M";
  const isACorrectlyPlaced = grid[y][x + 2] === "A";
  const isSCorrectlyPlaced = grid[y][x + 3] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}

export function checkBottomLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (y > grid.length - 4) {
    return;
  }

  const isMCorrectlyPlaced = grid[y + 1][x] === "M";
  const isACorrectlyPlaced = grid[y + 2][x] === "A";
  const isSCorrectlyPlaced = grid[y + 3][x] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}

export function checkLeftLetter(
  grid: string[][],
  { x, y }: { x: number; y: number },
) {
  if (x < 3) {
    return;
  }

  const isMCorrectlyPlaced = grid[y][x - 1] === "M";
  const isACorrectlyPlaced = grid[y][x - 2] === "A";
  const isSCorrectlyPlaced = grid[y][x - 3] === "S";
  return isMCorrectlyPlaced && isACorrectlyPlaced && isSCorrectlyPlaced;
}
