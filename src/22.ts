export function generateGiftSets(gifts: string[]): string[][] {
  function backtrack(start: number, curComb: string[]) {
    if (curComb.length > 0) {
      res.push([...curComb]);
    }

    for (let i = start; i < gifts.length; i++) {
      curComb.push(gifts[i]);
      backtrack(i + 1, curComb);
      curComb.pop();
    }
  }

  const res: string[][] = [];
  backtrack(0, []);

  return res.sort((a, b) => a.length - b.length);
}
