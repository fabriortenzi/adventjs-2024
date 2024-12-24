import { describe, expect, it } from 'bun:test';
import { findMissingNumbers } from '../src/23';

describe('Reto #23: 🔢 Encuentra los números perdidos', () => {
  it('test case #1', () => {
    const missingNumbers = findMissingNumbers([1, 2, 4, 6]);

    expect(missingNumbers).toEqual([3, 5]);
  });

  it('test case #2', () => {
    const missingNumbers = findMissingNumbers([4, 8, 7, 2]);

    expect(missingNumbers).toEqual([1, 3, 5, 6]);
  });

  it('test case #3', () => {
    const missingNumbers = findMissingNumbers([3, 2, 1, 1]);

    expect(missingNumbers).toEqual([]);
  });

  it('test case #4', () => {
    const missingNumbers = findMissingNumbers([5, 5, 5, 3, 3, 2, 1]);

    expect(missingNumbers).toEqual([4]);
  });
});
