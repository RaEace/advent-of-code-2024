import { Position } from "./type.ts";
import {
  getDirection,
  getInitialPosition,
  getNextPosition,
  isObstacle,
  isOutOfMap,
} from "./utils.ts";

export function getPathStepsCount(grid: string[][]): number {
  const walkedPosition: Position[] = [getInitialPosition(grid)];
  let direction = getDirection();

  while (true) {
    const position = walkedPosition[walkedPosition.length - 1];
    const nextPosition = getNextPosition(position, direction);

    if (isOutOfMap(nextPosition)) {
      break;
    }

    if (!isObstacle(nextPosition, grid)) {
      walkedPosition.push(nextPosition);
    } else {
      const newDirection = getDirection(direction);
      direction = newDirection;
    }
  }

  return [...new Set(walkedPosition)].length;
}
