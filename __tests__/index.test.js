import { test, expect, describe } from '@jest/globals';
import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filePath) => path.join(__dirname, '..', '__fixtures__', filePath);
const readFixture = (filePath) => readFileSync(getFixturePath(filePath), 'utf-8');

describe('gendiff', () => {
    test('should return correct diff for json format', () => {
      const filePath1 = getFixturePath('file1.json');
      const filePath2 = getFixturePath('file2.json');
      const expected = readFixture('expected-json.txt').trim();
      const result = gendiff(filePath1, filePath2, 'json');
      expect(result).toEqual(expected);
    });
  });

test.each(files)