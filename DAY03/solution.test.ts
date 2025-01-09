import { assertEquals } from "@std/assert/equals";
import { getMultiplication } from "./solution.ts";

// FIRST EXERCICE
Deno.test("it should get good result with example sample input", () => {
  const inputs =
    "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
  assertEquals(getMultiplication(inputs), 161);
});

Deno.test("it should get good result with full exercice input", () => {
  const input = Deno.readTextFileSync("DAY03/input.text");
  assertEquals(getMultiplication(input), 490);
});