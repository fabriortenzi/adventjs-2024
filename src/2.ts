export function createFrame(names: string[]): string {
  const longestNameLen = Math.max(...names.map((n) => n.length));

  const topBottomBorder = `**${'*'.repeat(longestNameLen)}**`;

  const frameBody = names.reduce((prev: string, current: string) => {
    return prev.concat(`* ${current.padEnd(longestNameLen, ' ')} *\n`);
  }, '');

  return topBottomBorder.concat('\n', frameBody, topBottomBorder);
}
