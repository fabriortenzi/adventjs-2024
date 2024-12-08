export function drawRace(indices: number[], length: number): string {
  const emptyTrack = '~'.repeat(length);

  return indices
    .reduce((previous, current, index, array) => {
      const leadingSpaces = `${' '.repeat(array.length - 1 - index)}`;

      let racingTrack = emptyTrack;
      const isEmptyTrack = current === 0;
      if (!isEmptyTrack) {
        racingTrack = [...racingTrack].with(current, 'r').join('');
      }

      const fullTrack = leadingSpaces + racingTrack + ` /${++index}\n`;

      return previous + fullTrack;
    }, '')
    .slice(0, -1);
}
