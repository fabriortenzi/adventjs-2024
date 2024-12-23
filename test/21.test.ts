import { describe, expect, it } from 'bun:test';
import { treeHeight } from '../src/21';

describe('Reto #21: 🎄 Calcula la altura del árbol de Navidad', () => {
  it('test case #1', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: null,
          right: null,
        },
        right: {
          value: '🎅',
          left: null,
          right: null,
        },
      },
      right: {
        value: '❄️',
        left: null,
        right: {
          value: '🦌',
          left: null,
          right: null,
        },
      },
    };

    expect(treeHeight(tree)).toEqual(3);
  });
});
