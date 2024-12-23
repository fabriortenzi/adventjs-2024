import { describe, expect, it } from 'bun:test';
import { fixGiftList } from '../src/20';

describe('Reto #20: 🎁 Encuentra los regalos faltantes y duplicados', () => {
  it('test case #1', () => {
    const giftList = fixGiftList(
      ['puzzle', 'car', 'doll', 'car'],
      ['car', 'puzzle', 'doll', 'ball']
    );

    expect(giftList).toEqual({
      missing: { ball: 1 },
      extra: { car: 1 },
    });
  });

  it('test case #2', () => {
    const giftList = fixGiftList(
      ['book', 'train', 'kite', 'train'],
      ['train', 'book', 'kite', 'ball', 'kite']
    );

    expect(giftList).toEqual({
      missing: { ball: 1, kite: 1 },
      extra: { train: 1 },
    });
  });

  it('test case #3', () => {
    const giftList = fixGiftList(
      ['bear', 'bear', 'car'],
      ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
    );

    expect(giftList).toEqual({
      missing: { puzzle: 1, car: 2 },
      extra: {},
    });
  });

  it('test case #4', () => {
    const giftList = fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']);

    expect(giftList).toEqual({
      missing: {},
      extra: {},
    });
  });
});
