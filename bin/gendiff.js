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
    .parse(process.argv);

if (program.opts().help) {
    program.help();
};