export function decodeFilename(filename: string): string {
  const startFilename = filename.indexOf('_') + 1;
  const endFilename = filename.lastIndexOf('.');

  return filename.substring(startFilename, endFilename);
}
