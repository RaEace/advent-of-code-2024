import { assertEquals } from "@std/assert";
import {
  parseInput,
  solveFirstExercice,
  solveSecondExercice,
} from "./solution.ts";

Deno.test("it should parse correctly data inputs", () => {
  const string = "12345   04291";
  assertEquals(parseInput(string), [["12345", "04291"]]);
});

// FIRST EXERCICE
Deno.test("it should get good result with example sample input", () => {
  const inputs = [
    ["3", "4"],
    ["4", "3"],
    ["2", "5"],
    ["1", "3"],
    ["3", "9"],
    ["3", "3"],
  ];
  assertEquals(solveFirstExercice(inputs), 11);
});

Deno.test("it should get good result with full exercice input", () => {
  const rawInput = Deno.readTextFileSync("DAY01/input.text");
  const input = parseInput(rawInput);
  assertEquals(solveFirstExercice(input), 2742123);
});

// SECOND EXERCICE
Deno.test("it should get good result with sample input", () => {
  const inputs = [
    ["3", "4"],
    ["4", "3"],
    ["2", "5"],
    ["1", "3"],
    ["3", "9"],
    ["3", "3"],
  ];
  assertEquals(solveSecondExercice(inputs), 31);
});

Deno.test("it should get good result with full exercice input", () => {
  const rawInput = Deno.readTextFileSync("DAY01/input.text");
  const input = parseInput(rawInput);
  assertEquals(solveSecondExercice(input), 21328497);
});
