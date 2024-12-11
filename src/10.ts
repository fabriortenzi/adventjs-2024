export function compile(instructions: string[]): number {
  const registers = new Map();

  let programCounter = 0;

  while (programCounter < instructions.length) {
    const [opcode, ...operands] = instructions[programCounter].split(' ');

    switch (opcode) {
      case 'MOV': {
        const [value, register] = operands;
        const intValue = parseInt(value);

        if (isNaN(intValue)) {
          registers.set(register, registers.get(value) ?? 0);
        } else {
          registers.set(register, intValue);
        }

        programCounter++;

        break;
      }
      case 'INC': {
        const [register] = operands;
        registers.set(register, (registers.get(register) ?? 0) + 1);
        programCounter++;
        break;
      }
      case 'DEC': {
        const [register] = operands;
        registers.set(register, (registers.get(register) ?? 0) - 1);
        programCounter++;
        break;
      }
      case 'JMP': {
        const [register, value] = operands;

        const registerValue = registers.get(register) ?? 0;

        if (registerValue === 0) {
          programCounter = parseInt(value);
        } else {
          programCounter++;
        }

        break;
      }
      default: {
        throw `Operation ${opcode} is not allowed`;
      }
    }
  }

  return registers.get('A');
}
