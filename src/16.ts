export function removeSnow(s: string): string {
  const snowLength = s.length;

  const snowLetters = [...s];
  const snowLettersSet = new Set(snowLetters);

  if (snowLength === [...snowLettersSet].length) return s;

  let sPosition = 0;
  let removedDupl = '';
  while (sPosition < snowLetters.length) {
    const letter = snowLetters[sPosition];
    const nextLetter = snowLetters[sPosition + 1];

    if (letter !== nextLetter) {
      removedDupl += letter;
      sPosition += 1;
    } else {
      sPosition += 2;
    }
  }

  return removeSnow(removedDupl);
}
