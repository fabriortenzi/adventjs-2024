import { describe, expect, it } from 'bun:test';
import { createXmasTree } from '../src/4';

describe('Reto #4: 🎄 Decorando el árbol de Navidad', () => {
  it('test case #1', () => {
    const tree = createXmasTree(5, '*');

    // prettier-ignore
    const expectedTree = 
`____*____
___***___
__*****__
_*******_
*********
____#____
____#____`;

    expect(tree).toEqual(expectedTree);
  });

  it('test case #2', () => {
    const tree = createXmasTree(3, '+');

    // prettier-ignore
    const expectedTree = 
`__+__
_+++_
+++++
__#__
__#__`;

    expect(tree).toEqual(expectedTree);
  });

  it('test case #3', () => {
    const tree = createXmasTree(6, '@');

    // prettier-ignore
    const expectedTree = 
`_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`;

    expect(tree).toEqual(expectedTree);
  });
});
