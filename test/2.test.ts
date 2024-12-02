import { describe, expect, it } from 'bun:test';
import { createFrame } from '../src/2';

describe('Reto #2 🖼️ Enmarcando nombres', () => {
  it('test case #1', () => {
    const frame = createFrame(['midu', 'madeval', 'educalvolpz']);

    // prettier-ignore
    const expectedFrame = 
`***************
* midu        *
* madeval     *
* educalvolpz *
***************`;

    expect(frame).toEqual(expectedFrame);
  });

  it('test case #2', () => {
    const frame = createFrame(['midu']);

    // prettier-ignore
    const expectedFrame = 
`********
* midu *
********`;

    expect(frame).toEqual(expectedFrame);
  });

  it('test case #3', () => {
    const frame = createFrame(['a', 'bb', 'ccc']);

    // prettier-ignore
    const expectedFrame = 
`*******
* a   *
* bb  *
* ccc *
*******`;

    expect(frame).toEqual(expectedFrame);
  });
});
