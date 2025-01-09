export function parseInput(str: string) {
  return str.split("\n").map((e) => e.split(" "));
}

// predicates for sequence verification
function gapPredicate(value: number, index: number, array: number[]) {
  return index === 0 || Math.abs(value - array[index - 1]) <= 3;
}

function strictlyIncreasePredicate(value: number,index: number,array: number[]) {
  return index === 0 || value < array[index - 1];
}

function stritlyDecreasePredicate(value: number, index: number, array: number[]) {
  return index === 0 || value > array[index - 1];
}

// sequence verification
function isStrictlyIncreasing(sequence: number[]): boolean {
  return sequence.every(strictlyIncreasePredicate)
}

function isStrictlyDecreasing(sequence: number[]): boolean {
  return sequence.every(stritlyDecreasePredicate) 
}

function isGapRespected(sequence: number[]): boolean {
  return sequence.every(gapPredicate)
}
 

function isSequenceValid(sequence: string[]): boolean {
  const numSequence = sequence.map(Number);
  const isStrictlyIncreasingOrDeacreasing = isStrictlyIncreasing(numSequence) || isStrictlyDecreasing(numSequence);
  return isStrictlyIncreasingOrDeacreasing &&  isGapRespected(numSequence);
}

export function getSafeReportNumber(inputs: string[][]) {
  return inputs.reduce<number>((total, report) => {
    if (isSequenceValid(report)) {
      return total + 1;
    }

    return total;
  }, 0);
}

const rawInput = Deno.readTextFileSync("DAY02/input.text");
const input = parseInput(rawInput);
console.log(getSafeReportNumber(input));
