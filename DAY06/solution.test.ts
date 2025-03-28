import { getPathStepsCount } from "./solution.ts";
import { assertEquals } from "@std/assert/equals";
import { parseInput } from "./utils.ts";

Deno.test("it should parse correctly data inputs", () => {
  const input = Deno.readTextFileSync("DAY06/example-input.text");
  const parsedInput = parseInput(input);
  assertEquals(parsedInput[0], [
    ".",
    ".",
    ".",
    ".",
    "#",
    ".",
    ".",
    ".",
    ".",
    ".",
  ]);
  assertEquals(parsedInput[6], [
    ".",
    "#",
    ".",
    ".",
    "^",
    ".",
    ".",
    ".",
    ".",
    ".",
  ]);
});

// FIRST EXERCICE
Deno.test("it should get good result with example sample input", () => {
  const input = Deno.readTextFileSync("DAY06/example-input.text");
  const parsedInput = parseInput(input);
  assertEquals(getPathStepsCount(parsedInput), 41);
});

Deno.test("it should get good result with example sample input", () => {
  const input = Deno.readTextFileSync("DAY06/input.text");
  const parsedInput = parseInput(input);
  assertEquals(getPathStepsCount(parsedInput), 5101);
});
