import { describe, expect, it } from 'bun:test';
import { findInAgenda } from '../src/18';

describe('Reto #18: 📇 La agenda mágica de Santa', () => {
  const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

  it('test case #1', () => {
    expect(findInAgenda(agenda, '34-600-123-456')).toEqual({
      name: 'Juan Perez',
      address: 'Calle Gran Via 12',
    });
  });

  it('test case #2', () => {
    expect(findInAgenda(agenda, '600-987')).toEqual({
      name: 'Maria Gomez',
      address: 'Plaza Mayor 45 Madrid 28013',
    });
  });

  it('test case #3', () => {
    expect(findInAgenda(agenda, '111')).toBeNull();
  });

  it('test case #4', () => {
    expect(findInAgenda(agenda, '1')).toBeNull();
  });
});
