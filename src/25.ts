export function execute(code: string): number {
  let programCounter = 0,
    value = 0;

  function evaluate(expression: string): void {
    let internalPC = 0;

    while (internalPC < expression.length) {
      const char = expression[internalPC];

      switch (char) {
        case '>':
          internalPC++;
          break;

        case '+':
          value++;
          internalPC++;
          break;

        case '-':
          value--;
          internalPC++;
          break;

        case '[': {
          const loopStart = internalPC;
          const loopEnd = expression.indexOf(']', loopStart);

          if (loopEnd === -1) {
            throw new Error("Unmatched '['");
          }

          const loopCode = expression.substring(loopStart + 1, loopEnd);

          while (value !== 0) {
            evaluate(loopCode);
          }

          internalPC = loopEnd + 1;
          break;
        }

        case '{': {
          const blockStart = internalPC;
          const blockEnd = expression.indexOf('}', blockStart);

          if (blockEnd === -1) {
            throw new Error("Unmatched '{'");
          }

          const blockCode = expression.substring(blockStart + 1, blockEnd);

          if (value !== 0) {
            evaluate(blockCode);
          }

          internalPC = blockEnd + 1;
          break;
        }

        default:
          throw new Error(`Unexpected character: ${char} at ${internalPC}`);
      }
    }
  }

  // Main loop to process the code
  while (programCounter < code.length) {
    const char = code[programCounter];

    if (char === '+' || char === '-' || char === '>') {
      // Directly handle single instructions
      evaluate(char);
    } else if (char === '[' || char === '{') {
      // Handle loops and blocks
      const start = programCounter;
      const endChar = char === '[' ? ']' : '}';
      const end = code.indexOf(endChar, start);

      if (end === -1) {
        throw new Error(`Unmatched '${char}'`);
      }

      const blockCode = code.substring(start, end + 1);
      evaluate(blockCode);
      programCounter = end;
    }

    programCounter++;
  }

  return value;
}
