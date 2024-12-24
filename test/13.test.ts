import { describe, expect, it } from 'bun:test';
import { isRobotBack } from '../src/13';

describe('Reto #13: 🤖 ¿El robot está de vuelta?', () => {
  it('test case #1', () => {
    const position = isRobotBack('R');

    expect(position).toEqual([1, 0]);
  });

  it('test case #2', () => {
    const position = isRobotBack('RL');

    expect(position).toEqual(true);
  });

  it('test case #3', () => {
    const position = isRobotBack('RLUD');

    expect(position).toEqual(true);
  });

  it('test case #4', () => {
    const position = isRobotBack('*RU');

    expect(position).toEqual([2, 1]);
  });

  it('test case #5', () => {
    const position = isRobotBack('R*U');

    expect(position).toEqual([1, 2]);
  });

  it('test case #6', () => {
    const position = isRobotBack('LLL!R');

    expect(position).toEqual([-4, 0]);
  });

  it('test case #7', () => {
    const position = isRobotBack('R?R');

    expect(position).toEqual([1, 0]);
  });

  it('test case #8', () => {
    const position = isRobotBack('U?D');

    expect(position).toEqual(true);
  });

  it('test case #9', () => {
    const position = isRobotBack('R!L');

    expect(position).toEqual([2, 0]);
  });

  it('test case #10', () => {
    const position = isRobotBack('U!D');

    expect(position).toEqual([0, 2]);
  });

  it('test case #11', () => {
    const position = isRobotBack('R?L');

    expect(position).toEqual(true);
  });

  it('test case #12', () => {
    const position = isRobotBack('U?U');

    expect(position).toEqual([0, 1]);
  });

  it('test case #13', () => {
    const position = isRobotBack('*U?U');

    expect(position).toEqual([0, 2]);
  });

  it('test case #14', () => {
    const position = isRobotBack('U?D?U');

    expect(position).toEqual(true);
  });
});
