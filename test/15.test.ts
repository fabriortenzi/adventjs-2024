import { describe, expect, it } from 'bun:test';
import { drawTable } from '../src/15';

describe('Reto #15: ✏️ Dibujando tablas', () => {
  it('test case #1', () => {
    const table = drawTable([
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' },
      { name: 'Charlie', city: 'New York' },
    ]);

    // prettier-ignore
    expect(table).toEqual(
`+---------+----------+
| Name    | City     |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`);
  });

  it('test case #2', () => {
    const table = drawTable([
      { gift: 'Doll', quantity: 10 },
      { gift: 'Book', quantity: 5 },
      { gift: 'Music CD', quantity: 1 },
    ]);

    // prettier-ignore
    expect(table).toEqual(
`+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+`);
  });
});
