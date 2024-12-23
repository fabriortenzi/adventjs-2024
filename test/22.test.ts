import { describe, expect, it } from 'bun:test';
import { generateGiftSets } from '../src/22';

describe('Reto #22: 🎁 Genera combinaciones de regalos', () => {
  it('test case #1', () => {
    const giftsCombs = generateGiftSets(['car', 'doll', 'puzzle']);

    expect(giftsCombs).toEqual([
      ['car'],
      ['doll'],
      ['puzzle'],
      ['car', 'doll'],
      ['car', 'puzzle'],
      ['doll', 'puzzle'],
      ['car', 'doll', 'puzzle'],
    ]);
  });

  it('test case #2', () => {
    const giftsCombs = generateGiftSets(['ball']);

    expect(giftsCombs).toEqual([['ball']]);
  });

  it('test case #3', () => {
    const giftsCombs = generateGiftSets(['game', 'pc']);

    expect(giftsCombs).toEqual([['game'], ['pc'], ['game', 'pc']]);
  });
});
