export function createXmasTree(height: number, ornament: string): string {
  if (height < 1 || height > 100) throw 'Height must be between 1 and 100';

  const totalWidth = 2 * height - 1;
  const trunk = '_'.repeat((totalWidth - 1) / 2) + '#' + '_'.repeat((totalWidth - 1) / 2);

  const treeBody = Array.from({ length: height }, (_, i) => {
    const ornaments = ornament.repeat(2 * i + 1);
    const padding = '_'.repeat((totalWidth - ornaments.length) / 2);
    return `${padding}${ornaments}${padding}`;
  }).join('\n');

  return `${treeBody}\n${trunk}\n${trunk}`;
}
