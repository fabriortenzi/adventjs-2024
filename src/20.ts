export function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const gifts = new Set([...received, ...expected]);

  const missing: { [key: string]: number } = {};
  const extra: { [key: string]: number } = {};

  gifts.forEach((gift) => {
    const dif =
      received.filter((item) => item === gift).length -
      expected.filter((item) => item === gift).length;

    if (dif > 0) {
      extra[gift] = dif;
    }

    if (dif < 0) {
      missing[gift] = -dif;
    }
  });

  return {
    missing,
    extra,
  };
}
