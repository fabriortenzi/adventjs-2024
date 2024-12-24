import { describe, expect, it } from 'bun:test';
import { isTreesSynchronized } from '../src/24';

describe('Reto #24: 🪞 Verifica si los árboles son espejos mágicos', () => {
  const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' },
  };

  const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
  };

  const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' },
  };

  const tree4 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' },
  };

  it('test case #1', () => {
    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄']);
  });

  it('test case #2', () => {
    expect(isTreesSynchronized(tree1, tree3)).toEqual([false, '🎄']);
  });

  it('test case #3', () => {
    expect(isTreesSynchronized(tree1, tree4)).toEqual([false, '🎄']);
  });

  it('test case #4', () => {
    expect(isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' })).toEqual([false, '🎅']);
  });
});
