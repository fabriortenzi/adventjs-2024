import { describe, expect, it } from 'bun:test';
import { distributeWeight } from '../src/19';

describe('Reto #19: 📦 Apila cajas mágicas para repartir regalos', () => {
  it('test case #1', () => {
    const boxes = distributeWeight(1);

    // prettier-ignore
    expect(boxes).toEqual(
` _ 
|_|`);
  });

  it('test case #2', () => {
    const boxes = distributeWeight(2);

    // prettier-ignore
    expect(boxes).toEqual(
` ___ 
|___|`);
  });

  it('test case #3', () => {
    const boxes = distributeWeight(3);

    // prettier-ignore
    expect(boxes).toEqual(
` _ 
|_|_
|___|`);
  });

  it('test case #4', () => {
    const boxes = distributeWeight(4);

    // prettier-ignore
    expect(boxes).toEqual(
` ___ 
|___|
|___|`);
  });

  it('test case #5', () => {
    const boxes = distributeWeight(5);

    // prettier-ignore
    expect(boxes).toEqual(
` _____ 
|     |
|_____|`);
  });

  it('test case #6', () => {
    const boxes = distributeWeight(6);

    // prettier-ignore
    expect(boxes).toEqual(
` _ 
|_|___
|     |
|_____|`);
  });
});
