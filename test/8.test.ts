import { describe, expect, it } from 'bun:test';
import { drawRace } from '../src/8';

describe('Reto #8: 🦌 La carrera de renos', () => {
  it('test case #1', () => {
    const race = drawRace([0, 5, -3], 10);

    // prettier-ignore
    expect(race).toEqual(
`  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`);
  });

  it('test case #2', () => {
    const race = drawRace([2, -1, 0, 5], 8);

    // prettier-ignore
    expect(race).toEqual(
`   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4`);
  });

  it('test case #3', () => {
    const race = drawRace([3, 7, -2], 12);

    // prettier-ignore
    expect(race).toEqual(
`  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`);
  });
});
