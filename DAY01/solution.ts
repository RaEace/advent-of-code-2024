export function parseInput(str: string) {
  return str
    .trim()
    .split("\r\n")
    .map((line) => line.split("   "));
}

function getSortedNumbersWithIndex(inputs: string[][], index: number) {
  return inputs.map((input) => input[index]).sort();
}

function substractInputs(input1: string, input2: string): number {
  const number1 = parseInt(input1);
  const number2 = parseInt(input2);
  return Math.abs(number2 - number1);
}

export function solveFirstExercice(inputs: string[][]): number {
  const leftColumnNumbersSorted = getSortedNumbersWithIndex(inputs, 0);
  const rightColumnNumbersSorted = getSortedNumbersWithIndex(inputs, 1);

  return [...Array(leftColumnNumbersSorted.length)]
    .map((_, index) =>
      substractInputs(
        leftColumnNumbersSorted[index],
        rightColumnNumbersSorted[index]
      )
    )
    .reduce((a, b) => a + b, 0);
}

export function solveSecondExercice(inputs: string[][]): number {
  const firstColumnSortedNumbers = getSortedNumbersWithIndex(inputs, 0);
  const secondColumnSortedNumbers = getSortedNumbersWithIndex(inputs, 1);

  return firstColumnSortedNumbers.reduce<number>((total, actualNumber) => {
    const numberOfAppearanceInRightList = secondColumnSortedNumbers.filter(
      (number) => actualNumber === number
    ).length;
    return (total += numberOfAppearanceInRightList * parseInt(actualNumber));
  }, 0);
}

const rawInput = Deno.readTextFileSync("DAY01/input.text");
const input = parseInput(rawInput);
const answer = solveSecondExercice(input);
console.log(answer);
