
function getInstructions(input: string): string[] {
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  return [...input.matchAll(regex).map((matchedElement) => matchedElement[0])];
}

function formatInstruction(instruction: string): string[] {
  return instruction
    .replace("mul(", "")
    .replace(")", "")
    .split(",")
}

export function getMultiplication(input: string): number {
  const instructions = getInstructions(input);
  const instructionsFormatted = instructions.map(formatInstruction);
  
  return instructionsFormatted.reduce<number>((total, instruction) => {
    const multiplication = parseInt(instruction[0]) * parseInt(instruction[1]);
    return total + multiplication;
  }, 0); 
}

