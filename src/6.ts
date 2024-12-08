export function inBox(box: string[]): boolean {
  const boxBody = [...box];
  boxBody.shift();
  boxBody.pop();

  return boxBody.some((line) => {
    return line.substring(1, line.length - 1).includes('*');
  });
}
