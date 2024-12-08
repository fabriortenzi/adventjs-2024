import { describe, expect, it } from 'bun:test';
import { organizeShoes } from '../src/5';
import type { Shoe } from '../src/5';

describe('Reto #5: 👞 Emparejando botas', () => {
  it('test case #1', () => {
    const shoes: Shoe[] = [
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 42 },
    ];

    const organizedShoes = organizeShoes(shoes);

    expect(organizedShoes).toEqual([38, 42]);
  });

  it('test case #2', () => {
    const shoes: Shoe[] = [
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
      { type: 'I', size: 38 },
      { type: 'I', size: 38 },
      { type: 'R', size: 38 },
    ];

    const organizedShoes = organizeShoes(shoes);

    expect(organizedShoes).toEqual([38, 38]);
  });

  it('test case #3', () => {
    const shoes: Shoe[] = [
      { type: 'I', size: 38 },
      { type: 'R', size: 36 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'I', size: 43 },
    ];

    const organizedShoes = organizeShoes(shoes);

    expect(organizedShoes).toEqual([]);
  });
});
