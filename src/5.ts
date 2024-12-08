export type Shoe = {
  type: 'I' | 'R';
  size: number;
};

export function organizeShoes(shoes: Shoe[]): number[] {
  let sizesOfTypeI = shoes.filter((s) => s.type === 'I');
  let sizesOfTypeR = shoes.filter((s) => s.type === 'R');

  const sizes: number[] = [];

  sizesOfTypeI.forEach((i) => {
    const pairOfSameSize = sizesOfTypeR.find((r) => r.size === i.size);

    if (pairOfSameSize) {
      sizes.push(i.size);

      const pairToRemoveIndex = sizesOfTypeR.indexOf(pairOfSameSize);
      sizesOfTypeR.splice(pairToRemoveIndex, 1);
    }
  });

  return sizes;
}
