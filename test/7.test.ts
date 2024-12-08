import { describe, expect, it } from 'bun:test';
import { fixPackages } from '../src/7';

describe('Reto #7: 👹 El ataque del Grinch', () => {
  it('test case #1', () => {
    const fixedPackages = fixPackages('a(cb)de');

    expect(fixedPackages).toEqual('abcde');
  });

  it('test case #2', () => {
    const fixedPackages = fixPackages('a(bc(def)g)h');

    expect(fixedPackages).toEqual('agdefcbh');
  });

  it('test case #3', () => {
    const fixedPackages = fixPackages('abc(def(gh)i)jk');

    expect(fixedPackages).toEqual('abcighfedjk');
  });

  it('test case #4', () => {
    const fixedPackages = fixPackages('a(b(c))e');

    expect(fixedPackages).toEqual('acbe');
  });
});
