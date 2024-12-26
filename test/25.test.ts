import { describe, expect, it } from 'bun:test';
import { execute } from '../src/25';

describe('Reto #25: 🪄 Ejecuta el lenguaje mágico', () => {
  it('test case #1', () => {
    const result = execute('+++');

    expect(result).toBe(3);
  });

  it('test case #2', () => {
    const result = execute('+--');

    expect(result).toBe(-1);
  });

  it('test case #3', () => {
    const result = execute('>+++[-]');

    expect(result).toBe(0);
  });

  it('test case #4', () => {
    const result = execute('>>>+{++}');

    expect(result).toBe(3);
  });

  it('test case #5', () => {
    const result = execute('+{[-]+}+');

    expect(result).toBe(2);
  });

  it('test case #6', () => {
    const result = execute('{+}{+}{+}');

    expect(result).toBe(0);
  });

  it('test case #7', () => {
    const result = execute('------[+]++');

    expect(result).toBe(2);
  });

  it('test case #8', () => {
    const result = execute('-[++{-}]+{++++}');

    expect(result).toBe(5);
  });
});
