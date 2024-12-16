export function drawTable(data: Array<Record<string, string | number>>): string {
  if (data.length === 0) {
    throw 'Data cannot be empty.';
  }

  const headers = Object.keys(data[0]);
  const capitalizedHeaders = headers.map(
    (header) => header.charAt(0).toUpperCase() + header.slice(1)
  );

  const columnWidths = headers.map((header) =>
    Math.max(header.length, ...data.map((row) => row[header].toString().length))
  );

  // Utility to create rows
  const createRow = (values: string[]): string => {
    return (
      '| ' +
      values.map((value, index) => value.padEnd(columnWidths[index], ' ')).join(' | ') +
      ' |\n'
    );
  };

  // Top and bottom border
  const border =
    '+' + columnWidths.map((width) => '-'.repeat(width + 2)).join('+') + '+\n';

  const headerRow = createRow(capitalizedHeaders);

  const bodyRows = data
    .map((row) => createRow(headers.map((header) => row[header].toString())))
    .join('');

  return (border + headerRow + border + bodyRows + border).slice(0, -1);
}
