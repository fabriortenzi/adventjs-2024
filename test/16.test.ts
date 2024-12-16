import { describe, expect, it } from 'bun:test';
import { removeSnow } from '../src/16';

describe('Reto #16: ❄️ Limpiando la nieve del camino', () => {
  it('test case #1', () => {
    const snowPath = removeSnow('zxxzoz');

    expect(snowPath).toEqual('oz');
  });

  it('test case #2', () => {
    const snowPath = removeSnow('abcdd');

    expect(snowPath).toEqual('abc');
  });

  it('test case #3', () => {
    const snowPath = removeSnow('zzz');

    expect(snowPath).toEqual('z');
  });

  it('test case #4', () => {
    const snowPath = removeSnow('a');

    expect(snowPath).toEqual('a');
  });
});
