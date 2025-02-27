import { readFileSync } from 'fs';
import path from 'node:path';
import process from 'node:process';
import parse from './parser.js';
import formatData from './formatters/index.js'

const getFileType = (filePath) => path.extname(filePath).slice(1);
const getFilePath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => readFileSync(getFilePath(filePath), 'utf-8');
const parseData = (filePath, extension) => parse(filePath, extension);



const gendiff = (filePath1, filePath2, format = 'stylish') => {
    const extention1 = getFileType(filePath1);
    const path1 = getFilePath(filePath1);
    const data1 = readFile(path1);
    const parsedData1 = parseData(data1, extention1);

    const extention2 = getFileType(filePath2);
    const path2 = getFilePath(filePath2);
    const data2 = readFile(path2);
    const parsedData2 = parseData(data2, extention2);

    const diff = generateDiff(parsedData1, parsedData2);
    return formatData(diff, format);
}

export default gendiff;