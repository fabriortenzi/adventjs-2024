import { describe, expect, it } from 'bun:test';
import { calculatePrice } from '../src/12';

describe('Reto #12: 💵 ¿Cuánto cuesta el árbol?', () => {
  it('test case #1', () => {
    const treePrice = calculatePrice('***');

    expect(treePrice).toEqual(3);
  });

  it('test case #2', () => {
    const treePrice = calculatePrice('*o');

    expect(treePrice).toEqual(4);
  });

  it('test case #3', () => {
    const treePrice = calculatePrice('o*');

    expect(treePrice).toEqual(6);
  });

  it('test case #4', () => {
    const treePrice = calculatePrice('*o*');

    expect(treePrice).toEqual(5);
  });

  it('test case #5', () => {
    const treePrice = calculatePrice('**o*');

    expect(treePrice).toEqual(6);
  });

  it('test case #6', () => {
    const treePrice = calculatePrice('o***');

    expect(treePrice).toEqual(8);
  });

  it('test case #7', () => {
    const treePrice = calculatePrice('*o@');

    expect(treePrice).toEqual(94);
  });

  it('test case #8', () => {
    const treePrice = calculatePrice('*#');

    expect(treePrice).toEqual(49);
  });

  it('test case #9', () => {
    const treePrice = calculatePrice('@@@');

    expect(treePrice).toEqual(300);
  });

  it('test case #10', () => {
    const treePrice = calculatePrice('#@');

    expect(treePrice).toEqual(50);
  });

  it('test case #11', () => {
    const treePrice = calculatePrice('#@Z');

    expect(treePrice).toBeUndefined();
  });
});
