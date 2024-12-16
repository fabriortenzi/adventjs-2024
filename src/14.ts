export function minMovesToStables(reindeer: number[], stables: number[]): number {
  const sortedReindeer = [...reindeer].sort((a, b) => a - b);
  const sortedStables = [...stables].sort((a, b) => a - b);

  return sortedReindeer.reduce((totalMovements, reindeer, index) => {
    return totalMovements + Math.abs(reindeer - sortedStables[index]);
  }, 0);
}
