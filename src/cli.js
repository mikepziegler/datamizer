#!/usr/bin/env node

const { program } = require('commander');
const version = require('../package.json').version;

const DM = require('./module');

var dm = new DM();

program.version(version);

program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza');

program
    .command('generate <source> [destination]')
    .alias('gen')
    .option('-f, --file <type>', 'Which type it should export', 'json')
    .description('generates a file from source in destination')
    .action((source, destination, options) => {
        console.log('gen command called');
        console.log(source);
        console.log(destination);
        console.log(options);

        dm.randomNumber();


    });

program.parse(process.argv);
