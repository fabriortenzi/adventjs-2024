export function createXmasTree(height: number, ornament: string): string {
  if (height < 1 || height > 100) throw 'Height must be between 1 and 100';

  let body = '';
  for (let i = height; i > 0; i--) {
    body = body.concat(
      '_'.repeat(i - 1),
      ornament.repeat(height - i),
      ornament,
      ornament.repeat(height - i),
      '_'.repeat(i - 1),
      '\n'
    );
  }

  const trunk = `${'_'.repeat(height - 1)}#${'_'.repeat(height - 1)}`;

  return body.concat(trunk, '\n', trunk);
}
