var program = require('commander'),
    pkg = require('../package.json');

var listCmd = require('./list'),
    addCmd = require('./add'),
    removeCmd = require('./remove'),
    boxCmd = require('./box');

module.exports = function () {
    program.version(pkg.version);

    program
        .command('list')
        .description('show list of all managed vagrant boxes')
        .action(listCmd);

    program
        .command('add <path> [name]')
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
};
