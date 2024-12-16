import { describe, expect, it } from 'bun:test';
import { minMovesToStables } from '../src/14';

describe('Reto #14: 🦌 Acomodando los renos', () => {
  it('test case #1', () => {
    const minMoves = minMovesToStables([2, 6, 9], [3, 8, 5]);

    expect(minMoves).toEqual(3);
  });

  it('test case #2', () => {
    const minMoves = minMovesToStables([1, 1, 3], [1, 8, 4]);

    expect(minMoves).toEqual(8);
  });
});
