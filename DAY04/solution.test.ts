import { assertEquals } from "@std/assert/equals";
import { getXMAScount, parseInput } from "./part1/solution.ts";

Deno.test("it should parse correctly data inputs", () => {
  const input = Deno.readTextFileSync("DAY04/example-input.text");
  const row1 = ["M", "M", "M", "S", "X", "X", "M", "A", "S", "M"];
  const row2 = ["M", "S", "A", "M", "X", "M", "S", "M", "S", "A"];
  assertEquals(parseInput(input)[0], row1);
  assertEquals(parseInput(input)[1], row2);
});

// FIRST EXERCICE
Deno.test("it should get good result with example sample input", () => {
  const input = Deno.readTextFileSync("DAY04/part1/example-input.text");
  const inputParsed = parseInput(input);
  assertEquals(getXMAScount(inputParsed), 18);
});

Deno.test("it should get good result with full exercice input", () => {
  const input = Deno.readTextFileSync("DAY04/input.text");
  const inputParsed = parseInput(input);
  assertEquals(getXMAScount(inputParsed), 18);
});

// SECOND EXERCICE
Deno.test("it should get good result with sample input", () => {
  const input = Deno.readTextFileSync("DAY04/part1/example-input.text");
  const inputParsed = parseInput(input);
  assertEquals(getXMAScount(inputParsed), 18);
});

Deno.test("it should get good result with full exercice input", () => {
});
