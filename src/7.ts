export function fixPackages(packages: string): string {
  if (!packages.includes('(')) {
    return packages;
  }

  const lastLeftPar = packages.lastIndexOf('(');
  const firstRightPar = packages.indexOf(')', lastLeftPar);

  const charToReverse = packages.substring(lastLeftPar + 1, firstRightPar);

  const reversedChar = [...charToReverse].reverse().join('');

  return fixPackages(
    packages.substring(0, lastLeftPar) +
      reversedChar +
      packages.substring(firstRightPar + 1)
  );
}
