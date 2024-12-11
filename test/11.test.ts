import { describe, expect, it } from 'bun:test';
import { decodeFilename } from '../src/11';

describe('Reto #11: 🏴‍☠️ Nombres de archivos codificados', () => {
  it('test case #1', () => {
    const filename = decodeFilename('2023122512345678_sleighDesign.png.grinchwa');

    expect(filename).toEqual('sleighDesign.png');
  });

  it('test case #2', () => {
    const filename = decodeFilename('42_chimney_dimensions.pdf.hack2023');

    expect(filename).toEqual('chimney_dimensions.pdf');
  });

  it('test case #3', () => {
    const filename = decodeFilename('987654321_elf-roster.csv.tempfile');

    expect(filename).toEqual('elf-roster.csv');
  });
});
