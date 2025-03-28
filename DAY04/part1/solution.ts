import {
  checkBottomLeftLetter,
  checkBottomLetter,
  checkBottomRightLetter,
  checkLeftLetter,
  checkRightLetter,
  checkTopLeftLetter,
  checkTopLetter,
  checkTopRightLetter,
} from "./util.ts";

export function parseInput(str: string) {
  return str.split(/\r?\n/).map((e) => e.split(""));
}

function analyseLettersAround(
  grid: string[][],
  columnID: number,
  letterID: number
): number {
  let count = 0;

  if (checkTopLeftLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  if (checkTopRightLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  if (checkBottomLeftLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  if (checkBottomRightLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  if (checkTopLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  if (checkBottomLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  if (checkLeftLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  if (checkRightLetter(grid, { x: letterID, y: columnID })) {
    count++;
  }

  return count;
}

export function getXMAScount(grid: string[][]) {
  return grid.reduce<number>((count, line, x) => {
    line.forEach((char, y) => {
      if (char === "X") {
        count += analyseLettersAround(grid, x, y);
      }
    });
    return count;
  }, 0);
}
