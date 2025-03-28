import { Direction, Position } from "./type.ts";

export function parseInput(str: string) {
  return str.split("\n").map((row) => row.split(""));
}

export function getInitialPosition(grid: string[][]): Position {
  return grid.reduce(
    (initialPosition: Position, row: string[], y: number) => {
      if (row.includes("^")) {
        const x = row.indexOf("^");
        return { x, y };
      }

      return initialPosition;
    },
    { x: -1, y: -1 }
  );
}

export function getDirection(previousDirection?: Direction): Direction {
  if (previousDirection === "up") {
    return "right";
  }

  if (previousDirection === "right") {
    return "down";
  }

  if (previousDirection === "down") {
    return "left";
  }

  return "up";
}

export function getNextPosition(position: Position, direction: Direction) {
  const { x, y } = position;
  if (direction === "up") {
    return { x, y: y - 1 };
  }

  if (direction === "down") {
    return { x, y: y + 1 };
  }

  if (direction === "right") {
    return { x: x + 1, y };
  }

  if (direction === "left") {
    return { x: x - 1, y };
  }

  return position;
}

export function isOutOfMap(position: Position) {
  const { x, y } = position;
  if (x === undefined || y === undefined) {
    return true;
  }

  return x < 0 || y < 0;
}

export function isObstacle(
  position: { x: number; y: number },
  grid: string[][]
): boolean {
  const { x, y } = position;

  return grid[x][y] === "#";
}
