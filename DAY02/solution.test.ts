import { assertEquals } from "@std/assert";
import { getSafeReportNumberPart2 } from "./solution-part-2.ts";
import { parseInput, getSafeReportNumber } from "./solution-part-1.ts";

Deno.test("it should parse correctly data inputs", () => {
  const string = "7 6 4 2 1\n1 2 7 8 9";
  assertEquals(parseInput(string), [
    ["7", "6", "4", "2", "1"],
    ["1", "2", "7", "8", "9"],
  ]);
});

// FIRST EXERCICE
Deno.test("it should get good result with example sample input", () => {
  const inputs = [
    ["7", "6", "4", "2", "1"],
    ["1", "2", "7", "8", "9"],
    ["9", "7", "6", "2", "1"],
    ["1", "3", "2", "4", "5"],
    ["8", "6", "4", "4", "1"],
    ["1", "3", "6", "7", "9"],
  ];
  assertEquals(getSafeReportNumber(inputs), 2);
});

Deno.test("it should get good result with full exercice input", () => {
  const rawInput = Deno.readTextFileSync("DAY02/input.text");
  const input = parseInput(rawInput);
  assertEquals(getSafeReportNumber(input), 490);
});

// SECOND EXERCICE
Deno.test("it should get good result with sample input", () => {
  const inputs = [
    ["7", "6", "4", "2", "1"],
    ["1", "2", "7", "8", "9"],
    ["9", "7", "6", "2", "1"],
    ["1", "3", "2", "4", "5"],
    ["8", "6", "4", "4", "1"],
    ["1", "3", "6", "7", "9"],
  ];
  assertEquals(getSafeReportNumberPart2(inputs), 4);
});

Deno.test("it should get good result with full exercice input", () => {
  const rawInput = Deno.readTextFileSync("DAY02/input.text");
  const input = parseInput(rawInput);
  assertEquals(getSafeReportNumberPart2(input), 536);
});
