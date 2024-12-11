import { describe, expect, it } from 'bun:test';
import { moveTrain } from '../src/9';

describe('Reto #9: 🚂 El tren mágico', () => {
  const board = ['·····', '*····', '@····', 'o····', 'o····'];

  it('test case #1', () => {
    const result = moveTrain(board, 'U');

    expect(result).toEqual('eat');
  });

  it('test case #2', () => {
    const result = moveTrain(board, 'D');

    expect(result).toEqual('crash');
  });

  it('test case #3', () => {
    const result = moveTrain(board, 'L');

    expect(result).toEqual('crash');
  });

  it('test case #4', () => {
    const result = moveTrain(board, 'R');

    expect(result).toEqual('none');
  });
});
