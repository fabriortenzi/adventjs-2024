import { describe, expect, it } from 'bun:test';
import { organizeInventory } from '../src/3';

describe('Reto #3: 🏗️ Organizando el inventario', () => {
  it('test case #1', () => {
    const inventary = [
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' },
    ];

    const organizedInventory = organizeInventory(inventary);

    expect(organizedInventory).toEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });
  });

  it('test case #2', () => {
    const inventary = [
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' },
    ];

    const organizedInventory = organizeInventory(inventary);

    expect(organizedInventory).toEqual({
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    });
  });
});
