export function prepareGifts(gifts: number[]): number[] {
  const giftsSet = new Set(gifts);
  const giftsSetOrdered = [...giftsSet].sort((a: number, b: number) => a - b);

  return giftsSetOrdered;
}
