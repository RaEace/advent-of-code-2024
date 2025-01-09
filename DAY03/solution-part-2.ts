
function getInstructions(input: string): string[] {
  const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;
  return [...input.matchAll(regex).map((matchedElement) => matchedElement[0])];
}

function formatInstruction(instruction: string): string[] {
  return instruction
    .replaceAll(/mul|\(|\)/g, "")
    .replace(")", "")
    .split(",")
}

export function getMultiplicationWithDo(input: string): number {
  const instructions = getInstructions(input);
  const instructionsFormatted = instructions.map(formatInstruction);
  let doMultiplication = true;

  return instructionsFormatted.reduce<number>((total, instruction) => {
    
    const isInstructionNumber = instruction[0].match(/\d/);
    if(isInstructionNumber && doMultiplication) {
      const multiplication = parseInt(instruction[0]) * parseInt(instruction[1]);
      return total + multiplication;
    }

    if(instruction[0] === "do") {
      doMultiplication = true;
    }

    if(instruction[0] === "don't") {
      doMultiplication = false
    }

    return total; 
  }, 0); 
}

