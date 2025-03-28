import { isCrossMAS } from "./util.ts";

export function parseInput(str: string) {
  return str.split("\r\n").map((e) => e.split(""));
}

export function getMAScount(grid: string[][]) {
  return grid.reduce<number>((count, line, x) => {
    line.forEach((char, y) => {
      if (char === "A" && isCrossMAS(grid, { x, y })) {
        count++;
      }
    });
    return count;
  }, 0);
}
