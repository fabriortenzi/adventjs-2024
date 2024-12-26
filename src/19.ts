export function distributeWeight(weight: number): string {
  const boxRepresentations: Record<number, string[]> = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };

  const boxes: string[][] = [];
  const boxWeights: number[] = Object.keys(boxRepresentations)
    .map(Number)
    .sort((a, b) => b - a);

  // Determine which boxes to use to represent the weight
  for (const boxWeight of boxWeights) {
    // Add boxes of the current weight as long as it fits
    while (weight >= boxWeight) {
      weight -= boxWeight;
      boxes.unshift(boxRepresentations[boxWeight]);
    }

    // Stop if there's no weight left to allocate
    if (weight === 0) break;
  }

  const boxesToDraw: string[] = [];

  // Adjust and prepare the visual representation
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];

    // Adjust the bottom row of the box for alignment
    if (i !== boxes.length - 1) {
      const nextBoxWidth = boxes[i + 1][0].trim().length; // Width of the next box
      const currentBottomRow = box[box.length - 1];
      box[box.length - 1] = currentBottomRow.padEnd(nextBoxWidth + 1, '_'); // Add underscores to match width
    }

    // Skip the top row for all but the first box
    const startRow = i === 0 ? 0 : 1;
    boxesToDraw.push(box.slice(startRow).join('\n'));
  }

  // Join all prepared boxes into a single output
  return boxesToDraw.join('\n');
}
