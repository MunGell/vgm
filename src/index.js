const program = require('commander');
const pkg = require('../package.json');
const listCmd = require('./list');
const addCmd = require('./add');
const removeCmd = require('./remove');
const boxCmd = require('./box');

module.exports = function () {
    program.version(pkg.version);

    program
        .command('list')
        .description('show list of all managed vagrant boxes')
        .action(listCmd);

    program
        .command('add <name> [path]')
        .description('add box to vagrant manager (vgm)')
        .action(addCmd);

    program
        .command('remove <box>')
        .alias('rm')
        .description('remove box from vagrant manager (vgm)')
        .action(removeCmd);

    program
        .command('box <box> [cmd]')
        .alias('b')
        .description('execute box-related commands')
        .action(boxCmd);

    program.parse(process.argv);

    if (!program.args.length) program.help();
};
