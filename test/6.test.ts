import { describe, expect, it } from 'bun:test';
import { inBox } from '../src/6';

describe.only('Reto #6: 📦 ¿Regalo dentro de la caja?', () => {
  it('test case #1', () => {
    // prettier-ignore
    const inBoxResult = inBox([
      '###',
      '#*#',
      '###'
    ])

    expect(inBoxResult).toBeTruthy();
  });

  it('test case #2', () => {
    // prettier-ignore
    const inBoxResult = inBox([
      '####',
      '#* #',
      '#  #',
      '####'
    ])

    expect(inBoxResult).toBeTruthy();
  });

  it('test case #3', () => {
    // prettier-ignore
    const inBoxResult = inBox([
      '#####',
      '#   #',
      '#  #*',
      '#####'
    ])

    expect(inBoxResult).toBeFalsy();
  });

  it('test case #4', () => {
    // prettier-ignore
    const inBoxResult = inBox([
      '#####',
      '#   #',
      '#   #',
      '#   #',
      '#####'
    ])

    expect(inBoxResult).toBeFalsy();
  });
});
