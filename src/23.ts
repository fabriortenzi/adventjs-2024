export function findMissingNumbers(nums: number[]): number[] {
  const highestNum = Math.max(...nums);

  const numbers = [...Array(highestNum)].map((_, i) => i + 1);

  return numbers.filter((num) => !nums.includes(num));
}
