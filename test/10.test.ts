import { describe, expect, it } from 'bun:test';
import { compile } from '../src/10';

describe('Reto #10: 👩‍💻 El ensamblador élfico', () => {
  it('test case #1', () => {
    const instructions = [
      'MOV -1 C', // copia -1 al registro 'C',
      'INC C', // incrementa el valor del registro 'C'
      'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
      'MOV C A', // copia el registro 'C' al registro 'a',
      'INC A', // incrementa el valor del registro 'a'
    ];

    expect(compile(instructions)).toEqual(2);
  });
});
