export function parseInput(str: string) {
  return str.split("\n").map((e) => e.split(" "));
}

// predicates for sequence verification
function gapPredicate(value: number, index: number, array: number[]) {
  if(index === 0) {
    return true;
  }

  if(index === 1) {
    return Math.abs(value - array[index - 1]) <= 3;
  }

  return Math.abs(value - array[index - 1]) <= 3 || Math.abs(value - array[index - 2]) <= 3;
}

function strictlyIncreasePredicate(value: number,index: number,array: number[]) {
  if(index === 0) {
    return true;
  }

  if(index === 1) {
    return value < array[index - 1];
  }

  return value < array[index - 1] || value < array[index - 2];
}

function stritlyDecreasePredicate(value: number, index: number, array: number[]) {
  if(index === 0) {
    return true;
  }

  if(index === 1) {
    return value > array[index - 1];
  }

  return value > array[index - 1] || value > array[index - 2];
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

export function getSafeReportNumberPart2(inputs: string[][]) {
  return inputs.reduce<number>((total, report) => {
    if (isSequenceValid(report)) {
      return total + 1;
    }

    return total;
  }, 0);
}
