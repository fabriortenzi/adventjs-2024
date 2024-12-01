import { describe, expect, it } from 'bun:test';
import { prepareGifts } from '../src/1';

describe('Reto #1: 🎁 ¡Primer regalo repetido!', () => {
  it('test case #1', () => {
    const gifts = [3, 1, 2, 3, 4, 2, 5];
    const preparedGifts = prepareGifts(gifts);

    expect(preparedGifts).toEqual([1, 2, 3, 4, 5]);
  });

  it('test case #2', () => {
    const gifts = [6, 5, 5, 5, 5];
    const preparedGifts = prepareGifts(gifts);

    expect(preparedGifts).toEqual([5, 6]);
  });

  it('test case #3', () => {
    const gifts: number[] = [];
    const preparedGifts = prepareGifts(gifts);

    // There are no gifts, the list remains empty
    expect(preparedGifts).toEqual([]);
  });
});
