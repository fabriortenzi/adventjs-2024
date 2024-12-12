export function calculatePrice(ornaments: string): number | undefined {
  const ornamentsValues = new Map();
  ornamentsValues.set('*', 1);
  ornamentsValues.set('o', 5);
  ornamentsValues.set('^', 10);
  ornamentsValues.set('#', 50);
  ornamentsValues.set('@', 100);

  const treePrice = [...ornaments].reduce(
    (accum, currentOrnament, currentIndex, ornaments) => {
      const ornamentValue = ornamentsValues.get(currentOrnament);
      const nextOrnamentValue = ornamentsValues.get(ornaments[currentIndex + 1]) ?? 0;

      const relValue =
        ornamentValue >= nextOrnamentValue ? ornamentValue : -ornamentValue;

      return accum + relValue;
    },
    0
  );

  return isNaN(treePrice) ? undefined : treePrice;
}
