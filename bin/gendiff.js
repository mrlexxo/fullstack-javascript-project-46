#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js'

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .option('-v, --version', 'output the version number')
    .option('-h, --help', 'output usage information')
    .parse(process.argv);

if (program.opts().help) {
    program.help();
};