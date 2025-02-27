#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js'

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .usage('[options] <filepath1> <filepath2>')
    .option('-v, --version', 'output the version number')
    .option('-f, --format [type]', 'output format')
    .option('-h, --help', 'output usage information')
    .argument('<filePath1>')
    .argument('<filePath2>')
    .action((filePath1, filePath2) => {
        const options = program.opts().format;
        const result = gendiff(filePath1, filePath2, options);
        console.log(result);
      })
    .parse(process.argv)

if (program.opts().help) {
    program.help();
};