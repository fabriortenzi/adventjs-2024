import { describe, expect, it } from 'bun:test';
import { detectBombs } from '../src/17';

describe('Reto #17: 💣 Busca las bombas del Grinch', () => {
  it('test case #1', () => {
    const bombs = detectBombs([
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ]);

    expect(bombs).toEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ]);
  });

  it('test case #2', () => {
    const bombs = detectBombs([
      [true, false],
      [false, false],
    ]);

    expect(bombs).toEqual([
      [0, 1],
      [1, 1],
    ]);
  });

  it('test case #3', () => {
    const bombs = detectBombs([
      [true, true],
      [false, false],
      [true, true],
    ]);

    expect(bombs).toEqual([
      [1, 1],
      [4, 4],
      [1, 1],
    ]);
  });
});
